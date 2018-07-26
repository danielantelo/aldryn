<?php

namespace AppBundle\Admin\Exporter;

use AppBundle\Entity\Basket;
use AppBundle\Repository\BasketRepository;
use Exporter\Writer\TypedWriterInterface;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;

class ReportWriter implements TypedWriterInterface
{
    /**
     * @var int
     */
    private $position = 1;

    /**
     * @var EngineInterface
     */
    private $templating;

    /**
     * @var BasketRepository
     */
    private $repo;

    /**
     * @var array
     */
    private $totals;

    public function __construct(EngineInterface $templating, BasketRepository $repo)
    {
        $this->templating = $templating;
        $this->repo = $repo;
        $this->totals = [
            'basketSubTotal' => 0,
            'baseTax10' => 0,
            'tax10' => 0,
            'baseTax21' => 0,
            'tax21' => 0,
            'baseSurcharge1p4' => 0,
            'surcharge1p4' => 0,
            'baseSurcharge5p2' => 0,
            'surcharge5p2' => 0,
            'basketTotal' => 0,
        ];
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
        return 'informe.html';
    }

    public function open()
    {
        echo($this->templating->render(
            'AppBundle:Admin/Report:headers.html.twig', []
        ));
    }

    /**
     * @param array $data
     */
    public function write(array $data)
    {
        /** @var Basket $order */
        $order = $this->repo->find($data['id']);

        if (!is_null($order->getInvoiceDate())) {
            echo($this->templating->render(
                'AppBundle:Admin/Report:entry.html.twig', [
                    'order' => $order,
                    'position' => $this->position
                ]
            ));
        
            $this->totals = [
                'basketSubTotal' => $this->totals['basketSubTotal'] + $order->getBasketSubTotal(),
                'baseTax10' => $this->totals['baseTax10'] + $order->getBaseTax10(),
                'tax10' => $this->totals['tax10'] + $order->getTax10(),
                'baseTax21' => $this->totals['baseTax21'] + $order->getBaseTax21(),
                'tax21' => $this->totals['tax21'] + $order->getTax21(),
                'baseSurcharge1p4' => $this->totals['baseSurcharge1p4'] + $order->getBaseSurcharge1p4(),
                'surcharge1p4' => $this->totals['surcharge1p4'] + $order->getSurcharge1p4(),
                'baseSurcharge5p2' => $this->totals['baseSurcharge5p2'] + $order->getBaseSurcharge5p2(),
                'surcharge5p2' => $this->totals['surcharge5p2'] + $order->getSurcharge5p2(),
                'basketTotal' => $this->totals['basketTotal'] + $order->getBasketTotal(),
            ];

            $this->position = $this->position + 1;
        }
    }

    public function close()
    {
        echo($this->templating->render(
            'AppBundle:Admin/Report:totals.html.twig', [
                'totals' => $this->totals
            ]
        ));
    }
}
