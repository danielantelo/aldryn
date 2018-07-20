<?php

namespace AppBundle\Command;

use AppBundle\Entity\Basket;
use AppBundle\Entity\BasketItem;
use AppBundle\Entity\Web;
use AppBundle\Entity\Product;
use AppBundle\Entity\Client as User;
use Goutte\Client;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\Console\Input\InputArgument;

setlocale(LC_TIME, "es_ES");

class ScrapeOrdersCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:scrape-orders')
            ->setDescription('Scrapes orders.')
            ->addArgument('domain', InputArgument::REQUIRED, 'What web?')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $webDomain = $input->getArgument('domain');
        
        $url = "http://madelven.net/intranet/sale/export.php";
        $output->writeln("Starting... $url");

        $client = new Client();
        $crawler = $client->request('GET', $url);
        $doctrine = $this->getContainer()->get('doctrine');
        $web = $doctrine->getRepository(Web::class)->findOneBy(['name' => $webDomain]);
        $em = $doctrine->getManager();

        $crawler->filter('article')->each(function ($node) use ($output, $doctrine, $em, $web) {
            try {
                $emailStr = trim($node->filter('.email')->first()->text());
                $user = $doctrine->getRepository(User::class)->findOneBy(['email' => $emailStr]);

                $basketReference = trim($node->filter('.basketReference')->first()->text());
                $status = [
                    'pendiente' => 'PENDIENTE',
                    'pagado' => 'PAGADO',
                    'enviado' => 'ENVIADO',
                    'recogido' => 'ENVIADO',
                    'cancelado' => 'CANCELADO'
                ][trim($node->filter('.status')->first()->text())];

                $order = $doctrine->getRepository(Basket::class)->findOneBy(['basketReference' => $basketReference]);

                if ($order) {
                    if ($order->getStatus() != $status) {
                        $order->setStatus($status);
                        try {
                            $order->setTrackingNumber(trim($node->filter('.deliveryRef')->first()->text())); 
                            $order->setTrackingCompany(trim($node->filter('.deliveryCompany')->first()->text())); 
                            $invoiceNumber = $node->filter('.invoiceNumber')->first()->text();
                            if ($invoiceNumber) {
                                $order->setInvoiceNumber($invoiceNumber);
                                $a = strptime($node->filter('.invoiceDate')->first()->text(), '%d %B %Y');
                                $timestamp = mktime(0, 0, 0, $a['tm_mon']+1, $a['tm_mday'], $a['tm_year']+1900);
                                $date = new \DateTime();
                                $date->setTimestamp($timestamp);
                                $basket->setInvoiceDate($date);
                            }
                        } catch (\Exception $e) {}
                        
                        $em->merge($user);
                        $output->writeln("Updated " . $order->getBasketReference());
                    }
                    return;
                }
            
                $basket = new Basket($web);
                $basket->setBasketReference($basketReference);
                    //$output->writeln("- ref: " . $basket->getBasketReference());
                $basket->setClient($user);
                    //$output->writeln("--- user: " . $basket->getClient()->getName());
                $basket->setCreationDate(new \DateTime(trim($node->filter('.creationDate')->first()->text())));
                    //$output->writeln("--- creationDate: " . $basket->getCreationDate()->format('Y-m-d H:i:s'));
                $basket->setCheckoutDate(new \DateTime(trim($node->filter('.checkoutDate')->first()->text())));
                    //$output->writeln("--- checkoutDate: " . $basket->getCheckoutDate()->format('Y-m-d H:i:s'));

                $basket->setStatus($status);
                    //$output->writeln("--- status: " . $basket->getStatus());

                try {
                    $invoiceNumber = $node->filter('.invoiceNumber')->first()->text();
                    if ($invoiceNumber) {
                        $basket->setInvoiceNumber($invoiceNumber);
                            //$output->writeln("--- invoiceNumber: " . $basket->getInvoiceNumber());
                        $a = strptime($node->filter('.invoiceDate')->first()->text(), '%d %B %Y');
                        $timestamp = mktime(0, 0, 0, $a['tm_mon']+1, $a['tm_mday'], $a['tm_year']+1900);
                        $date = new \DateTime();
                        $date->setTimestamp($timestamp);
                        $basket->setInvoiceDate($date);
                            //$output->writeln("--- invoiceDate: " . $basket->getInvoiceDate()->format('Y-m-d H:i:s'));
                    }
                } catch (\Exception $e) {}

                try {
                    $node->filter('.price')->each(function ($node) use ($doctrine, $output, $basket, $web) {
                        $basketItem = new BasketItem(null, null, null, $basket);
                        $basketItem->setProductName(trim($node->filter('.product')->first()->text()));
                        $basketItem->setQuantity(trim($node->filter('.quantity')->first()->text()));
                        $basketItem->setPricePerUnit(trim($node->filter('.pricePerUnit')->first()->text()));
                        $basketItem->setSubTotal(trim($node->filter('.subTotal')->first()->text()));
                        $basketItem->setTaxPercentage(trim($node->filter('.taxPercentage')->first()->text()));
                        $basketItem->setTaxSurchargePercentage(trim($node->filter('.taxSurchargePercentage')->first()->text()));
                        $basketItem->setTax(trim($node->filter('.tax')->first()->text()));
                        $basketItem->setTaxSurcharge(trim($node->filter('.taxSurcharge')->first()->text()));
                        $basketItem->setTotal(trim($node->filter('.total')->first()->text()));
                        $basketItem->setAddedToBasketDate(new \DateTime(trim($node->filter('.addedToBasketDate')->first()->text())));
                        //$output->writeln("----- added: " . $basketItem->getProductName());
                        //$output->writeln("------- quantity: " . $basketItem->getQuantity());
                        $basket->addBasketItem($basketItem);
                    });
                } catch (\Exception $e) {
                    $output->writeln("--- Error with basket Items on " . $basket->getBasketReference());
                }

                try {
                    $basket->setDeliveryAddress($user->getAddresses()[0]);
                        //$output->writeln("--- delivery address: " . $basket->getDeliveryAddressPostCode());
                    $basket->setInvoiceAddress($user->getAddresses()[0]);
                        //$output->writeln("--- invoice address: " . $basket->getPaymentAddressPostCode());
                } catch (\Exception $e) {}
                    
                $basket->setItemSubtotal(trim($node->filter('.itemSubtotal')->first()->text()));
                $basket->setItemTaxTotal(trim($node->filter('.itemTaxTotal')->first()->text()));
                $basket->setItemTaxSurchargeTotal(trim($node->filter('.itemTaxSurchargeTotal')->first()->text()));
                $basket->setItemTotal(trim($node->filter('.itemTotal')->first()->text()));

                // Delivery
                $basket->setDelivery(trim($node->filter('.delivery')->first()->text()));
                $basket->setDeliveryTax(trim($node->filter('.deliveryTax')->first()->text()));

                $basket->setDeliveryTaxSurcharge(trim($node->filter('.deliveryTaxSurcharge')->first()->text()));
                $basket->setDeliveryTotal(trim($node->filter('.deliveryTotal')->first()->text()));

                $basket->setBasketSubtotal(trim($node->filter('.basketSubtotal')->first()->text()));
                $basket->setBasketTaxTotal(trim($node->filter('.basketTaxTotal')->first()->text()));
                $basket->setBasketTaxSurchargeTotal(trim($node->filter('.basketTaxSurchargeTotal')->first()->text()));
                $basket->setBasketTotal(trim($node->filter('.basketTotal')->first()->text()));

                $basket->setWeight(trim($node->filter('.weight')->first()->text()));
                $basket->setSize(trim($node->filter('.size')->first()->text()));

                $basket->setBaseTax10(trim($node->filter('.baseTax10')->first()->text()));
                $basket->setTax10(trim($node->filter('.tax10')->first()->text()));
                $basket->setBaseTax21(trim($node->filter('.baseTax21')->first()->text()));
                $basket->setTax21(trim($node->filter('.tax21')->first()->text()));

                $basket->setBaseSurcharge1p4(trim($node->filter('.baseSurcharge14')->first()->text()));
                $basket->setSurcharge1p4(trim($node->filter('.surcharge14')->first()->text()));
                $basket->setBaseSurcharge5p2(trim($node->filter('.baseSurcharge52')->first()->text()));
                $basket->setSurcharge5p2(trim($node->filter('.surcharge52')->first()->text())); 
                
                $basket->setTrackingNumber(trim($node->filter('.deliveryRef')->first()->text())); 
                $basket->setTrackingCompany(trim($node->filter('.deliveryCompany')->first()->text())); 

                //$output->writeln("---- delivery total: " . $basket->getDelivery());
                //$output->writeln("---- delivery tax: " . $basket->getDeliveryTax());
                //$output->writeln("---- delivery surcharge: " . $basket->getDeliveryTaxSurcharge());
                //$output->writeln("---- delivery total: " . $basket->getDeliveryTotal());
                //$output->writeln("---- basketSubTotal: " . $basket->getBasketSubTotal());
                //$output->writeln("---- basketTaxTotal: " . $basket->getBasketTaxTotal());
                //$output->writeln("---- basketTaxSurchargeTotal: " . $basket->getBasketTaxSurchargeTotal());
                //$output->writeln("---- basketTotal: " . $basket->getBasketTotal());
                //$output->writeln("---- weight: " . $basket->getWeight());
                //$output->writeln("---- size: " . $basket->getSize());

                $em->persist($basket);
                $output->writeln("Saved " . $basket->getBasketReference());
            } catch (\Exception $e) {
                $output->writeln("--- Error with basket " . $basket->getBasketReference());
            }
        });

        $em->flush();
        $output->writeln('Done.');
    }
}
