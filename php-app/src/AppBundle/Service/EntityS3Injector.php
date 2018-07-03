<?php

namespace AppBundle\Service;

use Aws\S3\S3Client;
use Doctrine\ORM\Event\LifecycleEventArgs;

class EntityS3Injector
{
    private $s3Service;

    public function __construct(S3Client $s3Service) {
        $this->s3Service = $s3Service;
    }

    public function postLoad(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();
        if (method_exists($entity, 'setAwsS3Service')) {
            $entity->setAwsS3Service($this->s3Service);
        }
    }
}
