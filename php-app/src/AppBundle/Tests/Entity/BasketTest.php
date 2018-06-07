<?php

namespace AppBundle\Tests\Entity;

use AppBundle\Entity\Basket;
use AppBundle\Entity\BasketItem;
use AppBundle\Entity\Price;
use AppBundle\Entity\Product;
use AppBundle\Tests\BaseEcommerceTest;

class BasketTest extends BaseEcommerceTest
{
    /**
     * @var Basket
     */
    private $basket;

    /**
     * @var Product
     */
    private $product1;

    /**
     * @var Product
     */
    private $product2;

    /**
     * @var Price
     */
    private $price;

    protected function setUp()
    {
        $this->basket = $this->getMockBasket();
        $this->product1 = $this->getMockProduct();
        $this->product2 = $this->getMockProduct('P2');
        $this->price = $this->getMockPrice();
        $this->basketItem1 = new BasketItem(2, $this->product1, $this->price, $this->basket);
        $this->basketItem2 = new BasketItem(1, $this->product2, $this->price, $this->basket);
    }
    
    public function testAddBasketItem()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->assertEquals(1, $this->basket->getBasketItems()->count());
        $this->assertEquals(250 * 2, $this->basket->getWeight());
        $this->assertEquals(25 * 2, $this->basket->getSize());
        $this->assertEquals(3.50 * 2, $this->basket->getItemSubtotal());
        $this->assertEquals(3.50 * 2 * 0.21, $this->basket->getItemTaxTotal());
        $this->assertEquals(3.50 * 2 * 0.03, $this->basket->getItemTaxSurchargeTotal());
        $this->assertEquals(3.50 * 2 + (3.50 * 2 * 0.21) + (3.50 * 2 * 0.03), $this->basket->getItemTotal());
        $this->assertEquals($this->basket->getItemSubtotal(), $this->basket->getBasketSubTotal());
        $this->assertEquals($this->basket->getItemTaxTotal(), $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal(), $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal(), $this->basket->getBasketTotal());

        $this->basket->addBasketItem($this->basketItem2);
        $this->assertEquals(2, $this->basket->getBasketItems()->count());
        $this->assertEquals(750, $this->basket->getWeight());
        $this->assertEquals(75, $this->basket->getSize());
        $this->assertEquals(3.50 * 3, $this->basket->getItemSubtotal());
        $this->assertEquals(3.50 * 3 * 0.21, $this->basket->getItemTaxTotal());
        $this->assertEquals(3.50 * 3 * 0.03, $this->basket->getItemTaxSurchargeTotal());
        $this->assertEquals(3.50 * 3 + (3.50 * 0.21 * 3) + (3.50 * 0.03 * 3), $this->basket->getItemTotal());
        $this->assertEquals($this->basket->getItemSubtotal(), $this->basket->getBasketSubTotal());
        $this->assertEquals($this->basket->getItemTaxTotal(), $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal(), $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal(), $this->basket->getBasketTotal());
    }

    public function testRemoveBasketItem()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);
        $this->assertEquals(2, $this->basket->getBasketItems()->count());

        $this->basket->removeBasketItem($this->basketItem1);
        $this->assertEquals(1, $this->basket->getBasketItems()->count());
        $this->assertEquals(250, $this->basket->getWeight());
        $this->assertEquals(25, $this->basket->getSize());
        $this->assertEquals(3.50, $this->basket->getItemSubtotal());
        $this->assertEquals(3.50 * 0.21, $this->basket->getItemTaxTotal());
        $this->assertEquals(3.50 * 0.03, $this->basket->getItemTaxSurchargeTotal());
        $this->assertEquals(3.50 + (3.50 * 0.21) + (3.50 * 0.03), $this->basket->getItemTotal());
        $this->assertEquals($this->basket->getItemSubtotal(), $this->basket->getBasketSubTotal());
        $this->assertEquals($this->basket->getItemTaxTotal(), $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal(), $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal(), $this->basket->getBasketTotal());
    }

    public function testCalculateDelivery()
    {

    }
}
