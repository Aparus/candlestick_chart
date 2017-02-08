'use strict';

angular.module('quotesApp')
        .service('quotesFactory', ['$http', function($http) {
                this.getQuotes = function(){
                                        return $http.get("quotes/quotes.txt");
                                    };
            
            
            // 0<TICKER>;1<PER>;2<DATE>;3<TIME>;4<OPEN>;5<HIGH>;6<LOW>;7<CLOSE>;8<VOL>
            //USD000000TOD;15;20161201;101500;63.8200000;63.8350000;63.4975000;63.5550000;171556000
                this.parseQuotes = function(quotesTextCSV){
                    var quotesLines = quotesTextCSV.split("\n");
                    var quote = {}
                    var quotes = []
                    quotesLines.shift()
                    quotesLines.forEach(
                                            function(quotes_line, index){
                                                    quotes_line = quotes_line.split(";")
                                                    quote = {
                                                                "ticker": quotes_line[0], 
                                                                "per": parseFloat(quotes_line[1]), 
                                                                "date": parseFloat(quotes_line[2]), 
                                                                "time": parseFloat(quotes_line[3]), 
                                                                "open": parseFloat(quotes_line[4]), 
                                                                "high": parseFloat(quotes_line[5]), 
                                                                "low": parseFloat(quotes_line[6]), 
                                                                "close": parseFloat(quotes_line[7]), 
                                                                "vol": parseFloat(quotes_line[8])
                                                            }
                                                    quotes.push(quote)
                    
                                            })
                    
                    
                    return quotes
                     
                    
                }
                        
        }])


;
