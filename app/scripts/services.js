'use strict';

angular.module('quotesApp')
    .service('quotesFactory', ['$http', function($http) {
        this.getQuotes = function() {
            return $http.get("quotes/quotes.txt");
        };
        // 0<TICKER>;1<PER>;2<DATE>;3<TIME>;4<OPEN>;5<HIGH>;6<LOW>;7<CLOSE>;8<VOL>
        //USD000000TOD;15;20161201;101500;63.8200000;63.8350000;63.4975000;63.5550000;171556000
        this.parseQuotes = function(quotesTextCSV) {
            var quotesLines = quotesTextCSV.split("\n");
            var quote = {}
            var quotes = []
            quotesLines.shift()
            quotesLines.pop()
            quotesLines.forEach(
                function(quotes_line, index) {
                    quotes_line = quotes_line.split(";")
                    //console.log(index, quotes_line)
                    quote = {
                        "ticker": quotes_line[0],
                        "per": parseFloat(quotes_line[1]),
                        "yyyy": parseFloat(quotes_line[2].substr(0, 4)),
                        "mm": parseFloat(quotes_line[2].substr(4, 2)) - 1,
                        "dd": parseFloat(quotes_line[2].substr(6, 2)),
                        "hh": parseFloat(quotes_line[3].substr(0, 2)),
                        "mn": parseFloat(quotes_line[3].substr(2, 2)),
                        "ss": parseFloat(quotes_line[3].substr(4, 2)),
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