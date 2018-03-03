<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Basket;
use AppBundle\Entity\BasketItem;
use AppBundle\Entity\Brand;
use AppBundle\Entity\Category;
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
        $products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->findBy([], ['id' => 'DESC'], 50);

        return $this->buildViewParams($request, [
            'title' => 'Novedades',
            'products' => $products
        ]);
    }

    /**
     * @Route("/promociones", name="promotions")
     * @Template("AppBundle:Web/Product:index.html.twig")
     */
    public function promotionsAction(Request $request)
    {
        $products = $this->getDoctrine()
            ->getRepository(Product::class)
            ->findBy(['highlight' => true], [], 100);

        return $this->buildViewParams($request, [
            'title' => 'Promociones',
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

    /**
     * @Route("/add-to-basket", name="add_to_basket")
     */
    public function addToBasketAction(Request $request)
    {
        $basket = $request->getSession()->get('basket');
        $postData = json_decode($request->getContent());
        $quantity = $postData->quantity;
        $price = $this->getPrice($postData->priceId);
        $product = $price->getProduct();

        $basketItem = $basket->getBasketItem($product->getName());
        if ($basketItem) {
            $basket->removeBasketItem($basketItem);
        }

        if ($quantity > 0) {
            $basketItem = new BasketItem($quantity, $product, $price, $basket);
            $basket->addBasketItem($basketItem);
        }

        return new JsonResponse([
            'quantity' => $quantity,
            'basketTotal' => $basket->getItemTotal(),
        ]);
    }
}
