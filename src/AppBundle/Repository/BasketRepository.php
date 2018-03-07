<?php

namespace AppBundle\Repository;

use  Doctrine\ORM\EntityRepository;

/**
 * BasketRepository
 */
class BasketRepository extends EntityRepository
{
    public function getLastInvoiceNumber()
    {
        $lastInvoice = $this->getEntityManager()
            ->createQuery(
                'SELECT p
                FROM AppBundle:Basket p
                WHERE p.invoiceNumber IS NOT NULL 
                ORDER BY p.invoiceNumber DESC'
            )
            ->getOneOrNullResult();

        if (!$lastInvoice) {
            return null;
        }

        return $lastInvoice->getInvoiceNumber();
    }

    public function getProductSales()
    {

    }
}
