<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Basket;
use AppBundle\Entity\BasketItem;
use AppBundle\Entity\Company;
use AppBundle\Form\SetOrderAddressesType;
use AppBundle\Form\Model\SetOrderAddresses;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

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
        }

        return new JsonResponse([
            'quantity' => $quantity,
            'basketTotal' => $basket->getItemTotal(),
        ]);
    }    

    /**
     * @Route("/pedido/pago", name="checkout-basket")
     * @Method({"POST"})
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
        $form = $this->createForm(SetOrderAddressesType::class, $setOrderAddresses, array('user' => $this->getUser()));
        $form->handleRequest($request);
        $basket->setClient($this->getUser());
        $basket->setWeb($this->getCurrentWeb($request));
        $basket->setInvoiceAddress($setOrderAddresses->getInvoiceAddress());

        try {
            $basket->setDeliveryAddress($setOrderAddresses->getDeliveryAddress());
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
    public function finaliseOrderAction(Request $request, \Swift_Mailer $mailer)
    {
        $web = $this->getCurrentWeb($request);
        $conf = $web->getConfiguration();
        $basket = $this->getCurrentBasket($request);

        if (!$basket || sizeof($basket->getBasketItems()) < 1) {
            return $this->redirect($this->generateUrl('view-basket'));
        }

        $basket->setClient($this->getUser());
        $basket->setCheckoutDate(new \DateTime());
        $basket->setStatus(Basket::$STATUSES['pending']);
        $this->save($basket);

        try {
            $message = (new \Swift_Message("Pedido {$web->getName()}"))
            ->setFrom("noreply@{$web->getName()}")
            ->setTo($basket->getClient()->getEmail())
            ->addCc($conf->getOrderNotificationEmail())
            ->addCc('danielanteloagra@gmail.com')
            ->setBody(
                $this->renderView('AppBundle:Web/Account:waybill.html.twig', [
                    'order' => $basket,
                    'user' => $this->getUser()
                ]),
                'text/html'
            );
            $mailer->send($message);
        } catch (\Exception $e) {}

        // reduce stocks
        foreach ($basket->getBasketItems() as $basketItem) {
            $product = $basketItem->getProduct();
            $product->setStock($product->getStock() - $basketItem->getQuantity());
            $this->save($product);

            // email if stock limit reached
            try {
                if ($product->getStock() <= $conf->getStockAlertQuantity()) {
                    $message = (new \Swift_Message("ALERTA STOCK BAJO: {$product->getName()}"))
                        ->setFrom('noreply@centralgrab.com')
                        ->setTo($conf->getStockAlertEmail())
                        ->addCc('danielanteloagra@gmail.com')
                        ->setBody("El producto {$product->getName()} se esta quedando sin stock", 'text/plain');
                    $mailer->send($message);
                }
            } catch (\Exception $e) {}
        }

        $request->getSession()->set('basket', null);

        return $this->buildViewParams($request, [
            'order' => $basket
        ]);
    }
}
