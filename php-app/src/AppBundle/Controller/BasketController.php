<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Address;
use AppBundle\Entity\Basket;
use AppBundle\Entity\BasketItem;
use AppBundle\Entity\Client;
use AppBundle\Entity\Company;
use AppBundle\Form\SetOrderAddressesType;
use AppBundle\Form\Model\SetOrderAddresses;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Psr\Log\LoggerInterface;

class BasketController extends BaseWebController
{
    /**
     * @Route("/pedido/", name="view-basket")
     * @Template("AppBundle:Web/Basket:index.html.twig")
     */
    public function viewAction(Request $request)
    {
        /** @var Basket $basket */
        $basket = $this->getCurrentBasket($request);

        $setOrderAddresses = new SetOrderAddresses();
        $form = $this->createForm(SetOrderAddressesType::class, $setOrderAddresses, [
            'user' => $this->getUser(),
            'action' => $this->generateUrl('checkout-basket'),
            'method' => 'POST',
        ]);
        $form->add('save', SubmitType::class, array('label' => 'Continuar'));

        if ($request->isMethod('POST')) {
            $quantity = abs($request->get('quantity'));
            $price = $this->getPrice($request->get('priceId'));
            $product = $price->getProduct();
            
            // @TODO move this to addBasketItem
            $basketItem = $basket->getBasketItem($product->getName());
            if ($basketItem) {
                $basket->removeBasketItem($basketItem);
            }

            if ($quantity > 0) {
                $basketItem = new BasketItem($quantity, $product, $price, $basket);
                $basket->addBasketItem($basketItem);
            }
        }

        return $this->buildViewParams($request, [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/add-to-basket", name="add_to_basket")
     * @Method({"POST"})
     */
    public function addToBasketAction(Request $request)
    {
        $basket = $this->getCurrentBasket($request);

        $postData = json_decode($request->getContent());
        $quantity = abs($postData->quantity);
        $price = $this->getPrice($postData->priceId);
        $product = $price->getProduct();

        // @TODO move this to addBasketItem
        $basketItem = $basket->getBasketItem($product->getName());
        if ($basketItem) {
            $basket->removeBasketItem($basketItem);
        }

        if ($quantity > 0) {
            $basketItem = new BasketItem($quantity, $product, $price, $basket);
            $basket->addBasketItem($basketItem);
        }

        return new JsonResponse([
            'quantity' => $quantity,
            'basketTotal' => $basket->getItemTotal(),
        ]);
    }

    /**
     * @Route("/admin/modify-order", name="modify_order")
     * @Method({"POST"})
     */
    public function modifyOrderAction(Request $request, \Swift_Mailer $mailer, LoggerInterface $logger)
    {
        $postData = json_decode($request->getContent());
        $orderId = $postData->orderId;
        $action = $postData->action;
        $order = $this->getBasket($orderId);
        $oldStatus = $order->getStatus();
        $notifyClient = true;

        switch($action) {
            case 'cancel':
                // @TODO move this to a service (repeated in OrderAdmin preUpdate)
                $order->setStatus(Basket::$STATUSES['cancelled']);
                foreach ($order->getBasketItems() as $basketItem) {
                    $product = $basketItem->getProduct();
                    if ($product) {
                        $product->setStock($product->getStock() + $basketItem->getQuantity());
                        $this->save($product);
                    }
                }
                break;
            case 'markPayed':
                $order->setStatus(Basket::$STATUSES['payed']);
                break;
            case 'markSent':
                $order->setStatus(Basket::$STATUSES['sent']);
                break;
            case 'generateInvoice':
                $notifyClient = false;
                // @TODO move this to a service (repeated in OrderAdmin preUpdate)
                $setNew = false;
                $order->setInvoiceDate(new \DateTime());
                $lastInvoiceNumber = $this->getDoctrine()->getRepository(Basket::class)->getLastInvoiceNumber($order);
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
                break;
            default:
                throw new \Exception('Invalid action');
        }
        $this->save($order);

        if ($notifyClient) {
            try {
                $message = (new \Swift_Message("Actualización de su pedido en {$order->getWeb()->getName()}: Ref {$order->getBasketReference()}"))
                    ->setFrom("noreply@{$order->getWeb()->getName()}")
                    ->setTo($order->getClient()->getEmail())
                    ->setBody(
                        $this->renderView('AppBundle:Admin/Email:order_status_update.html.twig', [
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

        return new JsonResponse([
            'orderId' => $order->getId(),
            'orderReference' => $order->getBasketReference(),
            'oldStatus' => $oldStatus,
            'newStatus' => $order->getStatus(),
            'invoiceNumber' => $order->getInvoiceNumber() ?: '',
            'invoiceDate' => $order->getInvoiceDate() ? $order->getInvoiceDate()->format('d/m/y') : ''
        ]);
    }    

    /**
     * @Route("/pedido/pago", name="checkout-basket")
     * @Template("AppBundle:Web/Basket:checkout.html.twig")
     */
    public function checkoutBasketAction(Request $request)
    {
        /** @var Basket $basket */
        $basket = $this->getCurrentBasket($request);

        if (!$basket || sizeof($basket->getBasketItems()) < 1) {
            return $this->redirect($this->generateUrl('view-basket'));
        }

        $setOrderAddresses = new SetOrderAddresses();
        $form = $this->createForm(SetOrderAddressesType::class, $setOrderAddresses, ['user' => $this->getCurrentClient()]);
        
        try {
            $basket->setInvoiceAddress($this->getCurrentClient()->getInvoiceAddress());
        } catch (\Exception $e) {
            $this->addFlash('error', 'Hay un error con su dirección de facturación. Pongase en contacto con nosotros.');
            return $this->redirect($this->generateUrl('view-basket'));
        }

        $deliveryAddressData = $request->get('set_order_addresses');
        if ($deliveryAddressData['deliveryAddress'] == 'new') {
            $deliveryAddress = new Address();
            $deliveryAddress->setClient($this->getCurrentClient());
            $newAddressData = $deliveryAddressData['customDeliveryAddress'];

            if (!$newAddressData['zipCode'] || !$newAddressData['streetNumber'] || !$newAddressData['city']) {
                $this->addFlash('error', 'Debe rellenar la dirección de enviío');
                return $this->redirect($this->generateUrl('view-basket'));
            }

            $deliveryAddress->setName($newAddressData['name']);
            $deliveryAddress->setCountry($newAddressData['country']);
            $deliveryAddress->setZipCode($newAddressData['zipCode']);
            $deliveryAddress->setStreetNumber($newAddressData['streetNumber']);
            $deliveryAddress->setStreetName($newAddressData['streetName']);
            $deliveryAddress->setCity($newAddressData['city']);
            $deliveryAddress->setTelephone($newAddressData['telephone']);
            $this->save($deliveryAddress);
        } else {
            $form->handleRequest($request);
            $deliveryAddress = $setOrderAddresses->getDeliveryAddress();
        }

        try {
            $basket->setDeliveryAddress($deliveryAddress);
        } catch (\Exception $e) {
            $this->addFlash('error', $e->getMessage());
            return $this->redirect($this->generateUrl('view-basket'));
        }

        return $this->buildViewParams($request, [
        ]);
    }

    /**
     * @Route("/pedido/completar", name="finalise-order")
     * @Template("AppBundle:Web/Basket:confirmation.html.twig")
     */
    public function finaliseOrderAction(Request $request, \Swift_Mailer $mailer, LoggerInterface $logger)
    {
        $web = $this->getCurrentWeb($request);
        $conf = $web->getConfiguration();
        $basket = $this->getCurrentBasket($request);

        if (!$basket || sizeof($basket->getBasketItems()) < 1) {
            return $this->redirect($this->generateUrl('view-basket'));
        }

        $basket->setCheckoutDate(new \DateTime());
        $basket->setStatus(Basket::$STATUSES['pending']);
        $basket->setUserComments($request->get('userComments'));
        $this->save($basket);

        try {
            $message = (new \Swift_Message("NUEVO PEDIDO {$web->getName()}: Ref {$basket->getBasketReference()}"))
                ->setFrom("noreply@{$web->getName()}")
                ->setTo($basket->getClient()->getEmail())
                ->addCc($conf->getOrderNotificationEmail())
                ->setBody(
                    $this->renderView('AppBundle:Web/Account:waybill.html.twig', [
                        'order' => $basket,
                        'user' => $this->getCurrentClient() // @TODO hack to fix client company not being in session
                    ]),
                    'text/html'
                );
            $mailer->send($message);
        } catch (\Exception $e) {
            $logger->critical('Error sending order email!', [
                'cause' => $e->getMessage(),
            ]);
        }

        try {
            // reduce stocks
            foreach ($basket->getBasketItems() as $basketItem) {
                $product = $basketItem->getProduct();
                $product->setStock($product->getStock() - $basketItem->getQuantity());
                $this->save($product);

                // email if stock limit reached
                if ($product->getStock() <= $conf->getStockAlertQuantity()) {
                    $message = (new \Swift_Message("ALERTA STOCK BAJO: {$product->getName()}"))
                        ->setFrom("noreply@{$web->getName()}")
                        ->setTo($conf->getStockAlertEmail())
                        ->setBody(
                            "El producto {$product->getName()} se esta quedando sin stock, solo quedan: {$product->getStock()}",
                            'text/plain'
                        );
                    $mailer->send($message);
                }
            }
        } catch (\Exception $e) {
            $logger->critical('Error sending stock alert email!', [
                'cause' => $e->getMessage(),
            ]);
        }

        $request->getSession()->set('basket', null);

        return $this->buildViewParams($request, [
            'order' => $basket
        ]);
    }
}
