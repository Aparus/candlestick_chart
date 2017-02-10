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
                                                return {x: new Date(elem.yyyy, elem.mm, elem.dd, elem.hh, elem.mn, elem.ss), y: [elem.open, elem.high, elem.low, elem.close]}
        
                                            })
                    
                    $scope.showChart($scope.dataPoints)
                }
            );
            

    
	$scope.showChart = function(dataPoints) {
        
        $scope.chart = new CanvasJS.Chart("chartContainer",
	       {
                
                title:{
                    text: "Candlestick Chart for Quotes",
                },
                exportEnabled: true,
                zoomEnabled: true, 
                axisY: {
                    includeZero: false,
                    prefix: "$",
                    labelFontSize: 10
                },
                axisX: {
                    valueFormatString: "DD.MM.YYYY HH:MM:ss",
                    labelAngle: 90, 
                    labelFontSize: 10, 
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
