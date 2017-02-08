'use strict';

angular.module('quotesApp')
        .controller('IndexController', ['$scope', 'quotesFactory', 
        function($scope, quotesFactory) {
            
            quotesFactory.getQuotes().then(
                function(response) {
                    $scope.quotesText = response.data;
                    
                    $scope.quotes = quotesFactory.parseQuotes($scope.quotesText)
                    $scope.dataPoints = $scope.quotes.map(
                                            function(elem, index){
                                                return {x: index, y: [elem.open, elem.high, elem.low, elem.close]}
        
                                            })
                    
                    $scope.showChart($scope.dataPoints)
                }
            );
            

    
	$scope.showChart = function(dataPoints) {
        
        $scope.chart = new CanvasJS.Chart("chartContainer",
	       {
                title:{
                    text: "CanvasJS Candlestick Chart",
                },
                exportEnabled: true,
                zoomEnabled: true, 
                axisY: {
                    includeZero: false,
                    prefix: "$",
                },
                axisX: {
                    valueFormatString: "DD-MMM",
                },
                data: [
                {
                    type: "candlestick", 
                    dataPoints: dataPoints
                }
                ]
	       });
	$scope.chart.render(); 
    }
            
        }])


;
