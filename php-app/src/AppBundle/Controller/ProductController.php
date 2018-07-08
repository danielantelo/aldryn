<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Basket;
use AppBundle\Entity\BasketItem;
use AppBundle\Entity\Brand;
use AppBundle\Entity\Category;
use AppBundle\Form\SearchType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Product;

class ProductController extends BaseWebController
{
    /**
     * @Route("/productos/{category}/{id}/{slug}", name="category_products")
     * @Template("AppBundle:Web/Product:index.html.twig")
     */
    public function listCategoryAction(Request $request, $id)
    {
        $category = $this->getDoctrine()
            ->getRepository(Category::class)
            ->find($id);

        return $this->buildViewParams($request, [
            'title' => $category->getName(),
            'products' => $category->getProducts($this->getCurrentWeb($request))
        ]);
    }

    /**
     * @Route("/marca/{id}/{slug}", name="brand_products")
     * @Template("AppBundle:Web/Product:index.html.twig")
     */
    public function listBrandAction(Request $request, $id)
    {
        $brand = $this->getDoctrine()
            ->getRepository(Brand::class)
            ->find($id);

        return $this->buildViewParams($request, [
            'title' => $brand->getName(),
            'products' => $brand->getProducts($this->getCurrentWeb($request))
        ]);
    }

    /**
     * @Route("/novedades", name="novelties")
     * @Template("AppBundle:Web/Product:index.html.twig")
     */
    public function noveltiesAction(Request $request)
    {
        return $this->buildViewParams($request, [
            'title' => 'Novedades',
            'products' => $this->getDoctrine()->getRepository(Product::class)->getNovelties($this->getCurrentWeb($request))
        ]);
    }

    /**
     * @Route("/promociones", name="promotions")
     * @Template("AppBundle:Web/Product:index.html.twig")
     */
    public function promotionsAction(Request $request)
    {
        return $this->buildViewParams($request, [
            'title' => 'Promociones',
            'products' => $this->getDoctrine()->getRepository(Product::class)->getHighlights($this->getCurrentWeb($request))
        ]);
    }

    /**
     * @Route("/busqueda", name="search")
     * @Template("AppBundle:Web/Product:index.html.twig")
     */
    public function searchAction(Request $request)
    {
        $form = $this->createForm(SearchType::class, [], [
            'action' => $this->generateUrl('search'),
            'method' => 'POST',
        ]);
        $form->handleRequest($request);
        $searchTerm = $form['searchTerm']->getData();

        $products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->searchProducts($searchTerm, $this->getCurrentWeb($request));

        return $this->buildViewParams($request, [
            'title' => "Resultados de búsqueda para {$searchTerm}",
            'products' => $products
        ]);
    }

    /**
     * @Route("/productos/{id}/{slug}", name="product", requirements={"id" = "\d+"}, name="product")
     * @Template("AppBundle:Web/Product:view.html.twig")
     */
    public function viewAction(Request $request, $id)
    {
        $product = $this->getDoctrine()
            ->getRepository(Product::class)
            ->getWebProduct($id, $this->getCurrentWebId($request));

        if (!$product) {
            throw $this->createNotFoundException('The product does not exist');
        }

        return $this->buildViewParams($request, [
            'product' => $product
        ]);
    }
}
