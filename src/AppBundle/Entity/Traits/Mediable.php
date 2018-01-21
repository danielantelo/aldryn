<?php

namespace AppBundle\Entity\Traits;

use Cocur\Slugify\Slugify;
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

        $slugify = new Slugify();
        $targetDir = sprintf('/media/%s', $this->type);
        $parts = explode('.', $file->getClientOriginalName());
        $ext = end($parts);
        $targetFileName = sprintf(
            '%s.%s.%s',
            $slugify->slugify($file->getClientOriginalName()),
            time(),
            $ext
        );

        $file->move(
            sprintf('%s/%s', $_SERVER['DOCUMENT_ROOT'], $targetDir),
            $targetFileName
        );

        $this->path = sprintf('%s/%s', $targetDir, $targetFileName);

        // clean up the file property as you won't need it anymore
        $this->setFile(null);

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
