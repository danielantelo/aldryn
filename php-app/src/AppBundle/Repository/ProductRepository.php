<?php

namespace AppBundle\Repository;

use AppBundle\Entity\Web;
use Doctrine\ORM\EntityRepository;

/**
 * ProductRepository
 */
class ProductRepository extends EntityRepository
{
    public function getWebProduct($productId, $webId)
    {
        $product = $this->findOneBy([
            'id' => $productId,
            'active' => true,
        ]);

        if ($product) {
            foreach ($product->getWebs() as $web) {
                if ($web->getId() === $webId) {
                    return $product;
                }
            }
        }

        return null;
    }

    private function webFiltered($products, Web $web = null)
    {
        if (!$web) {
            return $products;
        }

        $filteredProducts = array_filter(
            $products,
            function ($prod) use ($web) {
                return $prod->isActive() && in_array($web, $prod->getWebs()->toArray());
            }
        ); 

        $availableProducts = [];
        $unavailableProducts = [];
        foreach ($filteredProducts as $product) {
            $isWebProduct = $product->isActive() && in_array($web, $product->getWebs()->toArray());
            $isAvailable = $product->getStock() > 0 && count($product->getPrices()) > 0;
            if ($isWebProduct && $isAvailable) {
                $availableProducts[] = $product;
            } elseif ($isWebProduct && !$isAvailable) {
                $unavailableProducts[] = $product;
            }
        }
        
        return array_merge($availableProducts, $unavailableProducts);
    }

    public function searchProducts($searchTerm, Web $web = null)
    {
        $query =  $this->getEntityManager()
            ->createQuery('SELECT p
                FROM AppBundle:Product p
                WHERE p.name like :term or p.description like :term
                    AND p.active = 1
                ORDER BY p.name ASC'
            )->setParameter('term', '%'.$searchTerm.'%');

        return $this->webFiltered($query->getResult(), $web);
    }

    public function getHighlights(Web $web = null, $limit = 125)
    {
        $query =  $this->getEntityManager()
            ->createQuery('SELECT p
                FROM AppBundle:Product p
                WHERE p.highlight = 1
                    AND p.active = 1
                    AND p.stock > 0
                ORDER BY p.name ASC'
            )->setMaxResults($limit);

        return $this->webFiltered($query->getResult(), $web);
    }

    public function getNovelties(Web $web = null, $limit = 30)
    {
        $query =  $this->getEntityManager()
            ->createQuery('SELECT p
                FROM AppBundle:Product p
                WHERE p.active = 1
                    AND p.stock > 0
                ORDER BY p.id DESC'
            )->setMaxResults($limit);

        return $this->webFiltered($query->getResult(), $web);
    }    
}
