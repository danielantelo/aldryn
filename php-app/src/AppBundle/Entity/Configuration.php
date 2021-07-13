<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="configuration")
 * @ORM\Entity
 */
class Configuration
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
     * @var Web
     *
     * @ORM\OneToOne(targetEntity="Web", inversedBy="configuration")
     */
    private $web;

    /**
     * @var boolean
     *
     * @ORM\Column(name="require_login_for_prices", type="boolean")
     */
    private $requireLoginForPrices = false;

    /**
     * @var int
     *
     * @ORM\Column(name="stock_alert_quantity", type="integer")
     */
    private $stockAlertQuantity;

    /**
     * @var string
     *
     * @ORM\Column(name="stock_alert_email", type="string", length=255)
     */
    private $stockAlertEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="order_notification_email", type="string", length=255)
     */
    private $orderNotificationEmail;

    /**
     * @var float
     *
     * @ORM\Column(name="min_spend_regional", type="decimal", scale=2)
     */
    private $minSpendRegional;

    /**
     * @var float
     *
     * @ORM\Column(name="min_spend_islands", type="decimal", scale=2)
     */
    private $minSpendIslands;

    /**
     * @var float
     *
     * @ORM\Column(name="min_spend_national", type="decimal", scale=2)
     */
    private $minSpendNational;

    /**
     * @var float
     *
     * @ORM\Column(name="min_spend_international", type="decimal", scale=2)
     */
    private $minSpendInternational;

    /**
     * @var string
     *
     * @ORM\Column(name="delivery_type", type="string", length=255)
     */
    private $deliveryType;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_tax", type="decimal", scale=2)
     */
    private $deliveryTax;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_tax_surcharge", type="decimal", scale=2)
     */
    private $deliveryTaxSurcharge;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_regional", type="decimal", scale=2)
     */
    private $deliveryRegional;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_national", type="decimal", scale=2))
     */
    private $deliveryNational;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_international", type="decimal", scale=2))
     */
    private $deliveryInternational;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_islands", type="decimal", scale=2))
     */
    private $deliveryIslands;

    /**
     * @var float
     *
     * @ORM\Column(name="free_delivery_regional_limit", type="decimal", scale=2))
     */
    private $freeDeliveryRegionalLimit;

    /**
     * @var float
     *
     * @ORM\Column(name="free_delivery_islands_limit", type="decimal", scale=2))
     */
    private $freeDeliveryIslandsLimit;

    /**
     * @var float
     *
     * @ORM\Column(name="free_delivery_national_limit", type="decimal", scale=2))
     */
    private $freeDeliveryNationalLimit;

    /**
     * @var float
     *
     * @ORM\Column(name="free_delivery_international_limit", type="decimal", scale=2))
     */
    private $freeDeliveryInternationalLimit;

    /**
     * @var float
     *
     * @ORM\Column(name="free_delivery_regional_volume_limit", type="integer"))
     */
    private $freeDeliveryRegionalVolumeLimit;

    /**
     * @var float
     *
     * @ORM\Column(name="free_delivery_islands_volume_limit", type="integer"))
     */
    private $freeDeliveryIslandsVolumeLimit;

    /**
     * @var float
     *
     * @ORM\Column(name="free_delivery_national_volume_limit", type="integer"))
     */
    private $freeDeliveryNationalVolumeLimit;

    /**
     * @var float
     *
     * @ORM\Column(name="free_delivery_international_volume_limit", type="integer"))
     */
    private $freeDeliveryInternationalVolumeLimit;

    /**
     * @var boolean
     *
     * @ORM\Column(name="international_tax", type="boolean")
     */
    private $internationalTax;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_base_amount", type="decimal", scale=2))
     */
    private $deliveryBaseAmount;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_excess_amount", type="decimal", scale=2))
     */
    private $deliveryExcessAmount;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_excess_multiplier_regional", type="decimal", scale=2))
     */
    private $deliveryExcessMultiplierRegional;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_excess_multiplier_national", type="decimal", scale=2))
     */
    private $deliveryExcessMultiplierNational;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_excess_multiplier_islands", type="decimal", scale=2))
     */
    private $deliveryExcessMultiplierIslands;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery_excess_multiplier_international", type="decimal", scale=2))
     */
    private $deliveryExcessMultiplierInternational;

    /**
     * @var float
     *
     * @ORM\Column(name="islands_price_per_kg", type="decimal", scale=2))
     */
    private $islandsPricePerAdditionalKg;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t1_max", type="decimal", scale=2))
     */
    private $palletT1Max;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t1_regional_cost", type="decimal", scale=2))
     */
    private $palletT1RegionalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t1_islands_cost", type="decimal", scale=2))
     */
    private $palletT1IslandsCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t1_national_cost", type="decimal", scale=2))
     */
    private $palletT1NationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t1_international_cost", type="decimal", scale=2))
     */
    private $palletT1InternationalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t2_max", type="decimal", scale=2))
     */
    private $palletT2Max;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t2_regional_cost", type="decimal", scale=2))
     */
    private $palletT2RegionalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t2_islands_cost", type="decimal", scale=2))
     */
    private $palletT2IslandsCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t2_national_cost", type="decimal", scale=2))
     */
    private $palletT2NationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t2_international_cost", type="decimal", scale=2))
     */
    private $palletT2InternationalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t3_max", type="decimal", scale=2))
     */
    private $palletT3Max;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t3_regional_cost", type="decimal", scale=2))
     */
    private $palletT3RegionalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t3_islands_cost", type="decimal", scale=2))
     */
    private $palletT3IslandsCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t3_national_cost", type="decimal", scale=2))
     */
    private $palletT3NationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t3_international_cost", type="decimal", scale=2))
     */
    private $palletT3InternationalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t4_max", type="decimal", scale=2))
     */
    private $palletT4Max;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t4_regional_cost", type="decimal", scale=2))
     */
    private $palletT4RegionalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t4_islands_cost", type="decimal", scale=2))
     */
    private $palletT4IslandsCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t4_national_cost", type="decimal", scale=2))
     */
    private $palletT4NationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t4_international_cost", type="decimal", scale=2))
     */
    private $palletT4InternationalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t5_max", type="decimal", scale=2))
     */
    private $palletT5Max;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t5_regional_cost", type="decimal", scale=2))
     */
    private $palletT5RegionalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t5_islands_cost", type="decimal", scale=2))
     */
    private $palletT5IslandsCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t5_national_cost", type="decimal", scale=2))
     */
    private $palletT5NationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t5_international_cost", type="decimal", scale=2))
     */
    private $palletT5InternationalCost; 
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t6_max", type="decimal", scale=2))
     */
    private $palletT6Max;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t6_regional_cost", type="decimal", scale=2))
     */
    private $palletT6RegionalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t6_islands_cost", type="decimal", scale=2))
     */
    private $palletT6IslandsCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t6_national_cost", type="decimal", scale=2))
     */
    private $palletT6NationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t6_international_cost", type="decimal", scale=2))
     */
    private $palletT6InternationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t7_max", type="decimal", scale=2))
     */
    private $palletT7Max;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t7_regional_cost", type="decimal", scale=2))
     */
    private $palletT7RegionalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t7_islands_cost", type="decimal", scale=2))
     */
    private $palletT7IslandsCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t7_national_cost", type="decimal", scale=2))
     */
    private $palletT7NationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t7_international_cost", type="decimal", scale=2))
     */
    private $palletT7InternationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t8_max", type="decimal", scale=2))
     */
    private $palletT8Max;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t8_regional_cost", type="decimal", scale=2))
     */
    private $palletT8RegionalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t8_islands_cost", type="decimal", scale=2))
     */
    private $palletT8IslandsCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t8_national_cost", type="decimal", scale=2))
     */
    private $palletT8NationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t8_international_cost", type="decimal", scale=2))
     */
    private $palletT8InternationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t9_max", type="decimal", scale=2))
     */
    private $palletT9Max;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t9_regional_cost", type="decimal", scale=2))
     */
    private $palletT9RegionalCost;

    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t9_islands_cost", type="decimal", scale=2))
     */
    private $palletT9IslandsCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t9_national_cost", type="decimal", scale=2))
     */
    private $palletT9NationalCost;
    
    /**
     * @var float
     *
     * @ORM\Column(name="pallet_t9_international_cost", type="decimal", scale=2))
     */
    private $palletT9InternationalCost;    

    /**
     * @return string
     */
    public function __toString()
    {
        return 'Ecommerce Config';
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set stockAlertQuantity
     *
     * @param integer $stockAlertQuantity
     *
     * @return Configuration
     */
    public function setStockAlertQuantity($stockAlertQuantity)
    {
        $this->stockAlertQuantity = $stockAlertQuantity;

        return $this;
    }

    /**
     * Get stockAlertQuantity
     *
     * @return int
     */
    public function getStockAlertQuantity()
    {
        return $this->stockAlertQuantity;
    }

    /**
     * Set stockAlertEmail
     *
     * @param string $stockAlertEmail
     *
     * @return Configuration
     */
    public function setStockAlertEmail($stockAlertEmail)
    {
        $this->stockAlertEmail = $stockAlertEmail;

        return $this;
    }

    /**
     * Get stockAlertEmail
     *
     * @return string
     */
    public function getStockAlertEmail()
    {
        return $this->stockAlertEmail;
    }

    /**
     * Set orderNotificationEmail
     *
     * @param string $orderNotificationEmail
     *
     * @return Configuration
     */
    public function setOrderNotificationEmail($orderNotificationEmail)
    {
        $this->orderNotificationEmail = $orderNotificationEmail;

        return $this;
    }

    /**
     * Get orderNotificationEmail
     *
     * @return string
     */
    public function getOrderNotificationEmail()
    {
        return $this->orderNotificationEmail;
    }

    /**
     * Set deliveryType
     *
     * @param string $deliveryType
     *
     * @return Configuration
     */
    public function setDeliveryType($deliveryType)
    {
        $this->deliveryType = $deliveryType;

        return $this;
    }

    /**
     * Get deliveryType
     *
     * @return string
     */
    public function getDeliveryType()
    {
        return $this->deliveryType;
    }

    /**
     * Set deliveryTax
     *
     * @param string $deliveryTax
     *
     * @return Configuration
     */
    public function setDeliveryTax($deliveryTax)
    {
        $this->deliveryTax = $deliveryTax;

        return $this;
    }

    /**
     * Get deliveryTax
     *
     * @return string
     */
    public function getDeliveryTax()
    {
        return $this->deliveryTax;
    }

    /**
     * Set deliveryRegional
     *
     * @param string $deliveryRegional
     *
     * @return Configuration
     */
    public function setDeliveryRegional($deliveryRegional)
    {
        $this->deliveryRegional = $deliveryRegional;

        return $this;
    }

    /**
     * Get deliveryRegional
     *
     * @return float
     */
    public function getDeliveryRegional()
    {
        return $this->deliveryRegional;
    }

    /**
     * Set deliveryNational
     *
     * @param string $deliveryNational
     *
     * @return Configuration
     */
    public function setDeliveryNational($deliveryNational)
    {
        $this->deliveryNational = $deliveryNational;

        return $this;
    }

    /**
     * Get deliveryNational
     *
     * @return float
     */
    public function getDeliveryNational()
    {
        return $this->deliveryNational;
    }

    /**
     * Set deliveryInternational
     *
     * @param string $deliveryInternational
     *
     * @return Configuration
     */
    public function setDeliveryInternational($deliveryInternational)
    {
        $this->deliveryInternational = $deliveryInternational;

        return $this;
    }

    /**
     * Get deliveryInternational
     *
     * @return float
     */
    public function getDeliveryInternational()
    {
        return $this->deliveryInternational;
    }

    /**
     * Set deliveryIslands
     *
     * @param string $deliveryIslands
     *
     * @return Configuration
     */
    public function setDeliveryIslands($deliveryIslands)
    {
        $this->deliveryIslands = $deliveryIslands;

        return $this;
    }

    /**
     * Get deliveryIslands
     *
     * @return float
     */
    public function getDeliveryIslands()
    {
        return $this->deliveryIslands;
    }

    /**
     * Set freeDeliveryInternationalLimit
     *
     * @param string $freeDeliveryInternationalLimit
     *
     * @return Configuration
     */
    public function setFreeDeliveryInternationalLimit($freeDeliveryInternationalLimit)
    {
        $this->freeDeliveryInternationalLimit = $freeDeliveryInternationalLimit;

        return $this;
    }

    /**
     * Get freeDeliveryInternationalLimit
     *
     * @return string
     */
    public function getFreeDeliveryInternationalLimit()
    {
        return $this->freeDeliveryInternationalLimit;
    }

    /**
     * @return float
     */
    public function getFreeDeliveryRegionalLimit()
    {
        return $this->freeDeliveryRegionalLimit;
    }

    /**
     * @param float $freeDeliveryRegionalLimit
     *
     * @return Configuration
     */
    public function setFreeDeliveryRegionalLimit($freeDeliveryRegionalLimit)
    {
        $this->freeDeliveryRegionalLimit = $freeDeliveryRegionalLimit;

        return $this;
    }

    /**
     * @return float
     */
    public function getFreeDeliveryIslandsLimit()
    {
        return $this->freeDeliveryIslandsLimit;
    }

    /**
     * @param float $freeDeliveryIslandsLimit
     *
     * @return Configuration
     */
    public function setFreeDeliveryIslandsLimit($freeDeliveryIslandsLimit)
    {
        $this->freeDeliveryIslandsLimit = $freeDeliveryIslandsLimit;

        return $this;
    }

    /**
     * @return float
     */
    public function getFreeDeliveryNationalLimit()
    {
        return $this->freeDeliveryNationalLimit;
    }

    /**
     * @param float $freeDeliveryNationalLimit
     *
     * @return Configuration
     */
    public function setFreeDeliveryNationalLimit($freeDeliveryNationalLimit)
    {
        $this->freeDeliveryNationalLimit = $freeDeliveryNationalLimit;

        return $this;
    }

    /**
     * Set freeDeliveryInternationalVolumeLimit
     *
     * @param string $freeDeliveryInternationalVolumeLimit
     *
     * @return Configuration
     */
    public function setFreeDeliveryInternationalVolumeLimit($freeDeliveryInternationalVolumeLimit)
    {
        $this->freeDeliveryInternationalVolumeLimit = $freeDeliveryInternationalVolumeLimit;

        return $this;
    }

    /**
     * Get freeDeliveryInternationalVolumeLimit
     *
     * @return string
     */
    public function getFreeDeliveryInternationalVolumeLimit()
    {
        return $this->freeDeliveryInternationalVolumeLimit;
    }

    /**
     * @return float
     */
    public function getFreeDeliveryRegionalVolumeLimit()
    {
        return $this->freeDeliveryRegionalVolumeLimit;
    }

    /**
     * @param float $freeDeliveryRegionalVolumeLimit
     *
     * @return Configuration
     */
    public function setFreeDeliveryRegionalVolumeLimit($freeDeliveryRegionalVolumeLimit)
    {
        $this->freeDeliveryRegionalVolumeLimit = $freeDeliveryRegionalVolumeLimit;

        return $this;
    }

    /**
     * @return float
     */
    public function getFreeDeliveryIslandsVolumeLimit()
    {
        return $this->freeDeliveryIslandsVolumeLimit;
    }

    /**
     * @param float $freeDeliveryIslandsVolumeLimit
     *
     * @return Configuration
     */
    public function setFreeDeliveryIslandsVolumeLimit($freeDeliveryIslandsVolumeLimit)
    {
        $this->freeDeliveryIslandsVolumeLimit = $freeDeliveryIslandsVolumeLimit;

        return $this;
    }

    /**
     * @return float
     */
    public function getFreeDeliveryNationalVolumeLimit()
    {
        return $this->freeDeliveryNationalVolumeLimit;
    }

    /**
     * @param float $freeDeliveryNationalVolumeLimit
     *
     * @return Configuration
     */
    public function setFreeDeliveryNationalVolumeLimit($freeDeliveryNationalVolumeLimit)
    {
        $this->freeDeliveryNationalVolumeLimit = $freeDeliveryNationalVolumeLimit;

        return $this;
    }    

    /**
     * @return bool
     */
    public function hasInternationalTax()
    {
        return $this->internationalTax;
    }

    /**
     * @param bool $internationalTax
     *
     * @return Configuration
     */
    public function setInternationalTax($internationalTax)
    {
        $this->internationalTax = $internationalTax;

        return $this;
    }

    /**
     * @return float
     */
    public function getMinSpendRegional()
    {
        return $this->minSpendRegional;
    }

    /**
     * @param float $minSpendRegional
     *
     * @return Configuration
     */
    public function setMinSpendRegional($minSpendRegional)
    {
        $this->minSpendRegional = $minSpendRegional;

        return $this;
    }

    /**
     * @return float
     */
    public function getMinSpendIslands()
    {
        return $this->minSpendIslands;
    }

    /**
     * @param float $minSpendIslands
     *
     * @return Configuration
     */
    public function setMinSpendIslands($minSpendIslands)
    {
        $this->minSpendIslands = $minSpendIslands;

        return $this;
    }

    /**
     * @return float
     */
    public function getMinSpendNational()
    {
        return $this->minSpendNational;
    }

    /**
     * @param float $minSpendNational
     *
     * @return Configuration
     */
    public function setMinSpendNational($minSpendNational)
    {
        $this->minSpendNational = $minSpendNational;

        return $this;
    }

    /**
     * @return float
     */
    public function getMinSpendInternational()
    {
        return $this->minSpendInternational;
    }

    /**
     * @param float $minSpendInternational
     *
     * @return Configuration
     */
    public function setMinSpendInternational($minSpendInternational)
    {
        $this->minSpendInternational = $minSpendInternational;

        return $this;
    }

    /**
     * @return float
     */
    public function getDeliveryBaseAmount()
    {
        return $this->deliveryBaseAmount;
    }

    /**
     * @param float $deliveryBaseAmount
     *
     * @return Configuration
     */
    public function setDeliveryBaseAmount($deliveryBaseAmount)
    {
        $this->deliveryBaseAmount = $deliveryBaseAmount;

        return $this;
    }

    /**
     * @return float
     */
    public function getDeliveryExcessAmount()
    {
        return $this->deliveryExcessAmount;
    }

    /**
     * @param float $deliveryExcessAmount
     *
     * @return Configuration
     */
    public function setDeliveryExcessAmount($deliveryExcessAmount)
    {
        $this->deliveryExcessAmount = $deliveryExcessAmount;

        return $this;
    }

    /**
     * @return float
     */
    public function getDeliveryExcessMultiplierRegional()
    {
        return $this->deliveryExcessMultiplierRegional;
    }

    /**
     * @param float $deliveryExcessMultiplierRegional
     *
     * @return Configuration
     */
    public function setDeliveryExcessMultiplierRegional($deliveryExcessMultiplierRegional)
    {
        $this->deliveryExcessMultiplierRegional = $deliveryExcessMultiplierRegional;

        return $this;
    }

    /**
     * @return float
     */
    public function getDeliveryExcessMultiplierNational()
    {
        return $this->deliveryExcessMultiplierNational;
    }

    /**
     * @param float $deliveryExcessMultiplierNational
     *
     * @return Configuration
     */
    public function setDeliveryExcessMultiplierNational($deliveryExcessMultiplierNational)
    {
        $this->deliveryExcessMultiplierNational = $deliveryExcessMultiplierNational;

        return $this;
    }

    /**
     * @return float
     */
    public function getDeliveryExcessMultiplierIslands()
    {
        return $this->deliveryExcessMultiplierIslands;
    }

    /**
     * @param float $deliveryExcessMultiplierIslands
     *
     * @return Configuration
     */
    public function setDeliveryExcessMultiplierIslands($deliveryExcessMultiplierIslands)
    {
        $this->deliveryExcessMultiplierIslands = $deliveryExcessMultiplierIslands;

        return $this;
    }

    /**
     * @return float
     */
    public function getDeliveryExcessMultiplierInternational()
    {
        return $this->deliveryExcessMultiplierInternational;
    }

    /**
     * @param float $deliveryExcessMultiplierInternational
     *
     * @return Configuration
     */
    public function setDeliveryExcessMultiplierInternational($deliveryExcessMultiplierInternational)
    {
        $this->deliveryExcessMultiplierInternational = $deliveryExcessMultiplierInternational;

        return $this;
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
     * @return Configuration
     */
    public function setWeb($web)
    {
        $this->web = $web;

        return $this;
    }

    /**
     * @return float
     */
    public function getDeliveryTaxSurcharge()
    {
        return $this->deliveryTaxSurcharge;
    }

    /**
     * @param float $deliveryTaxSurcharge
     *
     * @return Configuration
     */
    public function setDeliveryTaxSurcharge($deliveryTaxSurcharge)
    {
        $this->deliveryTaxSurcharge = $deliveryTaxSurcharge;

        return $this;
    }

    /**
     * @param float $deliveryTaxSurcharge
     *
     * @return Configuration
     */
    public function setIslandsPricePerAdditionalKg($islandsPricePerAdditionalKg)
    {
        $this->islandsPricePerAdditionalKg = $islandsPricePerAdditionalKg;
        
        return $this;
    }

    /**
     * @return float
     */
    public function getIslandsPricePerAdditionalKg()
    {
        return $this->islandsPricePerAdditionalKg;
    }

    /**
     * Get the value of palletT1Max
     *
     * @return  float
     */ 
    public function getPalletT1Max()
    {
        return $this->palletT1Max;
    }

    /**
     * Set the value of palletT1Max
     *
     * @param  float  $palletT1Max
     *
     * @return  self
     */ 
    public function setPalletT1Max($palletT1Max)
    {
        $this->palletT1Max = $palletT1Max;

        return $this;
    }

    /**
     * Get the value of palletT1RegionalCost
     *
     * @return  float
     */ 
    public function getPalletT1RegionalCost()
    {
        return $this->palletT1RegionalCost;
    }

    /**
     * Set the value of palletT1RegionalCost
     *
     * @param  float  $palletT1RegionalCost
     *
     * @return  self
     */ 
    public function setPalletT1RegionalCost($palletT1RegionalCost)
    {
        $this->palletT1RegionalCost = $palletT1RegionalCost;

        return $this;
    }

    /**
     * Get the value of palletT1IslandsCost
     *
     * @return  float
     */ 
    public function getPalletT1IslandsCost()
    {
        return $this->palletT1IslandsCost;
    }

    /**
     * Set the value of palletT1IslandsCost
     *
     * @param  float  $palletT1IslandsCost
     *
     * @return  self
     */ 
    public function setPalletT1IslandsCost($palletT1IslandsCost)
    {
        $this->palletT1IslandsCost = $palletT1IslandsCost;

        return $this;
    }

    /**
     * Get the value of palletT1NationalCost
     *
     * @return  float
     */ 
    public function getPalletT1NationalCost()
    {
        return $this->palletT1NationalCost;
    }

    /**
     * Set the value of palletT1NationalCost
     *
     * @param  float  $palletT1NationalCost
     *
     * @return  self
     */ 
    public function setPalletT1NationalCost($palletT1NationalCost)
    {
        $this->palletT1NationalCost = $palletT1NationalCost;

        return $this;
    }

    /**
     * Get the value of palletT1InternationalCost
     *
     * @return  float
     */ 
    public function getPalletT1InternationalCost()
    {
        return $this->palletT1InternationalCost;
    }

    /**
     * Set the value of palletT1InternationalCost
     *
     * @param  float  $palletT1InternationalCost
     *
     * @return  self
     */ 
    public function setPalletT1InternationalCost($palletT1InternationalCost)
    {
        $this->palletT1InternationalCost = $palletT1InternationalCost;

        return $this;
    }

    /**
     * Get the value of palletT2Max
     *
     * @return  float
     */ 
    public function getPalletT2Max()
    {
        return $this->palletT2Max;
    }

    /**
     * Set the value of palletT2Max
     *
     * @param  float  $palletT2Max
     *
     * @return  self
     */ 
    public function setPalletT2Max($palletT2Max)
    {
        $this->palletT2Max = $palletT2Max;

        return $this;
    }

    /**
     * Get the value of palletT2RegionalCost
     *
     * @return  float
     */ 
    public function getPalletT2RegionalCost()
    {
        return $this->palletT2RegionalCost;
    }

    /**
     * Set the value of palletT2RegionalCost
     *
     * @param  float  $palletT2RegionalCost
     *
     * @return  self
     */ 
    public function setPalletT2RegionalCost($palletT2RegionalCost)
    {
        $this->palletT2RegionalCost = $palletT2RegionalCost;

        return $this;
    }    

    /**
     * Get the value of palletT2IslandsCost
     *
     * @return  float
     */ 
    public function getPalletT2IslandsCost()
    {
        return $this->palletT2IslandsCost;
    }

    /**
     * Set the value of palletT2IslandsCost
     *
     * @param  float  $palletT2IslandsCost
     *
     * @return  self
     */ 
    public function setPalletT2IslandsCost($palletT2IslandsCost)
    {
        $this->palletT2IslandsCost = $palletT2IslandsCost;

        return $this;
    }

    /**
     * Get the value of palletT2NationalCost
     *
     * @return  float
     */ 
    public function getPalletT2NationalCost()
    {
        return $this->palletT2NationalCost;
    }

    /**
     * Set the value of palletT2NationalCost
     *
     * @param  float  $palletT2NationalCost
     *
     * @return  self
     */ 
    public function setPalletT2NationalCost($palletT2NationalCost)
    {
        $this->palletT2NationalCost = $palletT2NationalCost;

        return $this;
    }

    /**
     * Get the value of palletT2InternationalCost
     *
     * @return  float
     */ 
    public function getPalletT2InternationalCost()
    {
        return $this->palletT2InternationalCost;
    }

    /**
     * Set the value of palletT2InternationalCost
     *
     * @param  float  $palletT2InternationalCost
     *
     * @return  self
     */ 
    public function setPalletT2InternationalCost($palletT2InternationalCost)
    {
        $this->palletT2InternationalCost = $palletT2InternationalCost;

        return $this;
    }

    /**
     * Get the value of palletT3Max
     *
     * @return  float
     */ 
    public function getPalletT3Max()
    {
        return $this->palletT3Max;
    }

    /**
     * Set the value of palletT3Max
     *
     * @param  float  $palletT3Max
     *
     * @return  self
     */ 
    public function setPalletT3Max($palletT3Max)
    {
        $this->palletT3Max = $palletT3Max;

        return $this;
    }

    /**
     * Get the value of palletT3RegionalCost
     *
     * @return  float
     */ 
    public function getPalletT3RegionalCost()
    {
        return $this->palletT3RegionalCost;
    }

    /**
     * Set the value of palletT3RegionalCost
     *
     * @param  float  $palletT3RegionalCost
     *
     * @return  self
     */ 
    public function setPalletT3RegionalCost($palletT3RegionalCost)
    {
        $this->palletT3RegionalCost = $palletT3RegionalCost;

        return $this;
    }    

    /**
     * Get the value of palletT3IslandsCost
     *
     * @return  float
     */ 
    public function getPalletT3IslandsCost()
    {
        return $this->palletT3IslandsCost;
    }

    /**
     * Set the value of palletT3IslandsCost
     *
     * @param  float  $palletT3IslandsCost
     *
     * @return  self
     */ 
    public function setPalletT3IslandsCost($palletT3IslandsCost)
    {
        $this->palletT3IslandsCost = $palletT3IslandsCost;

        return $this;
    }

    /**
     * Get the value of palletT3NationalCost
     *
     * @return  float
     */ 
    public function getPalletT3NationalCost()
    {
        return $this->palletT3NationalCost;
    }

    /**
     * Set the value of palletT3NationalCost
     *
     * @param  float  $palletT3NationalCost
     *
     * @return  self
     */ 
    public function setPalletT3NationalCost($palletT3NationalCost)
    {
        $this->palletT3NationalCost = $palletT3NationalCost;

        return $this;
    }

    /**
     * Get the value of palletT3InternationalCost
     *
     * @return  float
     */ 
    public function getPalletT3InternationalCost()
    {
        return $this->palletT3InternationalCost;
    }

    /**
     * Set the value of palletT3InternationalCost
     *
     * @param  float  $palletT3InternationalCost
     *
     * @return  self
     */ 
    public function setPalletT3InternationalCost($palletT3InternationalCost)
    {
        $this->palletT3InternationalCost = $palletT3InternationalCost;

        return $this;
    }

    /**
     * Get the value of palletT4Max
     *
     * @return  float
     */ 
    public function getPalletT4Max()
    {
        return $this->palletT4Max;
    }

    /**
     * Set the value of palletT4Max
     *
     * @param  float  $palletT4Max
     *
     * @return  self
     */ 
    public function setPalletT4Max($palletT4Max)
    {
        $this->palletT4Max = $palletT4Max;

        return $this;
    }

    /**
     * Get the value of palletT4RegionalCost
     *
     * @return  float
     */ 
    public function getPalletT4RegionalCost()
    {
        return $this->palletT4RegionalCost;
    }

    /**
     * Set the value of palletT4RegionalCost
     *
     * @param  float  $palletT4RegionalCost
     *
     * @return  self
     */ 
    public function setPalletT4RegionalCost($palletT4RegionalCost)
    {
        $this->palletT4RegionalCost = $palletT4RegionalCost;

        return $this;
    }    

    /**
     * Get the value of palletT4IslandsCost
     *
     * @return  float
     */ 
    public function getPalletT4IslandsCost()
    {
        return $this->palletT4IslandsCost;
    }

    /**
     * Set the value of palletT4IslandsCost
     *
     * @param  float  $palletT4IslandsCost
     *
     * @return  self
     */ 
    public function setPalletT4IslandsCost($palletT4IslandsCost)
    {
        $this->palletT4IslandsCost = $palletT4IslandsCost;

        return $this;
    }

    /**
     * Get the value of palletT4NationalCost
     *
     * @return  float
     */ 
    public function getPalletT4NationalCost()
    {
        return $this->palletT4NationalCost;
    }

    /**
     * Set the value of palletT4NationalCost
     *
     * @param  float  $palletT4NationalCost
     *
     * @return  self
     */ 
    public function setPalletT4NationalCost($palletT4NationalCost)
    {
        $this->palletT4NationalCost = $palletT4NationalCost;

        return $this;
    }

    /**
     * Get the value of palletT4InternationalCost
     *
     * @return  float
     */ 
    public function getPalletT4InternationalCost()
    {
        return $this->palletT4InternationalCost;
    }

    /**
     * Set the value of palletT4InternationalCost
     *
     * @param  float  $palletT4InternationalCost
     *
     * @return  self
     */ 
    public function setPalletT4InternationalCost($palletT4InternationalCost)
    {
        $this->palletT4InternationalCost = $palletT4InternationalCost;

        return $this;
    }

    /**
     * Get the value of palletT5Max
     *
     * @return  float
     */ 
    public function getPalletT5Max()
    {
        return $this->palletT5Max;
    }

    /**
     * Set the value of palletT5Max
     *
     * @param  float  $palletT5Max
     *
     * @return  self
     */ 
    public function setPalletT5Max($palletT5Max)
    {
        $this->palletT5Max = $palletT5Max;

        return $this;
    }

    /**
     * Get the value of palletT5RegionalCost
     *
     * @return  float
     */ 
    public function getPalletT5RegionalCost()
    {
        return $this->palletT5RegionalCost;
    }

    /**
     * Set the value of palletT5RegionalCost
     *
     * @param  float  $palletT5RegionalCost
     *
     * @return  self
     */ 
    public function setPalletT5RegionalCost($palletT5RegionalCost)
    {
        $this->palletT5RegionalCost = $palletT5RegionalCost;

        return $this;
    }

    /**
     * Get the value of palletT5IslandsCost
     *
     * @return  float
     */ 
    public function getPalletT5IslandsCost()
    {
        return $this->palletT5IslandsCost;
    }

    /**
     * Set the value of palletT5IslandsCost
     *
     * @param  float  $palletT5IslandsCost
     *
     * @return  self
     */ 
    public function setPalletT5IslandsCost($palletT5IslandsCost)
    {
        $this->palletT5IslandsCost = $palletT5IslandsCost;

        return $this;
    }

    /**
     * Get the value of palletT5NationalCost
     *
     * @return  float
     */ 
    public function getPalletT5NationalCost()
    {
        return $this->palletT5NationalCost;
    }

    /**
     * Set the value of palletT5NationalCost
     *
     * @param  float  $palletT5NationalCost
     *
     * @return  self
     */ 
    public function setPalletT5NationalCost($palletT5NationalCost)
    {
        $this->palletT5NationalCost = $palletT5NationalCost;

        return $this;
    }

    /**
     * Get the value of palletT5InternationalCost
     *
     * @return  float
     */ 
    public function getPalletT5InternationalCost()
    {
        return $this->palletT5InternationalCost;
    }

    /**
     * Set the value of palletT5InternationalCost
     *
     * @param  float  $palletT5InternationalCost
     *
     * @return  self
     */ 
    public function setPalletT5InternationalCost($palletT5InternationalCost)
    {
        $this->palletT5InternationalCost = $palletT5InternationalCost;

        return $this;
    }

    /**
     * Get the value of palletT6Max
     *
     * @return  float
     */ 
    public function getPalletT6Max()
    {
        return $this->palletT6Max;
    }

    /**
     * Set the value of palletT6Max
     *
     * @param  float  $palletT6Max
     *
     * @return  self
     */ 
    public function setPalletT6Max($palletT6Max)
    {
        $this->palletT6Max = $palletT6Max;

        return $this;
    }

    /**
     * Get the value of palletT6RegionalCost
     *
     * @return  float
     */ 
    public function getPalletT6RegionalCost()
    {
        return $this->palletT6RegionalCost;
    }

    /**
     * Set the value of palletT6RegionalCost
     *
     * @param  float  $palletT6RegionalCost
     *
     * @return  self
     */ 
    public function setPalletT6RegionalCost($palletT6RegionalCost)
    {
        $this->palletT6RegionalCost = $palletT6RegionalCost;

        return $this;
    }

    /**
     * Get the value of palletT6IslandsCost
     *
     * @return  float
     */ 
    public function getPalletT6IslandsCost()
    {
        return $this->palletT6IslandsCost;
    }

    /**
     * Set the value of palletT6IslandsCost
     *
     * @param  float  $palletT6IslandsCost
     *
     * @return  self
     */ 
    public function setPalletT6IslandsCost($palletT6IslandsCost)
    {
        $this->palletT6IslandsCost = $palletT6IslandsCost;

        return $this;
    }

    /**
     * Get the value of palletT6NationalCost
     *
     * @return  float
     */ 
    public function getPalletT6NationalCost()
    {
        return $this->palletT6NationalCost;
    }

    /**
     * Set the value of palletT6NationalCost
     *
     * @param  float  $palletT6NationalCost
     *
     * @return  self
     */ 
    public function setPalletT6NationalCost($palletT6NationalCost)
    {
        $this->palletT6NationalCost = $palletT6NationalCost;

        return $this;
    }

    /**
     * Get the value of palletT6InternationalCost
     *
     * @return  float
     */ 
    public function getPalletT6InternationalCost()
    {
        return $this->palletT6InternationalCost;
    }

    /**
     * Set the value of palletT6InternationalCost
     *
     * @param  float  $palletT6InternationalCost
     *
     * @return  self
     */ 
    public function setPalletT6InternationalCost($palletT6InternationalCost)
    {
        $this->palletT6InternationalCost = $palletT6InternationalCost;

        return $this;
    }

    /**
     * Get the value of palletT7Max
     *
     * @return  float
     */ 
    public function getPalletT7Max()
    {
        return $this->palletT7Max;
    }

    /**
     * Set the value of palletT7Max
     *
     * @param  float  $palletT7Max
     *
     * @return  self
     */ 
    public function setPalletT7Max($palletT7Max)
    {
        $this->palletT7Max = $palletT7Max;

        return $this;
    }

    /**
     * Get the value of palletT7RegionalCost
     *
     * @return  float
     */ 
    public function getPalletT7RegionalCost()
    {
        return $this->palletT7RegionalCost;
    }

    /**
     * Set the value of palletT7RegionalCost
     *
     * @param  float  $palletT7RegionalCost
     *
     * @return  self
     */ 
    public function setPalletT7RegionalCost($palletT7RegionalCost)
    {
        $this->palletT7RegionalCost = $palletT7RegionalCost;

        return $this;
    }

    /**
     * Get the value of palletT7IslandsCost
     *
     * @return  float
     */ 
    public function getPalletT7IslandsCost()
    {
        return $this->palletT7IslandsCost;
    }

    /**
     * Set the value of palletT7IslandsCost
     *
     * @param  float  $palletT7IslandsCost
     *
     * @return  self
     */ 
    public function setPalletT7IslandsCost($palletT7IslandsCost)
    {
        $this->palletT7IslandsCost = $palletT7IslandsCost;

        return $this;
    }

    /**
     * Get the value of palletT7NationalCost
     *
     * @return  float
     */ 
    public function getPalletT7NationalCost()
    {
        return $this->palletT7NationalCost;
    }

    /**
     * Set the value of palletT7NationalCost
     *
     * @param  float  $palletT7NationalCost
     *
     * @return  self
     */ 
    public function setPalletT7NationalCost($palletT7NationalCost)
    {
        $this->palletT7NationalCost = $palletT7NationalCost;

        return $this;
    }

    /**
     * Get the value of palletT7InternationalCost
     *
     * @return  float
     */ 
    public function getPalletT7InternationalCost()
    {
        return $this->palletT7InternationalCost;
    }

    /**
     * Set the value of palletT7InternationalCost
     *
     * @param  float  $palletT7InternationalCost
     *
     * @return  self
     */ 
    public function setPalletT7InternationalCost($palletT7InternationalCost)
    {
        $this->palletT7InternationalCost = $palletT7InternationalCost;

        return $this;
    }

    /**
     * Get the value of palletT8Max
     *
     * @return  float
     */ 
    public function getPalletT8Max()
    {
        return $this->palletT8Max;
    }

    /**
     * Set the value of palletT8Max
     *
     * @param  float  $palletT8Max
     *
     * @return  self
     */ 
    public function setPalletT8Max($palletT8Max)
    {
        $this->palletT8Max = $palletT8Max;

        return $this;
    }

    /**
     * Get the value of palletT8RegionalCost
     *
     * @return  float
     */ 
    public function getPalletT8RegionalCost()
    {
        return $this->palletT8RegionalCost;
    }

    /**
     * Set the value of palletT8RegionalCost
     *
     * @param  float  $palletT8RegionalCost
     *
     * @return  self
     */ 
    public function setPalletT8RegionalCost($palletT8RegionalCost)
    {
        $this->palletT8RegionalCost = $palletT8RegionalCost;

        return $this;
    }

    /**
     * Get the value of palletT8IslandsCost
     *
     * @return  float
     */ 
    public function getPalletT8IslandsCost()
    {
        return $this->palletT8IslandsCost;
    }

    /**
     * Set the value of palletT8IslandsCost
     *
     * @param  float  $palletT8IslandsCost
     *
     * @return  self
     */ 
    public function setPalletT8IslandsCost($palletT8IslandsCost)
    {
        $this->palletT8IslandsCost = $palletT8IslandsCost;

        return $this;
    }

    /**
     * Get the value of palletT8NationalCost
     *
     * @return  float
     */ 
    public function getPalletT8NationalCost()
    {
        return $this->palletT8NationalCost;
    }

    /**
     * Set the value of palletT8NationalCost
     *
     * @param  float  $palletT8NationalCost
     *
     * @return  self
     */ 
    public function setPalletT8NationalCost($palletT8NationalCost)
    {
        $this->palletT8NationalCost = $palletT8NationalCost;

        return $this;
    }

    /**
     * Get the value of palletT8InternationalCost
     *
     * @return  float
     */ 
    public function getPalletT8InternationalCost()
    {
        return $this->palletT8InternationalCost;
    }

    /**
     * Set the value of palletT8InternationalCost
     *
     * @param  float  $palletT8InternationalCost
     *
     * @return  self
     */ 
    public function setPalletT8InternationalCost($palletT8InternationalCost)
    {
        $this->palletT8InternationalCost = $palletT8InternationalCost;

        return $this;
    }
    
/**
     * Get the value of palletT9Max
     *
     * @return  float
     */ 
    public function getPalletT9Max()
    {
        return $this->palletT9Max;
    }

    /**
     * Set the value of palletT9Max
     *
     * @param  float  $palletT9Max
     *
     * @return  self
     */ 
    public function setPalletT9Max($palletT9Max)
    {
        $this->palletT9Max = $palletT9Max;

        return $this;
    }

    /**
     * Get the value of palletT9RegionalCost
     *
     * @return  float
     */ 
    public function getPalletT9RegionalCost()
    {
        return $this->palletT9RegionalCost;
    }

    /**
     * Set the value of palletT9RegionalCost
     *
     * @param  float  $palletT9RegionalCost
     *
     * @return  self
     */ 
    public function setPalletT9RegionalCost($palletT9RegionalCost)
    {
        $this->palletT9RegionalCost = $palletT9RegionalCost;

        return $this;
    }

    /**
     * Get the value of palletT9IslandsCost
     *
     * @return  float
     */ 
    public function getPalletT9IslandsCost()
    {
        return $this->palletT9IslandsCost;
    }

    /**
     * Set the value of palletT9IslandsCost
     *
     * @param  float  $palletT9IslandsCost
     *
     * @return  self
     */ 
    public function setPalletT9IslandsCost($palletT9IslandsCost)
    {
        $this->palletT9IslandsCost = $palletT9IslandsCost;

        return $this;
    }

    /**
     * Get the value of palletT9NationalCost
     *
     * @return  float
     */ 
    public function getPalletT9NationalCost()
    {
        return $this->palletT9NationalCost;
    }

    /**
     * Set the value of palletT9NationalCost
     *
     * @param  float  $palletT9NationalCost
     *
     * @return  self
     */ 
    public function setPalletT9NationalCost($palletT9NationalCost)
    {
        $this->palletT9NationalCost = $palletT9NationalCost;

        return $this;
    }

    /**
     * Get the value of palletT9InternationalCost
     *
     * @return  float
     */ 
    public function getPalletT9InternationalCost()
    {
        return $this->palletT9InternationalCost;
    }

    /**
     * Set the value of palletT9InternationalCost
     *
     * @param  float  $palletT9InternationalCost
     *
     * @return  self
     */ 
    public function setPalletT9InternationalCost($palletT9InternationalCost)
    {
        $this->palletT9InternationalCost = $palletT9InternationalCost;

        return $this;
    }

    /**
     * Get the value of requireLoginForPrices
     *
     * @return  boolean
     */ 
    public function getRequireLoginForPrices()
    {
        return $this->requireLoginForPrices;
    }

    /**
     * Set the value of requireLoginForPrices
     *
     * @param  boolean  $requireLoginForPrices
     *
     * @return  self
     */ 
    public function setRequireLoginForPrices($requireLoginForPrices)
    {
        $this->requireLoginForPrices = $requireLoginForPrices;

        return $this;
    }
}
