<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * StockCode
 *
 * @ORM\Table(name="stock_code")
 * @ORM\Entity()
 */
class StockCode
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
     * @var Product
     *
     * @ORM\ManyToOne(targetEntity="Product")
     * @ORM\JoinColumn(nullable=true)
     */
    private $product;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */    
    private $code;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */ 
    private $startIndex;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */ 
    private $endIndex;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $startDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $endDate;

    public function __construct($code)
    {
        $this->code = $code;
        $this->baskets = new ArrayCollection();
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
     * @return int
     */ 
    public function getStartIndex()
    {
        return $this->startIndex;
    }

    /**
     * @param int $startIndex
     *
     * @return self
     */ 
    public function setStartIndex($startIndex)
    {
        $this->startIndex = $startIndex;

        return $this;
    }

    /**
     * @return int
     */ 
    public function getEndIndex()
    {
        return $this->endIndex;
    }

    /**
     * @param int $endIndex
     *
     * @return self
     */ 
    public function setEndIndex($endIndex)
    {
        $this->endIndex = $endIndex;

        return $this;
    }

    /**
     * @return \DateTime
     */ 
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * @param  \DateTime  $startDate
     *
     * @return self
     */ 
    public function setStartDate(\DateTime $startDate)
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * @return  \DateTime
     */ 
    public function getEndDate()
    {
        return $this->endDate;
    }

    /**
     * @param  \DateTime  $endDate
     *
     * @return  self
     */ 
    public function setEndDate(\DateTime $endDate)
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * @return string
     */ 
    public function getCode()
    {
        return $this->code;
    }

    /**
     * @param string $code
     *
     * @return  self
     */ 
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * @return string
     */
    public function getStatus()
    {
        if ($this->getStartIndex() <= 1 && $this->getEndIndex() >= 1) {
            return 'ACTIVE';
        }

        return 'INACTIVE';
    }
}