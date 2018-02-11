<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Basket;
use AppBundle\Entity\Price;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Web;
use AppBundle\Entity\Client;

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
            ->findOneBy([
                'name' => $name
            ]);
    }

    /**
     * @return Basket|null
     */
    protected function getBasket($id)
    {
        return $this->getDoctrine()
            ->getRepository(Basket::class)
            ->find($id);
    }

    /**
     * @return Price
     */
    protected function getPrice($id)
    {
        return $this->getDoctrine()
            ->getRepository(Price::class)
            ->find($id);
    }

    /**
     * @param Request $request
     *
     * @return int
     */
    protected function getCurrentWebId(Request $request)
    {
        return $this->getCurrentWeb($request)->getId();
    }

    /**
     * @param Request $request
     * @param array $params
     *
     * @return array
     */
    protected function buildViewParams(Request $request, array $params = [])
    {
        $web = $this->getCurrentWeb($request);
        $params['web'] = $web;

        $basket = $request->getSession()->get('basket');
        if (!$basket) {
            $basket = new Basket(
                $web->getConfiguration()
            );
            $basket->setWeb($this->getCurrentWeb($request));
            $basket->setUserIp($request->getClientIp());
            $request->getSession()->set('basket', $basket);
        }
        $params['basket'] = $basket;

        return $params;
    }

    /**
     * @param $entity
     */
    protected function save($entity)
    {
        $em = $this->getDoctrine()->getManager();
        $em->merge($entity);
        $em->flush();
    }
}
