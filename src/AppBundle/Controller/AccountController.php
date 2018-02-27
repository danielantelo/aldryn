<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Address;
use AppBundle\Entity\Basket;
use AppBundle\Form\AddressType;
use AppBundle\Form\ChangePasswordType;
use AppBundle\Form\Model\ChangePassword;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AccountController extends BaseWebController
{
    /**
     * @Route("/mi-cuenta", name="my-account")
     * @Template("AppBundle:Web/Account:index.html.twig")
     */
    public function myAccountAction(Request $request)
    {
        $user = $this->getUser();
        $changePasswordModel = new ChangePassword();
        $form = $this->createForm(ChangePasswordType::class, $changePasswordModel);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user->setPassword($changePasswordModel->getNewPassword());
            $this->save($user);
            $this->addFlash('success', 'Contraseña actualizada');
            return $this->redirect($this->generateUrl('my-account'));
        }

        return $this->buildViewParams($request, [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/mi-cuenta/albaran/{id}", name="my-waybill")
     * @Template("AppBundle:Web/Account:waybill.html.twig")
     */
    public function myWaybillAction(Request $request, $id)
    {
        $order = $this->getDoctrine()
            ->getRepository(Basket::class)
            ->find($id);

        return $this->buildViewParams($request, [
            'order' => $order
        ]);
    }

    /**
     * @Route("/mi-cuenta/factura/{id}", name="my-invoice")
     * @Template("AppBundle:Web/Account:invoice.html.twig")
     */
    public function myInvoiceAction(Request $request, $id)
    {
        $order = $this->getDoctrine()
            ->getRepository(Basket::class)
            ->find($id);

        return $this->buildViewParams($request, [
            'order' => $order
        ]);
    }

    /**
     * @Route("/mi-cuenta/pedidos", name="my-orders")
     * @Template("AppBundle:Web/Account:orders.html.twig")
     */
    public function myOrdersAction(Request $request)
    {
        return $this->buildViewParams($request, [
        ]);
    }

    /**
     * @Route("/mi-cuenta/direcciones", name="my-addresses")
     * @Template("AppBundle:Web/Account:addresses.html.twig")
     */
    public function myAddressesAction(Request $request)
    {
        return $this->buildViewParams($request, [
        ]);
    }

    /**
     * @Route("/mi-cuenta/direcciones/{id}", name="my-addresses-edit")
     * @Template("AppBundle:Web/Account:address-edit.html.twig")
     */
    public function editAddressAction(Request $request, $id = null)
    {
        $user = $this->getUser();
        $address = $this->getDoctrine()
            ->getRepository(Address::class)
            ->find($id);

        if (!$address) {
            $address = new Address();
            $user->addAddress($address);
        }

        $form = $this->createForm(AddressType::class, $address);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->save($user);
            $this->save($address);
            return $this->redirect($this->generateUrl('my-addresses'));
        }

        return $this->buildViewParams($request, [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/login", name="login")
     * @Template("AppBundle:Web/Account:login.html.twig")
     */
    public function loginAction(Request $request, AuthenticationUtils $authUtils)
    {
        $error = $authUtils->getLastAuthenticationError();
        $lastUsername = $authUtils->getLastUsername();

        return $this->buildViewParams($request, [
            'last_username' => $lastUsername,
            'error'         => $error,
        ]);
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logoutAction()
    {
    }
}
