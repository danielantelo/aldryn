<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Basket;
use AppBundle\Entity\BasketItem;
use AppBundle\Entity\Brand;
use AppBundle\Entity\Category;
use AppBundle\Entity\Product;
use AppBundle\Form\SearchType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ProductController extends BaseWebController
{
    /**
     * @Route("/productos/{category}/{id}/{slug}", name="category_products")
     * @Template("AppBundle:Web/Product:index.html.twig")
     */
    public function listCategoryAction(Request $request, $id, $slug)
    {
        $category = $this->getDoctrine()
            ->getRepository(Category::class)
            ->find($id);

        if (!$category) {
            // @TODO old id 301
            $category = $this->getDoctrine()
                ->getRepository(Category::class)
                ->findOneBy([
                    'name' => str_replace('-', ' ', $slug)
                ]);            
        }

        if (!$category) {
            throw $this->createNotFoundException('The category does not exist');
        }

        return $this->buildViewParams($request, [
            'title' => $category->getName(),
            'products' => $category->getProducts($this->getCurrentWeb($request))
        ]);
    }

    /**
     * @Route("/marca/{id}/{slug}", name="brand_products")
     * @Template("AppBundle:Web/Product:index.html.twig")
     */
    public function listBrandAction(Request $request, $id, $slug)
    {
        $brand = $this->getDoctrine()
            ->getRepository(Brand::class)
            ->find($id);

        if (!$brand) {
            // @TODO old id 301
            $brand = $this->getDoctrine()
                ->getRepository(Brand::class)
                ->findOneBy([
                    'name' => str_replace('-', ' ', $slug)
                ]);
        }

        if (!$brand) {
            throw $this->createNotFoundException('The brand does not exist');
        }

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
     * @Route("/productos/{id}/{slug}", name="product", requirements={"id" = "\d+"})
     * @Route("/producto/{id}/{slug}", name="producto", requirements={"id" = "\d+"})
     * @Template("AppBundle:Web/Product:view.html.twig")
     */
    public function viewAction(Request $request, $id)
    {
        $product = $this->getDoctrine()
            ->getRepository(Product::class)
            ->getWebProduct($id, $this->getCurrentWebId($request));

        if (!$product) {
            // @TODO old id 301
        }

        if (!$product) {
            throw $this->createNotFoundException('The product does not exist');
        }        

        return $this->buildViewParams($request, [
            'product' => $product
        ]);
    }

    /**
     * @Route("/admin/stock-entry", name="stock_entry")
     * @Method({"POST"})
     */
    public function modifyOrderAction(Request $request)
    {
        $postData = json_decode($request->getContent());
        $productId = $postData->product;
        $originalStock = $postData->stock; // allow them to set a base stock
        $code = $postData->code;
        $amount = $postData->amount;

        $product = $this->getDoctrine()->getRepository(Product::class)->find($productId);
        $product->setStock($originalStock);

        $product->addStock($amount, $code);
        $this->save($product);

        return new JsonResponse([
            'originalStock' => $originalStock,
            'newStock' => $product->getStock()
        ]);
    }
}
