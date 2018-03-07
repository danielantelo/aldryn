<?php

namespace AppBundle\Command;

use AppBundle\Entity\Web;
use AppBundle\Entity\Client as ClientUser;
use Goutte\Client;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DomCrawler\Crawler;

class ScrapeClientsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:scrape-clients')
            ->setDescription('Scrapes clients.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('Starting...');
        $client = new Client();
        $crawler = $client->request('GET', 'http://madelven.com/clientes/exporter-feed-11111-11111.php');
        $crawler->filter('article.client')->each(function ($node) use ($output) {
            /** @var Crawler $node */
            $doctrine = $this->getContainer()->get('doctrine');
            $madelvenWeb = $doctrine->getRepository(Web::class)->findOneBy(['name' => 'madelven.com']);

            $client = new ClientUser();
            $client->setWebs([$madelvenWeb]);
//            $client->setName();
//            $client->setCompany();
//            $client->setPassword();
//            $client->setAddresses();
//            $client->setEmail();
//            $client->setNationalId();
//            $client->setNewsletter();
//            $client->setActive();

            $em = $doctrine->getManager();
            $em->persist($client);
            $em->flush();

            $output->writeln(sprintf("Finished %s\n", $client->getName()));
        });
    }

}
