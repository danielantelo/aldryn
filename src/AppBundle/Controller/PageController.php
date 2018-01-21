<?php

namespace AppBundle\Controller;

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
        return $this->buildViewParams($request, []);
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
