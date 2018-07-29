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
     * @Route("/panel/informes", name="franchise-product-sales")
     * @Template("AppBundle:FranchiseReports:index.html.twig")
     */
    public function productSalesAction()
    {
        return [
            'franchise' => $this->getUser(),
            'chartData' => $this->getProductSalesChart(false),
        ];
    }

    /**
     * @Route("/panel/informes/product-sales-euros", name="franchise-product-sales-euros")
     * @Template("AppBundle:FranchiseReports:index.html.twig")
     */
    public function productSalesEurosAction()
    {
        return [
            'franchise' => $this->getUser(),
            'chartData' => $this->getProductSalesChart(true),
        ];
    }

    /**
     * @Route("/panel/informes/category-sales", name="franchise-category-sales")
     * @Template("AppBundle:FranchiseReports:index.html.twig")
     */
    public function categorySalesAction()
    {
        return [
            'franchise' => $this->getUser(),
            'chartData' => $this->getCategorySalesChart(),
        ];
    }

    /**
     * @Route("/panel/informes/category-sales-euros", name="franchise-category-sales-euros")
     * @Template("AppBundle:FranchiseReports:index.html.twig")
     */
    public function categorySalesEruosAction()
    {
        return [
            'franchise' => $this->getUser(),
            'chartData' => $this->getCategorySalesChart(true),
        ];
    }

    private function getProductSalesChart($euros = false)
    {
        $franchise = $this->getUser();
        $products = $franchise->getProducts();
        $repo = $this->getDoctrine()->getRepository(Basket::class);
        $productSales = [];
        foreach ($products as $product) {
            $sales = $repo->getProductSales($product, $euros);
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
        $ob->chart->renderTo('chartData');
        $type = $euros ? '€' : 'cantidad';
        $ob->title->text("Ventas de Producto ($type)");
        $ob->xAxis->title(['text'  => 'Fecha']);
        $ob->yAxis->title(['text'  => 'Cantidad']);
        $ob->yAxis->min(0);
        $ob->yAxis->allowDecimals(false);
        $ob->xAxis->categories(['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']);
        $ob->series($productSales);

        return $ob;
    }

    private function getCategorySalesChart($euros = false)
    {
        $franchise = $this->getUser();
        $sales = $this->getDoctrine()
            ->getRepository(Basket::class)
            ->getCategorySales($franchise, $euros);

        $categorySales = [ 0 => [ 'data' => [] ] ];
        foreach ($sales as $sale) {
            $i = count($categorySales) - 1;
            if ($sale['monthNum'] < count($categorySales[$i]['data'])) {
                $i = $i + 1;
                $categorySales[$i] = [ 'data' => [] ];
            }

            $data = $categorySales[$i]['data'];
            $mountCount = count($categorySales[$i]['data']) + 1;
            if ($sale['monthNum'] > $mountCount) {
                while ($sale['monthNum'] > $mountCount) {
                    $data[] = 0;
                    $mountCount++;
                }
            } else {
                $data[] = (double) $sale['monthTotal'];
            }

            $categorySales[$i] = [
                'name' => $sale['category'],
                'data' => $data
            ];
        }

        $ob = new Highchart();
        $ob->chart->renderTo('chartData');
        $type = $euros ? '€' : 'cantidad';
        $ob->title->text("Ventas por Categoría ($type)");
        $ob->xAxis->title(['text'  => 'Fecha']);
        $ob->yAxis->title(['text'  => 'Cantidad']);
        $ob->xAxis->categories(['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']);
        $ob->series($categorySales);

        return $ob;
    }
}
