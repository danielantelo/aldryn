<?php

namespace AppBundle\Admin;

use AppBundle\Admin\Type\OrderViewType;
use AppBundle\Entity\Basket;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;

class OrderAdmin extends AbstractAdmin
{
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->remove('create');
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $object = $this->getSubject();

        $formMapper
            ->with('order.fieldset.general', array('class' => 'col-md-12'))
                ->add('basketReference', 'text', [
                    'disabled' => true,
                    'label' => 'order.fields.basketReference',
                ])
                ->add('web', 'sonata_type_model', [
                    'label' => 'order.fields.web',
                    'disabled' => true,
                    'btn_add' => false
                ])
                ->add('client', 'sonata_type_model', [
                    'label' => 'order.fields.client',
                    'disabled' => true,
                    'btn_add' => false
                ])
                ->add('clientNationalId', 'text', [
                    'label' => 'order.fields.nationalId',
                    'disabled' => true,
                ])
                ->add('contactTel', 'text', [
                    'label' => 'order.fields.contactTel',
                ])
                ->add('contactEmail', 'text', [
                    'label' => 'order.fields.contactEmail',
                ])
                ->add('weight', 'text', [
                    'label' => 'order.fields.weight',
                    'disabled' => true,
                ])
                ->add('size', 'text', [
                    'label' => 'order.fields.size',
                    'disabled' => true,
                ])
            ->end()
            ->with('order.fieldset.deliveryAddress', array('class' => 'col-md-6'))
                ->add('customerFullName', 'text', [
                    'label' => 'order.fields.customerFullName',
                ])
                ->add('deliveryAddressLine1', 'text', [
                    'label' => 'order.fields.deliveryAddressLine1',
                ])
                ->add('deliveryAddressLine2', 'text', [
                    'label' => 'order.fields.deliveryAddressLine2',
                ])
                ->add('deliveryAddressCity', 'text', [
                    'label' => 'order.fields.deliveryAddressCity',
                ])
                ->add('deliveryAddressPostcode', 'text', [
                    'label' => 'order.fields.deliveryAddressPostcode',
                ])
                ->add('deliveryAddressCountry', 'text', [
                    'label' => 'order.fields.deliveryAddressCountry',
                ])
            ->end()
            ->with('order.fieldset.invoiceAddress', array('class' => 'col-md-6'))
                ->add('paymentContactName', 'text', [
                    'label' => 'order.fields.paymentContactName',
                ])
                ->add('paymentAddressLine1', 'text', [
                    'label' => 'order.fields.paymentAddressLine1',
                ])
                ->add('paymentAddressLine2', 'text', [
                    'label' => 'order.fields.paymentAddressLine2',
                ])
                ->add('paymentAddressCity', 'text', [
                    'label' => 'order.fields.paymentAddressCity',
                ])
                ->add('paymentAddressPostcode', 'text', [
                    'label' => 'order.fields.paymentAddressPostcode',
                ])
                ->add('paymentAddressCountry', 'text', [
                    'label' => 'order.fields.paymentAddressCountry',
                ])
            ->end()
            ->with('order.fieldset.content', array('class' => 'col-md-12'))
                ->add('preview', OrderViewType::class, [
                    'required' => false,
                    'mapped' => false,
                    'label' => 'order.fields.content',
                    'order' => $object
                ])
            ->end()
            ->with('order.fieldset.status', array('class' => 'col-md-12'))
                ->add('status', 'choice', [
                    'label' => 'order.fields.status',
                    'choices' => array_combine(Basket::$STATUSES, Basket::$STATUSES),
                ])
                ->add('trackingCompany', 'text', [
                    'label' => 'order.fields.trackingCompany',
                    'required' => false
                ])
                ->add('trackingNumber', 'text', [
                    'label' => 'order.fields.trackingNumber',
                    'required' => false
                ])
            ->end()
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('basketReference', null, [
                'label' => 'order.fields.basketReference',
            ])
            ->add('client', null, [
                'label' => 'order.fields.client',
            ])
            ->add('web', null, [
                'label' => 'order.fields.web',
            ])
            ->add('checkoutDate', 'doctrine_orm_date_range', [
                'label' => 'order.fields.checkoutDate',
                'field_type'=>'sonata_type_date_range_picker'
            ])
            ->add('status', null, [
                'label' => 'order.fields.status',
            ])
            ->add('deliveryAddressCity', null, [
                'label' => 'order.fields.deliveryAddressCity',
            ])
            ->add('deliveryAddressCountry', null, [
                'label' => 'order.fields.deliveryAddressCountry',
            ])
            ->add('invoiceNumber', null, [
                'label' => 'order.fields.invoiceNumber',
            ])
        ;
    }

    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('basketReference', null, [
                'label' => 'order.fields.basketReference',
            ])
            ->add('status', null, [
                'label' => 'order.fields.status',
            ])
            ->add('checkoutDate', null, [
                'label' => 'order.fields.checkoutDate',
            ])
            ->add('client', null, [
                'label' => 'order.fields.client',
            ])
            ->add('web', null, [
                'label' => 'order.fields.web',
            ])
            ->add('basketTotal', null, [
                'label' => 'order.fields.basketTotal',
            ])
            ->add('deliveryAddressCity', null, [
                'label' => 'order.fields.deliveryAddressCity',
            ])
            ->add('invoiceNumber', null, [
                'label' => 'order.fields.invoiceNumber',
            ])
        ;
    }

    public function getFilterParameters()
    {
        $this->datagridValues = array_merge(
            $this->datagridValues,
            ['_per_page' => 192]
        );
        return parent::getFilterParameters();
    }

    public function preUpdate($order)
    {
        $isInvoiceable = $order->getStatus() == Basket::$STATUSES['payed'] || $order->getStatus() == Basket::$STATUSES['sent'];
        if (is_null($order->getInvoiceNumber()) && $isInvoiceable) {
            $order->setInvoiceDate(new \DateTime());
            $em = $this->modelManager->getEntityManager(Basket::class);
            $lastInvoiceNumber = $em->getRepository(Basket::class)->getLastInvoiceNumber();
            if ($lastInvoiceNumber) {
                $order->setInvoiceNumber($lastInvoiceNumber + 1);
            } else {
                $order->setInvoiceNumber(
                    sprintf('%d%06d', date('Y'), 1)
                );
            }
        }
    }
}
