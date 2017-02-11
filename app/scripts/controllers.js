'use strict';

angular.module('quotesApp')
        .controller('IndexController', ['$scope', 'quotesFactory', 
        function($scope, quotesFactory) {
            
            quotesFactory.getQuotes().then(
                function(response) {
                    $scope.quotesText = response.data;
                    
                    $scope.quotes = quotesFactory.parseQuotes($scope.quotesText)
                    $scope.dataPointsCandles = $scope.quotes.map(
                                            function(elem, index){
                                                return {x: new Date(elem.yyyy, elem.mm, elem.dd, elem.hh, elem.mn, elem.ss), y: [elem.open, elem.high, elem.low, elem.close]}
        
                                            })
                    $scope.dataPointsVolumes = $scope.quotes.map(
                                            function(elem, index){
                                                return {x: new Date(elem.yyyy, elem.mm, elem.dd, elem.hh, elem.mn, elem.ss), y: elem.vol/10000000}
        
                                            })                    
                    
                    $scope.showCandlesStickAndVolumesChart($scope.dataPointsCandles, $scope.dataPointsVolumes)
                    
                }
            );
            

    //creates and shows two charts , one above other 
	$scope.showCandlesStickAndVolumesChart = function(dataPointsCandles, dataPointsVolumes) {
        
        $scope.chart1CandlesStick = new CanvasJS.Chart("chart1CandlesStickContainer",
            {
              zoomEnabled: true, 
              zoomType: "xy",
              axisX:{
              tickLength: 0,
              labelFormatter:function ( e ) {
                       return " ";  
                 },      
              },
              axisY:{
               includeZero: false,      
               labelFontSize: 10,
               gridThickness:0
              },
              data: [
              {
                type: "candlestick",    
                /*axisYType: "secondary",*/
                dataPoints: $scope.dataPointsCandles
              }
              ], 
            rangeChanged: syncHandler
            });

         $scope.chart1CandlesStick.render();

         $scope.chart2Volumes = new CanvasJS.Chart("chart2VolumesContainer",
            {
              zoomEnabled: true, 
              axisX:{
                labelFontSize: 10,
                labelAngle: 90
              },
              axisY:{
                labelFontSize: 10,
                gridThickness:0
              },
              data: [
              {
                type: "column",
                /*axisYType: "secondary",*/
                dataPoints: $scope.dataPointsVolumes
              }
              ], 
            rangeChanged: syncHandler
            });

         $scope.chart2Volumes.render();
        
        
    }
        
        // 
        function syncHandler(e) {
            
            $scope.charts = [$scope.chart1CandlesStick, $scope.chart2Volumes]
            
            for (var i = 0; i < $scope.charts.length; i++) {
                
                var chart = $scope.charts[i];

                if (!chart.options.axisX) chart.options.axisX = {};

                if (e.trigger === "reset") {
                    chart.options.axisX.viewportMinimum = chart.options.axisX.viewportMaximum = null;
                    chart.render();

                } 
                
                else if (chart !== e.chart) {
                    chart.options.axisX.viewportMinimum = e.axisX[0].viewportMinimum;
                    chart.options.axisX.viewportMaximum = e.axisX[0].viewportMaximum;
                    chart.render();
                }

            }
        }
    

            
        }])


;
