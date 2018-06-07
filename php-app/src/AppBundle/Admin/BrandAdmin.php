<?php

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class BrandAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('name', 'text', [
                'required' => true,
                'label' => 'brand.fields.name',
            ])
            ->add('description', 'textarea', [
                'required' => false,
                'label' => 'brand.fields.description',
            ])
            ->add('webs', 'sonata_type_model', [
                'label' => 'category.fields.webs',
                'multiple' => true,
                'by_reference' => false
            ])
            ->add('url', 'text', [
                'required' => false,
                'disabled'  => true,
                'label' => 'brand.fields.url',
            ])
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name', null, [
                'label' => 'brand.fields.name',
            ])
            ->add('webs', null, [
                'label' => 'category.fields.webs',
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', null, [
                'label' => 'brand.fields.name',
            ])
            ->add('webs', null, [
                'label' => 'category.fields.webs',
            ])
        ;
    }  
}
