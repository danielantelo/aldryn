<?php

namespace AppBundle\Service;

use AppBundle\Entity\Address;
use Symfony\Component\Intl\Intl;

class LocalizationHelper
{
    static $aCountries = ['España', 'Espana', 'Espanha', 'Spain'];
    static $aRegions = ['Lugo', 'Pontevedra', 'Ourense', 'Orense', 'Coruña', 'Coruna', 'Vigo'];
    static $aIslandRegions = ['Palmas', 'Tenerife', 'Ceuta', 'Melilla', 'Andorra', 'Baleares'];

    public static function getCountries($language = 'es')
    {
        $countries = Intl::getRegionBundle()->getCountryNames($language);

        return array_combine($countries, $countries);
    }

    public static function isRegionalAddress(Address $address)
    {
        $regional = false;

        foreach (self::$aRegions as $region) {
            if ($region === $address->getCity()) {
                $regional = true;
            } elseif (strpos(strtoupper($address->getCity()), strtoupper($region)) !== false) {
                $regional = true;
            }
        }

        return $regional;
    }

    public static function isNationalAddress(Address $address)
    {
        $national = false;

        if (!self::isRegionalAddress($address) && in_array($address->getCountry(), self::$aCountries)) {
            $national = true;
        }

        return $national;
    }

    public static function isNationalIslandsAddress(Address $address)
    {
        $nationalIsland = false;

        if (self::isNationalAddress($address)) {
            foreach (self::$aIslandRegions as $region) {
                if ($region === $address->getCity()) {
                    $nationalIsland = true;
                } elseif (strpos(strtoupper($address->getCity()), strtoupper($region)) !== false) {
                    $nationalIsland = true;
                }
            }
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