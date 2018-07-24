<?php

namespace AppBundle\Admin\Exporter;

use AppBundle\Entity\Basket;
use AppBundle\Repository\BasketRepository;
use Exporter\Writer\TypedWriterInterface;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;

class WaybillWriter implements TypedWriterInterface
{
    /**
     * @var EngineInterface
     */
    private $templating;

    /**
     * @var BasketRepository
     */
    private $repo;

    public function __construct(EngineInterface $templating, BasketRepository $repo)
    {
        $this->templating = $templating;
        $this->repo = $repo;
    }

    /**
     * There can be several mime types for a given format, this method should
     * return the most appopriate / popular one.
     *
     * @return string the mime type of the output
     */
    public function getDefaultMimeType()
    {
        return 'text/html';
    }

    /**
     * Returns a string best describing the format of the output (the file
     * extension is fine, for example).
     *
     * @return string a string without spaces, usable in a translation string
     */
    public function getFormat()
    {
        return 'albaranes.html';
    }

    public function open()
    {
        // TODO: Implement open() method.
    }

    /**
     * @param array $data
     */
    public function write(array $data)
    {
        echo($this->templating->render(
            'AppBundle:Web/Account:waybill.html.twig', [
                'order' => $this->repo->find($data['id'])
            ]
        ));
    }

    public function close()
    {
        // TODO: Implement close() method.
    }
}
