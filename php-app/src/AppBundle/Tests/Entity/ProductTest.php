<?php

namespace AppBundle\Tests\Entity;

use AppBundle\Entity\Product;
use AppBundle\Entity\StockCode;
use AppBundle\Tests\BaseEcommerceTest;

class ProductTest extends BaseEcommerceTest
{
    public function testCreate()
    {
        $product = new Product();
        $this->assertEquals([], $product->getMediaItems()->toArray());
        $this->assertEquals([], $product->getWebs()->toArray());
        $this->assertEquals([], $product->getPrices()->toArray());
    }

    public function testAddAndRemoveStock()
    {
        $product = new Product();
        $product->setStock(5);
        
        $this->assertEquals(null, $product->getCurrentStockCode());

        // add new stock
        $product->addStock(10, 'A0002');
        $this->assertEquals(15, $product->getStock());
        $this->assertEquals(1, count($product->getStockCodes()));
        $this->assertEquals('A0002', $product->getStockCodes()->first()->getCode());
        $this->assertEquals(6, $product->getStockCodes()->first()->getStartIndex());
        $this->assertEquals(15, $product->getStockCodes()->first()->getEndIndex());
        $this->assertNull($product->getStockCodes()->first()->getStartDate());
        $this->assertNull($product->getStockCodes()->first()->getEndDate());
        $this->assertNull($product->getCurrentStockCode());

        // add more stock
        $product->addStock(10, 'A0004');
        $this->assertEquals(25, $product->getStock());
        $this->assertEquals(2, count($product->getStockCodes()));
        $this->assertEquals('A0004', $product->getStockCodes()[1]->getCode());
        $this->assertEquals(16, $product->getStockCodes()[1]->getStartIndex());
        $this->assertEquals(25, $product->getStockCodes()[1]->getEndIndex());
        $this->assertNull($product->getStockCodes()[1]->getStartDate());
        $this->assertNull($product->getStockCodes()[1]->getEndDate());
        $this->assertNull($product->getCurrentStockCode());

        // remove some stock
        $this->assertEquals([], $product->removeStock(3));
        $this->assertEquals(22, $product->getStock());
        $this->assertEquals(3, $product->getStockCodes()->first()->getStartIndex());
        $this->assertEquals(12, $product->getStockCodes()->first()->getEndIndex());
        $this->assertNull($product->getStockCodes()->first()->getStartDate());
        $this->assertNull($product->getStockCodes()->first()->getEndDate());
        $this->assertEquals(13, $product->getStockCodes()[1]->getStartIndex());
        $this->assertEquals(22, $product->getStockCodes()[1]->getEndIndex());
        $this->assertNull($product->getStockCodes()[1]->getStartDate());
        $this->assertNull($product->getStockCodes()[1]->getEndDate());
        $this->assertNull($product->getCurrentStockCode());

        // remove more stock
        $this->assertEquals(['A0002'], $product->removeStock(5));
        $this->assertEquals(17, $product->getStock());
        $this->assertEquals(-2, $product->getStockCodes()->first()->getStartIndex());
        $this->assertEquals(7, $product->getStockCodes()->first()->getEndIndex());
        $this->assertNotNull($product->getStockCodes()->first()->getStartDate());
        $this->assertNull($product->getStockCodes()->first()->getEndDate());
        $this->assertEquals(8, $product->getStockCodes()[1]->getStartIndex());
        $this->assertEquals(17, $product->getStockCodes()[1]->getEndIndex());
        $this->assertNull($product->getStockCodes()[1]->getStartDate());
        $this->assertNull($product->getStockCodes()[1]->getEndDate());
        $this->assertEquals('A0002', $product->getCurrentStockCode()->getCode());

        // remove more stock
        $this->assertEquals(['A0002', 'A0004'], $product->removeStock(9));
        $this->assertEquals(8, $product->getStock());
        $this->assertEquals(-11, $product->getStockCodes()->first()->getStartIndex());
        $this->assertEquals(-2, $product->getStockCodes()->first()->getEndIndex());
        $this->assertNotNull($product->getStockCodes()->first()->getStartDate());
        $this->assertNotNull($product->getStockCodes()->first()->getEndDate());
        $this->assertEquals(-1, $product->getStockCodes()[1]->getStartIndex());
        $this->assertEquals(8, $product->getStockCodes()[1]->getEndIndex());
        $this->assertNotNull($product->getStockCodes()[1]->getStartDate());
        $this->assertNull($product->getStockCodes()[1]->getEndDate());
        $this->assertEquals('A0004', $product->getCurrentStockCode()->getCode());

        // remove all stock
        $this->assertEquals(['A0004'], $product->removeStock(8));
        $this->assertEquals(0, $product->getStock());
        $this->assertEquals(-19, $product->getStockCodes()->first()->getStartIndex());
        $this->assertEquals(-10, $product->getStockCodes()->first()->getEndIndex());
        $this->assertNotNull($product->getStockCodes()->first()->getStartDate());
        $this->assertNotNull($product->getStockCodes()->first()->getEndDate());
        $this->assertEquals(-9, $product->getStockCodes()[1]->getStartIndex());
        $this->assertEquals(0, $product->getStockCodes()[1]->getEndIndex());
        $this->assertNotNull($product->getStockCodes()[1]->getStartDate());
        $this->assertNotNull($product->getStockCodes()[1]->getEndDate());
        $this->assertEquals(null, $product->getCurrentStockCode());

        // add new stock
        $product->addStock(10, 'A0010');
        $this->assertEquals(10, $product->getStock());
        $this->assertEquals(-19, $product->getStockCodes()->first()->getStartIndex());
        $this->assertEquals(-10, $product->getStockCodes()->first()->getEndIndex());
        $this->assertEquals(-9, $product->getStockCodes()[1]->getStartIndex());
        $this->assertEquals(0, $product->getStockCodes()[1]->getEndIndex());
        $this->assertNotNull($product->getStockCodes()[1]->getStartDate());
        $this->assertNotNull($product->getStockCodes()[1]->getEndDate());
        $this->assertEquals('A0010', $product->getStockCodes()[2]->getCode());
        $this->assertEquals(1, $product->getStockCodes()[2]->getStartIndex());
        $this->assertEquals(10, $product->getStockCodes()[2]->getEndIndex());
        $this->assertNotNull($product->getStockCodes()[2]->getStartDate());
        $this->assertNull($product->getStockCodes()[2]->getEndDate());
        $this->assertEquals('A0010', $product->getCurrentStockCode()->getCode());

        // remove stock
        $this->assertEquals(['A0010'], $product->removeStock(2));
        $this->assertEquals(8, $product->getStock());
    }   

