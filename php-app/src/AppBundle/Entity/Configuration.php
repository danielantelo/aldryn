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
}
