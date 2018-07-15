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

        if (!$user || !$user->isActive()) {
            return NULL;
        }

        // @TODO revisit hacky way of checking web access, inject current web?
        $hasWebAccess = false;
        foreach ($user->getWebs() as $web) {
            if (
                strpos($_SERVER['SERVER_NAME'], $web->getName()) !== false
                || strpos($_SERVER['HTTP_HOST'], $web->getName()) !== false
            ) {
                $hasWebAccess = true;
            }
        }

        $isLocalHost = in_array(@$_SERVER['REMOTE_ADDR'], ['127.0.0.1', '::1']);

        return ($hasWebAccess || $isLocalHost) ? $user : NULL;
    }
}
