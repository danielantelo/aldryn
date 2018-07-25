<?php

namespace AppBundle\Form\Model;

use Symfony\Component\Validator\Constraints as Assert;
use AppBundle\Entity\Address;

class SetOrderAddresses
{
    /**
     * @var Address
     */
    protected $deliveryAddress;

    /**
     * @var Address
     */
    protected $invoiceAddress;

    /**
     * @var Address
     */
    protected $customDeliveryAddress;

    /**
     * @return Address
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

        return $this;
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

        return $this;
    }

    /**
     * @return  Address
     */ 
    public function getCustomDeliveryAddress()
    {
        return $this->customDeliveryAddress;
    }

    /**
     * @param  Address  $customDeliveryAddress
     *
     * @return  self
     */ 
    public function setCustomDeliveryAddress(Address $customDeliveryAddress)
    {
        $this->customDeliveryAddress = $customDeliveryAddress;

        return $this;
    }
}
