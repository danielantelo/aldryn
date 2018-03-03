<?php

namespace AppBundle\Repository;

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

    public function searchProducts($searchTerm)
    {
        $query =  $this->getEntityManager()
            ->createQuery('SELECT p
                FROM AppBundle:Product p
                WHERE p.name like :term
                OR p.description like :term
                ORDER BY p.name ASC'
        )->setParameter('term','%'.$searchTerm.'%' );

        return $query->getResult();
    }
}
