<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Traits\Mediable;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="media")
 * @ORM\Entity
 */
class Media
{
    use Mediable;

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var bool
     *
     * @ORM\Column(name="flag", type="boolean")
     */
    private $flag = false;

    /**
     * @var Product
     *
     * @ORM\ManyToOne(targetEntity="Product", inversedBy="mediaItems")
     */
    private $product;

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->title;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param boolean $flag
     *
     * @return Media
     */
    public function setFlag($flag)
    {
        $this->flag = $flag;

        return $this;
    }

    /**
     * @return bool
     */
    public function isFlag()
    {
        return $this->flag;
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
     * @return Media
     */
    public function setProduct(Product $product)
    {
        $this->product = $product;

        return $this;
    }
}
