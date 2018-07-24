<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Product;
use AppBundle\Form\ContactForm;
use AppBundle\Form\Model\ContactMessage;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

class PageController extends BaseWebController
{
    /**
     * @Route("/", name="home")
     * @Template("AppBundle:Web/Page:home.html.twig")
     */
    public function homeAction(Request $request)
    {
        $repo = $this->getDoctrine()->getRepository(Product::class);

        return $this->buildViewParams($request, [
            'highlights' => $repo->getHighlights($this->getCurrentWeb($request), 10),
            'novelties' => $repo->getNovelties($this->getCurrentWeb($request), 10),
        ]);
    }

    /**
     * @Template("AppBundle:Web/Page:error.html.twig")
     */
    public function errorAction(Request $request)
    {
        $repo = $this->getDoctrine()->getRepository(Product::class);

        return $this->buildViewParams($request, [
            'highlights' => $repo->getHighlights($this->getCurrentWeb($request), 10),
            'novelties' => $repo->getNovelties($this->getCurrentWeb($request), 10),
        ]);
    }    

    /**
     * @Route("/contacto", name="contact")
     * @Template("AppBundle:Web/Page:contact.html.twig")
     */
    public function contactAction(Request $request, \Swift_Mailer $mailer)
    {
        $web = $this->getCurrentWeb($request);
        $user = $this->getUser();
        $contactMessage = new ContactMessage();
        if ($user) {
            $contactMessage->setName($user->getName());
            $contactMessage->setEmail($user->getEmail());
        }

        $form = $this->createForm(ContactForm::class, $contactMessage);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $email = (new \Swift_Message($contactMessage->getSubject()))
                ->setFrom("noreply@{$web->getName()}")
                ->addReplyTo($contactMessage->getEmail(), $contactMessage->getName())
                ->setTo($web->getContactEmail())
                ->setBody($contactMessage->getMessage(), 'text/plain');
            $mailer->send($email);
            $this->addFlash('success', 'Mensaje enviado');

            return $this->redirect($this->generateUrl('contact'));
        }

        return $this->buildViewParams($request, [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/empresa", name="about")
     * @Route("/nota-legal", name="legal")
     * @Route("/condiciones-uso", name="terms")
     * @Route("/pedidos-y-servicio", name="service")
     * @Template("AppBundle:Web/Page:basic.html.twig")
     */
    public function basicPageAction(Request $request)
    {
        $web = $this->getCurrentWeb($request);
        $routeName = $request->get('_route');
        $title = $this->get('translator')->trans("title.{$routeName}", [], 'web');

        switch ($routeName) {
            case 'about':
                $body = $web->getDescription();
                break;
            case 'legal':
                $body = $web->getLegalNote();
                break;
            case 'terms':
                $body = $web->getTermsOfUse();
                break;
            case 'service':
                $body = $web->getOrdersAndRefunds();
                break;
            default:
                $body = '';

        }

        return $this->buildViewParams($request, [
            'title' => $title,
            'body' => $body,
        ]);
    }
}
