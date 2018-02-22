<?php

namespace AppBundle\Controller;

use Ob\HighchartsBundle\Highcharts\Highchart;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ReportsController extends Controller
{
    /**
     * @Route("/panel/informes", name="reports")
     * @Template("AppBundle:Reports:index.html.twig")
     */
    public function homeAction(Request $request)
    {
        // Chart
        $series = [
            [
                "name" => "Data Serie Name",
                "data" => [1,2,4,5,6,3,8]
            ]
        ];

        $ob = new Highchart();
        $ob->chart->renderTo('linechart');
        $ob->title->text('Chart Title');
        $ob->xAxis->title(array('text'  => "Horizontal axis title"));
        $ob->yAxis->title(array('text'  => "Vertical axis title"));
        $ob->series($series);

        return [
            'chart' => $ob
        ];
    }
}
