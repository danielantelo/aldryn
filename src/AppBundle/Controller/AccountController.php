<?php

namespace AppBundle\Controller;

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
            'user' => $user,
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
