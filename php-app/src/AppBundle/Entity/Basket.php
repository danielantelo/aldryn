<?php

namespace AppBundle\Entity;

use AppBundle\Service\LocalizationHelper;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Basket
 *
 * @ORM\Table(name="basket")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\BasketRepository")
 */
class Basket
{
    public static $STATUSES = [
        'active' => 'ACTIVO',
        'pending' => 'PENDIENTE',
        'payed' => 'PAGADO',
        'sent' => 'ENVIADO',
        'cancelled' => 'CANCELADO',
    ];

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
     * @ORM\ManyToOne(targetEntity="Client", inversedBy="baskets")
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    /**
     * @var string
     *
     * @ORM\Column(name="clientNationalId", type="string")
     */
    private $clientNationalId;

    /**
     * @var string
     *
     * @ORM\Column(name="basketReference", type="string", length=255, unique=true)
     */
    private $basketReference;

    /**
     * @var string
     *
     * @ORM\Column(name="currency", type="string", length=3, nullable=true)
     */
    private $currency = 'EUR';

    /**
     * @var string
     *
     * @ORM\Column(name="userIp", type="string", length=50, nullable=true)
     */
    private $userIp;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="creationDate", type="datetime")
     */
    private $creationDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="checkoutDate", type="datetime", nullable=true)
     */
    private $checkoutDate;

    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=50)
     */
    private $status;

    /**
     * @var float
     *
     * @ORM\Column(name="itemSubtotal", type="decimal", scale=3)
     */
    private $itemSubtotal = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="itemTaxTotal", type="decimal", scale=3)
     */
    private $itemTaxTotal = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="itemTaxSurchargeTotal", type="decimal", scale=3)
     */
    private $itemTaxSurchargeTotal = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="itemTotal", type="decimal", scale=3)
     */
    private $itemTotal = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="delivery", type="decimal", scale=3)
     */
    private $delivery = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="deliveryTax", type="decimal", scale=3)
     */
    private $deliveryTax = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="deliveryTaxSurcharge", type="decimal", scale=3)
     */
    private $deliveryTaxSurcharge = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="deliveryTotal", type="decimal", scale=3)
     */
    private $deliveryTotal = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="basketSubTotal", type="decimal", scale=3)
     */
    private $basketSubTotal = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="baseTax10", type="decimal", scale=3)
     */
    private $baseTax10 = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="Tax10", type="decimal", scale=3)
     */
    private $tax10 = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="baseTax21", type="decimal", scale=3)
     */
    private $baseTax21 = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="Tax21", type="decimal", scale=3)
     */
    private $tax21 = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="baseSurcharge1p4", type="decimal", scale=3)
     */
    private $baseSurcharge1p4 = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="surcharge1p4", type="decimal", scale=3)
     */
    private $surcharge1p4 = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="baseSurcharge5p2", type="decimal", scale=3)
     */
    private $baseSurcharge5p2 = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="surcharge5p2", type="decimal", scale=3)
     */
    private $surcharge5p2 = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="basketTaxTotal", type="decimal", scale=3)
     */
    private $basketTaxTotal = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="basketTaxSurchargeTotal", type="decimal", scale=3)
     */
    private $basketTaxSurchargeTotal = 0;

    /**
     * @var string
     *
     * @ORM\Column(name="basketTotal", type="decimal", scale=3)
     */
    private $basketTotal = 0;

    /**
     * @var float
     *
     * @ORM\Column(name="weight", type="decimal", scale=3)
     */
    private $weight = 0;

    /**
     * @var int
     *
     * @ORM\Column(name="size", type="integer")
     */
    private $size = 0;

    /**
     * @var string
     *
     * @ORM\Column(name="customerFullName", type="string", length=255, nullable=true)
     */
    private $customerFullName;

    /**
     * @var string
     *
     * @ORM\Column(name="deliveryAddressLine1", type="string", length=255, nullable=true)
     */
    private $deliveryAddressLine1;

    /**
     * @var string
     *
     * @ORM\Column(name="deliveryAddressLine2", type="string", length=255, nullable=true)
     */
    private $deliveryAddressLine2;

    /**
     * @var string
     *
     * @ORM\Column(name="deliveryAddressLine3", type="string", length=255, nullable=true)
     */
    private $deliveryAddressLine3;

    /**
     * @var string
     *
     * @ORM\Column(name="deliveryAddressCity", type="string", length=255, nullable=true)
     */
    private $deliveryAddressCity;

    /**
     * @var string
     *
     * @ORM\Column(name="deliveryAddressPostcode", type="string", length=255, nullable=true)
     */
    private $deliveryAddressPostcode;

    /**
     * @var string
     *
     * @ORM\Column(name="deliveryAddressCountry", type="string", length=255, nullable=true)
     */
    private $deliveryAddressCountry;

    /**
     * @var string
     *
     * @ORM\Column(name="contactTel", type="string", length=255, nullable=true)
     */
    private $contactTel;

    /**
     * @var string
     *
     * @ORM\Column(name="contactEmail", type="string", length=255, nullable=true)
     */
    private $contactEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentReference1", type="string", length=255, nullable=true)
     */
    private $paymentReference1;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentReference2", type="string", length=255, nullable=true)
     */
    private $paymentReference2;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentReference3", type="string", length=255, nullable=true)
     */
    private $paymentReference3;

    /**
     * @var string
     *
     * @ORM\Column(name="userComments", type="text", nullable=true)
     */
    private $userComments;

    /**
     * @var string
     *
     * @ORM\Column(name="adminComments", type="text", nullable=true)
     */
    private $adminComments;

    /**
     * @var string
     *
     * @ORM\Column(name="trackingCompany", type="string", length=255, nullable=true)
     */
    private $trackingCompany;

    /**
     * @var string
     *
     * @ORM\Column(name="trackingNumber", type="string", length=255, nullable=true)
     */
    private $trackingNumber;

    /**
     * @var bool
     *
     * @ORM\Column(name="requiresInvoice", type="boolean")
     */
    private $requiresInvoice = true;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentContactName", type="string", length=255, nullable=true)
     */
    private $paymentContactName;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentAddressLine1", type="string", length=255, nullable=true)
     */
    private $paymentAddressLine1;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentAddressLine2", type="string", length=255, nullable=true)
     */
    private $paymentAddressLine2;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentAddressLine3", type="string", length=255, nullable=true)
     */
    private $paymentAddressLine3;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentAddressCity", type="string", length=255, nullable=true)
     */
    private $paymentAddressCity;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentAddressPostcode", type="string", length=255, nullable=true)
     */
    private $paymentAddressPostcode;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentAddressCountry", type="string", length=255, nullable=true)
     */
    private $paymentAddressCountry;

    /**
     * @var string
     *
     * @ORM\Column(name="discount", type="string", length=255, nullable=true)
     */
    private $discount;

    /**
     * @var string
     *
     * @ORM\Column(name="couponCode", type="string", length=255, nullable=true)
     */
    private $couponCode;

    /**
     * @ORM\OneToMany(targetEntity="BasketItem", mappedBy="basket", cascade={"all"})
     */
    private $basketItems;

    /**
     * @var Web
     *
     * @ORM\ManyToOne(targetEntity="Web")
     * @ORM\JoinColumn(nullable=false)
     */
    private $web;

    /**
     * @var string
     *
     * @ORM\Column(name="invoiceNumber", type="string", length=50, nullable=true)
     */
    private $invoiceNumber = null;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="invoiceDate", type="datetime", nullable=true)
     */
    private $invoiceDate;

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->basketReference;
    }

    /**
     * @param Web web
     */
    public function __construct(Web $web = null)
    {
        $this->web = $web;
        $this->creationDate = new \DateTime();
        $this->basketReference = strtoupper(join('-', str_split(uniqid(), 4)));;
        $this->status = Basket::$STATUSES['active'];
        $this->basketItems = new ArrayCollection();
    }

    /**
     * @param Address $address
     *
     * @return Basket
     */
    public function setDeliveryAddress(Address $address)
    {
        $configuration = $this->web->getConfiguration();

        $this->setDeliveryAddressLine1($address->getStreetNumber());
        $this->setDeliveryAddressLine2($address->getStreetName());
        $this->setDeliveryAddressCity($address->getCity());
        $this->setDeliveryAddressCountry($address->getCountry());
        $this->setDeliveryAddressPostcode($address->getZipCode());
        $this->setContactTel($address->getTelephone());

        $delivery = 0;
        $deliveryTax = 0;
        $deliveryTaxSurcharge = 0;
        $deliveryTotal = 0;

        $deliveryType = $configuration->getDeliveryType();
        switch ($deliveryType) {
            case 'size':
                $deliveryCalcParam = $this->getSize();
                break;
            default:
                $deliveryCalcParam = $this->getWeight();
        }

        $itemTotal = $this->getItemTotal();
        $excessAmount = $configuration->getDeliveryExcessAmount();

        if ($itemTotal < $configuration->getMinSpendRegional() && LocalizationHelper::isRegionalAddress($address)) {
            throw new \Exception("Envíos regionales requieren un gasto mínimo de {$configuration->getMinSpendRegional()} euros.");
        } elseif ($itemTotal < $configuration->getMinSpendIslands() && LocalizationHelper::isNationalIslandsAddress($address)) {
            throw new \Exception("Envíos a las islas requieren un gasto mínimo de {$configuration->getMinSpendIslands()} euros.");
        } elseif ($itemTotal < $configuration->getMinSpendNational() && LocalizationHelper::isNationalAddress($address)) {
            throw new \Exception("Envíos nacionales requieren un gasto mínimo de {$configuration->getMinSpendNational()} euros.");
        } elseif ($itemTotal < $configuration->getMinSpendInternational() && LocalizationHelper::isInternationalAddress($address)) {
            throw new \Exception("Envíos internacionales requieren un gasto mínimo de {$configuration->getMinSpendInternational()} euros.");
        } else if (
            ($itemTotal > $configuration->getFreeDeliveryRegionalLimit() && LocalizationHelper::isRegionalAddress($address))
            || ($itemTotal > $configuration->getFreeDeliveryIslandsLimit() && LocalizationHelper::isNationalIslandsAddress($address))
            || ($itemTotal > $configuration->getFreeDeliveryNationalLimit() && LocalizationHelper::isNationalAddress($address))
            || ($itemTotal > $configuration->getFreeDeliveryInternationalLimit() && LocalizationHelper::isInternationalAddress($address))
        ) {
            $delivery = 0;
        } elseif (LocalizationHelper::isRegionalAddress($address)) {
            if ($deliveryCalcParam > $configuration->getDeliveryBaseAmount()) {
                $delivery = $configuration->getDeliveryRegional() + (ceil(($deliveryCalcParam - $configuration->getDeliveryBaseAmount()) / $excessAmount) * $configuration->getDeliveryExcessMultiplierRegional());
            } else {
                $delivery = $configuration->getDeliveryRegional();
            }
        } elseif (LocalizationHelper::isNationalIslandsAddress($address)) {
            if ($deliveryCalcParam > $configuration->getDeliveryBaseAmount()) {
                $delivery = $configuration->getDeliveryIslands() + (ceil(($deliveryCalcParam - $configuration->getDeliveryBaseAmount())/$excessAmount) * $configuration->getDeliveryExcessMultiplierIslands());
            } else {
                $delivery = $configuration->getDeliveryIslands();
            }
           // additional weight charges
           if ($deliveryType == 'size' && $configuration->getIslandsPricePerAdditionalKg() > 0) {
               $kgWeight = $this->getWeight() / 1000;
               $extraDel = $kgWeight * $configuration->getIslandsPricePerAdditionalKg();
               $delivery = $delivery + $extraDel;
           }
        } elseif (LocalizationHelper::isNationalAddress($address)) {
            if ($deliveryCalcParam > $configuration->getDeliveryBaseAmount()) {
                $delivery = $configuration->getDeliveryNational() + (ceil(($deliveryCalcParam - $configuration->getDeliveryBaseAmount())/$excessAmount) * $configuration->getDeliveryExcessMultiplierNational());
            } else {
                $delivery = $configuration->getDeliveryNational();
            }
        } elseif (LocalizationHelper::isInternationalAddress($address)) {
            if ($deliveryCalcParam > $configuration->getDeliveryBaseAmount()) {
                $delivery = $configuration->getDeliveryInternational() + (ceil(($deliveryCalcParam - $configuration->getDeliveryBaseAmount())/$excessAmount)*$configuration->getDeliveryExcessMultiplierInternational());
            } else {
                $delivery = $configuration->getDeliveryInternational();
            }
        }

        if (
            (LocalizationHelper::isInternationalAddress($address) && !$configuration->hasInternationalTax())
            || $this->client->hasTaxExemption()
        ) {
            $deliveryTax = 0;
        } else {
            $deliveryTax = $delivery * $configuration->getDeliveryTax() / 100;
            $deliveryTaxSurcharge = $delivery * $configuration->getDeliveryTaxSurcharge() / 100;
        }

        //calculate delivery total
        $deliveryTotal = $delivery + $deliveryTax + $deliveryTaxSurcharge;

        $this->setDelivery($delivery);
        $this->setDeliveryTax($deliveryTax);
        $this->setDeliveryTaxSurcharge($deliveryTaxSurcharge);
        $this->setDeliveryTotal($deliveryTotal);

        $this->setBasketSubTotal($this->getItemSubtotal() + $delivery);
        $this->setBasketTaxTotal($this->getItemTaxTotal() + $deliveryTax);
        $this->setBasketTaxSurchargeTotal($this->getItemTaxSurchargeTotal() + $deliveryTaxSurcharge);
        $this->setBasketTotal($this->getItemTotal() + $deliveryTotal);

        if ($configuration->getDeliveryTax() == 21 && $deliveryTax) {
            $this->baseTax21 += $delivery;
            $this->tax21 += $deliveryTax;
        } else if ($configuration->getDeliveryTax() == 10 && $deliveryTax) {
            $this->baseTax10 += $delivery;
            $this->tax10 += $deliveryTax;
        }

        if ($configuration->getDeliveryTaxSurcharge() == 1.4 && $deliveryTaxSurcharge) {
            $this->baseSurcharge1p4 += $delivery;
            $this->surcharge1p4 += $deliveryTaxSurcharge;
        } else if ($configuration->getDeliveryTaxSurcharge() == 5.2 && $deliveryTaxSurcharge) {
            $this->baseSurcharge5p2 += $delivery;
            $this->surcharge5p2 += $deliveryTaxSurcharge;
        }

        return $this;
    }

    public function setInvoiceAddress(Address $address)
    {
        $this->setPaymentAddressLine1($address->getStreetNumber());
        $this->setPaymentAddressLine2($address->getStreetName());
        $this->setPaymentAddressCity($address->getCity());
        $this->setPaymentAddressCountry($address->getCountry());
        $this->setPaymentAddressPostcode($address->getZipCode());

        return $this;
    }    

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set basketReference
     *
     * @param string $basketReference
     *
     * @return Basket
     */
    public function setBasketReference($basketReference)
    {
        $this->basketReference = $basketReference;

        return $this;
    }

    /**
     * Get basketReference
     *
     * @return string
     */
    public function getBasketReference()
    {
        return $this->basketReference;
    }

    /**
     * Set currency
     *
     * @param string $currency
     *
     * @return Basket
     */
    public function setCurrency($currency)
    {
        $this->currency = $currency;

        return $this;
    }

    /**
     * Get currency
     *
     * @return string
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    /**
     * Set userIp
     *
     * @param string $userIp
     *
     * @return Basket
     */
    public function setUserIp($userIp)
    {
        $this->userIp = $userIp;

        return $this;
    }

    /**
     * Get userIp
     *
     * @return string
     */
    public function getUserIp()
    {
        return $this->userIp;
    }

    /**
     * Set creationDate
     *
     * @param \DateTime $creationDate
     *
     * @return Basket
     */
    public function setCreationDate($creationDate)
    {
        $this->creationDate = $creationDate;

        return $this;
    }

    /**
     * Get creationDate
     *
     * @return \DateTime
     */
    public function getCreationDate()
    {
        return $this->creationDate;
    }

    /**
     * Set checkoutDate
     *
     * @param \DateTime $checkoutDate
     *
     * @return Basket
     */
    public function setCheckoutDate($checkoutDate)
    {
        $this->checkoutDate = $checkoutDate;

        return $this;
    }

    /**
     * Get checkoutDate
     *
     * @return \DateTime
     */
    public function getCheckoutDate()
    {
        return $this->checkoutDate;
    }

    /**
     * Set status
     *
     * @param string $status
     *
     * @return Basket
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set itemSubtotal
     *
     * @param float $itemSubtotal
     *
     * @return Basket
     */
    public function setItemSubtotal($itemSubtotal)
    {
        $this->itemSubtotal = $itemSubtotal;

        return $this;
    }

    /**
     * Get itemSubtotal
     *
     * @return float
     */
    public function getItemSubtotal()
    {
        return $this->itemSubtotal;
    }

    /**
     * Set itemTaxTotal
     *
     * @param float $itemTaxTotal
     *
     * @return Basket
     */
    public function setItemTaxTotal($itemTaxTotal)
    {
        $this->itemTaxTotal = $itemTaxTotal;

        return $this;
    }

    /**
     * Get itemTaxTotal
     *
     * @return float
     */
    public function getItemTaxTotal()
    {
        return $this->itemTaxTotal;
    }

    /**
     * Set itemTaxSurchargeTotal
     *
     * @param float $itemTaxSurchargeTotal
     *
     * @return Basket
     */
    public function setItemTaxSurchargeTotal($itemTaxSurchargeTotal)
    {
        $this->itemTaxSurchargeTotal = $itemTaxSurchargeTotal;

        return $this;
    }

    /**
     * Get itemTaxSurchargeTotal
     *
     * @return float
     */
    public function getItemTaxSurchargeTotal()
    {
        return $this->itemTaxSurchargeTotal;
    }

    /**
     * Set itemTotal
     *
     * @param float $itemTotal
     *
     * @return Basket
     */
    public function setItemTotal($itemTotal)
    {
        $this->itemTotal = $itemTotal;

        return $this;
    }

    /**
     * Get itemTotal
     *
     * @return float
     */
    public function getItemTotal()
    {
        return $this->itemTotal;
    }

    /**
     * Set delivery
     *
     * @param float $delivery
     *
     * @return Basket
     */
    public function setDelivery($delivery)
    {
        $this->delivery = $delivery;

        return $this;
    }

    /**
     * Get delivery
     *
     * @return float
     */
    public function getDelivery()
    {
        return $this->delivery;
    }

    /**
     * Set deliveryTax
     *
     * @param float $deliveryTax
     *
     * @return Basket
     */
    public function setDeliveryTax($deliveryTax)
    {
        $this->deliveryTax = $deliveryTax;

        return $this;
    }

    /**
     * Get deliveryTax
     *
     * @return float
     */
    public function getDeliveryTax()
    {
        return $this->deliveryTax;
    }

    /**
     * Set deliveryTaxSurcharge
     *
     * @param float $deliveryTaxSurcharge
     *
     * @return Basket
     */
    public function setDeliveryTaxSurcharge($deliveryTaxSurcharge)
    {
        $this->deliveryTaxSurcharge = $deliveryTaxSurcharge;

        return $this;
    }

    /**
     * Get deliveryTaxSurcharge
     *
     * @return float
     */
    public function getDeliveryTaxSurcharge()
    {
        return $this->deliveryTaxSurcharge;
    }

    /**
     * Set deliveryTotal
     *
     * @param float $deliveryTotal
     *
     * @return Basket
     */
    public function setDeliveryTotal($deliveryTotal)
    {
        $this->deliveryTotal = $deliveryTotal;

        return $this;
    }

    /**
     * Get deliveryTotal
     *
     * @return float
     */
    public function getDeliveryTotal()
    {
        return $this->deliveryTotal;
    }

    /**
     * Set basketSubTotal
     *
     * @param float $basketSubTotal
     *
     * @return Basket
     */
    public function setBasketSubTotal($basketSubTotal)
    {
        $this->basketSubTotal = $basketSubTotal;

        return $this;
    }

    /**
     * Get basketSubTotal
     *
     * @return float
     */
    public function getBasketSubTotal()
    {
        return $this->basketSubTotal;
    }

    /**
     * Set basketTaxTotal
     *
     * @param float $basketTaxTotal
     *
     * @return Basket
     */
    public function setBasketTaxTotal($basketTaxTotal)
    {
        $this->basketTaxTotal = $basketTaxTotal;

        return $this;
    }

    /**
     * Get basketTaxTotal
     *
     * @return float
     */
    public function getBasketTaxTotal()
    {
        return $this->basketTaxTotal;
    }

    /**
     * Set basketTaxSurchargeTotal
     *
     * @param float $basketTaxSurchargeTotal
     *
     * @return Basket
     */
    public function setBasketTaxSurchargeTotal($basketTaxSurchargeTotal)
    {
        $this->basketTaxSurchargeTotal = $basketTaxSurchargeTotal;

        return $this;
    }

    /**
     * Get basketTaxSurchargeTotal
     *
     * @return float
     */
    public function getBasketTaxSurchargeTotal()
    {
        return $this->basketTaxSurchargeTotal;
    }

    /**
     * Set basketTotal
     *
     * @param string $basketTotal
     *
     * @return Basket
     */
    public function setBasketTotal($basketTotal)
    {
        $this->basketTotal = $basketTotal;

        return $this;
    }

    /**
     * Get basketTotal
     *
     * @return string
     */
    public function getBasketTotal()
    {
        return $this->basketTotal;
    }

    /**
     * Set weight
     *
     * @param float $weight
     *
     * @return Basket
     */
    public function setWeight($weight)
    {
        $this->weight = $weight;

        return $this;
    }

    /**
     * Get weight
     *
     * @return float
     */
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * Set size
     *
     * @param integer $size
     *
     * @return Basket
     */
    public function setSize($size)
    {
        $this->size = $size;

        return $this;
    }

    /**
     * Get size
     *
     * @return int
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Set customerFullName
     *
     * @param string $customerFullName
     *
     * @return Basket
     */
    public function setCustomerFullName($customerFullName)
    {
        $this->customerFullName = $customerFullName;

        return $this;
    }

    /**
     * Get customerFullName
     *
     * @return string
     */
    public function getCustomerFullName()
    {
        return $this->customerFullName;
    }

    /**
     * Set deliveryAddressLine1
     *
     * @param string $deliveryAddressLine1
     *
     * @return Basket
     */
    public function setDeliveryAddressLine1($deliveryAddressLine1)
    {
        $this->deliveryAddressLine1 = $deliveryAddressLine1;

        return $this;
    }

    /**
     * Get deliveryAddressLine1
     *
     * @return string
     */
    public function getDeliveryAddressLine1()
    {
        return $this->deliveryAddressLine1;
    }

    /**
     * Set deliveryAddressLine2
     *
     * @param string $deliveryAddressLine2
     *
     * @return Basket
     */
    public function setDeliveryAddressLine2($deliveryAddressLine2)
    {
        $this->deliveryAddressLine2 = $deliveryAddressLine2;

        return $this;
    }

    /**
     * Get deliveryAddressLine2
     *
     * @return string
     */
    public function getDeliveryAddressLine2()
    {
        return $this->deliveryAddressLine2;
    }

    /**
     * Set deliveryAddressLine3
     *
     * @param string $deliveryAddressLine3
     *
     * @return Basket
     */
    public function setDeliveryAddressLine3($deliveryAddressLine3)
    {
        $this->deliveryAddressLine3 = $deliveryAddressLine3;

        return $this;
    }

    /**
     * Get deliveryAddressLine3
     *
     * @return string
     */
    public function getDeliveryAddressLine3()
    {
        return $this->deliveryAddressLine3;
    }

    /**
     * Set deliveryAddressCity
     *
     * @param string $deliveryAddressCity
     *
     * @return Basket
     */
    public function setDeliveryAddressCity($deliveryAddressCity)
    {
        $this->deliveryAddressCity = $deliveryAddressCity;

        return $this;
    }

    /**
     * Get deliveryAddressCity
     *
     * @return string
     */
    public function getDeliveryAddressCity()
    {
        return $this->deliveryAddressCity;
    }

    /**
     * Set deliveryAddressPostcode
     *
     * @param string $deliveryAddressPostcode
     *
     * @return Basket
     */
    public function setDeliveryAddressPostcode($deliveryAddressPostcode)
    {
        $this->deliveryAddressPostcode = $deliveryAddressPostcode;

        return $this;
    }

    /**
     * Get deliveryAddressPostcode
     *
     * @return string
     */
    public function getDeliveryAddressPostcode()
    {
        return $this->deliveryAddressPostcode;
    }

    /**
     * Set deliveryAddressCountry
     *
     * @param string $deliveryAddressCountry
     *
     * @return Basket
     */
    public function setDeliveryAddressCountry($deliveryAddressCountry)
    {
        $this->deliveryAddressCountry = $deliveryAddressCountry;

        return $this;
    }

    /**
     * Get deliveryAddressCountry
     *
     * @return string
     */
    public function getDeliveryAddressCountry()
    {
        return $this->deliveryAddressCountry;
    }

    /**
     * Set contactTel
     *
     * @param string $contactTel
     *
     * @return Basket
     */
    public function setContactTel($contactTel)
    {
        $this->contactTel = $contactTel;

        return $this;
    }

    /**
     * Get contactTel
     *
     * @return string
     */
    public function getContactTel()
    {
        return $this->contactTel;
    }

    /**
     * Set contactEmail
     *
     * @param string $contactEmail
     *
     * @return Basket
     */
    public function setContactEmail($contactEmail)
    {
        $this->contactEmail = $contactEmail;

        return $this;
    }

    /**
     * Get contactEmail
     *
     * @return string
     */
    public function getContactEmail()
    {
        return $this->contactEmail;
    }

    /**
     * Set paymentReference1
     *
     * @param string $paymentReference1
     *
     * @return Basket
     */
    public function setPaymentReference1($paymentReference1)
    {
        $this->paymentReference1 = $paymentReference1;

        return $this;
    }

    /**
     * Get paymentReference1
     *
     * @return string
     */
    public function getPaymentReference1()
    {
        return $this->paymentReference1;
    }

    /**
     * Set paymentReference2
     *
     * @param string $paymentReference2
     *
     * @return Basket
     */
    public function setPaymentReference2($paymentReference2)
    {
        $this->paymentReference2 = $paymentReference2;

        return $this;
    }

    /**
     * Get paymentReference2
     *
     * @return string
     */
    public function getPaymentReference2()
    {
        return $this->paymentReference2;
    }

    /**
     * Set paymentReference3
     *
     * @param string $paymentReference3
     *
     * @return Basket
     */
    public function setPaymentReference3($paymentReference3)
    {
        $this->paymentReference3 = $paymentReference3;

        return $this;
    }

    /**
     * Get paymentReference3
     *
     * @return string
     */
    public function getPaymentReference3()
    {
        return $this->paymentReference3;
    }

    /**
     * Set userComments
     *
     * @param string $userComments
     *
     * @return Basket
     */
    public function setUserComments($userComments)
    {
        $this->userComments = $userComments;

        return $this;
    }

    /**
     * Get userComments
     *
     * @return string
     */
    public function getUserComments()
    {
        return $this->userComments;
    }

    /**
     * Set adminComments
     *
     * @param string $adminComments
     *
     * @return Basket
     */
    public function setAdminComments($adminComments)
    {
        $this->adminComments = $adminComments;

        return $this;
    }

    /**
     * Get adminComments
     *
     * @return string
     */
    public function getAdminComments()
    {
        return $this->adminComments;
    }

    /**
     * Set trackingCompany
     *
     * @param string $trackingCompany
     *
     * @return Basket
     */
    public function setTrackingCompany($trackingCompany)
    {
        $this->trackingCompany = $trackingCompany;

        return $this;
    }

    /**
     * Get trackingCompany
     *
     * @return string
     */
    public function getTrackingCompany()
    {
        return $this->trackingCompany;
    }

    /**
     * Set trackingNumber
     *
     * @param string $trackingNumber
     *
     * @return Basket
     */
    public function setTrackingNumber($trackingNumber)
    {
        $this->trackingNumber = $trackingNumber;

        return $this;
    }

    /**
     * Get trackingNumber
     *
     * @return string
     */
    public function getTrackingNumber()
    {
        return $this->trackingNumber;
    }

    /**
     * Set requiresInvoice
     *
     * @param boolean $requiresInvoice
     *
     * @return Basket
     */
    public function setRequiresInvoice($requiresInvoice)
    {
        $this->requiresInvoice = $requiresInvoice;

        return $this;
    }

    /**
     * Get requiresInvoice
     *
     * @return bool
     */
    public function getRequiresInvoice()
    {
        return $this->requiresInvoice;
    }

    /**
     * Set paymentContactName
     *
     * @param string $paymentContactName
     *
     * @return Basket
     */
    public function setPaymentContactName($paymentContactName)
    {
        $this->paymentContactName = $paymentContactName;

        return $this;
    }

    /**
     * Get paymentContactName
     *
     * @return string
     */
    public function getPaymentContactName()
    {
        return $this->paymentContactName;
    }

    /**
     * Set paymentAddressLine1
     *
     * @param string $paymentAddressLine1
     *
     * @return Basket
     */
    public function setPaymentAddressLine1($paymentAddressLine1)
    {
        $this->paymentAddressLine1 = $paymentAddressLine1;

        return $this;
    }

    /**
     * Get paymentAddressLine1
     *
     * @return string
     */
    public function getPaymentAddressLine1()
    {
        return $this->paymentAddressLine1;
    }

    /**
     * Set paymentAddressLine2
     *
     * @param string $paymentAddressLine2
     *
     * @return Basket
     */
    public function setPaymentAddressLine2($paymentAddressLine2)
    {
        $this->paymentAddressLine2 = $paymentAddressLine2;

        return $this;
    }

    /**
     * Get paymentAddressLine2
     *
     * @return string
     */
    public function getPaymentAddressLine2()
    {
        return $this->paymentAddressLine2;
    }

    /**
     * Set paymentAddressLine3
     *
     * @param string $paymentAddressLine3
     *
     * @return Basket
     */
    public function setPaymentAddressLine3($paymentAddressLine3)
    {
        $this->paymentAddressLine3 = $paymentAddressLine3;

        return $this;
    }

    /**
     * Get paymentAddressLine3
     *
     * @return string
     */
    public function getPaymentAddressLine3()
    {
        return $this->paymentAddressLine3;
    }

    /**
     * Set paymentAddressCity
     *
     * @param string $paymentAddressCity
     *
     * @return Basket
     */
    public function setPaymentAddressCity($paymentAddressCity)
    {
        $this->paymentAddressCity = $paymentAddressCity;

        return $this;
    }

    /**
     * Get paymentAddressCity
     *
     * @return string
     */
    public function getPaymentAddressCity()
    {
        return $this->paymentAddressCity;
    }

    /**
     * Set paymentAddressPostcode
     *
     * @param string $paymentAddressPostcode
     *
     * @return Basket
     */
    public function setPaymentAddressPostcode($paymentAddressPostcode)
    {
        $this->paymentAddressPostcode = $paymentAddressPostcode;

        return $this;
    }

    /**
     * Get paymentAddressPostcode
     *
     * @return string
     */
    public function getPaymentAddressPostcode()
    {
        return $this->paymentAddressPostcode;
    }

    /**
     * Set paymentAddressCountry
     *
     * @param string $paymentAddressCountry
     *
     * @return Basket
     */
    public function setPaymentAddressCountry($paymentAddressCountry)
    {
        $this->paymentAddressCountry = $paymentAddressCountry;

        return $this;
    }

    /**
     * Get paymentAddressCountry
     *
     * @return string
     */
    public function getPaymentAddressCountry()
    {
        return $this->paymentAddressCountry;
    }

    /**
     * Set discount
     *
     * @param string $discount
     *
     * @return Basket
     */
    public function setDiscount($discount)
    {
        $this->discount = $discount;

        return $this;
    }

    /**
     * Get discount
     *
     * @return string
     */
    public function getDiscount()
    {
        return $this->discount;
    }

    /**
     * Set couponCode
     *
     * @param string $couponCode
     *
     * @return Basket
     */
    public function setCouponCode($couponCode)
    {
        $this->couponCode = $couponCode;

        return $this;
    }

    /**
     * Get couponCode
     *
     * @return string
     */
    public function getCouponCode()
    {
        return $this->couponCode;
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
     * @return Basket
     */
    public function setClient(Client $client)
    {
        $this->client = $client;
        $this->setCustomerFullName($client->getName());
        $this->setPaymentContactName($client->getName());
        $this->setContactEmail($client->getEmail());
        $this->setClientNationalId($client->getNationalId());

        return $this;
    }

    /**
     * @return BasketItem[]
     */
    public function getBasketItems()
    {
        return $this->basketItems;
    }

    /**
     * @param ArrayCollection|BasketItem[] $items
     *
     * @return Basket
     */
    public function setBasketItems($items)
    {
        foreach ($items as $item) {
            $this->addBasketItem($item);
        }

        return $this;
    }

    /**
     * @param BasketItem $item
     *
     * @return Basket
     */
    public function addBasketItem(BasketItem $item)
    {
        if ($item->getQuantity() < 1) {
            return;
        }

        $item->setBasket($this);
        $item->setLastModificationDate(new \DateTime());
        $this->basketItems->add($item);

        $this->weight += $item->getWeight();
        $this->size += $item->getSize();

        if ($item->getTaxPercentage() == 21) {
            $this->baseTax21 += $item->getSubTotal();
            $this->tax21 += $item->getTax();
        } else if ($item->getTaxPercentage() == 10) {
            $this->baseTax10 += $item->getSubTotal();
            $this->tax10 += $item->getTax();
        }

        if ($item->getTaxSurchargePercentage() == 1.4) {
            $this->baseSurcharge1p4 += $item->getSubTotal();
            $this->surcharge1p4 += $item->getTaxSurcharge();
        } else if ($item->getTaxSurchargePercentage() == 5.2) {
            $this->baseSurcharge5p2 += $item->getSubTotal();
            $this->surcharge5p2 += $item->getTaxSurcharge();
        }

        $this->itemSubtotal += $item->getSubTotal();
        $this->itemTaxTotal += $item->getTax();
        $this->itemTaxSurchargeTotal += $item->getTaxSurcharge();
        $this->itemTotal += $item->getTotal();

        $this->basketSubTotal += $item->getSubTotal();
        $this->basketTaxTotal += $item->getTax();
        $this->basketTaxSurchargeTotal += $item->getTaxSurcharge();
        $this->basketTotal += $item->getTotal();

        return $this;
    }

    /**
     * @param string$name
     *
     * @return BasketItem|null
     */
    public function getBasketItem($name)
    {
        foreach ($this->basketItems as $basketItem) {
           if ($basketItem->getProductName() == $name) {
               return $basketItem;
           }
        }

        return null;
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
     * @return Basket
     */
    public function setWeb($web)
    {
        $this->web = $web;

        return $this;
    }

    /**
     * @param BasketItem $item
     *
     * @return Basket
     */
    public function removeBasketItem(BasketItem $item)
    {
        $this->basketItems->removeElement($item);

        $item->setBasket(null);

        $this->weight -= $item->getWeight();
        $this->size -= $item->getSize();

        $this->itemSubtotal -= $item->getSubTotal();
        $this->itemTaxTotal -= $item->getTax();
        $this->itemTaxSurchargeTotal -= $item->getTaxSurcharge();
        $this->itemTotal -= $item->getTotal();

        $this->basketSubTotal -= $item->getSubTotal();
        $this->basketTaxTotal -= $item->getTax();
        $this->basketTaxSurchargeTotal -= $item->getTaxSurcharge();
        $this->basketTotal -= $item->getTotal();

        return $this;
    }

    /**
     * @return float
     */
    public function getBaseTax10()
    {
        return $this->baseTax10;
    }

    /**
     * @param float $baseTax10
     */
    public function setBaseTax10($baseTax10)
    {
        $this->baseTax10 = $baseTax10;
    }

    /**
     * @return float
     */
    public function getTax10()
    {
        return $this->tax10;
    }

    /**
     * @param float $tax10
     *
     * @return Basket
     */
    public function setTax10($tax10)
    {
        $this->tax10 = $tax10;

        return $this;
    }

    /**
     * @return float
     */
    public function getBaseTax21()
    {
        return $this->baseTax21;
    }

    /**
     * @param float $baseTax21
     *
     * @return Basket
     */
    public function setBaseTax21($baseTax21)
    {
        $this->baseTax21 = $baseTax21;

        return $this;
    }

    /**
     * @return float
     */
    public function getTax21()
    {
        return $this->tax21;
    }

    /**
     * @param float $tax21
     *
     * @return Basket
     */
    public function setTax21($tax21)
    {
        $this->tax21 = $tax21;

        return $this;
    }

    /**
     * @return float
     */
    public function getBaseSurcharge1p4()
    {
        return $this->baseSurcharge1p4;
    }

    /**
     * @param float $baseSurcharge1p4
     *
     * @return Basket
     */
    public function setBaseSurcharge1p4($baseSurcharge1p4)
    {
        $this->baseSurcharge1p4 = $baseSurcharge1p4;

        return $this;
    }

    /**
     * @return float
     */
    public function getSurcharge1p4()
    {
        return $this->surcharge1p4;
    }

    /**
     * @param float $surcharge1p4
     *
     * @return Basket
     */
    public function setSurcharge1p4($surcharge1p4)
    {
        $this->surcharge1p4 = $surcharge1p4;

        return $this;
    }

    /**
     * @return float
     */
    public function getBaseSurcharge5p2()
    {
        return $this->baseSurcharge5p2;
    }

    /**
     * @param float $baseSurcharge5p2
     *
     * @return Basket
     */
    public function setBaseSurcharge5p2($baseSurcharge5p2)
    {
        $this->baseSurcharge5p2 = $baseSurcharge5p2;

        return $this;
    }

    /**
     * @return float
     */
    public function getSurcharge5p2()
    {
        return $this->surcharge5p2;
    }

    /**
     * @param float $surcharge5p2
     *
     * @return Basket
     */
    public function setSurcharge5p2($surcharge5p2)
    {
        $this->surcharge5p2 = $surcharge5p2;

        return $this;
    }

    /**
     * @return String
     */
    public function getClientNationalId()
    {
        return $this->clientNationalId;
    }

    /**
     * @param Client $clientNationalId
     *
     * @return Basket
     */
    public function setClientNationalId($clientNationalId)
    {
        $this->clientNationalId = $clientNationalId;

        return $this;
    }

    /**
     * @return string
     */
    public function getWaybillNumber()
    {
        return sprintf('%09d', $this->id);
    }

    /**
     * @return string
     */
    public function getInvoiceNumber()
    {
        return $this->invoiceNumber;
    }

    /**
     * @param string $invoiceNumber
     *
     * @return Basket
     */
    public function setInvoiceNumber($invoiceNumber)
    {
        $this->invoiceNumber = $invoiceNumber;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getInvoiceDate()
    {
        return $this->invoiceDate;
    }

    /**
     * @param \DateTime $invoiceDate
     *
     * @return Basket
     */
    public function setInvoiceDate($invoiceDate)
    {
        $this->invoiceDate = $invoiceDate;

        return $this;
    }
}

