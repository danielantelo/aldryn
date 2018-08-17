<?php

namespace AppBundle\Repository;

use AppBundle\Entity\Basket;
use AppBundle\Entity\Franchise;
use AppBundle\Entity\Product;
use  Doctrine\ORM\EntityRepository;

/**
 * BasketRepository
 */
class BasketRepository extends EntityRepository
{
    public function getLastInvoiceNumber(Basket $order)
    {
        $lastInvoice = $this->getEntityManager()
            ->createQuery(
                'SELECT o
                FROM AppBundle:Basket o
                WHERE o.invoiceNumber IS NOT NULL 
                    AND o.web = :w
                ORDER BY o.invoiceNumber DESC'
            )
            ->setParameter('w', $order->getWeb())
            ->setMaxResults(1)
            ->getOneOrNullResult();

        if (!$lastInvoice) {
            return null;
        }

        return $lastInvoice->getInvoiceNumber(true);
    }

    public function getProductSales(Product $p, $euros = false, $web)
    {
        $sum = $euros ? ' SUM(o.total)' : 'COUNT(1)';
        $sales = $this->getEntityManager()
            ->createQuery(
                "SELECT MONTH(o.addedToBasketDate) as monthNum, $sum as monthTotal
                FROM AppBundle:BasketItem o
                    JOIN o.basket b
                    JOIN b.web w
                WHERE o.product = :p
                    AND YEAR(o.addedToBasketDate) = :y
                    AND w.id = :w
                GROUP BY monthNum
                ORDER BY monthNum"
            )
            ->setParameter('p', $p)
            ->setParameter('w', $web->getId())
            ->setParameter('y', date('Y'))
            ->getResult();

        return $sales;
    }

    public function getCategorySales(Franchise $f, $euros = false, $web)
    {
        $sum = $euros ? ' SUM(o.total)' : 'COUNT(1)';
        $sales = $this->getEntityManager()
            ->createQuery(
                "SELECT MONTH(o.addedToBasketDate) as monthNum, $sum as monthTotal, c.name as category
                FROM AppBundle:BasketItem o
                    JOIN o.basket b
                    JOIN b.web w
                    JOIN o.product p
                    JOIN p.category c
                    JOIN p.franchise f
                WHERE f.id = :f
                    AND YEAR(o.addedToBasketDate) = :y
                    AND w.id = :w
                GROUP BY c, monthNum
                ORDER BY c.name, monthNum"
            )
            ->setParameter('f', $f->getId())
            ->setParameter('w', $web->getId())
            ->setParameter('y', date('Y'))
            ->getResult();

        return $sales;
    }
}
