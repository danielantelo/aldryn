<?php

namespace AppBundle\Command;

use AppBundle\Entity\Client as User;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ScrapeClientDocsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:scrape-client-docs')
            ->setDescription('Scrape Client Docs')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('Starting...');
        $urlTemplate = 'http://madelven.com/intranet/sale/bulkinvoice.php?aParams[startclient]=::clientId::&aParams[endclient]=::clientId::&aParams[startdate]=::startDate::&aParams[enddate]=::endDate::';
        $doctrine = $this->getContainer()->get('doctrine');
        $users = $doctrine->getRepository(User::class)->findAll();
        foreach ($users as $user) {
            if (!is_null($user->getOriginalClientNumber())) {

                // 2018
                $url = str_replace(
                    ['::clientId::', '::startDate::', '::endDate::'],
                    [$user->getOriginalClientNumber(), '2018-01-01', '2018-07-14'],
                    $urlTemplate
                );
                $content = @file_get_contents($url);
                if ($content) {
                    $s3Client = $this->getContainer()->get('aws.s3');
                    $s3Client ->putObject([
                        'ACL'     => 'public-read',
                        'Bucket'  => 'aldryn-webs',
                        'Key'     => 'madelven/clients/documents/' . $user->getOriginalClientNumber() . '/invoices/2018.html',
                        'Body'    => $content,
                        'ContentType' => 'text/html'
                    ]);
                }

                // 2017
                $url = str_replace(
                    ['::clientId::', '::startDate::', '::endDate::'],
                    [$user->getOriginalClientNumber(), '2017-01-01', '2017-12-31'],
                    $urlTemplate
                );
                $content = @file_get_contents($url);
                if ($content) {
                    $s3Client = $this->getContainer()->get('aws.s3');
                    $s3Client ->putObject([
                        'ACL'     => 'public-read',
                        'Bucket'  => 'aldryn-webs',
                        'Key'     => 'madelven/clients/documents/' . $user->getOriginalClientNumber() . '/invoices/2017.html',
                        'Body'    => $content,
                        'ContentType' => 'text/html'
                    ]);
                }
            }
        }
    }
}
