<?php

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class CompanyAdmin extends AbstractAdmin
{
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->remove('delete');
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('company.fieldset.general', array('class' => 'col-md-6'))
                ->add('name', 'text', [
                    'label' => 'company.fields.name',
                ])
                ->add('companyId', 'text', [
                    'label' => 'company.fields.companyId',
                ])
                ->add('paymentInstructions', 'sonata_simple_formatter_type', [
                    'label' => 'company.fields.paymentInstructions',
                    'format' => 'richhtml',
                    'ckeditor_context' => 'default',
                ])
            ->end()
            ->with('company.fieldset.address', array('class' => 'col-md-6'))
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
                ])
                ->add('fax', 'text', [
                    'label' => 'address.fields.fax',
                    'required' => false
                ])
            ->end()
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name', null, [
                'label' => 'company.fields.name',
            ])
            ->add('companyId', null, [
                'label' => 'company.fields.companyId',
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', 'string', [
                'label' => 'company.fields.name',
            ])
            ->add('companyId', 'string', [
                'label' => 'company.fields.companyId',
            ])
        ;
    }
}
