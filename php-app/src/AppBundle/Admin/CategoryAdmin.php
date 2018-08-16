<?php

namespace AppBundle\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;

class CategoryAdmin extends AbstractAdmin
{
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
        $em = $this->modelManager->getEntityManager('AppBundle\Entity\Category');
        $parentCategoriesQuery = $em->createQueryBuilder('c')
            ->select('c')
            ->from('AppBundle:Category', 'c')
            ->where('c.parent IS NULL');

        $formMapper
            ->add('name', 'text', [
                'required' => true,
                'label' => 'category.fields.name',
            ])
            ->add('parent', 'sonata_type_model', [
                'required' => false,
                'label' => 'category.fields.parent',
                'query' => $parentCategoriesQuery
            ])
            ->add('webs', 'sonata_type_model', [
                'label' => 'category.fields.webs',
                'multiple' => true,
                'by_reference' => false
            ])
            ->add('url', 'text', [
                'required' => false,
                'disabled'  => true,
                'label' => 'category.fields.url',
            ])
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name', null, [
                'label' => 'category.fields.name',
            ])
            ->add('parent', null, [
                'label' => 'category.fields.parent',
            ])
            ->add('webs', null, [
                'label' => 'category.fields.webs',
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', 'string', [
                'label' => 'category.fields.name',
            ])
            ->add('parent', null, [
                'label' => 'category.fields.parent',
            ])
            ->add('webs', null, [
                'label' => 'category.fields.webs',
            ])
        ;
    }  
}
