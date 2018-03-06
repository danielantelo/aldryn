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
    public function homeAction()
    {
        return [
            'franchise' => $this->getUser(),
            'productSales' => $this->getProductSalesChart(),
            'categorySales' => $this->getCategorySalesChart(),
            'clientSales' => $this->getClientSalesChart()
        ];
    }

    private function getProductSalesChart()
    {
        $franchise = $this->getUser();
        $products = $franchise->getProducts();

        $productSales = [];

        foreach ($products as $product) {
            $productSales[] = [
                'name' => $product->getName(),
                'data' => [rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand(),rand()]
            ];
        }

        $ob = new Highchart();
        $ob->chart->renderTo('productSales');
        $ob->title->text('Ventas por producto');
        $ob->xAxis->title(['text'  => 'Fecha']);
        $ob->yAxis->title(['text'  => 'Cantidad']);
        $ob->xAxis->categories(['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']);
        $ob->series($productSales);

        return $ob;
    }

    private function getCategorySalesChart()
    {
        $franchise = $this->getUser();
        $products = $franchise->getProducts();

        $productSales = [];

        foreach ($products as $product) {
            $productSales[] = [
                'name' => $product->getName(),
                'data' => [rand(),rand(),rand(),rand(),rand(),rand(),rand()]
            ];
        }

        $ob = new Highchart();
        $ob->chart->renderTo('categorySales');
        $ob->title->text('Ventas por categoria');
        $ob->xAxis->title(['text'  => 'Fecha']);
        $ob->yAxis->title(['text'  => 'Cantidad']);
        $ob->xAxis->categories(['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']);
        $ob->series($productSales);

        return $ob;
    }

    private function getClientSalesChart()
    {
        $franchise = $this->getUser();
        $products = $franchise->getProducts();

        $productSales = [];

        foreach ($products as $product) {
            $productSales[] = [
                'name' => $product->getName(),
                'data' => [rand(),rand(),rand(),rand(),rand(),rand(),rand()]
            ];
        }

        $ob = new Highchart();
        $ob->chart->renderTo('clientSales');
        $ob->title->text('Ventas por cliente');
        $ob->xAxis->title(['text'  => 'Fecha']);
        $ob->yAxis->title(['text'  => 'Cantidad']);
        $ob->xAxis->categories(['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']);
        $ob->series($productSales);

        return $ob;
    }
}
