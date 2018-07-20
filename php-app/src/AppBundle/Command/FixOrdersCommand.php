<?php

namespace AppBundle\Command;

use AppBundle\Entity\BasketItem;
use AppBundle\Entity\Product;
use Goutte\Client;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DomCrawler\Crawler;

class FixOrdersCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:fix-orders')
            ->setDescription('Fix Orders.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {   
        $client = new Client();
        $doctrine = $this->getContainer()->get('doctrine');
        $em = $doctrine->getManager();
        $orderItems = $doctrine->getRepository(BasketItem::class)->findBy([
            'product' => null
        ]);
        var_dump(count($orderItems));

        foreach ($orderItems as $item) {
            if ($item->getProduct()){
                continue;
            }

            $product = $doctrine->getRepository(Product::class)->findOneBy([
                'name' => $item->getProductName()
            ]);

            if ($product) {
                $output->writeln('Fixed item ' . $item->getProductName());
                $item->setProduct($product);
                $em->merge($item);
            } else {
                $products = $em->createQuery('SELECT p
                    FROM AppBundle:Product p
                    WHERE p.name LIKE :name1 OR p.name LIKE :name2'
                )
                ->setParameter('name1', '%'.substr($item->getProductName(), -30).'%')
                ->setParameter('name2', '%'.substr($item->getProductName(), 0, 22).'%')
                ->getResult();

                if (count($products) == 1) {
                    $output->writeln('- ' . $item->getProductName());
                    $output->writeln('---- ' . $products[0]->getName());
                    $item->setProduct($products[0]);
                    $em->merge($item);
                }
            }
        }

        $em->flush();
    }

}
