<?php

namespace AppBundle\Tests;

use AppBundle\Entity\Address;
use AppBundle\Entity\Basket;
use AppBundle\Entity\Client;
use AppBundle\Entity\Configuration;
use AppBundle\Entity\Price;
use AppBundle\Entity\Product;
use AppBundle\Entity\Web;
use PHPUnit\Framework\TestCase;

abstract class BaseEcommerceTest extends TestCase
{
    protected function getMockWeb()
    {
        $web = new Web();
        $web->setName('myweb.com');

        $configuration = new Configuration();
        $web->setConfiguration($configuration);

        return $web;
    }

    protected function getMockBasket()
    {
        $basket = new Basket();
        $basket->setWeb($this->getMockWeb());
        $basket->setClient($this->getMockClient());

        return $basket;
    }

    protected function getMockClient()
    {
        $client = new Client();
        $client->setName('Jim Bob');
        $client->setEmail('jim@bob.com');

        return $client;
    }

    protected function getMockPrice()
    {
        $price = new Price();
        $price->setPrice1(3.50);
        $price->setPrice1QuantityMax(5);
        $price->setPrice2(2.50);
        $price->setPrice2QuantityMax(10);
        $price->setPrice3(1.50);

        return $price;
    }

    protected function getMockProduct($name = 'My Product', $tax = 21, $surcharge = 1.4)
    {
        $product = new Product();
        $product->setName($name);
        $product->setTax($tax);
        $product->setSurcharge($surcharge);
        $product->setWeight(250);
        $product->setWidth(5);
        $product->setHeight(5);
        $product->setLength(1);
        $product->setStock(100);

        return $product;
    }

    protected function getMockAddressRegional()
    {
        $address = new Address();
        $address
            ->setStreetNumber('Flat 2104')
            ->setStreetName('ben block house')
            ->setCity('A Coruña')
            ->setZipCode('15888')
            ->setCountry('España')
            ->setTelephone('98188888')
        ;

        return $address;
    }

    protected function getMockAddressNational()
    {
        $address = new Address();
        $address
            ->setStreetNumber('Flat 2104')
            ->setStreetName('ben block house')
            ->setCity('Madrid')
            ->setZipCode('15888')
            ->setCountry('España')
            ->setTelephone('98188888')
        ;
        
        return $address;
    }

    protected function getMockAddressIslands()
    {
        $address = new Address();
        $address
            ->setStreetNumber('Flat 2104')
            ->setStreetName('ben block house')
            ->setCity('Tenerife')
            ->setZipCode('15888')
            ->setCountry('España')
            ->setTelephone('98188888')
        ;
        
        return $address;
    }

    protected function getMockAddressInternational()
    {
        $address = new Address();
        $address
            ->setStreetNumber('Flat 2104')
            ->setStreetName('ben block house')
            ->setCity('London')
            ->setZipCode('W3 6NE')
            ->setCountry('Reino Unido')
            ->setTelephone('076555555')
        ;
        
        return $address;
    }    
}
