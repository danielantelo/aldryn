<?php

namespace AppBundle\Controller;

use AppBundle\Form\ContactForm;
use AppBundle\Form\Model\ContactMessage;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

class SandboxController extends BaseWebController
{
    /**
     * @Route("/test-thumb", name="test-thumb")
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
     * @Route("/test-email", name="test-email")
     * @Template("AppBundle:Web/Tests:testEmail.html.twig")
     */
    public function sendEmail(\Swift_Mailer $mailer)
    {
        $message = (new \Swift_Message('Hello Email'))
            ->setFrom('noreply@centralgrab.com')
            ->setTo('danielanteloagra@gmail.com')
            ->setBody(
                $this->renderView('AppBundle:Web/Tests:testEmail.html.twig', []),
                'text/html'
            )
        ;

        $mailer->send($message);

        return [];
    }
}
