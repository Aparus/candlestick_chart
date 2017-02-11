# Candlestick chart + Volumes chart 

This app parses data from csv file quotes.txt, with USD exchange rate and volumes. 
And display it by CanvasJS with two charts: Candlestick chart + Volumes chart. Which are separated but syncronized, 
when you zoom in/out, or go throughout one of them. 

All areas of chart are zoomable and interactive. Select the area you are interested in, and you'll see it in more details. 
For reset zoom or going through zoomed area, use buttons in right top corner of Chart. 
To get actual volume, multiply chart data by 10 million. 


# Тестовое задание на позицию Front-End Developer

Требуется разработать одностраничное приложение на AngularJS, которое при старте загружает приложенный файл котировок 
quotes.txt и отображает его в виде свечей (candlestick chart) на главной странице. Структура файла quotes.txt:
+ ticker - идентификатор тикера (в данном случае USD)
+ per - интервал свечи в минутах
+ дата и время представлены отдельными колонками
+ затем идут цена открытия, макс/мин цена, цена закрытия свечи и объем
 
Свечи и объемы желательно показать на одном графике. В качестве базового набора стилей 
приложения можно использовать Bootstrap UI/Angular Material/Your favourite theme. Для реализации графика можно (и нужно) 
использовать готовые решения на ваш выбор. Для вдохновения можно смотреть на графики: 
[здесь](https://bittrex.com/Market/Index?MarketName=BTC-WAVES) и [здесь](http://www.finam.ru/profile/moex-akcii/sberbank/)

При анализе полученного от вас кода мы будем обращать внимание на его оформление, читабельность, 
ваш подход к проектированию и тестированию приложения. Единственное требование, которое мы предьявляем к верстке - 
продуманная реакция на изменение размеров окна браузера. Кроссбраузерность нас интересует только в рамках 
поддержки HTML5. 

Результат должен поставляться виде, пригодном для проверки в браузере (либо в виде команды для сборки/запуска приложения)
