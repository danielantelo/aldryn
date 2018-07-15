<?php

namespace AppBundle\Tests\Entity;

use AppBundle\Entity\Address;
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
        $this->product2 = $this->getMockProduct('P2', 10, 5.2);
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
        $this->assertEquals(3.50 * 2 * 0.014, $this->basket->getItemTaxSurchargeTotal());
        $this->assertEquals(3.50 * 2 + (3.50 * 2 * 0.21) + (3.50 * 2 * 0.014), $this->basket->getItemTotal());
        $this->assertEquals($this->basket->getItemSubtotal(), $this->basket->getBasketSubTotal());
        $this->assertEquals($this->basket->getItemTaxTotal(), $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal(), $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal(), $this->basket->getBasketTotal());

        $this->basket->addBasketItem($this->basketItem2);
        $this->assertEquals(2, $this->basket->getBasketItems()->count());
        $this->assertEquals(750, $this->basket->getWeight());
        $this->assertEquals(75, $this->basket->getSize());
        $this->assertEquals(3.50 * 3, $this->basket->getItemSubtotal());
        $this->assertEquals((3.50 * 2 * 0.21) + (3.50 * 0.10), $this->basket->getItemTaxTotal());
        $this->assertEquals((3.50 * 2 * 0.014) + (3.50 * 0.052), $this->basket->getItemTaxSurchargeTotal());
        $this->assertEquals(3.50 * 3 + $this->basket->getItemTaxTotal() + $this->basket->getItemTaxSurchargeTotal(), $this->basket->getItemTotal());
        $this->assertEquals($this->basket->getItemSubtotal(), $this->basket->getBasketSubTotal());
        $this->assertEquals($this->basket->getItemTaxTotal(), $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal(), $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal(), $this->basket->getBasketTotal());

        $this->assertEquals(3.50 * 2, $this->basket->getBaseTax21());
        $this->assertEquals(3.50 * 2 * 0.21, $this->basket->getTax21());
        $this->assertEquals(3.50, $this->basket->getBaseTax10());
        $this->assertEquals(3.50 * 0.1, $this->basket->getTax10());

        $this->assertEquals(3.50 * 2, $this->basket->getBaseSurcharge1p4());
        $this->assertEquals(3.50 * 2 * 0.014, $this->basket->getSurcharge1p4());
        $this->assertEquals(3.50, $this->basket->getBaseSurcharge5p2());
        $this->assertEquals(3.50 * 0.052, $this->basket->getSurcharge5p2());
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
        $this->assertEquals(3.50 * 0.10, $this->basket->getItemTaxTotal());
        $this->assertEquals(3.50 * 0.052, $this->basket->getItemTaxSurchargeTotal());
        $this->assertEquals(3.50 + (3.50 * 0.10) + (3.50 * 0.052), $this->basket->getItemTotal());
        $this->assertEquals($this->basket->getItemSubtotal(), $this->basket->getBasketSubTotal());
        $this->assertEquals($this->basket->getItemTaxTotal(), $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal(), $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal(), $this->basket->getBasketTotal());
    }

    public function testSetDeliveryAddressThrowsExceptionWhenRegionalMinimumNotMet()
    {
        $exceptionThrown = false;
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->getWeb()->getConfiguration()->setMinSpendRegional(1000);

        try {
            $this->basket->setDeliveryAddress($this->getMockAddressRegional());
        } catch (\Exception $e) {
            $exceptionThrown = true;
            $this->assertEquals($e->getMessage(), 'Envíos regionales requieren un gasto mínimo de 1000 euros.');
        }
        $this->assertTrue($exceptionThrown);
    }

    public function testSetDeliveryAddressThrowsExceptionWhenNationalMinimumNotMet()
    {
        $exceptionThrown = false;
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->getWeb()->getConfiguration()->setMinSpendNational(1000);

        try {
            $this->basket->setDeliveryAddress($this->getMockAddressNational());
        } catch (\Exception $e) {
            $exceptionThrown = true;
            $this->assertEquals($e->getMessage(), 'Envíos nacionales requieren un gasto mínimo de 1000 euros.');
        }
        $this->assertTrue($exceptionThrown);
    }

    public function testSetDeliveryAddressThrowsExceptionWhenIslandsMinimumNotMet()
    {
        $exceptionThrown = false;
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->getWeb()->getConfiguration()->setMinSpendIslands(1000);

        try {
            $this->basket->setDeliveryAddress($this->getMockAddressIslands());
        } catch (\Exception $e) {
            $exceptionThrown = true;
            $this->assertEquals($e->getMessage(), 'Envíos a las islas requieren un gasto mínimo de 1000 euros.');
        }
        $this->assertTrue($exceptionThrown);
    }

    public function testSetDeliveryAddressSetsFreeDeliveryForRegional()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryRegionalLimit(1);

        $this->basket->setDeliveryAddress($this->getMockAddressRegional());
        $this->assertEquals(0, $this->basket->getDelivery());
        $this->assertEquals(0, $this->basket->getDeliveryTax());
        $this->assertEquals(0, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(0, $this->basket->getDeliveryTotal());
    }

    public function testSetDeliveryAddressSetsFreeDeliveryForNational()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryNationalLimit(1);

        $this->basket->setDeliveryAddress($this->getMockAddressNational());
        $this->assertEquals(0, $this->basket->getDelivery());
        $this->assertEquals(0, $this->basket->getDeliveryTax());
        $this->assertEquals(0, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(0, $this->basket->getDeliveryTotal());
    }

    public function testSetDeliveryAddressSetsFreeDeliveryForIslands()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryIslandsLimit(1);

        $this->basket->setDeliveryAddress($this->getMockAddressIslands());
        $this->assertEquals(0, $this->basket->getDelivery());
        $this->assertEquals(0, $this->basket->getDeliveryTax());
        $this->assertEquals(0, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(0, $this->basket->getDeliveryTotal());
    } 

    public function testSetDeliveryAddressSetsFreeDeliveryForInternational()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryInternationalLimit(1);

        $this->basket->setDeliveryAddress($this->getMockAddressInternational());
        $this->assertEquals(0, $this->basket->getDelivery());
        $this->assertEquals(0, $this->basket->getDeliveryTax());
        $this->assertEquals(0, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(0, $this->basket->getDeliveryTotal());
    }

    public function testSetDeliveryAddressSetsDeliveryForRegionalUnderBaseAmount()
    {
        $this->basket->addBasketItem($this->basketItem1);
        
        $this->basket->getWeb()->getConfiguration()->setDeliveryType('size');
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryRegionalLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(250000); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryRegional(5.99); // euro

        $this->basket->setDeliveryAddress($this->getMockAddressRegional());
        $this->assertEquals(5.99, $this->basket->getDelivery());
        $this->assertEquals(0, $this->basket->getDeliveryTax());
        $this->assertEquals(0, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(5.99, $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + 5.99, $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTotal() + 5.99, $this->basket->getBasketTotal());
    }

    public function testSetDeliveryAddressSetsDeliveryForRegionalOverBaseAmount()
    {
        // combined size 75
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        $this->basket->getWeb()->getConfiguration()->setDeliveryType('size');
        $this->basket->getWeb()->getConfiguration()->setDeliveryTax(10);
        $this->basket->getWeb()->getConfiguration()->setDeliveryTaxSurcharge(1.4);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryRegionalLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(25); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryRegional(5.99); // euro
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessAmount(10); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessMultiplierRegional(1);

        // 75 - 25 = 50 / 10 = 5 * 1 = 5euro
        $this->basket->setDeliveryAddress($this->getMockAddressRegional());
        $this->assertEquals(10.99, $this->basket->getDelivery());
        $this->assertEquals(1.099, $this->basket->getDeliveryTax());
        $this->assertEquals(0.15386, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(12.24286, $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + 10.99, $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTaxTotal() + 1.099, $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal() + 0.15386, $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal() + 12.24286, $this->basket->getBasketTotal());

        $this->assertEquals(3.50 * 2, $this->basket->getBaseTax21());
        $this->assertEquals(3.50 * 2 * 0.21, $this->basket->getTax21());
        $this->assertEquals(3.50 + 10.99, $this->basket->getBaseTax10());
        $this->assertEquals(3.50 * 0.1 + 1.099, $this->basket->getTax10());

        $this->assertEquals(3.50 * 2 + 10.99, $this->basket->getBaseSurcharge1p4());
        $this->assertEquals(3.50 * 2 * 0.014 + 0.15386, $this->basket->getSurcharge1p4());
        $this->assertEquals(3.50, $this->basket->getBaseSurcharge5p2());
        $this->assertEquals(3.50 * 0.052, $this->basket->getSurcharge5p2());
    }

    public function testSetDeliveryAddressSetsDeliveryForIslandslUnderBaseAmount()
    {
        $this->basket->addBasketItem($this->basketItem1);
        
        $this->basket->getWeb()->getConfiguration()->setDeliveryType('size');
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryIslandsLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(250000); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryIslands(5.99); // euro

        $this->basket->setDeliveryAddress($this->getMockAddressIslands());
        $this->assertEquals(5.99, $this->basket->getDelivery());
        $this->assertEquals(0, $this->basket->getDeliveryTax());
        $this->assertEquals(0, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(5.99, $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + 5.99, $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTotal() + 5.99, $this->basket->getBasketTotal());
    }

    public function testSetDeliveryAddressSetsDeliveryForIslandsOverBaseAmount()
    {
        // combined size 75
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        $this->basket->getWeb()->getConfiguration()->setDeliveryType('size');
        $this->basket->getWeb()->getConfiguration()->setDeliveryTax(10);
        $this->basket->getWeb()->getConfiguration()->setDeliveryTaxSurcharge(1.4);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryIslandsLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(25); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryIslands(5.99); // euro
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessAmount(10); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessMultiplierIslands(1);

        // 75 - 25 = 50 / 10 = 5 * 1 = 5euro + 5.99 base
        $this->basket->setDeliveryAddress($this->getMockAddressIslands());
        $this->assertEquals(10.99, $this->basket->getDelivery());
        $this->assertEquals(1.099, $this->basket->getDeliveryTax());
        $this->assertEquals(0.15386, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(12.24286, $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + 10.99, $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTaxTotal() + 1.099, $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal() + 0.15386, $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal() + 12.24286, $this->basket->getBasketTotal());

        $this->assertEquals(3.50 * 2, $this->basket->getBaseTax21());
        $this->assertEquals(3.50 * 2 * 0.21, $this->basket->getTax21());
        $this->assertEquals(3.50 + 10.99, $this->basket->getBaseTax10());
        $this->assertEquals(3.50 * 0.1 + 1.099, $this->basket->getTax10());

        $this->assertEquals(3.50 * 2 + 10.99, $this->basket->getBaseSurcharge1p4());
        $this->assertEquals(3.50 * 2 * 0.014 + 0.15386, $this->basket->getSurcharge1p4());
        $this->assertEquals(3.50, $this->basket->getBaseSurcharge5p2());
        $this->assertEquals(3.50 * 0.052, $this->basket->getSurcharge5p2());        
    }

    public function testSetDeliveryAddressSetsDeliveryForNationalUnderBaseAmount()
    {
        $this->basket->addBasketItem($this->basketItem1);
        
        $this->basket->getWeb()->getConfiguration()->setDeliveryType('weight');
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryNationalLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(500); //gr
        $this->basket->getWeb()->getConfiguration()->setDeliveryNational(5.00); // euro

        $this->basket->setDeliveryAddress($this->getMockAddressNational());
        $this->assertEquals(5.00, $this->basket->getDelivery());
        $this->assertEquals(0, $this->basket->getDeliveryTax());
        $this->assertEquals(0, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(5.00, $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + 5.00, $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTotal() + 5.00, $this->basket->getBasketTotal());
    }

    public function testSetDeliveryAddressSetsDeliveryForNationalOverBaseAmount()
    {
        // combined weight 750
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        $this->basket->getWeb()->getConfiguration()->setDeliveryType('weight');
        $this->basket->getWeb()->getConfiguration()->setDeliveryTax(21);
        $this->basket->getWeb()->getConfiguration()->setDeliveryTaxSurcharge(5.2);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryNationalLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(500); //gr
        $this->basket->getWeb()->getConfiguration()->setDeliveryNational(5.00); // euro
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessAmount(10); //gr
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessMultiplierNational(0.10);

        // 750 - 500 = 250 / 100 = 25 * 0.10 = 2.50 euro + 5.00 base
        $this->basket->setDeliveryAddress($this->getMockAddressNational());
        $this->assertEquals(7.50, $this->basket->getDelivery());
        $this->assertEquals(7.50 * 0.21, $this->basket->getDeliveryTax());
        $this->assertEquals(7.50 * 0.052, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(7.50 + (7.50 * 0.21) + (7.50 * 0.052), $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + 7.50, $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTaxTotal() + 7.50 * 0.21, $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal() + 7.50 * 0.052, $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal() + 7.50 + (7.50 * 0.21) + (7.50 * 0.052), $this->basket->getBasketTotal());

        $this->assertEquals(3.50 * 2 + 7.50, $this->basket->getBaseTax21());
        $this->assertEquals(3.50 * 2 * 0.21 + (7.50 * 0.21), $this->basket->getTax21());
        $this->assertEquals(3.50, $this->basket->getBaseTax10());
        $this->assertEquals(3.50 * 0.1, $this->basket->getTax10());

        $this->assertEquals(3.50 * 2, $this->basket->getBaseSurcharge1p4());
        $this->assertEquals(3.50 * 2 * 0.014, $this->basket->getSurcharge1p4());
        $this->assertEquals(3.50 + 7.50, $this->basket->getBaseSurcharge5p2());
        $this->assertEquals(3.50 * 0.052+ (7.50 * 0.052), $this->basket->getSurcharge5p2());        
    }

    public function testSetDeliveryAddressSetsDeliveryForInternationallUnderBaseAmount()
    {
        $this->basket->addBasketItem($this->basketItem1);
        
        $this->basket->getWeb()->getConfiguration()->setDeliveryType('size');
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryInternationalLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(250000); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryInternational(5.99); // euro

        $this->basket->setDeliveryAddress($this->getMockAddressInternational());
        $this->assertEquals(5.99, $this->basket->getDelivery());
        $this->assertEquals(0, $this->basket->getDeliveryTax());
        $this->assertEquals(0, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(5.99, $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + 5.99, $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTotal() + 5.99, $this->basket->getBasketTotal());
    }

    public function testSetDeliveryAddressSetsDeliveryForInternationalOverBaseAmountWithTaxEnabled()
    {
        // combined size 75
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        $this->basket->getWeb()->getConfiguration()->setDeliveryType('size');
        $this->basket->getWeb()->getConfiguration()->setInternationalTax(true);
        $this->basket->getWeb()->getConfiguration()->setDeliveryTax(10);
        $this->basket->getWeb()->getConfiguration()->setDeliveryTaxSurcharge(1.4);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryInternationalLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(25); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryInternational(5.99); // euro
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessAmount(10); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessMultiplierInternational(1);

        // 75 - 25 = 50 / 10 = 5 * 1 = 5euro + 5.99 base
        $this->basket->setDeliveryAddress($this->getMockAddressInternational());
        $this->assertEquals(10.99, $this->basket->getDelivery());
        $this->assertEquals(1.099, $this->basket->getDeliveryTax());
        $this->assertEquals(0.15386, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(12.24286, $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + 10.99, $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTaxTotal() + 1.099, $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal() + 0.15386, $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal() + 12.24286, $this->basket->getBasketTotal());

        $this->assertEquals(3.50 * 2, $this->basket->getBaseTax21());
        $this->assertEquals(3.50 * 2 * 0.21, $this->basket->getTax21());
        $this->assertEquals(3.50 + 10.99, $this->basket->getBaseTax10());
        $this->assertEquals(3.50 * 0.1 + 1.099, $this->basket->getTax10());

        $this->assertEquals(3.50 * 2 + 10.99, $this->basket->getBaseSurcharge1p4());
        $this->assertEquals(3.50 * 2 * 0.014 + 0.15386, $this->basket->getSurcharge1p4());
        $this->assertEquals(3.50, $this->basket->getBaseSurcharge5p2());
        $this->assertEquals(3.50 * 0.052, $this->basket->getSurcharge5p2());        
    }

    public function testSetDeliveryAddressSetsDeliveryForInternationalOverBaseAmountWithTaxDisabled()
    {
        // combined size 75
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        $this->basket->getWeb()->getConfiguration()->setDeliveryType('size');
        $this->basket->getWeb()->getConfiguration()->setInternationalTax(false);
        $this->basket->getWeb()->getConfiguration()->setDeliveryTax(10);
        $this->basket->getWeb()->getConfiguration()->setDeliveryTaxSurcharge(1.4);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryInternationalLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(25); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryInternational(5.99); // euro
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessAmount(10); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessMultiplierInternational(1);

        // 75 - 25 = 50 / 10 = 5 * 1 = 5euro + 5.99 base
        $this->basket->setDeliveryAddress($this->getMockAddressInternational());
        $this->assertEquals(10.99, $this->basket->getDelivery());
        $this->assertEquals(0, $this->basket->getDeliveryTax());
        $this->assertEquals(0, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals(10.99, $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + 10.99, $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTaxTotal(), $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal(), $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal() + 10.99, $this->basket->getBasketTotal());

        $this->assertEquals(3.50 * 2, $this->basket->getBaseTax21());
        $this->assertEquals(3.50 * 2 * 0.21, $this->basket->getTax21());
        $this->assertEquals(3.50, $this->basket->getBaseTax10());
        $this->assertEquals(3.50 * 0.1, $this->basket->getTax10());

        $this->assertEquals(3.50 * 2, $this->basket->getBaseSurcharge1p4());
        $this->assertEquals(3.50 * 2 * 0.014, $this->basket->getSurcharge1p4());
        $this->assertEquals(3.50, $this->basket->getBaseSurcharge5p2());
        $this->assertEquals(3.50 * 0.052, $this->basket->getSurcharge5p2());        
    }

    public function testSetDeliveryAddressSetsDeliveryForIslandsWithAdditionalKgCharge()
    {
        // combined size 75 & weight 750
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        $this->basket->getWeb()->getConfiguration()->setDeliveryType('size');
        $this->basket->getWeb()->getConfiguration()->setIslandsPricePerAdditionalKg(2); //euro per kg
        $this->basket->getWeb()->getConfiguration()->setDeliveryTax(10);
        $this->basket->getWeb()->getConfiguration()->setDeliveryTaxSurcharge(1.4);
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryIslandsLimit(1000);
        $this->basket->getWeb()->getConfiguration()->setDeliveryBaseAmount(25); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryIslands(5.99); // euro
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessAmount(10); //cm^3
        $this->basket->getWeb()->getConfiguration()->setDeliveryExcessMultiplierIslands(1);

        // 75 - 25 = 50 / 10 = 5 * 1 = 5euro + 5.99 base
        $this->basket->setDeliveryAddress($this->getMockAddressIslands());
        $this->assertEquals(10.99 + 2 * 0.75, $this->basket->getDelivery());
        $this->assertEquals((10.99 + 2 * 0.75) * 0.1, $this->basket->getDeliveryTax());
        $this->assertEquals((10.99 + 2 * 0.75) * 0.014, $this->basket->getDeliveryTaxSurcharge());
        $this->assertEquals((10.99 + 2 * 0.75) + ((10.99 + 2 * 0.75) * 0.1) + ((10.99 + 2 * 0.75) * 0.014), $this->basket->getDeliveryTotal());

        $this->assertEquals($this->basket->getItemSubtotal() + $this->basket->getDelivery(), $this->basket->getBasketSubtotal());
        $this->assertEquals($this->basket->getItemTaxTotal() + $this->basket->getDeliveryTax(), $this->basket->getBasketTaxTotal());
        $this->assertEquals($this->basket->getItemTaxSurchargeTotal() + $this->basket->getDeliveryTaxSurcharge(), $this->basket->getBasketTaxSurchargeTotal());
        $this->assertEquals($this->basket->getItemTotal() + $this->basket->getDeliveryTotal(), $this->basket->getBasketTotal());

        $this->assertEquals(3.50 * 2, $this->basket->getBaseTax21());
        $this->assertEquals(3.50 * 2 * 0.21, $this->basket->getTax21());
        $this->assertEquals(3.50 + $this->basket->getDelivery(), $this->basket->getBaseTax10());
        $this->assertEquals(3.50 * 0.1 + $this->basket->getDeliveryTax(), $this->basket->getTax10());

        $this->assertEquals(3.50 * 2 + $this->basket->getDelivery(), $this->basket->getBaseSurcharge1p4());
        $this->assertEquals(3.50 * 2 * 0.014 + $this->basket->getDeliveryTaxSurcharge(), $this->basket->getSurcharge1p4());
        $this->assertEquals(3.50, $this->basket->getBaseSurcharge5p2());
        $this->assertEquals(3.50 * 0.052, $this->basket->getSurcharge5p2());
    }

    public function testSetDeliveryAddressRegionalPallets()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        // hack basket size for test
        $this->basket->setSize(3000000);
        
        $this->basket->getWeb()->getConfiguration()->setDeliveryType('pallet');
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryRegionalLimit(999999);
        $this->basket->getWeb()->getConfiguration()->setPalletT1Max(100000);
        $this->basket->getWeb()->getConfiguration()->setPalletT1RegionalCost(10);
        $this->basket->getWeb()->getConfiguration()->setPalletT2Max(500000);
        $this->basket->getWeb()->getConfiguration()->setPalletT2RegionalCost(20);
        $this->basket->getWeb()->getConfiguration()->setPalletT3Max(1000000);
        $this->basket->getWeb()->getConfiguration()->setPalletT3RegionalCost(30);
        $this->basket->getWeb()->getConfiguration()->setPalletT4Max(1500000);
        $this->basket->getWeb()->getConfiguration()->setPalletT4RegionalCost(40);

        $this->basket->setDeliveryAddress($this->getMockAddressRegional());
        $this->assertEquals(90.0, $this->basket->getDelivery());
    }

    public function testSetDeliveryAddressIslandsPallets()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        // hack basket size for test
        $this->basket->setSize(3000000);
        
        $this->basket->getWeb()->getConfiguration()->setDeliveryType('pallet');
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryIslandsLimit(999999);
        $this->basket->getWeb()->getConfiguration()->setPalletT1Max(100000);
        $this->basket->getWeb()->getConfiguration()->setPalletT1IslandsCost(10);
        $this->basket->getWeb()->getConfiguration()->setPalletT2Max(500000);
        $this->basket->getWeb()->getConfiguration()->setPalletT2IslandsCost(20);
        $this->basket->getWeb()->getConfiguration()->setPalletT3Max(1000000);
        $this->basket->getWeb()->getConfiguration()->setPalletT3IslandsCost(30);
        $this->basket->getWeb()->getConfiguration()->setPalletT4Max(1500000);
        $this->basket->getWeb()->getConfiguration()->setPalletT4IslandsCost(40);

        $this->basket->setDeliveryAddress($this->getMockAddressIslands());
        $this->assertEquals(90.0, $this->basket->getDelivery());
    }

    public function testSetDeliveryAddressNationalPallets()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        // hack basket size for test
        $this->basket->setSize(3000000);
        
        $this->basket->getWeb()->getConfiguration()->setDeliveryType('pallet');
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryNationalLimit(999999);
        $this->basket->getWeb()->getConfiguration()->setPalletT1Max(100000);
        $this->basket->getWeb()->getConfiguration()->setPalletT1NationalCost(10);
        $this->basket->getWeb()->getConfiguration()->setPalletT2Max(500000);
        $this->basket->getWeb()->getConfiguration()->setPalletT2NationalCost(20);
        $this->basket->getWeb()->getConfiguration()->setPalletT3Max(1000000);
        $this->basket->getWeb()->getConfiguration()->setPalletT3NationalCost(30);
        $this->basket->getWeb()->getConfiguration()->setPalletT4Max(1500000);
        $this->basket->getWeb()->getConfiguration()->setPalletT4NationalCost(40);

        $this->basket->setDeliveryAddress($this->getMockAddressNational());
        $this->assertEquals(90.0, $this->basket->getDelivery());
    }

    public function testSetDeliveryAddressInternationalPallets()
    {
        $this->basket->addBasketItem($this->basketItem1);
        $this->basket->addBasketItem($this->basketItem2);

        // hack basket size for test
        $this->basket->setSize(3000000);
        
        $this->basket->getWeb()->getConfiguration()->setDeliveryType('pallet');
        $this->basket->getWeb()->getConfiguration()->setFreeDeliveryInternationalLimit(999999);
        $this->basket->getWeb()->getConfiguration()->setPalletT1Max(100000);
        $this->basket->getWeb()->getConfiguration()->setPalletT1InternationalCost(10);
        $this->basket->getWeb()->getConfiguration()->setPalletT2Max(500000);
        $this->basket->getWeb()->getConfiguration()->setPalletT2InternationalCost(20);
        $this->basket->getWeb()->getConfiguration()->setPalletT3Max(1000000);
        $this->basket->getWeb()->getConfiguration()->setPalletT3InternationalCost(30);
        $this->basket->getWeb()->getConfiguration()->setPalletT4Max(1500000);
        $this->basket->getWeb()->getConfiguration()->setPalletT4InternationalCost(40);

        $this->basket->setDeliveryAddress($this->getMockAddressInternational());
        $this->assertEquals(90.0, $this->basket->getDelivery());
    }    
}
