<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Basket;
use AppBundle\Entity\BasketItem;
use AppBundle\Form\SetOrderAddressesType;
use AppBundle\Form\Model\SetOrderAddresses;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
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
        $basket = $request->getSession()->get('basket');

        $setOrderAddresses = new SetOrderAddresses();
        $form = $this->createForm(SetOrderAddressesType::class, $setOrderAddresses, [
            'user' => $this->getUser(),
            'action' => $this->generateUrl('checkout-basket'),
            'method' => 'POST',
        ]);

        if ($request->isMethod('POST') && $request->get('quantity')) {
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
     * @Route("/pedido/pago", name="checkout-basket")
     * @Method({"POST"})
     * @Template("AppBundle:Web/Basket:checkout.html.twig")
     */
    public function checkoutBasketAction(Request $request)
    {
        /** @var Basket $basket */
        $basket = $request->getSession()->get('basket');

        if (!$basket || sizeof($basket->getBasketItems()) < 1) {
            return $this->redirect($this->generateUrl('view-basket'));
        }

        $setOrderAddresses = new SetOrderAddresses();
        $form = $this->createForm(SetOrderAddressesType::class, $setOrderAddresses, array('user' => $this->getUser()));
        $form->handleRequest($request);
        $basket->setClient($this->getUser());
        $basket->setWeb($this->getCurrentWeb($request));
        $basket->setDeliveryAddress($setOrderAddresses->getDeliveryAddress());
        $basket->setInvoiceAddress($setOrderAddresses->getInvoiceAddress());

        return $this->buildViewParams($request, [
        ]);
    }

    /**
     * @Route("/pedido/completar", name="finalise-order")
     * @Method({"POST"})
     * @Template("AppBundle:Web/Basket:confirmation.html.twig")
     */
    public function finaliseOrderAction(Request $request)
    {
        /** @var Basket $basket */
        $basket = $request->getSession()->get('basket');

        if (!$basket || sizeof($basket->getBasketItems()) < 1) {
            return $this->redirect($this->generateUrl('view-basket'));
        }

        $basket->setClient($this->getUser());
        $basket->setCompany($this->getUser()->getCompany());
        $basket->setCheckoutDate(new \DateTime());
        $basket->setStatus(Basket::$STATUSES['pending']);
        $this->save($basket);

        // @TODO email

        // reduce stocks
        foreach ($basket->getBasketItems() as $basketItem) {
            $product = $basketItem->getProduct();
            $product->setStock($product->getStock() - $basketItem->getQuantity());
            $this->save($product);
            // @TODO email if stock limit reached
        }

        $request->getSession()->set('basket', null);

        return $this->buildViewParams($request, [
            'order' => $basket
        ]);
    }
}
