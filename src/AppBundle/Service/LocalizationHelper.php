<?php

namespace AppBundle\Service;

use AppBundle\Entity\Address;

class LocalizationHelper
{
    static $aCountries = ['España'];
    static $aRegions = ['La Coruña', 'Lugo', 'Pontevedra', 'Ourense', 'Orense', 'A Coruña', 'Coruña'];
    static $aExcludeRegions = ['Las Palmas', 'Santa Cruz de Tenerife', 'Ceuta', 'Melilla', 'Andorra', 'Islas Baleares'];

    public static function isRegionalAddress(Address $address)
    {
        $regional = false;

        if (self::isNationalAddress($address) && in_array($address->getCity(), self::$aRegions)) {
            $regional = true;
        }

        return $regional;
    }

    public static function isNationalAddress(Address $address)
    {
        $national = false;

        if (in_array($address->getCountry(), self::$aCountries)) {
            $national = true;
        }

        if (!is_null($address->getCity()) && in_array($address->getCity(), self::$aExcludeRegions)) {
            $national = false;
        }

        return $national;
    }

    public static function isNationalIslandsAddress(Address $address)
    {
        $nationalIsland = false;

        if (in_array($address->getCountry(), self::$aCountries) && in_array($address->getCity(), self::$aExcludeRegions)) {
            $nationalIsland = true;
        }

        return $nationalIsland;
    }

    public static function isInternationalAddress(Address $address)
    {
        $international = false;

        if (!in_array($address->getCountry(), self::$aCountries)) {
            $international = true;
        }

        return $international;
    }
}