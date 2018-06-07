<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Traits\Mediable;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="slider")
 * @ORM\Entity()
 */
class SliderImage
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
     * @var Web
     *
     * @ORM\ManyToOne(targetEntity="Web", inversedBy="sliderImages")
     */
    private $web;

    public function __construct()
    {
        $this->type = 'image';
    }

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
     * @return Web
     */
    public function getWeb()
    {
        return $this->web;
    }

    /**
     * @param Web $web
     *
     * @return SliderImage
     */
    public function setWeb($web)
    {
        $this->web = $web;

        return $this;
    }
}
