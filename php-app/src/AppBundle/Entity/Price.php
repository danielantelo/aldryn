<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Price
 *
 * @ORM\Table(name="price")
 * @ORM\Entity()
 */
class Price
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var float
     *
     * @ORM\Column(name="price1", type="float")
     */
    private $price1;

    /**
     * @var int
     *
     * @ORM\Column(name="price1QuantityMax", type="integer", nullable=true)
     */
    private $price1QuantityMax;

    /**
     * @var float
     *
     * @ORM\Column(name="price2", type="float", nullable=true)
     */
    private $price2;

    /**
     * @var int
     *
     * @ORM\Column(name="price2QuantityMax", type="integer", nullable=true)
     */
    private $price2QuantityMax;

    /**
     * @var float
     *
     * @ORM\Column(name="price3", type="float", nullable=true)
     */
    private $price3;

    /**
     * @var float
     *
     * @ORM\Column(name="price1Unit", type="float", nullable=true)
     */
    private $price1Unit;

    /**
     * @var float
     *
     * @ORM\Column(name="price2Unit", type="float", nullable=true)
     */
    private $price2Unit;

    /**
     * @var float
     *
     * @ORM\Column(name="price3Unit", type="float", nullable=true)
     */
    private $price3Unit;

    /**
     * @var int
     *
     * @ORM\Column(name="maxPerOrder", type="integer", nullable=true)
     */
    private $maxPerOrder;

    /**
     * @var Product
     *
     * @ORM\ManyToOne(targetEntity="Product", inversedBy="prices")
     */
    private $product;

    /**
     * @ORM\ManyToOne(targetEntity="Web")
     */
    private $web;

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) sprintf('%s %s', $this->web->getName(), $this->getPrice1());
    }

    /**
     * Set price1
     *
     * @param float $price1
     *
     * @return Price
     */
    public function setPrice1($price1)
    {
        $this->price1 = $price1;

        return $this;
    }

    /**
     * Get price1
     *
     * @return float
     */
    public function getPrice1()
    {
        return $this->price1;
    }

    /**
     * Set price1QuantityMax
     *
     * @param integer $price1QuantityMax
     *
     * @return Price
     */
    public function setPrice1QuantityMax($price1QuantityMax)
    {
        $this->price1QuantityMax = $price1QuantityMax;

        return $this;
    }

    /**
     * Get price1QuantityMax
     *
     * @return int
     */
    public function getPrice1QuantityMax()
    {
        return $this->price1QuantityMax;
    }

    /**
     * Set price2
     *
     * @param float $price2
     *
     * @return Price
     */
    public function setPrice2($price2)
    {
        $this->price2 = $price2;

        return $this;
    }

    /**
     * Get price2
     *
     * @return float
     */
    public function getPrice2()
    {
        return $this->price2;
    }

    /**
     * Set price2QuantityMax
     *
     * @param integer $price2QuantityMax
     *
     * @return Price
     */
    public function setPrice2QuantityMax($price2QuantityMax)
    {
        $this->price2QuantityMax = $price2QuantityMax;

        return $this;
    }

    /**
     * Get price2QuantityMax
     *
     * @return int
     */
    public function getPrice2QuantityMax()
    {
        return $this->price2QuantityMax;
    }

    /**
     * Set price3
     *
     * @param float $price3
     *
     * @return Price
     */
    public function setPrice3($price3)
    {
        $this->price3 = $price3;

        return $this;
    }

    /**
     * Get price3
     *
     * @return float
     */
    public function getPrice3()
    {
        return $this->price3;
    }

    /**
     * Set price1Unit
     *
     * @param float $price1Unit
     *
     * @return Price
     */
    public function setPrice1Unit($price1Unit)
    {
        $this->price1Unit = $price1Unit;

        return $this;
    }

    /**
     * Get price1Unit
     *
     * @return float
     */
    public function getPrice1Unit()
    {
        return $this->price1Unit;
    }

    /**
     * Set price2Unit
     *
     * @param float $price2Unit
     *
     * @return Price
     */
    public function setPrice2Unit($price2Unit)
    {
        $this->price2Unit = $price2Unit;

        return $this;
    }

    /**
     * Get price2Unit
     *
     * @return float
     */
    public function getPrice2Unit()
    {
        return $this->price2Unit;
    }

    /**
     * Set price3Unit
     *
     * @param float $price3Unit
     *
     * @return Price
     */
    public function setPrice3Unit($price3Unit)
    {
        $this->price3Unit = $price3Unit;

        return $this;
    }

    /**
     * Get price3Unit
     *
     * @return float
     */
    public function getPrice3Unit()
    {
        return $this->price3Unit;
    }

    /**
     * Set maxPerOrder
     *
     * @param integer $maxPerOrder
     *
     * @return Price
     */
    public function setMaxPerOrder($maxPerOrder)
    {
        $this->maxPerOrder = $maxPerOrder;

        return $this;
    }

    /**
     * Get maxPerOrder
     *
     * @return int
     */
    public function getMaxPerOrder()
    {
        return $this->maxPerOrder;
    }

    /**
     * @return Product
     */
    public function getProduct()
    {
        return $this->product;
    }

    /**
     * @param Product $product
     */
    public function setProduct($product)
    {
        $this->product = $product;
    }

    /**
     * @return mixed
     */
    public function getWeb()
    {
        return $this->web;
    }

    /**
     * @param mixed $web
     */
    public function setWeb($web)
    {
        $this->web = $web;
    }
}

