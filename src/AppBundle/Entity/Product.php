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
     * @ORM\ManyToMany(targetEntity="Web")
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
     * @ORM\ManyToOne(targetEntity="Category", inversedBy="products")
     */    
    private $category;

    /**
     * @var Franchise
     *
     * @ORM\ManyToOne(targetEntity="Franchise", inversedBy="products")
     */
    private $franchise; 

    /**
     * @var Brand
     *
     * @ORM\ManyToOne(targetEntity="Brand", inversedBy="products")
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
     * @ORM\Column(name="width", type="float", nullable=true)
     */      
    private $width;

    /**
     * @var float
     *
     * @ORM\Column(name="height", type="float", nullable=true)
     */  
    private $height;

    /**
     * @var float
     *
     * @ORM\Column(name="length", type="float", nullable=true)
     */  
    private $length;

    /**
     * @var int
     *
     * @ORM\Column(name="spirals", type="integer")
     */
    private $spirals = 1;

    /**
     * @var float
     *
     * @ORM\Column(name="price", type="float")
     */  
    private $price;
    
    /**
     * @var int
     *
     * @ORM\Column(name="stock", type="integer")
     */  
    private $stock;
    
    /**
     * @var float
     *
     * @ORM\Column(name="tax", type="float")
     */     
    private $tax;

    /**
     * @var float
     *
     * @ORM\Column(name="surcharge", type="float")
     */     
    private $surcharge;
    
    /**
     * @ORM\OneToMany(targetEntity="Media", mappedBy="product", cascade={"all"}, orphanRemoval=true)
     */    
    private $mediaItems;

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
     * @return float
     */    
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * @param float
     *
     * @return Product
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
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
}

