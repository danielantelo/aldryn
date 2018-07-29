<?php

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Form\FormMapper;

class AddressAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('name', 'text', [
                'label' => 'address.fields.name',
            ])        
            ->add('streetNumber', 'text', [
                'label' => 'address.fields.streetNumber',
            ])
            ->add('streetName', 'text', [
                'label' => 'address.fields.streetName',
            ])
            ->add('city', 'text', [
                'label' => 'address.fields.city',
            ])
            ->add('zipCode', 'text', [
                'label' => 'address.fields.zipCode',
            ])
            ->add('country', 'text', [
                'label' => 'address.fields.country',
            ])
            ->add('telephone', 'text', [
                'label' => 'address.fields.telephone',
                'required' => false,
            ])
            ->add('invoiceable', 'checkbox', [
                'label' => 'address.fields.invoiceable',
                'required' => false,
            ])
        ;
    } 
}
