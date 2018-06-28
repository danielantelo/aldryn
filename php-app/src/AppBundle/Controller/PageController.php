<?php

namespace AppBundle\Controller;

use AppBundle\Form\ContactForm;
use AppBundle\Form\Model\ContactMessage;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

class PageController extends BaseWebController
{
    /**
     * @Route("/test_thumb", name="thumb")
     * @Template("AppBundle:Web/Tests:testThumb.html.twig")
     */
    public function testThumbAction()
    {
        $img = 'media/image/product/abadie-medium-1-1-4-caja-de-50-libritos-01.jpeg';
        $img = 'media/image/product/abadie-500-01.jpeg';
        $filesystem = $this->get('knp_gaufrette.filesystem_map')->get('filesystem_aws_s3_images');
        $file = $filesystem->get($img);
        dump($file);
        
        return [
            'image' => $img
        ];
    }

    /**
     * @Route("/", name="home")
     * @Template("AppBundle:Web/Page:home.html.twig")
     */
    public function homeAction(Request $request)
    {
        return $this->buildViewParams($request, []);
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
            $user->setName($user->getName());
            $user->setEmail($user->getEmail());
        }

        $form = $this->createForm(ContactForm::class, $contactMessage);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $email = (new \Swift_Message($contactMessage->getSubject()))
                ->setFrom($web->getContactEmail())
                ->setTo($web->getContactEmail())
                ->setBody($contactMessage->getMessage(),'text/plain');
            $mailer->send($email);
            $this->addFlash('success', 'Contraseña actualizada');

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
        $title = $this->get('translator')->trans(sprintf('title.%s', $routeName), [], 'web');

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