    public function testRestoreStock()
    {
        $product = new Product();

        // add new stock
        $product->addStock(5, 'A0001');
        $product->addStock(10, 'A0002');
        $product->removeStock(5);
        $this->assertEquals('A0002', $product->getCurrentStockCode()->getCode());

        $product->restoreStock(2, 'A0001');
        $this->assertEquals('A0001', $product->getCurrentStockCode()->getCode());
        $this->assertEquals(1, $product->getCurrentStockCode()->getStartIndex());
        $this->assertEquals(2, $product->getCurrentStockCode()->getEndIndex());
    }

    public function testNoDuplicateCodes()
    {
        $product = new Product();

        // add new stock
        $product->addStock(5, 'A0001');
        $product->addStock(10, 'A0001');
        $this->assertEquals(['A0001'], $product->removeStock(8));
    }    

    public function testRestoreStockToActiveCode()
    {
        $product = new Product();

        // add new stock
        $product->addStock(10, 'A0001');
        $product->removeStock(5);
        $this->assertEquals(-4, $product->getCurrentStockCode()->getStartIndex());
        $this->assertEquals(5, $product->getCurrentStockCode()->getEndIndex());

        $product->restoreStock(2, 'A0001');
        $this->assertEquals('A0001', $product->getCurrentStockCode()->getCode());
        $this->assertEquals(7, $product->getCurrentStockCode()->getEndIndex());
        $this->assertEquals(-2, $product->getCurrentStockCode()->getStartIndex());
    }

    public function testRestoreStockMultipleCodes()
    {
        // $product = new Product();

        // // add new stock
        // $product->addStock(5, 'A0001');
        // $product->addStock(10, 'A0002');
        // $product->addStock(10, 'A0002');
        // $this->assertEquals(['A0001', 'A0002'], $product->removeStock(9));
        // $this->assertEquals('A0002', $product->getCurrentStockCode()->getCode());

        // $product->restoreStock(2, 'A0001');
        // $this->assertEquals('A0001', $product->getCurrentStockCode()->getCode());
        // $product->removeStock(2);
        // $this->assertEquals('A0001', $product->getCurrentStockCode()->getCode());
    }    
}
