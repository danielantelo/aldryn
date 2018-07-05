<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Basket;
use AppBundle\Entity\Price;
use AppBundle\Entity\Product;
use AppBundle\Form\SearchType;
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
        return $this->getDoctrine()
            ->getRepository(Web::class)
            ->findOneBy([
                'name' => $this->getParameter('web')
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
            $basket = new Basket($web);
            $basket->setWeb($this->getCurrentWeb($request));
            $basket->setUserIp($request->getClientIp());
            $request->getSession()->set('basket', $basket);
        }
        $params['basket'] = $basket;
        $params['user'] = $this->getUser();

        // @TODO rethink this quick and dirty solution
        $params['highlights'] = $this->getDoctrine()
            ->getRepository(Product::class)
            ->findBy(['highlight' => true, 'active' => true], [], 15);

        $params['novelties'] = $this->getDoctrine()
            ->getRepository(Product::class)
            ->findBy(['active' => true], ['id' => 'DESC'], 15);

        $params['searchForm'] = $this->createForm(SearchType::class, [], [
            'action' => $this->generateUrl('search'),
            'method' => 'POST',
        ])->createView();

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
