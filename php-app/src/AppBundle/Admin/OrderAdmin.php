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
    public function configure() {
        $this->setTemplate('list', 'AppBundle:Admin/CRUD:list__order.html.twig');
    }

    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->remove('create');
        $collection->remove('delete');
    }

    public function getFilterParameters()
    {
        $this->datagridValues = array_merge(
            $this->datagridValues,
            [
                '_per_page' => 128,
                '_sort_by' => 'status',
                '_sort_order' => 'DESC',
            ]
        );
        return parent::getFilterParameters();
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $object = $this->getSubject();

        $formMapper
            ->with('order.fieldset.status', array('class' => 'col-md-12'))
                ->add('status', 'choice', [
                    'label' => 'order.fields.status',
                    'choices' => array_combine(Basket::$STATUSES, Basket::$STATUSES),
                ])
                ->add('notifyClient', 'checkbox', [
                    'label' => 'order.fields.notifyClient',
                    'required' => false,
                    'mapped' => false,
                ])
            ->end();

        if (!$object->getInvoiceNumber()) {
            $formMapper->with('order.fieldset.status', array('class' => 'col-md-12'))
                ->add('generateInvoice', 'checkbox', [
                    'label' => 'order.fields.generateInvoice',
                    'required' => false,
                    'mapped' => false,
                ])
            ->end();
        } else {
            $formMapper->with('order.fieldset.status', array('class' => 'col-md-12'))
                ->add('invoiceNumber', null, [
                    'label' => 'order.fields.invoiceNumber',
                    'required' => false,
                    'disabled' => true,
                ])
                ->add('invoiceDate', null, [
                    'label' => 'order.fields.invoiceDate',
                    'required' => false
                ])
            ->end();
        }

        $formMapper
            ->with('order.fieldset.status', array('class' => 'col-md-12'))
                ->add('waybillNumber', 'text', [
                    'label' => 'order.fields.waybillNumber',
                    'required' => false,
                    'disabled' => true,
                    'mapped' => false,
                    'data' => $object->getWaybillNumber()
                ])
                ->add('trackingCompany', 'text', [
                    'label' => 'order.fields.trackingCompany',
                    'required' => false
                ])
                ->add('trackingNumber', 'text', [
                    'label' => 'order.fields.trackingNumber',
                    'required' => false
                ])
                ->add('userComments', 'textarea', [
                    'label' => 'order.fields.userComments',
                    'required' => false
                ])
                ->add('adminComments', 'textarea', [
                    'label' => 'order.fields.adminComments',
                    'required' => false
                ])
            ->end()
            ->with('order.fieldset.general', array('class' => 'col-md-12'))
                ->add('basketReference', 'text', [
                    'disabled' => true,
                    'label' => 'order.fields.basketReference',
                ])
                ->add('checkoutDate', null, [
                    'disabled' => true,
                    'label' => 'order.fields.checkoutDate',
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
                    'required' => false
                ])
                ->add('contactEmail', 'text', [
                    'label' => 'order.fields.contactEmail',
                ])
            ->end()
            ->with('order.fieldset.deliveryAddress', array('class' => 'col-md-6'))
                ->add('deliveryFullName', 'text', [
                    'label' => 'order.fields.deliveryFullName',
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
            ->with('order.fieldset.editContent', array('class' => 'col-md-12'))
                ->add('basketItems', 'sonata_type_collection', [
                    'by_reference' => false,
                    'label' => 'order.fields.items',
                    'btn_add' => false,
                    'type_options' => ['delete' => false]
                ], [
                    'edit' => 'inline',
                    'inline' => 'table',
                ])
            ->end()
            ->with('order.fieldset.editContentItemTotals', array('class' => 'col-md-4'))
                ->add('itemSubtotal', null, [
                    'label' => 'order.fields.itemSubtotal',
                ])
                ->add('itemTaxTotal', null, [
                    'label' => 'order.fields.itemTaxTotal',
                ])
                ->add('itemTaxSurchargeTotal', null, [
                    'label' => 'order.fields.itemTaxSurchargeTotal',
                ])
                ->add('itemTotal', null, [
                    'label' => 'order.fields.itemTotal',
                ])
            ->end()
            ->with('order.fieldset.editContentDelivery', array('class' => 'col-md-4'))
                ->add('delivery', null, [
                    'label' => 'order.fields.delivery',
                ])
                ->add('deliveryTax', null, [
                    'label' => 'order.fields.deliveryTax',
                ])
                ->add('deliveryTaxSurcharge', null, [
                    'label' => 'order.fields.deliveryTaxSurcharge',
                ])
                ->add('deliveryTotal', null, [
                    'label' => 'order.fields.deliveryTotal',
                ])
            ->end()
            ->with('order.fieldset.editContentTotals', array('class' => 'col-md-4'))
                ->add('basketSubTotal', null, [
                    'label' => 'order.fields.basketSubTotal',
                ])
                ->add('basketTaxTotal', null, [
                    'label' => 'order.fields.basketTaxTotal',
                ])
                ->add('basketTaxSurchargeTotal', null, [
                    'label' => 'order.fields.basketTaxSurchargeTotal',
                ])
                ->add('basketTotal', null, [
                    'label' => 'order.fields.basketTotal',
                ])
                ->add('weight', null, [
                    'label' => 'order.fields.weight',
                ])
                ->add('size', null, [
                    'label' => 'order.fields.size',
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
            ->add('invoiceDate', 'doctrine_orm_date_range', [
                'label' => 'order.fields.invoiceDate',
            ])
            ->add('basketTotal', null, [
                'label' => 'order.fields.basketTotal',
            ])
            ->add('contactEmail', null, [
                'label' => 'order.fields.contactEmail',
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
            ->add('checkoutDate', 'date', [
                'label' => 'order.fields.checkoutDate',
                'format' => 'd/m/y'
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
            ->add('invoiceDate', 'date', [
                'label' => 'order.fields.invoiceDate',
                'format' => 'd/m/y'
            ])
            ->add('acciones', null, [
                'mapped' => false,
                'template' => 'AppBundle:Admin/CRUD:list__order-actions.html.twig'
            ])
        ;
    }

    public function preUpdate($order)
    {
        $container = $this->getConfigurationPool()->getContainer();

        try {
            $restoreStock = $this->getForm()->get('restoreStock')->getData();
            $em = $container->get('doctrine.orm.entity_manager');
            foreach ($order->getBasketItems() as $basketItem) {
                $product = $basketItem->getProduct();
                if ($product) {
                    $product->setStock($product->getStock() + $basketItem->getQuantity());
                    $em->persist($product);
                }
            }
            $em->flush();
        } catch (\Exception $e) {}

        $notifyClient = $this->getForm()->get('notifyClient')->getData();
        if ($notifyClient) {
            try {
                $mailer = $container->get('mailer');
                $templating = $container->get('templating');
                $message = (new \Swift_Message("Actualización de su pedido en {$order->getWeb()->getName()}: Ref {$order->getBasketReference()}"))
                    ->setFrom("noreply@{$order->getWeb()->getName()}")
                    ->setTo($order->getClient()->getEmail())
                    ->setBody(
                        $templating->render('AppBundle:Admin/Email:order_status_update.html.twig', [
                            'order' => $order
                        ]),
                        'text/html'
                    );
                $mailer->send($message);
            } catch (\Exception $e) {
                $logger->critical('Error sending order email!', [
                    'cause' => $e->getMessage(),
                ]);
            }
        }
        
        if ($this->getForm()->has('generateInvoice')) {
            $generateInvoice = $this->getForm()->get('generateInvoice')->getData();
            if ($generateInvoice) {
                $setNew = false;
                $order->setInvoiceDate(new \DateTime());
                $em = $this->modelManager->getEntityManager(Basket::class);
                $lastInvoiceNumber = $em->getRepository(Basket::class)->getLastInvoiceNumber($order);
                if ($lastInvoiceNumber) {
                    $isSameYear = strpos((string) $lastInvoiceNumber, date('Y')) !== false;
                    if ($isSameYear) {
                        $order->setInvoiceNumber($lastInvoiceNumber + 1);
                    } else {
                        $setNew = true;
                    }
                } else {
                    $setNew = true;
                }

                if ($setNew) {
                    $order->setInvoiceNumber(
                        sprintf('%d%06d', date('Y'), 1)
                    );
                }
            }
        }
    }

    public function getExportFormats()
    {
        return ['csv', 'informe.html', 'albaranes.html', 'facturas.html', 'nacex-formulario.html', 'nacex-direcciones.html'];
    }
}
