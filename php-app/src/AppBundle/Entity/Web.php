<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Web
 *
 * @ORM\Table(name="web")
 * @ORM\Entity
 */
class Web
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
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="meta_title", type="string", length=255)
     */
    private $metaTitle;

    /**
     * @var string
     *
     * @ORM\Column(name="meta_description", type="text")
     */
    private $metaDescription;

    /**
     * @var string
     *
     * @ORM\Column(name="meta_keywords", type="string", length=255)
     */
    private $metaKeywords;

    /**
     * @var string
     *
     * @ORM\Column(name="contact_email", type="string", length=255)
     */
    private $contactEmail;

    /**
     * @var string
     *
     * @ORM\Column(name="contact_telephone", type="string", length=255)
     */
    private $contactTelephone;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="text")
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="intro", type="text")
     */
    private $intro;

    /**
     * @var string
     *
     * @ORM\Column(name="sign_up_message", type="text")
     */
    private $signUpMessage;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="terms_of_use", type="text")
     */
    private $termsOfUse;

    /**
     * @var string
     *
     * @ORM\Column(name="legal_note", type="text")
     */
    private $legalNote;

    /**
     * @var string
     *
     * @ORM\Column(name="orders_and_refunds", type="text")
     */
    private $ordersAndRefunds;

    /**
     * @var Category[]
     *
     * @ORM\ManyToMany(targetEntity="Category", mappedBy="webs")
     * @ORM\OrderBy({"name" = "ASC"})
     */
    private $categories;

    /**
     * @var Brand[]
     *
     * @ORM\ManyToMany(targetEntity="Brand", mappedBy="webs")
     * @ORM\OrderBy({"name" = "ASC"})
     */
    private $brands;

    /**
     * @ORM\OneToMany(targetEntity="SliderImage", mappedBy="web", cascade={"all"}, orphanRemoval=true)
     */
    private $sliderImages;

    /**
     * @var Configuration
     *
     * @ORM\OneToOne(targetEntity="Configuration", mappedBy="web")
     */
    private $configuration;

    /**
     * @var string
     *
     * @ORM\Column(name="paymentInstructions", type="text")
     */
    private $paymentInstructions;    

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->name;
    }

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->sliderImages = new ArrayCollection();
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
     * Set name
     *
     * @param string $name
     *
     * @return Web
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set metaTitle
     *
     * @param string $metaTitle
     *
     * @return Web
     */
    public function setMetaTitle($metaTitle)
    {
        $this->metaTitle = $metaTitle;

        return $this;
    }

    /**
     * Get metaTitle
     *
     * @return string
     */
    public function getMetaTitle()
    {
        return $this->metaTitle;
    }

    /**
     * Set metaDescription
     *
     * @param string $metaDescription
     *
     * @return Web
     */
    public function setMetaDescription($metaDescription)
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    /**
     * Get metaDescription
     *
     * @return string
     */
    public function getMetaDescription()
    {
        return $this->metaDescription;
    }

    /**
     * Set metaKeywords
     *
     * @param string $metaKeywords
     *
     * @return Web
     */
    public function setMetaKeywords($metaKeywords)
    {
        $this->metaKeywords = $metaKeywords;

        return $this;
    }

    /**
     * Get metaKeywords
     *
     * @return string
     */
    public function getMetaKeywords()
    {
        return $this->metaKeywords;
    }

    /**
     * Set contactEmail
     *
     * @param string $contactEmail
     *
     * @return Web
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
     * Set contactTelephone
     *
     * @param string $contactTelephone
     *
     * @return Web
     */
    public function setContactTelephone($contactTelephone)
    {
        $this->contactTelephone = $contactTelephone;

        return $this;
    }

    /**
     * Get contactTelephone
     *
     * @return string
     */
    public function getContactTelephone()
    {
        return $this->contactTelephone;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $description
     *
     * @return Web
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return string
     */
    public function getTermsOfUse()
    {
        return $this->termsOfUse;
    }

    /**
     * @param string $termsOfUse
     *
     * @return Web
     */
    public function setTermsOfUse($termsOfUse)
    {
        $this->termsOfUse = $termsOfUse;

        return $this;
    }

    /**
     * @return string
     */
    public function getLegalNote()
    {
        return $this->legalNote;
    }

    /**
     * @param string $legalNote
     *
     * @return Web
     */
    public function setLegalNote($legalNote)
    {
        $this->legalNote = $legalNote;

        return $this;
    }

    /**
     * @return string
     */
    public function getOrdersAndRefunds()
    {
        return $this->ordersAndRefunds;
    }

    /**
     * @param string $ordersAndRefunds
     *
     * @return Web
     */
    public function setOrdersAndRefunds($ordersAndRefunds)
    {
        $this->ordersAndRefunds = $ordersAndRefunds;

        return $this;
    }

    /**
     * @return string
     */
    public function getIntro()
    {
        return $this->intro;
    }

    /**
     * @param string $intro
     *
     * @return Web
     */
    public function setIntro($intro)
    {
        $this->intro = $intro;

        return $this;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     *
     * @return Web
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return Category[]
     */
    public function getCategories()
    {
        return $this->categories;
    }

    /**
     * @return Brand[]
     */
    public function getBrands()
    {
        return $this->brands;
    }


    /**
     * @return ArrayCollection
     */
    public function getSliderImages()
    {
        return $this->sliderImages;
    }

    /**
     * @param ArrayCollection $sliderImages
     *
     * @return Web
     */
    public function setSliderImages($sliderImages)
    {
        foreach ($sliderImages as $item) {
            $this->addSliderImage($item);
        }

        return $this;
    }

    /**
     * @param SliderImage $media
     *
     * @return Web
     */
    public function addSliderImage(SliderImage $media)
    {
        $media->setWeb($this);
        $this->sliderImages->add($media);

        return $this;
    }

    /**
     * @param SliderImage $media
     *
     * @return Web
     */
    public function removeSliderImage(SliderImage $media)
    {
        $this->sliderImages->removeElement($media);

        return $this;
    }

    /**
     * @return string
     */
    public function getSignUpMessage()
    {
        return $this->signUpMessage;
    }

    /**
     * @param string $signUpMessage
     *
     * @return Web
     */
    public function setSignUpMessage($signUpMessage)
    {
        $this->signUpMessage = $signUpMessage;

        return $this;
    }

    /**
     * @return Configuration
     */
    public function getConfiguration()
    {
        return $this->configuration;
    }

    /**
     * @param Configuration $configuration
     *
     * @return Web
     */
    public function setConfiguration($configuration)
    {
        $this->configuration = $configuration;

        return $this;
    }

    /**
     * @return string
     */
    public function getPaymentInstructions()
    {
        return $this->paymentInstructions;
    }

    /**
     * @param string $paymentInstructions
     *
     * @return Company
     */
    public function setPaymentInstructions($paymentInstructions)
    {
        $this->paymentInstructions = $paymentInstructions;

        return $this;
    }        
}

