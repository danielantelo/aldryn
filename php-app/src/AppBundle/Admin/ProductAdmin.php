<?php

namespace AppBundle\Admin;

use AppBundle\Admin\Type\IncrementalNumberType;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class ProductAdmin extends AbstractAdmin
{
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->remove('delete');
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $em = $this->modelManager->getEntityManager('AppBundle\Entity\Category');
        $categoriesQuery = $em->createQueryBuilder('c')
            ->select('c')
            ->from('AppBundle:Category', 'c')
            ->where('c.parent IS NOT NULL');
            
        $formMapper
            ->with('product.fieldset.general', array('class' => 'col-md-6'))
                ->add('active', null, [
                    'label' => 'product.fields.active',
                ])
                ->add('highlight', null, [
                    'label' => 'product.fields.highlight',
                ])
                ->add('name', 'text', [
                    'required' => true,
                    'label' => 'product.fields.name',
                ])
                ->add('franchise', 'sonata_type_model', [
                    'label' => 'product.fields.franchise',
                    'required' => false,
                ])
                ->add('brand', 'sonata_type_model', [
                    'label' => 'product.fields.brand'
                ])
                ->add('category', 'sonata_type_model', [
                    'label' => 'product.fields.category',
                    'query' => $categoriesQuery
                ])
                ->add('url', 'text', [
                    'required' => false,
                    'disabled'  => true,
                    'label' => 'product.fields.url',
                ])
            ->end()
            ->with('product.fieldset.availability', array('class' => 'col-md-6'))
                ->add('webs', 'sonata_type_model', [
                    'label' => 'product.fields.webs',
                    'multiple' => true,
                    'by_reference' => false
                ])
                ->add('stock', IncrementalNumberType::class, [
                    'label' => 'product.fields.stock',
                ])
                ->add('tax', 'choice', [
                    'label' => 'product.fields.tax',
                    'choices' => ['0%' => '0.00', '10%' => '10.00', '21%' => '21.00']
                ])
                ->add('surcharge', 'choice', [
                    'label' => 'product.fields.surcharge',
                    'choices' => ['0%' => '0.00', '1.4%' => '1.40', '5.2%' => '5.20']
                ])              
            ->end()
            ->with('product.fieldset.pricing')
                ->add('prices', 'sonata_type_collection', [
                    'by_reference' => false,
                    'label' => 'product.fields.price',
                ], [
                    'edit' => 'inline',
                    'inline' => 'table',
                ])
            ->end()
        ;

        $formMapper
            ->with('product.fieldset.description')
                ->add('weight', 'number', [
                    'label' => 'product.fields.weight',
                ])
                ->add('width', 'number', [
                    'label' => 'product.fields.width',
                ])
                ->add('height', 'number', [
                    'label' => 'product.fields.height',
                ])
                ->add('length', 'number', [
                    'label' => 'product.fields.length',
                ])
                ->add('size', 'number', [
                    'required' => false,
                    'disabled'  => true,
                    'label' => 'product.fields.size',
                ])
                ->add('spirals', 'number', [
                    'label' => 'product.fields.spirals',
                ])
                ->add('shortDescription', 'text', [
                    'required' => true,
                    'label' => 'product.fields.shortDescription',
                ])
                ->add('description', 'sonata_simple_formatter_type', [
                    'required' => true,
                    'label' => 'product.fields.description',
                    'format' => 'richhtml',
                    'ckeditor_context' => 'default',
                ])
            ->end();

        if (!$this->isCurrentRoute('create')) {
            $formMapper
                ->with('product.fieldset.media')
                    ->add('mediaItems', 'sonata_type_collection', [
                        'by_reference' => false,
                        'label' => 'product.fields.media',
                    ], [
                        'edit' => 'inline',
                        'inline' => 'table',
                    ])
                ->end()
            ;
        }
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('name', null, [
                'label' => 'product.fields.name',
            ])
            ->add('franchise', null, [
                'label' => 'product.fields.franchise',
            ])  
            ->add('category', null, [
                'label' => 'product.fields.category',
            ])
            ->add('brand', null, [
                'label' => 'product.fields.brand',
            ])
            ->add('active', null, [
                'label' => 'product.fields.active',
            ])
            ->add('highlight', null, [
                'label' => 'product.fields.highlight',
            ])
            ->add('webs', null, [
                'label' => 'category.fields.webs',
            ])
            ->add('stock', null, [
                'label' => 'product.fields.stock',
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('name', 'string', [
                'label' => 'product.fields.name',
            ])
            ->add('franchise', null, [
                'label' => 'product.fields.franchise',
            ])
            ->add('category', null, [
                'label' => 'product.fields.category',
            ])
            ->add('brand', null, [
                'label' => 'product.fields.brand',
            ])
            ->add('webs', null, [
                'label' => 'category.fields.webs',
            ])
            ->add('active', null, [
                'label' => 'product.fields.active',
            ])
            ->add('highlight', null, [
                'label' => 'product.fields.highlight',
            ])
            ->add('stock', null, [
                'label' => 'product.fields.stock',
            ])
        ;
    }

    public function getFilterParameters()
    {
        $this->datagridValues = array_merge(
            $this->datagridValues,
            ['_per_page' => 128]
        );
        return parent::getFilterParameters();
    }
}
