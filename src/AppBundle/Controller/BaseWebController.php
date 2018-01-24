<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Web;

class BaseWebController extends Controller
{
    /**
     * @param Request $request
     *
     * @return Web
     */
    protected function getCurrentWeb(Request $request)
    {
        $name = parse_url($request->getUri())['host'];
        // replace known subdomains
        $name = str_replace('www.', '', $name);
        $name = str_replace('aldryn.', '', $name);
        $name = str_replace('pruebas.', '', $name);
        $name = str_replace('desarrollo.', '', $name);

        if ($this->container->hasParameter('web')) {
            $name = $this->getParameter('web');
        }

        return $this->getDoctrine()
            ->getRepository(Web::class)
            ->findByName($name)[0];
    }

    protected function getCurrentWebId(Request $request)
    {
        return $this->getCurrentWeb($request)->getId();
    }

    /**
     * @param array $params
     *
     * @return array
     */
    protected function buildViewParams(Request $request, array $params = [])
    {
        $params['web'] = $this->getCurrentWeb($request);

        return $params;
    }

    protected function save($entity)
    {
        $em = $this->getDoctrine()->getManager();
        $em->persist($entity);
        $em->flush();
    }
}
