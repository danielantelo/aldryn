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

        return array_filter(
            $products,
            function ($prod) use ($web) {
                return $prod->isActive() && in_array($web, $prod->getWebs()->toArray());
            }
        ); 
    }

    public function searchProducts($searchTerm, Web $web = null)
    {
        $query =  $this->getEntityManager()
            ->createQuery('SELECT p
                FROM AppBundle:Product p
                WHERE p.name like :term
                OR p.description like :term
                ORDER BY p.name ASC'
        )->setParameter('term','%'.$searchTerm.'%' );

        return $this->webFiltered($query->getResult(), $web);
    }

    public function getHighlights(Web $web = null, $limit = 50)
    {
        $products = $this->findBy(['highlight' => true, 'active' => true], [], $limit);
        return $this->webFiltered($products, $web);
    }

    public function getNovelties(Web $web = null, $limit = 50)
    {
        $products = $this->findBy(['active' => true], ['id' => 'DESC'], $limit);
        return $this->webFiltered($products, $web);
    }    
}
