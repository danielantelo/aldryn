<?php

namespace AppBundle\Command;

use AppBundle\Entity\Brand;
use AppBundle\Entity\Category;
use AppBundle\Entity\Media;
use AppBundle\Entity\Price;
use AppBundle\Entity\Product;
use AppBundle\Entity\Web;
use Goutte\Client;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DomCrawler\Crawler;

class ScrapeProductsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:scrape-products')
            ->setDescription('Scrapes products.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('Starting...');
        $client = new Client();
        $crawler = $client->request('GET', 'http://madelven.com/productos/exporter-feed-11111-11111.php');
        $crawler->filter('article.product')->each(function ($node) use ($output) {
            /** @var Crawler $node */
            $doctrine = $this->getContainer()->get('doctrine');
            $madelvenWeb = $doctrine->getRepository(Web::class)->findOneBy(['name' => 'madelven.com']);
            $convendingWeb = $doctrine->getRepository(Web::class)->findOneBy(['name' => 'convending.com']);
            $nuevaWeb = $doctrine->getRepository(Web::class)->findOneBy(['name' => 'nueva.com']);

            $product = new Product();
            $product->setWebs([$madelvenWeb, $convendingWeb, $nuevaWeb]);
            $product->setName(trim($node->filter('h1')->first()->text()));
                $output->writeln("\nFound product: " . $product->getName());
            $product->setShortDescription(trim($node->filter('.intro')->first()->text()));
            $product->setDescription(trim($node->filter('.intro')->first()->text()));
            $product->setWeight(trim($node->filter('.weight')->first()->text()));
            $product->setHeight(trim($node->filter('.height')->first()->text()));
            $product->setWidth(trim($node->filter('.width')->first()->text()));
            $product->setLength(trim($node->filter('.length')->first()->text()));
            $product->setSpirals(trim($node->filter('.spirals')->first()->text()));
            $product->setStock(trim($node->filter('.stock')->first()->text()));
            $product->setActive(trim($node->filter('.active')->first()->text()) == 'true');
            $product->setHighlight(trim($node->filter('.promotion')->first()->text()) == 'true');
                $output->writeln("-- active: " . $product->isActive());
                $output->writeln("-- promotion:  " . $product->isHighlight());
            // brand entity linking
            $brandStr = trim($node->filter('.brand')->first()->text());
            $brand = $doctrine->getRepository(Brand::class)->findOneBy(['name' => $brandStr]);
            if ($brand) {
                $product->setBrand($brand);
                $output->writeln("-- with brand: " . $product->getBrand()->getName());
            }
            // category entity linking
            $categoryStr = trim($node->filter('.section_sub')->first()->text());
            $category = $doctrine->getRepository(Category::class)->findOneBy(['name' => $categoryStr]);
            if ($category) {
                $product->setCategory($category);
                $output->writeln("-- with category: " . $product->getCategory()->getName());
            }
            // image linking
            $image = new Media();
            $image->setTitle($product->getName());
            $image->setPath(trim($node->filter('.photo')->first()->text()));
            $image->setProduct($product);
            $image->setFlag(true);
            $image->setType('image');
            $product->addMediaItem($image);
            $output->writeln("-- with image: " . $image->getPath());

            $product->setTax(21);
            $product->setSurcharge(1.4);

            // prices
            $price = $node->filter('.price1')->first();
            if ($price->count() > 0) {
                $product->setTax(trim($price->filter('.tax')->first()->text()));
                $product->setSurcharge(trim($price->filter('.surcharge')->first()->text()));
                $output->writeln("-- with tax: " . $product->getTax());
                $output->writeln("-- with surcharge: " . $product->getSurcharge());
                $product->addPrice($this->createPrice($node, $price, $madelvenWeb, $product, $output));
                $product->addPrice($this->createPrice($node, $price, $convendingWeb, $product, $output));
                $product->addPrice($this->createPrice($node, $price, $nuevaWeb, $product, $output));
            }

            $em = $doctrine->getManager();
            $em->persist($product);
            $em->flush();

            $output->writeln(sprintf("Finished %s\n", $product->getName()));
        });
    }

    private function createPrice($productNode, $price1Node, $web, $product, $output)
    {
        $output->writeln("-- Price for " . $web->getName());
        $price = new Price();
        $price->setProduct($product);
        $price->setWeb($web);
        $price->setPrice1(trim($price1Node->filter('.price')->first()->text()));
        $output->writeln("---- with price1: " . $price->getPrice1());

        $maxPerOrderNode = $productNode->filter('.maxPerOrder')->first();
        if ($maxPerOrderNode->count() > 0) {
            $price->setMaxPerOrder(trim($maxPerOrderNode->text()));
            $output->writeln("---- with maxPerOrder: " . $price->getMaxPerOrder());
        }

        $maxValue = $price1Node->filter('.maxValue')->first();
        if ($maxValue->count() > 0) {
            $price->setPrice1QuantityMax(trim($maxValue->text()));
            $output->writeln("---- with price1QuantityMax: " . $price->getPrice1QuantityMax());
        }

        $unitPrice1Node = $price1Node->filter('.unitPrice')->first();
        if ($unitPrice1Node->count() > 0) {
            $price->setPrice1Unit(trim($unitPrice1Node->text()));
            $output->writeln("---- with unitPrice1: " . $price->getPrice1Unit());
        }

        $price2Node = $productNode->filter('.price2')->first();
        if ($price2Node->count() > 0) {
            $price->setPrice2(trim($price2Node->filter('.price')->first()->text()));
            $output->writeln("---- with price2: " . $price->getPrice2());
            $price->setPrice2QuantityMax(trim($price2Node->filter('.maxValue')->first()->text()));
            $output->writeln("---- with price2QuantityMax: " . $price->getPrice2QuantityMax());
            $unitPrice2Node = $price2Node->filter('.unitPrice')->first();
            if ($unitPrice2Node->count() > 0) {
                $price->setPrice2Unit(trim($unitPrice2Node->text()));
                $output->writeln("---- with unitPrice2: " . $price->getPrice2Unit());
            }
        }
        $price3Node = $productNode->filter('.price3')->first();
        if ($price3Node->count() > 0) {
            $price->setPrice3(trim($price3Node->filter('.price')->first()->text()));
            $output->writeln("---- with price3: " . $price->getPrice3());
            $unitPrice3Node = $price3Node->filter('.unitPrice')->first();
            if ($unitPrice3Node->count() > 0) {
                $price->setPrice3Unit(trim($unitPrice3Node->text()));
                $output->writeln("---- with unitPrice3: " . $price->getPrice3Unit());
            }
        }

        return $price;
    }
}
