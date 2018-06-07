<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Basket;
use AppBundle\Entity\Product;
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
            'productSalesInEuros' => $this->getProductSalesInEurosChart(),
            'categorySales' => $this->getCategorySalesChart(),
            'categorySalesInEuros' => $this->getCategorySalesInEurosChart(),
        ];
    }

    private function getProductSalesChart()
    {
        $franchise = $this->getUser();
        $products = $franchise->getProducts();
        $repo = $this->getDoctrine()->getRepository(Basket::class);
        $productSales = [];
        foreach ($products as $product) {
            $sales = $repo->getProductSales($product);
            $data = [];
            foreach ($sales as $sale) {
                while (count($data) < $sale['monthNum']) {
                    $data[] = 0;
                }
                $data[] = (double) $sale['monthTotal'];
            }
            $productSales[] = [
                'name' => $product->getName(),
                'data' => $data
            ];
        }

        $ob = new Highchart();
        $ob->chart->renderTo('productSales');
        $ob->title->text('Ventas por producto');
        $ob->xAxis->title(['text'  => 'Fecha']);
        $ob->yAxis->title(['text'  => 'Cantidad']);
        $ob->yAxis->min(0);
        $ob->yAxis->allowDecimals(false);
        $ob->xAxis->categories(['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']);
        $ob->series($productSales);

        return $ob;
    }

    private function getProductSalesInEurosChart()
    {
        $franchise = $this->getUser();
        $products = $franchise->getProducts();
        $repo = $this->getDoctrine()->getRepository(Basket::class);
        $productSales = [];
        foreach ($products as $product) {
            $sales = $repo->getProductSales($product, true);
            $data = [];
            foreach ($sales as $sale) {
                while (count($data) < $sale['monthNum']) {
                    $data[] = 0;
                }
                $data[] = (double) $sale['monthTotal'];
            }
            $productSales[] = [
                'name' => $product->getName(),
                'data' => $data
            ];
        }

        $ob = new Highchart();
        $ob->chart->renderTo('productSalesInEuros');
        $ob->title->text('Ventas por producto (€)');
        $ob->xAxis->title(['text'  => 'Fecha']);
        $ob->yAxis->title(['text'  => '€']);
        $ob->xAxis->categories(['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']);
        $ob->series($productSales);

        return $ob;
    }

    private function getCategorySalesChart()
    {
        $franchise = $this->getUser();
        $sales = $this->getDoctrine()
            ->getRepository(Basket::class)
            ->getCategorySales($franchise);

        $categorySales = [];
        foreach ($sales as $sale) {
            $data = [];
            foreach ($sales as $sale) {
                while (count($data) < $sale['monthNum']) {
                    $data[] = 0;
                }
                $data[] = (double) $sale['monthTotal'];
            }
            $categorySales[] = [
                'name' => $sale['name'],
                'data' => $data
            ];
        }

        $ob = new Highchart();
        $ob->chart->renderTo('categorySales');
        $ob->title->text('Ventas por categoría');
        $ob->xAxis->title(['text'  => 'Fecha']);
        $ob->yAxis->title(['text'  => 'Cantidad']);
        $ob->xAxis->categories(['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']);
        $ob->series($categorySales);

        return $ob;
    }

    private function getCategorySalesInEurosChart()
    {
        $franchise = $this->getUser();
        $sales = $this->getDoctrine()
            ->getRepository(Basket::class)
            ->getCategorySales($franchise, true);

        $categorySales = [];
        foreach ($sales as $sale) {
            $data = [];
            foreach ($sales as $sale) {
                while (count($data) < $sale['monthNum']) {
                    $data[] = 0;
                }
                $data[] = (double) $sale['monthTotal'];
            }
            $categorySales[] = [
                'name' => $sale['name'],
                'data' => $data
            ];
        }



        $ob = new Highchart();
        $ob->chart->renderTo('categorySalesInEuros');
        $ob->title->text('Ventas por categoría (€)');
        $ob->xAxis->title(['text'  => 'Fecha']);
        $ob->yAxis->title(['text'  => '€']);
        $ob->xAxis->categories(['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']);
        $ob->series($categorySales);

        return $ob;
    }
}
