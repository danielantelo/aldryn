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
}
