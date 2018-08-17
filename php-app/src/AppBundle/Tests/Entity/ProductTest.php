<?php

namespace AppBundle\Tests\Entity;

use AppBundle\Entity\Product;
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
        $this->assertEquals([
            [
                'code' => 'A0002',
                'startsAt' => 6,
                'endsAt' => 15
            ]
        ], $product->getStockCodes());
        $this->assertEquals(null, $product->getCurrentStockCode());

        // add more stock
        $product->addStock(10, 'A0004');
        $this->assertEquals(25, $product->getStock());
        $this->assertEquals([
            [
                'code' => 'A0002',
                'startsAt' => 6,
                'endsAt' => 15
            ],
            [
                'code' => 'A0004',
                'startsAt' => 16,
                'endsAt' => 25
            ]
        ], $product->getStockCodes());
        $this->assertEquals(null, $product->getCurrentStockCode());

        // remove some stock
        $this->assertEquals([], $product->removeStock(3));
        $this->assertEquals(22, $product->getStock());
        $this->assertEquals([
            [
                'code' => 'A0002',
                'startsAt' => 3,
                'endsAt' => 12
            ],
            [
                'code' => 'A0004',
                'startsAt' => 13,
                'endsAt' => 22
            ]
        ], $product->getStockCodes());
        $this->assertEquals(null, $product->getCurrentStockCode());

        // remove more stock
        $this->assertEquals(['A0002'], $product->removeStock(5));
        $this->assertEquals(17, $product->getStock());
        $this->assertEquals([
            [
                'code' => 'A0002',
                'startsAt' => -2,
                'endsAt' => 7
            ],
            [
                'code' => 'A0004',
                'startsAt' => 8,
                'endsAt' => 17
            ]
        ], $product->getStockCodes());
        $this->assertEquals('A0002', $product->getCurrentStockCode());

        // remove more stock
        $this->assertEquals(['A0002', 'A0004'], $product->removeStock(9));
        $this->assertEquals(8, $product->getStock());
        $this->assertEquals([
            [
                'code' => 'A0004',
                'startsAt' => -1,
                'endsAt' => 8
            ]
        ], $product->getStockCodes());
        $this->assertEquals('A0004', $product->getCurrentStockCode());

        // remove all stock
        $this->assertEquals(['A0004'], $product->removeStock(8));
        $this->assertEquals(0, $product->getStock());
        $this->assertEquals([], $product->getStockCodes());
        $this->assertEquals(null, $product->getCurrentStockCode());

        // add new stock
        $product->addStock(10, 'A0010');
        $this->assertEquals(10, $product->getStock());
        $this->assertEquals([
            [
                'code' => 'A0010',
                'startsAt' => 1,
                'endsAt' => 10
            ]
        ], $product->getStockCodes());
        $this->assertEquals('A0010', $product->getCurrentStockCode());
    }
}
