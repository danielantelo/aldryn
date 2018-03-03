<?php

namespace AppBundle\Form\Model;

use Symfony\Component\Validator\Constraints as Assert;

class ContactMessage
{
    /**
     * @Assert\NotNull()
     */
    protected $name;

    /**
     * @Assert\NotNull()
     * @Assert\Email(
     *     message = "El email '{{ value }}' no es válido.",
     *     checkMX = true
     * )
     */
    protected $email;

    /**
     * @Assert\NotNull()
     */
    protected $subject;

    /**
     * @Assert\NotNull()
     */
    protected $message;

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     *
     * @return ContactMessage
     */
    public function setName($name)
    {
        $this->name = $name;

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
     * @param string $email
     *
     * @return ContactMessage
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return string
     */
    public function getSubject()
    {
        return $this->subject;
    }

    /**
     * @param string $subject
     *
     * @return ContactMessage
     */
    public function setSubject($subject)
    {
        $this->subject = $subject;

        return $this;
    }

    /**
     * @return string
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * @param string $message
     *
     * @return ContactMessage
     */
    public function setMessage($message)
    {
        $this->message = $message;

        return $this;
    }
}
