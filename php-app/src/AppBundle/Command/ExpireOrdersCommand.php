<?php

namespace AppBundle\Command;

use AppBundle\Entity\Basket;
use Goutte\Client;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DomCrawler\Crawler;

class ExpireOrdersCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:expire-orders')
            ->setDescription('Expire Orders.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $client = new Client();
        $doctrine = $this->getContainer()->get('doctrine');
        $em = $doctrine->getManager();
        $orders = $doctrine->getRepository(Basket::class)->findBy([
            'status' => 'PENDIENTE'
        ]);

        $mailer = $this->getContainer()->get('mailer');
        $cancelledOrders = [];
        $now = new \DateTime();
        foreach ($orders as $order) {
            if ($order->getCheckoutDate()->diff($now)->days > 6) {
                $cancelledOrders[] = $order->getBasketReference();
                $order->setStatus('CANCELADO');
                $em->persist($order);
                $output->writeln('Cancelled: ' . $order->getBasketReference());
            }
        }

        if (count($cancelledOrders) > 0) {
            $message = (new \Swift_Message('Pedidos Cancelados por antigüdad'))
                ->setFrom('noreply@madelven.com')
                ->setTo('pedidos@madelven.com')
                ->addCC('danielanteloagra@gmail.com')
                ->setBody(
                    implode(', ', $cancelledOrders),
                    'text/html'
                );

            $mailer->send($message);
        }

        $em->flush();
    }

}
