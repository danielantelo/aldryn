<?php

namespace AppBundle\Form\Model;

use Symfony\Component\Validator\Constraints as Assert;

class ChangePrivacy
{
    protected $newsletter;

    protected $cookies;

    /**
     * @return boolean
     */
    public function getNewsletter()
    {
        return $this->newsletter;
    }

    /**
     * @param boolean $newsletter
     */
    public function setNewsletter($newsletter)
    {
        $this->newsletter = $newsletter;
    }

    /**
     * @return boolean
     */
    public function getCookies()
    {
        return $this->cookies;
    }

    /**
     * @param boolean $newPassword
     */
    public function setCookies($cookies)
    {
        $this->cookies = $cookies;
    }
}
