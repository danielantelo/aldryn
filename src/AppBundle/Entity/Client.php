<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Client
 *
 * @ORM\Table(name="client")
 * @ORM\Entity
 */
class Client
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
     * @var Company
     *
     * @ORM\ManyToOne(targetEntity="Company")
     */
    private $company;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=50)
     */
    private $password;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="national_id", type="string", length=255)
     */
    private $nationalId;

    /**
     * @var bool
     *
     * @ORM\Column(name="active", type="boolean")
     */
    private $active;

    /**
     * @var bool
     *
     * @ORM\Column(name="newsletter", type="boolean")
     */
    private $newsletter;

    /**
     * @var bool
     *
     * @ORM\Column(name="tax_exemption", type="boolean")
     */
    private $taxExemption;

    /**
     * @var bool
     *
     * @ORM\Column(name="surcharge_exemption", type="boolean")
     */
    private $surchargeExemption;

    /**
     * @var string
     *
     * @ORM\Column(name="notes", type="text", nullable=true)
     */
    private $notes;

    /**
     * @ORM\OneToMany(targetEntity="Address", mappedBy="client", cascade={"all"}, orphanRemoval=true)
     */
    private $addresses;

    /**
     * @return string
     */
    public function __toString()
    {
        return (string) $this->name;
    }
    
    public function __construct()
    {
        $this->addresses = new ArrayCollection();
    }    

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param string $email
     *
     * @return Client
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param string $password
     *
     * @return Client
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param string $name
     *
     * @return Client
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $nationalId
     *
     * @return Client
     */
    public function setNationalId($nationalId)
    {
        $this->nationalId = $nationalId;

        return $this;
    }

    /**
     * @return string
     */
    public function getNationalId()
    {
        return $this->nationalId;
    }

    /**
     * @param boolean $active
     *
     * @return Client
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }

    /**
     * @return bool
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * @param boolean $newsletter
     *
     * @return Client
     */
    public function setNewsletter($newsletter)
    {
        $this->newsletter = $newsletter;

        return $this;
    }

    /**
     * @return bool
     */
    public function getNewsletter()
    {
        return $this->newsletter;
    }

    /**
     * @param boolean $taxExemption
     *
     * @return Client
     */
    public function setTaxExemption($taxExemption)
    {
        $this->taxExemption = $taxExemption;

        return $this;
    }

    /**
     * @return bool
     */
    public function getTaxExemption()
    {
        return $this->taxExemption;
    }

    /**
     * @param boolean $surchargeExemption
     *
     * @return Client
     */
    public function setSurchargeExemption($surchargeExemption)
    {
        $this->surchargeExemption = $surchargeExemption;

        return $this;
    }

    /**
     * @return bool
     */
    public function getSurchargeExemption()
    {
        return $this->surchargeExemption;
    }

    /**
     * @param string $notes
     *
     * @return Client
     */
    public function setNotes($notes)
    {
        $this->notes = $notes;

        return $this;
    }

    /**
     * @return string
     */
    public function getNotes()
    {
        return $this->notes;
    }

    /**
     * @return ArrayCollection
     */
    public function getAddresses()
    {
        return $this->addresses;
    }

    /**
     * @return Client
     */
    public function setAddresses($addresses)
    {
        foreach ($address as $address) {
            $this->addAddress($address);
        }

        return $this;
    }

    /**
     * @param Address $address
     * 
     * @return Client
     */
    public function addAddress(Address $address)
    {
        $address->setClient($this);
        $this->addresses->add($address);

        return $this;
    }

    /**
     * @param Address $address
     * 
     * @return Client
     */
    public function removeAddress(Address $address)
    {
        $this->addresses->removeElement($address);

        return $this;
    }

    /**
     * @return Company
     */
    public function getCompany()
    {
        return $this->company;
    }

    /**
     * @param Company $company
     *
     * @return Client
     */
    public function setCompany($company)
    {
        $this->company = $company;

        return $this;
    }
}

