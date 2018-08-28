<?php

namespace AppBundle\Admin;

use AppBundle\Admin\Type\OrderViewType;
use AppBundle\Entity\Basket;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class OrderItemAdmin extends AbstractAdmin
{   
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->remove('create');
        $collection->remove('delete');
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $object = $this->getSubject();

        $formMapper
            ->add('productName', null, [
                'disabled' => true,
                'label' => 'orderItem.fields.productName',
                'disabled' => true
            ])
            ->add('pricePerUnit', null, [
                'label' => 'orderItem.fields.pricePerUnit',
            ])
            ->add('quantity', null, [
                'label' => 'orderItem.fields.quantity',
            ])
            ->add('stockCodes', null, [
                'label' => 'orderItem.fields.stockCodes',
            ])
            ->add('subTotal', null, [
                'label' => 'orderItem.fields.subTotal',
            ])
            ->add('taxPercentage', null, [
                'label' => 'orderItem.fields.taxPercentage',
            ])
            ->add('tax', null, [
                'label' => 'orderItem.fields.tax',
            ])
            ->add('taxSurchargePercentage', null, [
                'label' => 'orderItem.fields.taxSurchargePercentage',
            ])
            ->add('taxSurcharge', null, [
                'label' => 'orderItem.fields.taxSurcharge',
            ])
            ->add('total', null, [
                'label' => 'orderItem.fields.total',
            ])
            ->add('weight', null, [
                'label' => 'orderItem.fields.weight',
            ])
            ->add('size', null, [
                'label' => 'orderItem.fields.size',
            ])
        ;
    }
}
