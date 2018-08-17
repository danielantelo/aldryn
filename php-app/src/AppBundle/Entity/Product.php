<?php

namespace AppBundle\Entity;

use Cocur\Slugify\Slugify;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="product")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProductRepository")
 */
class Product
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
     * @ORM\ManyToMany(targetEntity="Web", cascade={"all"})
     * @ORM\OrderBy({"name" = "ASC"})
     * @ORM\JoinTable(name="web_products",
     *  joinColumns={@ORM\JoinColumn(name="product_id", referencedColumnName="id")},
     *  inverseJoinColumns={@ORM\JoinColumn(name="web_id", referencedColumnName="id")}
     * )
     */
    private $webs;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="short_description", type="string", length=255)
     */
    private $shortDescription;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    private $description;

    /**
     * @var bool
     *
     * @ORM\Column(name="active", type="boolean")
     */
    private $active = true;  

    /**
     * @var Category
     *
     * @ORM\ManyToOne(targetEntity="Category", inversedBy="products", cascade={"all"})
     * @ORM\OrderBy({"name" = "ASC"})
     */    
    private $category;

    /**
     * @var Franchise
     *
     * @ORM\ManyToOne(targetEntity="Franchise", inversedBy="products", cascade={"all"})
     * @ORM\OrderBy({"name" = "ASC"})
     */
    private $franchise; 

    /**
     * @var Brand
     *
     * @ORM\ManyToOne(targetEntity="Brand", inversedBy="products", cascade={"all"})
     * @ORM\OrderBy({"name" = "ASC"})
     */    
    private $brand;
    
    /**
     * @var int
     *
     * @ORM\Column(name="weight", type="integer", nullable=true)
     */    
    private $weight;

    /**
     * @var float
     *
     * @ORM\Column(name="width", type="decimal", nullable=true)
     */      
    private $width;

    /**
     * @var float
     *
     * @ORM\Column(name="height", type="decimal", nullable=true)
     */  
    private $height;

    /**
     * @var float
     *
     * @ORM\Column(name="length", type="decimal", nullable=true)
     */  
    private $length;

    /**
     * @var int
     *
     * @ORM\Column(name="spirals", type="integer")
     */
    private $spirals = 1;
    
    /**
     * @var int
     *
     * @ORM\Column(name="stock", type="integer")
     */  
    private $stock;
    
    /**
     * @var float
     *
     * @ORM\Column(name="tax", type="decimal", scale=2)
     */     
    private $tax;

    /**
     * @var float
     *
     * @ORM\Column(name="surcharge", type="decimal", scale=2)
     */     
    private $surcharge;
    
    /**
     * @ORM\OneToMany(targetEntity="Media", mappedBy="product", cascade={"all"}, orphanRemoval=true)
     */    
    private $mediaItems;

    /**
     * @var Price[]
     *
     * @ORM\OneToMany(targetEntity="Price", mappedBy="product", cascade={"all"}, orphanRemoval=true)
     */
    private $prices;

    /**
     * @var bool
     *
     * @ORM\Column(name="highlight", type="boolean")
     */
    private $highlight;

    /**
     * @var array
     * 
     * @ORM\Column(name="stockCodes", type="array")
     */
    private $stockCodes = [];

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->name;
    }
    
    public function __construct()
    {
        $this->mediaItems = new ArrayCollection();
        $this->webs = new ArrayCollection();
        $this->prices = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function getSlug()
    {
        $slugify = new Slugify();
        return $slugify->slugify($this->name);
    }

    /**
     * @return string
     */
    public function getUrl()
    {
        return sprintf(
            '/productos/%d/%s',
            $this->getId(),
            $this->getSlug()
        );
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param string $name
     *
     * @return Product
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $description
     *
     * @return Product
     */
    public function setShortDescription($description)
    {
        $this->shortDescription = $description;

        return $this;
    }

    /**
     * @return string
     */
    public function getShortDescription()
    {
        return $this->shortDescription;
    }

    /**
     * @param string $description
     *
     * @return Product
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return bool
     */
    public function isActive()
    {
        return $this->active;
    }

    /**
     * @param bool $active
     *
     * @return Product
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }
    
    /**
     * @return Category
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * @var Category $category
     *
     * @return Product
     */
    public function setCategory(Category $category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Franchise
     */
    public function getFranchise()
    {
        return $this->franchise;
    }

    /**
     * @param Franchise $franchise
     *
     * @return Product
     */
    public function setFranchise(Franchise $franchise = null)
    {
        $this->franchise = $franchise;

        return $this;
    }

    /**
     * @return Brand
     */
    public function getBrand()
    {
        return $this->brand;
    }

    /**
     * @param Brand $brand
     *
     * @return Product
     */
    public function setBrand(Brand $brand)
    {
        $this->brand = $brand;

        return $this;
    }

    /**
     * @return ArrayCollection
     */
    public function getWebs()
    {
        return $this->webs;
    }

    /**
     * @param ArrayCollection $webs
     *
     * @return Product
     */
    public function setWebs($webs)
    {
        $this->webs = $webs;

        return $this;
    }

    /**
     * @return ArrayCollection
     */
    public function getMediaItems()
    {
        return $this->mediaItems;
    }

    /**
     * @param ArrayCollection $mediaItems
     *
     * @return Product
     */
    public function setMediaItems($mediaItems)
    {
        foreach ($mediaItems as $item) {
            $this->addMediaItem($item);
        }

        return $this;
    }
    
    /**
     * @param Media $media
     *
     * @return Product
     */
    public function addMediaItem(Media $media)
    {
        $media->setProduct($this);
        $this->mediaItems->add($media);

        return $this;
    }

    /**
     * @param Media $media
     * 
     * @return Product
     */
    public function removeMediaItem(Media $media)
    {
        $this->mediaItems->removeElement($media);

        return $this;
    }    
    
    /**
     * @return int
     */    
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * @param int
     *
     * @return Product
     */
    public function setWeight($weight)
    {
        $this->weight = $weight;

        return $this;
    }

    /**
     * @return float
     */    
    public function getWidth()
    {
        return $this->width;
    }

    /**
     * @param float
     *
     * @return Product
     */
    public function setWidth($width)
    {
        $this->width = $width;

        return $this;
    }
    
    /**
     * @return float
     */    
    public function getHeight()
    {
        return $this->height;
    }

    /**
     * @param float
     *
     * @return Product
     */
    public function setHeight($height)
    {
        $this->height = $height;

        return $this;
    } 
    
    /**
     * @return float
     */    
    public function getLength()
    {
        return $this->length;
    }

    /**
     * @param float
     *
     * @return Product
     */
    public function setLength($length)
    {
        $this->length = $length;

        return $this;
    }
    
    /**
     * @return float
     */      
    public function getSize()
    {
        return $this->width * $this->height * $this->length;
    }
    
    /**
     * @return int
     */    
    public function getStock()
    {
        return $this->stock;
    }

    /**
     * @param int
     *
     * @return Product
     */
    public function setStock($stock)
    {
        $this->stock = $stock;

        return $this;
    }
    
    /**
     * @return float
     */    
    public function getTax()
    {
        return $this->tax;
    }

    /**
     * @param float
     *
     * @return Product
     */
    public function setTax($tax)
    {
        $this->tax = $tax;

        return $this;
    }
    
    /**
     * @return float
     */    
    public function getSurcharge()
    {
        return $this->surcharge;
    }

    /**
     * @param float
     *
     * @return Product
     */
    public function setSurcharge($surcharge)
    {
        $this->surcharge = $surcharge;

        return $this;
    }

    /**
     * @param string $type
     *
     * @return array
     */
    public function getMedia($type = 'image')
    {
        $items = [];

        foreach ($this->mediaItems as $item) {
            if ($item->getType() == $type) {
                $items[] = $item;
            }
        }

        return $items;
    }

    /**
     * @return array
     */
    public function getImages()
    {
        return $this->getMedia('image');
    }

    /**
     * @return array
     */
    public function getVideos()
    {
        return $this->getMedia('video');
    }

    /**
     * @return array
     */
    public function getDocuments()
    {
        return $this->getMedia('doc');
    }    

    /**
     * @return int
     */
    public function getSpirals()
    {
        return $this->spirals;
    }

    /**
     * @param int $spirals
     */
    public function setSpirals($spirals)
    {
        $this->spirals = $spirals;
    }

    /**
     * @return ArrayCollection|Price[]
     */
    public function getPrices()
    {
        return $this->prices;
    }

    /**
     * @param Web $web
     *
     * @return Price
     */
    public function getPrice(Web $web)
    {
        foreach ($this->prices as $price) {
            if ($price->getWeb()->getId() == $web->getId()) {
                return $price;
            }
        }
    }

    /**
     * @param ArrayCollection $prices
     *
     * @return Product
     */
    public function setPrices($prices)
    {
        foreach ($prices as $price) {
            $this->addPrice($price);
        }

        return $this;
    }

    /**
     * @param Price $price
     *
     * @return Product
     */
    public function addPrice(Price $price)
    {
        $price->setProduct($this);
        $this->prices->add($price);

        return $this;
    }

    /**
     * @param Price $price
     *
     * @return Product
     */
    public function removePrice(Price $price)
    {
        $this->prices->removeElement($price);

        return $this;
    }

    /**
     * @return bool
     */
    public function isHighlight()
    {
        return $this->highlight;
    }

    /**
     * @param bool $highlight
     *
     * @return Product
     */
    public function setHighlight($highlight)
    {
        $this->highlight = $highlight;

        return $this;
    }

    /**
     * @param int $amount
     *
     * @return Product
     */
    public function addStock($amount, $lotCode)
    {
        $currentStock = $this->stock;
        $newStock = $this->stock + $amount;
        $stockCodes = $this->getStockCodes();
        $stockCodes[] = [
            'code' => $lotCode,
            'startsAt' => $currentStock + 1,
            'endsAt' => $newStock
        ];
        $this->setStock($newStock);
        $this->setStockCodes($stockCodes);

        return $this;
    }

    /**
     * @param int $amount
     * 
     * @return array
     */
    public function removeStock($amount)
    {
        $stockCodesUsed = [];
        if ($this->getCurrentStockCode()) {
            $stockCodesUsed[] = $this->getCurrentStockCode();
        }

        $currentStock = $this->stock;
        $newStock = $this->stock - $amount;
        $currentStockCodes = $this->getStockCodes();
        $newStockCodes = [];
        foreach ($currentStockCodes as $stockCode) {
            $stockCode['startsAt'] = $stockCode['startsAt'] - $amount;
            $stockCode['endsAt'] = $stockCode['endsAt'] - $amount;
            if ($stockCode['endsAt'] > 0) {
                $newStockCodes[] = $stockCode;
            }
        }

        $this->setStock($newStock);
        $this->setStockCodes($newStockCodes);

        $latestCodeUsed = $this->getCurrentStockCode();
        if ($latestCodeUsed && !in_array($latestCodeUsed, $stockCodesUsed)) {
            $stockCodesUsed[] = $this->getCurrentStockCode();
        }

        return $stockCodesUsed;
    }

    /**
     * @return string
     */
    public function getCurrentStockCode()
    {
        if (!count($this->getStockCodes())) {
            return null;
        }

        $oldestStockEntry = $this->getStockCodes()[0];
        if ($oldestStockEntry['startsAt'] <= 1) {
            return $oldestStockEntry['code'];
        }
    }

    /**
     * @return array
     */ 
    public function getStockCodes()
    {
        return $this->stockCodes;
    }

    /**
     * @param array $stockCodes
     *
     * @return self
     */ 
    public function setStockCodes($stockCodes)
    {
        $this->stockCodes = $stockCodes;

        return $this;
    }
}

