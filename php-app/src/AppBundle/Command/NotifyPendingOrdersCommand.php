<?php

namespace AppBundle\Command;

use AppBundle\Entity\Basket;
use Goutte\Client;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DomCrawler\Crawler;

class NotifyPendingOrdersCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:notify-pending-orders')
            ->setDescription('Notify Pending Orders.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {   
        // because we are in multiple servers, and each has the cron
        // this hack allows us to only cancel orders once
        sleep(rand(1000, 2000));

        $client = new Client();
        $doctrine = $this->getContainer()->get('doctrine');
        $orders = $doctrine->getRepository(Basket::class)->findBy([
            'status' => 'PENDIENTE'
        ]);

        $now = new \DateTime();
        foreach ($orders as $order) {
            if ($order->getCheckoutDate()->diff($now)->days == 3) {
                // @TODO
            }
        }
    }

}
