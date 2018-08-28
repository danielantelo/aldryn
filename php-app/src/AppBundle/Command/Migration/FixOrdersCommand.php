<?php

namespace AppBundle\Command\Migration;

use AppBundle\Entity\Basket;
use AppBundle\Entity\Client;
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
        $csv = $this->parseCSV();

        $doctrine = $this->getContainer()->get('doctrine');
        $em = $doctrine->getManager();

        foreach ($csv as $row) {
            $order = $doctrine->getRepository(Basket::class)->findOneBy([
                'basketReference' => $row[0]
            ]);

            $isSameName = strlen($row[6]) === strlen($order->getClient()->getName());
            if (!$isSameName) {
                $client = $doctrine->getRepository(Client::class)->findOneBy([
                    'name' => $row[6]
                ]);

                if ($client && $client->getId() != $order->getClient()->getId()) {
                    var_dump($row);
                    var_dump($client->getName());
                    var_dump($order->getClient()->getName());
                    $order->setClient($client);
                    // $em->persist($order);
                    // $em->flush();
                }
            }
        }

    }

    private function parseCSV()
    {
        $ignoreFirstLine = true;
        $file = getcwd() . '/src/AppBundle/Command/Migration/query_result.csv';
        $rows = array();
        if (($handle = fopen($file, "r")) !== FALSE) {
            $i = 0;
            while (($data = fgetcsv($handle, null, ",")) !== FALSE) {
                $i++;
                if ($ignoreFirstLine && $i == 1) { continue; }
                $rows[] = $data;
            }
            fclose($handle);
        }
        return $rows;
    }
}
