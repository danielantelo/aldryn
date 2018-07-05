<?php

namespace AppBundle\Entity\Traits;

use Aws\S3\S3Client;
use Aws\Credentials\Credentials;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;

trait Mediable
{
    /**
     * Unmapped property to handle file uploads
     *
     * @var UploadedFile
     */
    private $file;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=100)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="type", type="string", length=10)
     */
    private $type;

    /**
     * @var string
     *
     * @ORM\Column(name="path", type="text")
     */
    private $path;

    // /**
    //  * @var S3Client
    //  */
    // private $s3Service;

    // /**
    //  * @param S3Client $s3Service
    //  */
    // public function setAwsS3Service(S3Client $s3Service)
    // {
    //     $this->s3Service = $s3Service;
    //     var_dump('here');
    //     var_dump(is_null($this->s3Service));
    // }

    /**
     * @param string $title
     *
     * @return Mediable
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $type
     *
     * @return Mediable
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $path
     *
     * @return Mediable
     */
    public function setPath($path)
    {
        $this->path = $path;

        return $this;
    }

    /**
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * @param UploadedFile $file
     *
     * @return Mediable
     */
    public function setFile(UploadedFile $file = null)
    {
        // the file property can be empty if the field is not required
        if (null === $file) {
            return;
        }

        $parts = explode('.', $file->getClientOriginalName());
        $ext = end($parts);
        $this->path = sprintf(
            'new/media/%s/%s.%s',
            $this->type,
            $this->getFileName(),
            $ext
        );

        // @TODO inject service on a doctrine event listener or move to the admin?
        $s3Service = new S3Client([
            'version' => '2006-03-01',
            'region'  => 'eu-west-1',
            'credentials' => new Credentials('AKIAJNVL3EOILNFOTJXA', 'Xc8yas2cU8L45vZBfu541BZBiTXCYVWiVWDuIC/q')
        ]);
        $s3Service->putObject([
            'ACL'     => 'public-read',
            'Bucket'  => 'aldryn-webs',
            'Key'     => $this->path,
            'Body'    => fopen($file->getPathname(), 'r'),
            'ContentType' => mime_content_type($file->getPathname())
        ]);

        return $this;
    }

    /**
     * @return UploadedFile
     */
    public function getFile()
    {
        return $this->file;
    }
}
