<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Basket;
use AppBundle\Entity\Client;
use AppBundle\Entity\Price;
use AppBundle\Entity\Product;
use AppBundle\Entity\Web;
use AppBundle\Form\SearchType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class BaseWebController extends Controller
{
    /**
     * @var Web
     */
    private $currentWeb;

    /**
     * @var Client
     */
    private $currentClient;

    /**
     * @param Request $request
     *
     * @return Web
     */
    protected function getCurrentWeb(Request $request)
    {
        if (!$this->currentWeb) {
            $this->currentWeb = $this->getDoctrine()
                ->getRepository(Web::class)
                ->findOneBy([
                    'name' => $this->getParameter('web')
                ]);
        }

        return $this->currentWeb;
    }

    protected function getCurrentClient()
    {
        if (!$this->currentClient) {
            $this->currentClient = $this->getDoctrine()
                ->getRepository(Client::class)
                ->find($this->getUser()->getId());
        }

        return $this->currentClient;
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
     *
     * @return Basket
     */
    protected function getCurrentBasket(Request $request)
    {
        $basket = $request->getSession()->get('basket');
        if (!$basket) {
            $basket = new Basket($this->getCurrentWeb($request));
            $basket->setUserIp($request->getClientIp());
            $request->getSession()->set('basket', $basket);
        }

        if (!$basket->getClient() && $this->getCurrentClient()) {
            $basket->setClient($this->getCurrentClient());
            $request->getSession()->set('basket', $basket);
        }

        if (!$basket->getWeb()) {
            $basket->setWeb($this->getCurrentWeb($request));
            $request->getSession()->set('basket', $basket);
        }

        return $basket;
    }

    /**
     * @param Request $request
     * @param array $params
     *
     * @return array
     */
    protected function buildViewParams(Request $request, array $params = [])
    {
        $params['web'] = $this->getCurrentWeb($request);
        $params['basket'] = $this->getCurrentBasket($request);
        $params['user'] = $this->getUser();
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
