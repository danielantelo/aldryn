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
            $quantity = $request->get('quantity');
            $price = $this->getPrice($request->get('priceId'));
            $product = $price->getProduct();
            $basketItem = $basket->getBasketItem($product->getName());
            $basket->removeBasketItem($basketItem);
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
        $quantity = $postData->quantity;
        $price = $this->getPrice($postData->priceId);
        $product = $price->getProduct();

        $basketItem = $basket->getBasketItem($product->getName());
        if ($basketItem) {
            $basket->removeBasketItem($basketItem);
        }

        if ($quantity > 0) {
            $basketItem = new BasketItem($quantity, $product, $price, $basket);
            $basket->addBasketItem($basketItem);
        } else {
            throw new \Exception('No se permite stock negativo');
        }

        return new JsonResponse([
            'quantity' => $quantity,
            'basketTotal' => $basket->getItemTotal(),
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
        
        try {
            $basket->setInvoiceAddress($this->getCurrentClient()->getInvoiceAddress());
        } catch (\Exception $e) {
            $this->addFlash('error', 'Hay un error con su dirección de facturación. Pongase en contacto con nosotros.');
            return $this->redirect($this->generateUrl('view-basket'));
        }

        try {
            $deliveryAddressData = $request->get('set_order_addresses');
            if ($deliveryAddressData['deliveryAddress'] == SetOrderAddressesType::$KEY_NEW) {
                $deliveryAddress = new Address();
                $deliveryAddress->setClient($this->getCurrentClient());
                $deliveryAddress->setCountry($deliveryAddressData['customDeliveryAddress']['country']);
                $deliveryAddress->setZipCode($deliveryAddressData['customDeliveryAddress']['zipCode']);
                $deliveryAddress->setStreetNumber($deliveryAddressData['customDeliveryAddress']['streetNumber']);
                $deliveryAddress->setStreetName($deliveryAddressData['customDeliveryAddress']['streetName']);
                $deliveryAddress->setCity($deliveryAddressData['customDeliveryAddress']['city']);
                $deliveryAddress->setTelephone($deliveryAddressData['customDeliveryAddress']['telephone']);
                $this->save($deliveryAddress);
            } else {
                $setOrderAddresses = new SetOrderAddresses();
                $form = $this->createForm(SetOrderAddressesType::class, $setOrderAddresses, ['user' => $this->getUser()]);
                $form->handleRequest($request);
                $deliveryAddress = $setOrderAddresses->getDeliveryAddress();
            }

            $basket->setDeliveryAddress($deliveryAddress);
        } catch (\Exception $e) {
            $this->addFlash('error', $e->getMessage());
            return $this->redirect($this->generateUrl('view-basket'));
        }

        return $this->buildViewParams($request, [
            'client' => $this->getCurrentClient()
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
                        'user' => $this->getUser()
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
