<?php

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class WebAdmin extends AbstractAdmin
{
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->remove('create');
        $collection->remove('delete');
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('web.fieldset.general', array('class' => 'col-md-6'))
                ->add('name', 'text', [
                    'disabled' => true,
                    'label' => 'web.fields.name',
                ])
            ->end()
            ->with('web.fieldset.contact', array('class' => 'col-md-6'))
                ->add('contactEmail', 'text', [
                    'label' => 'web.fields.email',
                ])
                ->add('contactTelephone', 'text', [
                    'label' => 'web.fields.telephone',
                ])
            ->end()
            ->with('web.fieldset.meta')
                ->add('metaTitle', 'text', [
                    'label' => 'web.fields.metaTitle',
                ])
                ->add('metaDescription', 'text', [
                    'label' => 'web.fields.metaDescription',
                ])
                ->add('metaKeywords', 'text', [
                    'label' => 'web.fields.metaKeywords',
                ])
            ->end()
            ->with('web.fieldset.home')
                ->add('title', 'text', [
                    'label' => 'web.fields.title',
                ])
                ->add('intro', 'sonata_simple_formatter_type', [
                    'label' => 'web.fields.intro',
                    'format' => 'richhtml',
                    'ckeditor_context' => 'default',
                ])
                ->add('sliderImages', 'sonata_type_collection', [
                    'by_reference' => false,
                    'label' => 'web.fields.sliderImages',
                ], [
                    'edit' => 'inline',
                    'inline' => 'table',
                ])
            ->end()
            ->with('web.fieldset.messages')
                ->add('signupMessage', 'textarea', [
                    'label' => 'web.fields.signupMessage',
                ])
            ->end()
            ->with('web.fieldset.information')
                ->add('description', 'sonata_simple_formatter_type', [
                    'label' => 'web.fields.description',
                    'format' => 'richhtml',
                    'ckeditor_context' => 'default',
                ])
                ->add('ordersAndRefunds', 'sonata_simple_formatter_type', [
                    'label' => 'web.fields.ordersAndRefunds',
                    'format' => 'richhtml',
                    'ckeditor_context' => 'default',
                ])
                ->add('termsOfUse', 'sonata_simple_formatter_type', [
                    'label' => 'web.fields.termsOfUse',
                    'format' => 'richhtml',
                    'ckeditor_context' => 'default',
                ])
                ->add('legalNote', 'sonata_simple_formatter_type', [
                    'label' => 'web.fields.legalNote',
                    'format' => 'richhtml',
                    'ckeditor_context' => 'default',
                ])
            ->end()
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name', null, [
                'label' => 'web.fields.name',
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', 'string', [
                'label' => 'web.fields.name',
            ])
            ->add('contactEmail', 'string', [
                'label' => 'web.fields.contactEmail',
            ])
            ->add('contactTelephone', 'string', [
                'label' => 'web.fields.contactTelephone',
            ])
        ;
    }
}
