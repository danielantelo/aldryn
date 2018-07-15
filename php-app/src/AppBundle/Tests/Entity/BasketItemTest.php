<?php

namespace AppBundle\Tests\Entity;

use AppBundle\Entity\BasketItem;
use AppBundle\Tests\BaseEcommerceTest;

class BasketItemTest extends BaseEcommerceTest
{
    public function testCreate()
    {
        $basket = $this->getMockBasket();
        $product = $this->getMockProduct();
        $price = $this->getMockPrice();

        $basketItem = new BasketItem(6, $product, $price, $basket);

        $this->assertEquals($basket, $basketItem->getBasket());
        $this->assertInstanceOf(\DateTime::class, $basketItem->getAddedToBasketDate());

        $this->assertEquals('My Product', $basketItem->getProductName());
        $this->assertEquals(21, $basketItem->getTaxPercentage());
        $this->assertEquals(1.4, $basketItem->getTaxSurchargePercentage());
        $this->assertEquals(250 * 6, $basketItem->getWeight());
        $this->assertEquals(25 * 6, $basketItem->getSize());

        $this->assertEquals(6, $basketItem->getQuantity());
        $this->assertEquals(2.50, $basketItem->getPricePerUnit());
        $this->assertEquals(2.50 * 6, $basketItem->getSubTotal());
        $this->assertEquals(2.50 * 6 * 0.21, $basketItem->getTax());
        $this->assertEquals(2.50 * 6 * 0.014, $basketItem->getTaxSurcharge());
        $this->assertEquals(
            (2.50 * 6) + (2.50 * 6 * 0.21) + (2.50 * 6 * 0.014),
            $basketItem->getTotal()
        );
    }
}
