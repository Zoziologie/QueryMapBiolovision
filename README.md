# improvedBiolovisionVisualisation

One of the missing feature in the Biolovision websites (ornitho.ch, ornitho.de, faune-alsace.fr...) is a zoomable map wither for query or for visualization. You can specify the GPS coordinate, but honestly, who is using it ? There is a map to view data but it's actually an image with some res dots... but it's impossible to see precise location.

That is why I am trying to develop this tool in Nodejs and Javascript to be able to query ALL biolovision website!

## Main feathures ##
* Work on all website using biolovision system (ornitho.ch,ornitho.de,...). Choose the website based on the coordinate of the center of the rectangle.
* Draw a rectangle of query in a zoomable map
* All advence query setting possible (date, species, output format...)
* Display result on map for website where the kml export exist (ornitho.ch, ornitho.cat...)
* Export to csv table the specie list result

## How to use it ?
1. Click on the black square on the left 
2. Draw the the rectangle of query (keep the mouse down)
3. Click on "Advance Setting" if you want to query a specif species, date or modify the output format
4. Click on "View On Map", "Go the Wesbite" or "Export to CSV"


Warning : You need to be login and have the priveledge of the data in the website of question to see the result

## Demo
[View it on www.zoziologie.raphaelnussbaumer.com/improved-biolovision-visualisation](http://zoziologie.raphaelnussbaumer.com/improved-biolovision-visualisation/)

## TODO
* Read html data and read the GPS coordinate to make the map ouput version work for website without the kml output
* Move the top bar to a side bar
* Improve the possibility of marker size, color, type... 
