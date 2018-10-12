<?php

namespace AppBundle\Tests\Service;

use AppBundle\Service\LocalizationHelper;
use AppBundle\Tests\BaseEcommerceTest;
use AppBundle\Entity\Address;

class LocalizationHelperTest extends BaseEcommerceTest
{
    public function testIsRegionalAddress()
    {
        $this->assertTrue(LocalizationHelper::isRegionalAddress($this->getMockAddressRegional()));
        $this->assertFalse(LocalizationHelper::isRegionalAddress($this->getMockAddressNational()));
        $this->assertFalse(LocalizationHelper::isRegionalAddress($this->getMockAddressIslands()));
        $this->assertFalse(LocalizationHelper::isRegionalAddress($this->getMockAddressInternational()));
    }

    public function testIsNationalIslandsAddress()
    {
        $this->assertFalse(LocalizationHelper::isNationalIslandsAddress($this->getMockAddressRegional()));
        $this->assertFalse(LocalizationHelper::isNationalIslandsAddress($this->getMockAddressNational()));
        $this->assertTrue(LocalizationHelper::isNationalIslandsAddress($this->getMockAddressIslands()));
        $this->assertFalse(LocalizationHelper::isNationalIslandsAddress($this->getMockAddressInternational()));
    }

    public function testIsNationalAddress()
    {
        $this->assertFalse(LocalizationHelper::isNationalAddress($this->getMockAddressRegional()));
        $this->assertTrue(LocalizationHelper::isNationalAddress($this->getMockAddressNational()));
        $this->assertFalse(LocalizationHelper::isNationalAddress($this->getMockAddressIslands()));
        $this->assertFalse(LocalizationHelper::isNationalAddress($this->getMockAddressInternational()));
    }

    public function testIsInternationalAddress()
    {
        $this->assertFalse(LocalizationHelper::isInternationalAddress($this->getMockAddressRegional()));
        $this->assertFalse(LocalizationHelper::isInternationalAddress($this->getMockAddressNational()));
        $this->assertFalse(LocalizationHelper::isInternationalAddress($this->getMockAddressIslands()));
        $this->assertTrue(LocalizationHelper::isInternationalAddress($this->getMockAddressInternational()));
    }

    public function testBug()
    {
        $address = new Address();
        $address
            ->setStreetNumber('C/ La unión 32, bajos')
            ->setStreetName('Andorra')
            ->setCity('Teruel')
            ->setZipCode('44500')
            ->setCountry('España')
            ->setTelephone('647970833')
        ;

        $this->assertFalse(LocalizationHelper::isNationalIslandsAddress($address));
        $this->assertTrue(LocalizationHelper::isNationalAddress($address));
    }    
}
