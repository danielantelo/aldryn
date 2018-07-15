<?php

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class ConfigurationAdmin extends AbstractAdmin
{
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->remove('delete');
        $collection->remove('create');
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $object = $this->getSubject();
        
        $formMapper
            ->with('configuration.fieldset.web', array('class' => 'col-md-12'))
                ->add('web', 'sonata_type_model', [
                    'label' => 'price.fields.web',
                    'multiple' => false,
                    'by_reference' => false
                ])
            ->end()
            ->with('configuration.fieldset.tax', array('class' => 'col-md-6'))
                ->add('internationalTax', 'choice', [
                    'label' => 'configuration.fields.internationalTax',
                    'choices' => ['No' => 0]
                ])
                ->add('deliveryTax', 'choice', [
                    'label' => 'configuration.fields.deliveryTax',
                    'choices' => ['0%' => '0.00', '10%' => '10.00', '21%' => '21.00']
                ])
                ->add('deliveryTaxSurcharge', 'choice', [
                    'label' => 'configuration.fields.deliveryTaxSurcharge',
                    'choices' => ['0%' => '0.00', '1.4%' => '1.40', '5.2%' => '5.20']
                ])
            ->end()
            ->with('configuration.fieldset.alerts', array('class' => 'col-md-6'))
                ->add('orderNotificationEmail', 'text', [
                    'label' => 'configuration.fields.orderNotificationEmail',
                ])
                ->add('stockAlertEmail', 'text', [
                    'label' => 'configuration.fields.stockAlertEmail',
                ])
                ->add('stockAlertQuantity', 'number', [
                    'label' => 'configuration.fields.stockAlertQuantity',
                ])
            ->end()
            ->with('configuration.fieldset.orders', array('class' => 'col-md-6'))
                ->add('minSpendRegional', 'number', [
                    'label' => 'configuration.fields.minSpendRegional',
                ])
                ->add('minSpendNational', 'number', [
                    'label' => 'configuration.fields.minSpendNational',
                ])
                ->add('minSpendIslands', 'number', [
                    'label' => 'configuration.fields.minSpendIslands',
                ])
                ->add('minSpendInternational', 'number', [
                    'label' => 'configuration.fields.minSpendInternational',
                ])
                
                ->add('freeDeliveryRegionalLimit', 'number', [
                    'label' => 'configuration.fields.freeDeliveryRegionalLimit',
                ])
                ->add('freeDeliveryNationalLimit', 'number', [
                    'label' => 'configuration.fields.freeDeliveryNationalLimit',
                ])
                ->add('freeDeliveryIslandsLimit', 'number', [
                    'label' => 'configuration.fields.freeDeliveryIslandsLimit',
                ])
                ->add('freeDeliveryInternationalLimit', 'number', [
                    'label' => 'configuration.fields.freeDeliveryInternationalLimit',
                ])
            ->end()
            ->with('configuration.fieldset.delivery', array('class' => 'col-md-6'))
                ->add('deliveryType', 'choice', [
                    'label' => 'configuration.fields.deliveryType',
                    'choices' => [
                        'configuration.choice.size' => 'size',
                        'configuration.choice.weight' => 'weight',
                        'configuration.choice.pallet' => 'pallet'
                    ]
                ])
            ->end()
        ;

        if ($object->getDeliveryType() == 'pallet') {
            $formMapper->with('configuration.fieldset.delivery', array('class' => 'col-md-6'))
                ->add('palletT1Max', 'text', [
                    'label' => 'configuration.fields.palletT1Max',
                ])
                ->add('palletT1RegionalCost', 'text', [
                    'label' => 'configuration.fields.palletT1RegionalCost',
                ])
                ->add('palletT1IslandsCost', 'text', [
                    'label' => 'configuration.fields.palletT1IslandsCost',
                ])
                ->add('palletT1NationalCost', 'text', [
                    'label' => 'configuration.fields.palletT1NationalCost',
                ])
                ->add('palletT1InternationalCost', 'text', [
                    'label' => 'configuration.fields.palletT1InternationalCost',
                ])

                ->add('palletT2Max', 'text', [
                    'label' => 'configuration.fields.palletT2Max',
                ])
                ->add('palletT2RegionalCost', 'text', [
                    'label' => 'configuration.fields.palletT2RegionalCost',
                ])
                ->add('palletT2IslandsCost', 'text', [
                    'label' => 'configuration.fields.palletT2IslandsCost',
                ])
                ->add('palletT2NationalCost', 'text', [
                    'label' => 'configuration.fields.palletT2NationalCost',
                ])
                ->add('palletT2InternationalCost', 'text', [
                    'label' => 'configuration.fields.palletT2InternationalCost',
                ])

                ->add('palletT3Max', 'text', [
                    'label' => 'configuration.fields.palletT3Max',
                ])
                ->add('palletT3RegionalCost', 'text', [
                    'label' => 'configuration.fields.palletT3RegionalCost',
                ])
                ->add('palletT3IslandsCost', 'text', [
                    'label' => 'configuration.fields.palletT3IslandsCost',
                ])
                ->add('palletT3NationalCost', 'text', [
                    'label' => 'configuration.fields.palletT3NationalCost',
                ])
                ->add('palletT3InternationalCost', 'text', [
                    'label' => 'configuration.fields.palletT3InternationalCost',
                ])

                ->add('palletT4Max', 'text', [
                    'label' => 'configuration.fields.palletT4Max',
                ])
                ->add('palletT4RegionalCost', 'text', [
                    'label' => 'configuration.fields.palletT4RegionalCost',
                ])
                ->add('palletT4IslandsCost', 'text', [
                    'label' => 'configuration.fields.palletT4IslandsCost',
                ])
                ->add('palletT4NationalCost', 'text', [
                    'label' => 'configuration.fields.palletT4NationalCost',
                ])
                ->add('palletT4InternationalCost', 'text', [
                    'label' => 'configuration.fields.palletT4InternationalCost',
                ])
            ->end();            
        } else {
            $formMapper->with('configuration.fieldset.delivery', array('class' => 'col-md-6'))
            ->add('deliveryRegional', 'text', [
                'label' => 'configuration.fields.deliveryRegional',
            ])
            ->add('deliveryNational', 'text', [
                'label' => 'configuration.fields.deliveryNational',
            ])
            ->add('deliveryIslands', 'text', [
                'label' => 'configuration.fields.deliveryIslands',
            ])
            ->add('deliveryInternational', 'text', [
                'label' => 'configuration.fields.deliveryInternational',
            ])
            ->add('deliveryBaseAmount', 'text', [
                'label' => 'configuration.fields.deliveryBaseAmount',
            ])
            ->add('deliveryExcessAmount', 'text', [
                'label' => 'configuration.fields.deliveryExcessAmount',
            ])
            ->add('deliveryExcessMultiplierRegional', 'text', [
                'label' => 'configuration.fields.deliveryExcessMultiplierRegional',
            ])
            ->add('deliveryExcessMultiplierNational', 'text', [
                'label' => 'configuration.fields.deliveryExcessMultiplierNational',
            ])
            ->add('deliveryExcessMultiplierInternational', 'text', [
                'label' => 'configuration.fields.deliveryExcessMultiplierInternational',
            ])                
            ->add('deliveryExcessMultiplierIslands', 'text', [
                'label' => 'configuration.fields.deliveryExcessMultiplierIslands',
            ])
        ->end();
        }

        if ($object->getDeliveryType() == 'size') {
            $formMapper->with('configuration.fieldset.delivery', array('class' => 'col-md-6'))
                ->add('islandsPricePerAdditionalKg', 'text', [
                    'label' => 'configuration.fields.islandsPricePerAdditionalKg',
                ])
            ->end();
        }
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('web', null, [
                'label' => 'configuration.fields.web',
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('web', 'string', [
                'label' => 'configuration.fields.web',
            ])
        ;
    }
}
