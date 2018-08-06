<?php

namespace AppBundle\Command\Migration;

use AppBundle\Entity\Web;
use AppBundle\Entity\Client as User;
use AppBundle\Entity\Company;
use AppBundle\Entity\Address;
use Goutte\Client;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\Console\Input\InputArgument;

class ScrapeClientsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:scrape-clients')
            ->setDescription('Scrapes clients.')
            ->addArgument('domain', InputArgument::REQUIRED, 'What web?')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {   
        $webDomain = $input->getArgument('domain');
        
        $url = "http://madelven.net/productos/exporter-feed-clients-11111.php";
        $output->writeln("Starting... $url");

        $client = new Client();
        $crawler = $client->request('GET', $url);
        $doctrine = $this->getContainer()->get('doctrine');
        $web = $doctrine->getRepository(Web::class)->findOneBy(['name' => $webDomain]);
        $em = $doctrine->getManager();

        $crawler->filter('article')->each(function ($node) use ($output, $doctrine, $em, $web) {
            $email = trim($node->filter('.email')->first()->text());
            $user = $doctrine->getRepository(User::class)->findOneBy(['email' => $email]);
            if ($user) {
                try {
                    if (!$user->getWebs()->contains($web)) {
                        $output->writeln(
                            sprintf("- Adding web to: user %s", $email)
                        );
                        $user->setWebs(
                            array_merge($user->getWebs()->toArray(), [$web])
                        );

                        $em->merge($user);
                    }
                } catch (\Exception $e) {
                    $output->writeln(
                        sprintf("- Failed adding web to: user %s", $email)
                    );
                }
                return;  
            }

            $user = new User();
            $user->setOriginalClientNumber(trim($node->filter('.id')->first()->text()));
            $user->setEmail($email);
            $output->writeln("-email: " . $user->getEmail());
            $user->setPassword(trim($node->filter('.password')->first()->text()));
                $output->writeln("-- password: " . $user->getPassword());
            $user->setName(trim($node->filter('.name')->first()->text() . ' ' . $node->filter('.surname')->first()->text()));
            $user->setNationalId(trim($node->filter('.nif')->first()->text()));
            $user->setNewsletter(true);
            $user->setActive(trim($node->filter('.active')->first()->text()) == '1');
                $output->writeln("-- active: " . $user->isActive());
            $user->setNotes(trim($node->filter('.comments')->first()->text()));
            $user->setTaxExemption(trim($node->filter('.taxExemption')->first()->text()) == '1');
            $user->setSurchargeExemption(trim($node->filter('.surchargeExemption')->first()->text()) == '1');
            
            $user->setWebs([$web]);
            
            $companyName = trim($node->filter('.companyName')->first()->text());
            $company = $doctrine->getRepository(Company::class)->findOneBy(['name' => $companyName]);
            if (!$company) {
                $company = new Company();
                $company->setName($companyName);
                $company->setCompanyId(trim($node->filter('.companyCif')->first()->text()));
                $company->setPaymentInstructions(trim($node->filter('.companyPayment')->first()->text()));
            }
            $user->setCompany($company);

            $address = new Address();
            $address->setClient($user);
            $address->setStreetNumber(trim($node->filter('.addressline1')->first()->text()));
            $address->setStreetName(trim($node->filter('.addressline2')->first()->text()));
            $address->setCity(trim($node->filter('.city')->first()->text()));
            $address->setZipCode(trim($node->filter('.postcode')->first()->text()));
            $address->setCountry(trim($node->filter('.country')->first()->text()));
            $address->setTelephone(trim($node->filter('.tel')->first()->text()));
            $user->setAddresses([
                $address
            ]);

            $em->persist($user);
            $output->writeln(sprintf("Finished %s\n", $user->getName()));
        });

        $em->flush();
    }

}
