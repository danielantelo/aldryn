<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Traits\Addressable;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="address")
 * @ORM\Entity
 */
class Address
{
    use Addressable;

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var Client
     *
     * @ORM\ManyToOne(targetEntity="Client", inversedBy="addresses")
     */
    private $client;

    /**
     * @var bool
     *
     * @ORM\Column(name="invoiceable", type="boolean")
     */
    private $invoiceable = false;

    /**
     * {@inheritdoc}
     */
    public function __toString()
    {
        $address = sprintf(
            '%s %s %s %s %s',
            $this->getStreetNumber(),
            $this->getStreetName(),
            $this->getCity(),
            $this->getZipCode(),
            $this->getCountry()
        );
        return $address;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return Client
     */
    public function getClient()
    {
        return $this->client;
    }

    /**
     * @param Client $client
     *
     * @return Address
     */
    public function setClient(Client $client)
    {
        $this->client = $client;

        return $this;
    }

    /**
     * Get the value of invoiceable
     *
     * @return  bool
     */ 
    public function isInvoiceable()
    {
        return $this->invoiceable;
    }

    /**
     * Set the value of invoiceable
     *
     * @param bool $invoiceable
     *
     * @return self
     */ 
    public function setInvoiceable($invoiceable)
    {
        $this->invoiceable = $invoiceable;

        return $this;
    }
}

