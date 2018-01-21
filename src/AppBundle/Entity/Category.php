<?php

namespace AppBundle\Entity;

use Cocur\Slugify\Slugify;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="category")
 * @ORM\Entity
 */
class Category
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
     * @var Category
     *
     * @ORM\ManyToOne(targetEntity="Category", inversedBy="children")
     */
    private $parent;

    /**
     * @var Category[]
     *
     * @ORM\OneToMany(targetEntity="Category", mappedBy="parent")
     * @ORM\OrderBy({"name" = "ASC"})
     */
    private $children;

    /**
     * @var Web[]
     *
     * @ORM\ManyToMany(targetEntity="Web")
     * @ORM\JoinTable(name="web_categories",
     *  joinColumns={@ORM\JoinColumn(name="category_id", referencedColumnName="id")},
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
     * @var Product[]
     *
     * @ORM\OneToMany(targetEntity="Product", mappedBy="category")
     * @ORM\OrderBy({"name" = "ASC"})
     */
    private $products;

    /**
     * @var array
     */
    private $filteredProducts;

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->name;
    }

    public function __construct()
    {
        $this->webs = new ArrayCollection();
        $this->products = new ArrayCollection();
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
        $parentPart = '';
        if ($this->getParent()) {
            $parentPart = sprintf('/%s', $this->getParent()->getSlug());
        }

        return sprintf(
            '/productos%s/%d/%s',
            $parentPart,
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
     * @return Category
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
     * @param Category $parent
     *
     * @return Category
     */
    public function setParent(Category $parent)
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Category
     */
    public function getParent()
    {
        return $this->parent;
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
     * @return Category
     */
    public function setWebs($webs)
    {
        $this->webs = $webs;

        return $this;
    }

    /**
     * @return Category[]
     */
    public function getChildren()
    {
        return $this->children;
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

