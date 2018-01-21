<?php

namespace AppBundle\Admin;

use Addressable\Bundle\Form\Type\AddressMapType;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class AddressAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
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
        ;
    } 
}
