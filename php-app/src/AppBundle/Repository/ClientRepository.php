<?php

namespace AppBundle\Repository;

use Symfony\Bridge\Doctrine\Security\User\UserLoaderInterface;
use Doctrine\ORM\EntityRepository;
use AppBundle\Entity\User;

/**
 * ClientRepository
 */
class ClientRepository extends EntityRepository implements UserLoaderInterface
{
    public function loadUserByUsername($username)
    {
        $user = $this->createQueryBuilder('u')
            ->where('u.email = :username')
            ->setParameter('username', $username)
            ->getQuery()
            ->getOneOrNullResult();

        if (!$user) {
            return NULL;
        }

        // @TODO revisit hacky way of checking web access, inject current web?
        $hasWebAccess = strpos($_SERVER['SERVER_NAME'], 'localhost') !== false ? true : false;
        foreach ($user->getWebs() as $web) {
            if (strpos($_SERVER['SERVER_NAME'], $web->getName()) !== false) {
                $hasWebAccess = true;
            }
        }

        return $hasWebAccess ? $user : NULL;
    }
}
