<?php

namespace AppBundle\Entity;

use Cocur\Slugify\Slugify;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="brand")
 * @ORM\Entity
 */
class Brand
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
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="logo", type="text", nullable=true)
     */
    private $logo;

    /**
     * @var Web[]
     *
     * @ORM\ManyToMany(targetEntity="Web", inversedBy="brands")
     * @ORM\JoinTable(name="web_brands",
     *  joinColumns={@ORM\JoinColumn(name="brand_id", referencedColumnName="id")},
     *  inverseJoinColumns={@ORM\JoinColumn(name="web_id", referencedColumnName="id")}
     * )
     */
    private $webs;

    /**
     * @var Product[]
     *
     * @ORM\OneToMany(targetEntity="Product", mappedBy="brand")
     * @ORM\OrderBy({"name" = "ASC"})
     */
    private $products;

    /**
     * @var array
     */
    private $filteredProducts;

    public function __construct()
    {
        $this->webs = new ArrayCollection();
        $this->products = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->name;
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
            '/marca/%d/%s',
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
     * @return Brand
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
     * @return Brand
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
     * @param string $logo
     *
     * @return Brand
     */
    public function setLogo($logo)
    {
        $this->logo = $logo;

        return $this;
    }

    /**
     * @return string
     */
    public function getLogo()
    {
        return $this->logo;
    }

    /**
     * @return Web[]
     */
    public function getWebs()
    {
        return $this->webs;
    }

    /**
     * @param ArrayCollection $webs
     *
     * @return Brand
     */
    public function setWebs($webs)
    {
        $this->webs = $webs;

        return $this;
    }

    /**
     * @param Web|null $web
     *
     * @return Product[]|ArrayCollection
     */
    public function getProducts(Web $web = null)
    {
        if (!$web) {
            return $this->products;
        }

        if (!$this->filteredProducts[$web->getName()]) {
            $this->filteredProducts[$web->getName()] = array_filter(
                $this->products->toArray(),
                function ($prod) use($web) {
                    return in_array($web, $prod->getWebs()->toArray());
                }
            );
        }

        return $this->filteredProducts[$web->getName()];
    }
}

