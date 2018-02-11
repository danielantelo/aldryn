<?php

namespace AppBundle\Tests;

use AppBundle\Entity\Basket;
use AppBundle\Entity\Price;
use AppBundle\Entity\Product;
use PHPUnit\Framework\TestCase;

abstract class BaseEcommerceTest extends TestCase
{
    protected function getMockBasket()
    {
        $basket = new Basket();

        return $basket;
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

    protected function getMockProduct($name = 'My Product')
    {
        $product = new Product();
        $product->setName($name);
        $product->setTax(21);
        $product->setSurcharge(3);
        $product->setWeight(250);
        $product->setWidth(5);
        $product->setHeight(5);
        $product->setLength(1);
        $product->setStock(100);

        return $product;
    }
}
