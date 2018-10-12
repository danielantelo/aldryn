<?php

namespace AppBundle\Service;

use AppBundle\Entity\Address;
use Symfony\Component\Intl\Intl;

class LocalizationHelper
{
    static $aCountries = ['España', 'Espana', 'Espanha', 'Spain'];
    static $aRegions = ['Lugo', 'Pontevedra', 'Ourense', 'Orense', 'Coruña', 'Coruna', 'Vigo'];
    static $aIslandRegions = ['Palmas', 'Tenerife', 'Ceuta', 'Melilla', 'Baleares'];

    public static function getCountries($language = 'es')
    {
        $countries = Intl::getRegionBundle()->getCountryNames($language);

        return array_combine($countries, $countries);
    }

    public static function isRegionalAddress(Address $address)
    {
        $regional = false;

        foreach (self::$aRegions as $region) {
            if (
                strpos(strtoupper($address->getFormattedAddress()), strtoupper($region)) !== false
                && in_array($address->getCountry(), self::$aCountries)
            ) {
                $regional = true;
            }
        }

        return $regional;
    }

    public static function isNationalIslandsAddress(Address $address)
    {
        $nationalIsland = false;

        foreach (self::$aIslandRegions as $region) {
            if (
                strpos(strtoupper($address->getFormattedAddress()), strtoupper($region)) !== false
                && in_array($address->getCountry(), self::$aCountries)
            ) {
                $nationalIsland = true;
            }
        }

        return $nationalIsland;
    }

    public static function isNationalAddress(Address $address)
    {
        $national = false;

        // we don't want to detect regional or island addresses as national on purpose
        if (!self::isNationalIslandsAddress($address)
            && !self::isRegionalAddress($address)
            && in_array($address->getCountry(), self::$aCountries)
        ) {
            $national = true;
        }

        return $national;
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