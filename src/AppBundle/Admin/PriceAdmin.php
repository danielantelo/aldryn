<?php

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Form\FormMapper;

class PriceAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('web', 'sonata_type_model', [
                'label' => 'price.fields.web',
                'multiple' => false,
                'by_reference' => false
            ])

            ->add('price1', 'text', [
                'label' => 'price.fields.price1',
            ])
            ->add('price1Unit', 'text', [
                'label' => 'price.fields.price1Unit',
                'required' => false,
            ])
            ->add('price1QuantityMax', 'text', [
                'label' => 'price.fields.price1QuantityMax',
                'required' => false,
            ])

            ->add('price2', 'text', [
                'label' => 'price.fields.price2',
                'required' => false,
            ])
            ->add('price2Unit', 'text', [
                'label' => 'price.fields.price2Unit',
                'required' => false,
            ])
            ->add('price2QuantityMax', 'text', [
                'label' => 'price.fields.price2QuantityMax',
                'required' => false,
            ])

            ->add('price3', 'text', [
                'label' => 'price.fields.price3',
                'required' => false,
            ])
            ->add('price3Unit', 'text', [
                'label' => 'price.fields.price3Unit',
                'required' => false,
            ])

        ;
    }
}
