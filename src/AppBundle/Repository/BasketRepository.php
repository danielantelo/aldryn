<?php

namespace AppBundle\Repository;

use AppBundle\Entity\Franchise;
use AppBundle\Entity\Product;
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
                'SELECT o
                FROM AppBundle:Basket o
                WHERE o.invoiceNumber IS NOT NULL 
                ORDER BY o.invoiceNumber DESC'
            )
            ->getOneOrNullResult();

        if (!$lastInvoice) {
            return null;
        }

        return $lastInvoice->getInvoiceNumber();
    }

    public function getProductSales(Product $p, $euros = false)
    {
        $sum = $euros ? ' SUM(o.total)' : 'COUNT(1)';
        $sales = $this->getEntityManager()
            ->createQuery(
                "SELECT MONTH(o.addedToBasketDate) as monthNum, $sum as monthTotal
                FROM AppBundle:BasketItem o
                WHERE o.product = :p
                AND YEAR(o.addedToBasketDate) = :y
                GROUP BY monthNum
                ORDER BY monthNum"
            )
            ->setParameter('p', $p)
            ->setParameter('y', date('Y'))
            ->getResult();

        return $sales;
    }

    public function getCategorySales(Franchise $f, $euros = false)
    {
        $sum = $euros ? ' SUM(o.total)' : 'COUNT(1)';
        $sales = $this->getEntityManager()
            ->createQuery(
                "SELECT MONTH(o.addedToBasketDate) as monthNum, $sum as monthTotal, c.name
                FROM AppBundle:BasketItem o
                JOIN o.product as p
                JOIN p.category as c
                WHERE p.franchise = :f
                AND YEAR(o.addedToBasketDate) = :y
                GROUP BY c, monthNum
                ORDER BY monthNum"
            )
            ->setParameter('f', $f)
            ->setParameter('y', date('Y'))
            ->getResult();

        return $sales;
    }
}
