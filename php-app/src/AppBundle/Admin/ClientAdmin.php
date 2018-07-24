<?php

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class ClientAdmin extends AbstractAdmin
{
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->remove('delete');
    }

    public function getFilterParameters()
    {
        $this->datagridValues = array_merge(
            $this->datagridValues,
            [
                '_sort_by' => 'name',
                '_sort_order' => 'ASC',
            ]
        );
        return parent::getFilterParameters();
    }    

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('client.fieldset.general')
                ->add('originalClientNumber', 'hidden', [
                ])
                ->add('company', 'sonata_type_model', [
                    'label' => 'client.fields.company'
                ])
                ->add('webs', 'sonata_type_model', [
                    'label' => 'client.fields.webs',
                    'multiple' => true,
                    'by_reference' => false
                ])
                ->add('name', 'text', [
                    'label' => 'client.fields.name',
                ])            
                ->add('email', 'text', [
                    'label' => 'client.fields.email',
                ])
                ->add('nationalId', 'text', [
                    'label' => 'client.fields.nationalId',
                ])            
                ->add('password', 'text', [
                    'label' => 'client.fields.password',
                ])
                ->add('active', null, [
                    'label' => 'client.fields.active',
                ])
                ->add('newsletter', null, [
                    'label' => 'client.fields.newsletter',
                ])
                ->add('taxExemption', null, [
                    'label' => 'client.fields.taxExemption',
                ])
                ->add('surchargeExemption', null, [
                    'label' => 'client.fields.surchargeExemption',
                ])
                ->add('notes', 'textarea', [
                    'label' => 'client.fields.notes',
                    'required' => false,
                ])
            ->end()
        ;

        // if ($this->isCurrentRoute('edit')) {
            $formMapper
                ->with('client.fieldset.addresses')
                    ->add('addresses', 'sonata_type_collection', [
                        'by_reference' => false,
                        'label' => 'client.fields.addresses',
                    ], [
                        'edit' => 'inline',
                        'inline' => 'table',
                    ])
                ->end()
            ;
        // }
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name', null, [
                'label' => 'client.fields.name',
            ])
            ->add('nationalId', null, [
                'label' => 'client.fields.nationalId',
            ])
            ->add('email', null, [
                'label' => 'client.fields.email',
            ])
            ->add('active', null, [
                'label' => 'client.fields.active',
            ])
            ->add('webs', null, [
                'label' => 'client.fields.webs',
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', 'string', [
                'label' => 'client.fields.name',
            ])
            ->add('nationalId', 'string', [
                'label' => 'client.fields.nationalId',
            ])
            ->add('email', 'string', [
                'label' => 'client.fields.email',
            ])
            ->add('company', null, [
                'label' => 'client.fields.company',
            ])
            ->add('active', null, [
                'label' => 'client.fields.active',
            ])
            ->add('webs', null, [
                'label' => 'client.fields.webs',
            ])
        ;
    }  
}
