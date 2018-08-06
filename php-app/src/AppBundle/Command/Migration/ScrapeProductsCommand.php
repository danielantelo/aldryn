<?php

namespace AppBundle\Command\Migration;

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
        $client = new Client();
        $crawler = $client->request('GET', 'http://localhost:8888/productos/exporter-feed-11111-11111.php');
        $doctrine = $this->getContainer()->get('doctrine');
        $madelvenWeb = $doctrine->getRepository(Web::class)->findOneBy(['name' => 'madelven.com']);
        $convendingWeb = $doctrine->getRepository(Web::class)->findOneBy(['name' => 'convending.com']);
        $centralgrabWeb = $doctrine->getRepository(Web::class)->findOneBy(['name' => 'centralgrab.com']);
        $em = $doctrine->getManager();
        $output->writeln('Starting...');

        $crawler->filter('article')->each(function ($node) use ($output, $doctrine, $em, $madelvenWeb, $convendingWeb, $centralgrabWeb) {
            $productName = trim($node->filter('h1')->first()->text());
            $product = $doctrine->getRepository(Product::class)->findOneBy(['name' => $productName]);

            if ($product) {
                if(count($product->getPrices()->toArray()) == 0) {
                    $price = $node->filter('.price1')->first();
                    if ($price->count() > 0) {
                        echo $product->getName();
                        $product->addPrice($this->createPrice($node, $price, $madelvenWeb, $product, $output));
                        $product->addPrice($this->createPrice($node, $price, $convendingWeb, $product, $output));
                        $product->addPrice($this->createPrice($node, $price, $centralgrabWeb, $product, $output));
                        $em->persist($product);
                    }
                }
                return;
            }
            return;

            $product = new Product();
            $product->setWebs([$madelvenWeb, $convendingWeb, $centralgrabWeb]);
            $product->setName($productName);
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

            $brandStr = trim($node->filter('.brand')->first()->text());
            $parentCategoryStr = trim($node->filter('.section_new')->first()->text());
            $categoryStr = trim($node->filter('.section_sub')->first()->text());

            if (!$brandStr || !$categoryStr) {
                $output->writeln(
                    sprintf("- SKIPPING: %s / brand: %s / cat: %s", $product->getName(), $brandStr, $categoryStr)
                );
                return;
            }

            // brand entity linking
            $brand = $doctrine->getRepository(Brand::class)->findOneBy(['name' => $brandStr]);
            if (!$brand) {
                $brand = new Brand();
                $brand->setName($brandStr);
                $brand->setWebs([$madelvenWeb, $convendingWeb, $centralgrabWeb]);
                $output->writeln("-- create brand: " . $brandStr);
            }
            $product->setBrand($brand);
            $output->writeln("-- linked brand: " . $product->getBrand()->getName());

            // parent cat
            $parent = $doctrine->getRepository(Category::class)->findOneBy(['name' => $parentCategoryStr]);
            if (!$parent) {
                $parent = new Category();
                $parent->setName($parentCategoryStr);
                $parent->setWebs([$madelvenWeb, $convendingWeb, $centralgrabWeb]);
                $output->writeln("-- create PARENT category: " . $parentCategoryStr);
            }

            // category entity linking
            $category = $doctrine->getRepository(Category::class)->findOneBy(['name' => $categoryStr]);
            if (!$category) {
                $category = new Category();
                $category->setName($categoryStr);
                $category->setWebs([$madelvenWeb, $convendingWeb, $centralgrabWeb]);
                $category->setParent($parent);
                $output->writeln("-- create category: " . $categoryStr);
            }
            $product->setCategory($category);
            $output->writeln("-- linked category: " . $product->getCategory()->getName());

            // image linking
            $oldImgPath = trim($node->filter('.photo')->first()->text());
            $newImageName = 'media/image/product/' . $product->getSlug() . '-01.jpeg';
            $imageContent = @file_get_contents('http://www.madelven.com' . $oldImgPath);
            if ($imageContent) {
                $s3Client = $this->getContainer()->get('aws.s3');
                $s3Client ->putObject([
                    'ACL'     => 'public-read',
                    'Bucket'  => 'aldryn-webs',
                    'Key'     => $newImageName,
                    'Body'    => $imageContent,
                    'ContentType' => 'image/jpeg'
                ]);

                $image = new Media();
                $image->setTitle($product->getName());
                $image->setPath($newImageName);
                $image->setProduct($product);
                $image->setFlag(true);
                $image->setType('image');
                $product->addMediaItem($image);
                $output->writeln("-- with image: " . $image->getPath());
            }

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
                $product->addPrice($this->createPrice($node, $price, $centralgrabWeb, $product, $output));
            }

            $em->persist($product);

            $output->writeln(sprintf("Finished %s\n", $product->getName()));
        });

        $em->flush();
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
        if ($maxPerOrderNode->count() > 0 && trim($maxPerOrderNode->text()) != '0') {
            $price->setMaxPerOrder(trim($maxPerOrderNode->text()));
            $output->writeln("---- with maxPerOrder: " . $price->getMaxPerOrder());
        }

        $unitPrice1Node = $price1Node->filter('.unitPrice')->first();
        if ($unitPrice1Node->count() > 0) {
            $price->setPrice1Unit(trim($unitPrice1Node->text()));
            $output->writeln("---- with unitPrice1: " . $price->getPrice1Unit());
        }

        $price2Node = $productNode->filter('.price2')->first();
        if ($price2Node->count() > 0) {
            $price2amount = trim($price2Node->filter('.price')->first()->text());

            // return as is if follow up prices are greater or equal to price1
            if (! $price2amount < $price->getPrice1()) {
                return $price;
            }

            $maxValue = $price1Node->filter('.maxValue')->first();
            if ($maxValue->count() > 0) {
                $price->setPrice1QuantityMax(trim($maxValue->text()));
                $output->writeln("---- with price1QuantityMax: " . $price->getPrice1QuantityMax());
            }

            $price->setPrice2($price2amount);
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
