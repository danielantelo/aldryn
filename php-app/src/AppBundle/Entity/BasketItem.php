<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * BasketItem
 *
 * @ORM\Table(name="basket_item")
 * @ORM\Entity()
 */
class BasketItem
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
     * @var Basket
     *
     * @ORM\ManyToOne(targetEntity="Basket", inversedBy="basketItems")
     * @ORM\JoinColumn(nullable=false)
     */
    private $basket;

    /**
     * @var Product
     *
     * @ORM\ManyToOne(targetEntity="Product")
     * @ORM\JoinColumn(nullable=false)
     */
    private $product;

    /**
     * @var Price
     *
     * @ORM\ManyToOne(targetEntity="Price")
     * @ORM\JoinColumn(nullable=false)
     */
    private $price;

    /**
     * @var string
     *
     * @ORM\Column(name="productName", type="string", length=255)
     */
    private $productName;

    /**
     * @var string
     *
     * @ORM\Column(name="details", type="string", length=255, nullable=true)
     */
    private $details;

    /**
     * @var float
     *
     * @ORM\Column(name="pricePerUnit", type="decimal", scale=3)
     */
    private $pricePerUnit;

    /**
     * @var int
     *
     * @ORM\Column(name="quantity", type="integer")
     */
    private $quantity;

    /**
     * @var float
     *
     * @ORM\Column(name="subTotal", type="decimal", scale=3)
     */
    private $subTotal;

    /**
     * @var float
     *
     * @ORM\Column(name="taxPercentage", type="decimal", scale=3)
     */
    private $taxPercentage;

    /**
     * @var float
     *
     * @ORM\Column(name="taxSurchargePercentage", type="decimal", scale=3)
     */
    private $taxSurchargePercentage;

    /**
     * @var float
     *
     * @ORM\Column(name="tax", type="decimal", scale=3)
     */
    private $tax;

    /**
     * @var float
     *
     * @ORM\Column(name="taxSurcharge", type="string", length=255)
     */
    private $taxSurcharge;

    /**
     * @var float
     *
     * @ORM\Column(name="total", type="decimal", scale=3)
     */
    private $total;

    /**
     * @var float
     *
     * @ORM\Column(name="weight", type="decimal", scale=3)
     */
    private $weight;

    /**
     * @var int
     *
     * @ORM\Column(name="size", type="integer")
     */
    private $size;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="addedToBasketDate", type="datetime")
     */
    private $addedToBasketDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="lastModificationDate", type="datetime")
     */
    private $lastModificationDate;

    /**
     * @param int $quantity
     * @param Product|null $product
     * @param Price|null $price
     * @param Basket|null $basket
     */
    public function __construct($quantity = null, Product $product = null, Price $price = null, Basket $basket = null)
    {
        if ($product) {
            $this->setProduct($product);
            $this->setProductName($product->getName());
            $this->setAddedToBasketDate(new \DateTime());
            if ($product->getStock() < $quantity) {
                $quantity = $product->getStock();
            }
        }

        if ($basket) {
            $this->setBasket($basket);
        }
        
        if ($price) {
            if ($price->getMaxPerOrder() > 0 && $quantity > $price->getMaxPerOrder()) {
                $quantity = $price->getMaxPerOrder();
            }

            $this->setPrice($price);
            $priceForQuantity = $price->getPrice1();
            if ($price->getPrice1QuantityMax() > 0 && $quantity > $price->getPrice1QuantityMax()) {
                $priceForQuantity = $price->getPrice2();
            }
            if ($price->getPrice2QuantityMax() > 0  && $quantity > $price->getPrice2QuantityMax()) {
                $priceForQuantity = $price->getPrice3();
            }
    
            $this->setPricePerUnit($priceForQuantity);
            $this->setQuantity($quantity);
            $this->setWeight($quantity * $product->getWeight());
            $this->setSize($quantity * $product->getSize());
            $this->setTaxPercentage($product->getTax());
            $this->setTaxSurchargePercentage($product->getSurcharge());
    
            $subtotal = $priceForQuantity * $quantity;
            $this->setSubTotal($subtotal);
    
            // @TODO tax exemption
            $tax = ($product->getTax()/100) * $subtotal;
            $this->setTax($tax);
            $surcharge = ($product->getSurcharge()/100) * $subtotal;
            $this->setTaxSurcharge($surcharge);
    
            $total = $subtotal + $tax + $surcharge;
            $this->setTotal($total);              
        }
    }

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
     * Set productName
     *
     * @param string $productName
     *
     * @return BasketItem
     */
    public function setProductName($productName)
    {
        $this->productName = $productName;

        return $this;
    }

    /**
     * Get productName
     *
     * @return string
     */
    public function getProductName()
    {
        return $this->productName;
    }

    /**
     * Set details
     *
     * @param string $details
     *
     * @return BasketItem
     */
    public function setDetails($details)
    {
        $this->details = $details;

        return $this;
    }

    /**
     * Get details
     *
     * @return string
     */
    public function getDetails()
    {
        return $this->details;
    }

    /**
     * Set pricePerUnit
     *
     * @param float $pricePerUnit
     *
     * @return BasketItem
     */
    public function setPricePerUnit($pricePerUnit)
    {
        $this->pricePerUnit = $pricePerUnit;

        return $this;
    }

    /**
     * Get pricePerUnit
     *
     * @return float
     */
    public function getPricePerUnit()
    {
        return $this->pricePerUnit;
    }

    /**
     * Set quantity
     *
     * @param integer $quantity
     *
     * @return BasketItem
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get quantity
     *
     * @return int
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Set subTotal
     *
     * @param float $subTotal
     *
     * @return BasketItem
     */
    public function setSubTotal($subTotal)
    {
        $this->subTotal = $subTotal;

        return $this;
    }

    /**
     * Get subTotal
     *
     * @return float
     */
    public function getSubTotal()
    {
        return $this->subTotal;
    }

    /**
     * Set taxPercentage
     *
     * @param float $taxPercentage
     *
     * @return BasketItem
     */
    public function setTaxPercentage($taxPercentage)
    {
        $this->taxPercentage = $taxPercentage;

        return $this;
    }

    /**
     * Get taxPercentage
     *
     * @return float
     */
    public function getTaxPercentage()
    {
        return $this->taxPercentage;
    }

    /**
     * Set taxSurchargePercentage
     *
     * @param float $taxSurchargePercentage
     *
     * @return BasketItem
     */
    public function setTaxSurchargePercentage($taxSurchargePercentage)
    {
        $this->taxSurchargePercentage = $taxSurchargePercentage;

        return $this;
    }

    /**
     * Get taxSurchargePercentage
     *
     * @return float
     */
    public function getTaxSurchargePercentage()
    {
        return $this->taxSurchargePercentage;
    }

    /**
     * Set tax
     *
     * @param float $tax
     *
     * @return BasketItem
     */
    public function setTax($tax)
    {
        $this->tax = $tax;

        return $this;
    }

    /**
     * Get tax
     *
     * @return float
     */
    public function getTax()
    {
        return $this->tax;
    }

    /**
     * Set taxSurcharge
     *
     * @param string $taxSurcharge
     *
     * @return BasketItem
     */
    public function setTaxSurcharge($taxSurcharge)
    {
        $this->taxSurcharge = $taxSurcharge;

        return $this;
    }

    /**
     * Get taxSurcharge
     *
     * @return float
     */
    public function getTaxSurcharge()
    {
        return $this->taxSurcharge;
    }

    /**
     * Set total
     *
     * @param float $total
     *
     * @return BasketItem
     */
    public function setTotal($total)
    {
        $this->total = $total;

        return $this;
    }

    /**
     * Get total
     *
     * @return float
     */
    public function getTotal()
    {
        return $this->total;
    }

    /**
     * Set weight
     *
     * @param float $weight
     *
     * @return BasketItem
     */
    public function setWeight($weight)
    {
        $this->weight = $weight;

        return $this;
    }

    /**
     * Get weight
     *
     * @return float
     */
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * Set size
     *
     * @param integer $size
     *
     * @return BasketItem
     */
    public function setSize($size)
    {
        $this->size = $size;

        return $this;
    }

    /**
     * Get size
     *
     * @return int
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Set addedToBasketDate
     *
     * @param \DateTime $addedToBasketDate
     *
     * @return BasketItem
     */
    public function setAddedToBasketDate($addedToBasketDate)
    {
        $this->addedToBasketDate = $addedToBasketDate;

        return $this;
    }

    /**
     * Get addedToBasketDate
     *
     * @return \DateTime
     */
    public function getAddedToBasketDate()
    {
        return $this->addedToBasketDate;
    }

    /**
     * Set lastModificationDate
     *
     * @param \DateTime $lastModificationDate
     *
     * @return BasketItem
     */
    public function setLastModificationDate($lastModificationDate)
    {
        $this->lastModificationDate = $lastModificationDate;

        return $this;
    }

    /**
     * Get lastModificationDate
     *
     * @return \DateTime
     */
    public function getLastModificationDate()
    {
        return $this->lastModificationDate;
    }

    /**
     * @return Basket
     */
    public function getBasket()
    {
        return $this->basket;
    }

    /**
     * @param Basket $basket
     *
     * @return BasketItem
     */
    public function setBasket($basket)
    {
        $this->basket = $basket;

        return $this;
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
     *
     * @return BasketItem
     */
    public function setProduct($product)
    {
        $this->product = $product;

        return $this;
    }

    /**
     * @return Price
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * @param Price $price
     *
     * @return BasketItem
     */
    public function setPrice(Price $price)
    {
        $this->price = $price;

        return $this;
    }
}

