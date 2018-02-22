<?php

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class FranchiseAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('name', 'text', [
                'required' => true,
                'label' => 'franchise.fields.name',
            ])
            ->add('email', 'text', [
                'required' => true,
                'label' => 'franchise.fields.email',
            ])
            ->add('password', 'text', [
                'required' => true,
                'label' => 'franchise.fields.password',
            ])
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name', null, [
                'label' => 'franchise.fields.name',
            ])
            ->add('email', null, [
                'label' => 'franchise.fields.email',
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', 'string', [
                'label' => 'franchise.fields.name',
            ])
            ->add('email', null, [
                'label' => 'franchise.fields.email',
            ])
        ;
    }  
}
