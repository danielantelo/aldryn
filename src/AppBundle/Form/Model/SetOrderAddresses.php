<?php

namespace AppBundle\Form\Model;

use Symfony\Component\Validator\Constraints as Assert;
use AppBundle\Entity\Address;

class SetOrderAddresses
{
    /**
     * @var Address
     * @Assert\NotNull()
     */
    protected $deliveryAddress;

    /**
     * @var Address
     * @Assert\NotNull()
     */
    protected $invoiceAddress;

    /**
     * @return string
     */
    public function getDeliveryAddress()
    {
        return $this->deliveryAddress;
    }

    /**
     * @param Address $deliveryAddress
     */
    public function setDeliveryAddress(Address $deliveryAddress)
    {
        $this->deliveryAddress = $deliveryAddress;
    }

    /**
     * @return Address
     */
    public function getInvoiceAddress()
    {
        return $this->invoiceAddress;
    }

    /**
     * @param Address $invoiceAddress
     */
    public function setInvoiceAddress(Address $invoiceAddress)
    {
        $this->invoiceAddress = $invoiceAddress;
    }
}
