<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Product;
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
        $img = 'media/image/product/rebucados-de-frutas-masticabel-cramelos-de-frutas-masticable-de-100-gramos-caja-de-20-unidades-01.jpeg';
        $filesystem = $this->get('knp_gaufrette.filesystem_map')->get('filesystem_aws_s3_images');
        $file = $filesystem->get($img);
        dump($file);
        
        return [
            'image' => $img
        ];
    }

    /**
     * @Route("/test-all-products", name="test-all-products")
     * @Template("AppBundle:Web/Product:index.html.twig")
     */
    public function testAllProductsAction(Request $request)
    {
        $products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->findBy(['active' => true], ['id' => 'ASC'], 500);

        return $this->buildViewParams($request, [
            'title' => 'All products',
            'products' => []
        ]);
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
