//-------------------------------------------------------------------------------------------------------------------------------------------------------
// INITIALE
//-------------------------------------------------------------------------------------------------------------------------------------------------------
var isLocate=false, list, me=false;
var search={site:"http://www.ornitho.ch",osm_id:"51701",m_id:"94",sp_DChoice:"offset",sp_DFrom:"",sp_DTo:"",sp_DSeasonFromDay:"1",sp_DSeasonFromMonth:"1",sp_DSeasonToDay:"31",sp_DSeasonToMonth:"12",sp_DOffset:"5",sp_SChoice:"category",speciesFilter:"",sp_S:"1648",sp_Cat:{never:!0,veryrare:!0,rare:!0,unusual:!0,escaped:!1,common:!1,verycommon:!1},sp_Family:1,sp_PChoice:"all",sp_CommuneCounty:3,sp_Commune:801,sp_Info:"",sp_P:0,sp_Coord:{W:"",S:"",E:"",N:""},sp_Grid:"1",sp_AltitudeFrom:193,sp_AltitudeTo:4634,sp_CommentValue:"",sp_OnlyAH:0,sp_OnlyMyData:!1,sp_OnlyNew:!1,sp_OnlyWithPicture:!1,sp_OnlyWithSound:!1,sp_Ats:0,sp_FChoice:"species",sp_FDisplay:"DATE_SPECIES_PLACE",sp_DFormat:"DESC",sp_FOrderListSpecies:"SYSTEMATIC",sp_FListSpeciesChoice:"DATA",sp_DateSynth:"04.09.2015",sp_FOrderSynth:"SYSTEMATIC",sp_FGraphChoice:"DATA",sp_FGraphFormat:"auto",sp_FAltScale:250,sp_FAltChoice:"DATA",sp_FMapFormat:"none",sp_FExportFormat:"KML",mp_item_per_page:60,mp_current_page:1,lang:["en","fr"],kml:!0};
var countrieslist  = [{"osm_id":"51701","name":"Switzerland","kml":true,"website":"http://www.ornitho.ch"},{"osm_id":"365331","name":"Italy","kml":false,"website":"http://www.ornitho.it"},{"osm_id":"16239","name":"Austria","kml":false,"website":"http://www.ornitho.at"},{"osm_id":"51477","name":"Germany","kml":false,"website":"http://www.ornitho.de"},{"osm_id":"349053","name":"Catalonia","kml":true,"website":"http://www.ornitho.cat"},{"osm_id":"2171347","name":"Luxembourg","kml":false,"website":"http://ornitho.lu"},{"osm_id":"49715","name":"Poland","kml":false,"website":"http://ornitho.pl"},{"osm_id":"349042","name":"Basque Country","kml":true,"website":"http://www.ornitho.eus/"},{"osm_id":"8641","name":"Champagne-Ardenne","kml":false,"website":"http://www.faune-Champagne-ardenne.org"},{"osm_id":"8636","name":"Alsace","kml":false,"website":"http://www.faune-alsace.org"},{"osm_id":"8645","name":"Lorraine","kml":false,"website":"http://www.faune-lorraine.org"},{"osm_id":"7428","name":"Charente","kml":false,"website":"http://www.faune-Charente.org"},{"osm_id":"7431","name":"Charente-Maritime","kml":false,"website":"http://www.faune-Charente-maritime.org"},{"osm_id":"8644","name":"Limousin","kml":false,"website":"http://www.faune-limousin.eu"},{"osm_id":"7455","name":"Deux-Sèvres","kml":false,"website":"http://www.nature79.org"},{"osm_id":"8637","name":"Aquitaine","kml":false,"website":"http://www.faune-aquitaine.org"},{"osm_id":"7377","name":"Vienne","kml":false,"website":"http://vienne.lpo.fr"},{"osm_id":"7387","name":"Ain","kml":false,"website":"http://www.faune-ain.org"},{"osm_id":"8638","name":"Auvergne","kml":false,"website":"http://www.faune-auvergne.org"},{"osm_id":"7430","name":"Ardèche","kml":false,"website":"http://www.faune-ardeche.org"},{"osm_id":"7434","name":"Drôme","kml":false,"website":"http://www.faune-drome.org"},{"osm_id":"7407","name":"Haute-Savoie","kml":false,"website":"http://haute-savoie.lpo.fr"},{"osm_id":"7437","name":"Isère","kml":false,"website":"http://www.faune-isere.org"},{"osm_id":"7420","name":"Loire","kml":false,"website":"http://www.faune-loire.org"},{"osm_id":"4850451","name":"Rhône","kml":false,"website":"http://www.faune-rhone.org"},{"osm_id":"7425","name":"Savoie","kml":false,"website":"http://www.faune-savoie.org"},{"osm_id":"102740","name":"Brittany","kml":false,"website":"http://www.faune-bretagne.org"},{"osm_id":"7424","name":"Côte-d'Or","kml":false,"website":"http://www.oiseaux-cote-dor.org"},{"osm_id":"8642","name":"Free County","kml":false,"website":"http://franche-comte.lpo.fr"},{"osm_id":"7448","name":"Nièvre","kml":false,"website":"http://www.faune-nievre.org"},{"osm_id":"7392","name":"Yonne","kml":false,"website":"http://www.faune-yonne.org"},{"osm_id":"7456","name":"Cher","kml":false,"website":"http://www.faune-Cher.org"},{"osm_id":"7408","name":"Indre-et-Loire","kml":false,"website":"http://www.faune-touraine.org"},{"osm_id":"8643","name":"Languedoc-Roussillon","kml":false,"website":"http://www.faune-lr.org"},{"osm_id":"7451","name":"Aveyron","kml":false,"website":"http://www.faune-tarn-aveyron.org"},{"osm_id":"8649","name":"Ile-de-France","kml":false,"website":"http://www.faune-iledefrance.org"},{"osm_id":"7432","name":"Loire-Atlantique","kml":false,"website":"http://www.faune-loire-atlantique.org"},{"osm_id":"7409","name":"Maine-et-Loire","kml":false,"website":"http://www.faune-anjou.org"},{"osm_id":"7438","name":"Mayenne","kml":false,"website":"http://www.faune-maine.org"},{"osm_id":"7443","name":"Sarthe","kml":false,"website":"http://www.faune-maine.org"},{"osm_id":"7402","name":"Vendée","kml":false,"website":"http://www.faune-vendee.org"},{"osm_id":"8654","name":"Provence-Alpes-Côte d'Azur","kml":false,"website":"http://www.faune-paca.org"},{"osm_id":"1260552","name":"Martinique","kml":false,"website":"http://www.faune-martinique.org"},{"osm_id":"77601","name":"Réunion","kml":false,"website":"http://www.faune-reunion.fr"},{"osm_id":"2202121","name":"French Guiana","kml":false,"website":"http://www.faune-guyane.fr"},{"osm_id": "1403916","name": "France","kml": false,"website": "https://www.faune-france.org"}];





var changeCountry = function(osm_id){
	var country = jQuery.grep(countrieslist, function(e){ return e.osm_id == osm_id; })[0];
	
	var layer = layerCountries.getLayer(country.layer_id);
	layer.setStyle({
		//color: '#843984',
		fillOpacity: 0.1,
		interactive:false
	})
	layerCountry.clearLayers();
	layerCountry.addLayer(layer)

	search['osm_id'] = osm_id
	search['site'] = country.website;
	search['kml'] = country.kml;

	if (search['kml']) {
		jQuery('#kml-button').removeClass('disabled')
	} else {
		jQuery('#kml-button').addClass('disabled')
	}

}




























//-------------------------------------------------------------------------------------------------------------------------------------------------------
// PART QUERY
//-------------------------------------------------------------------------------------------------------------------------------------------------------

// Create the link
function getLink() {
	// Initial link url
	var link = search['site'] + '/index.php?';

	if (search['sp_FChoice'] == 'kml') {
		link += 'm_id=97';
	} else {
		link += 'm_id=94';
	}

	// DATE
	link += '&sp_DChoice=' + search['sp_DChoice'];
	switch (search['sp_DChoice']) {
		case 'all':
		break;
		case 'range':
		link += '&sp_DFrom=' + search['sp_DFrom'];
		link += '&sp_DTo=' + search['sp_DTo'];
		break;
		case 'season':
		link += '&sp_DSeasonFromDay=' + search['sp_DSeasonFromDay']
		link += '&sp_DSeasonFromMonth=' + search['sp_DSeasonFromMonth']
		link += '&sp_DSeasonToDay=' + search['sp_DSeasonToDay']
		link += '&sp_DSeasonToMonth=' + search['sp_DSeasonToMonth']
		break;
		case 'offset':
		link += '&sp_DOffset=' + search['sp_DOffset']
		break;
	}

	// Species
	link += '&sp_SChoice=' + search['sp_SChoice']
	switch (search['sp_SChoice']) {
		case 'all':
		break;
		case 'species':
		link += '&sp_S=' + search['sp_S'];
		break;
		case 'category':
		link += '&sp_Cat[never]=' + search['sp_Cat']['never'] * 1;
		link += '&sp_Cat[veryrare]=' + search['sp_Cat']['veryrare'] * 1;
		link += '&sp_Cat[rare]=' + search['sp_Cat']['rare'] * 1;
		link += '&sp_Cat[unusual]=' + search['sp_Cat']['unusual'] * 1;
		link += '&sp_Cat[escaped]=' + search['sp_Cat']['escaped'] * 1;
		link += '&sp_Cat[common]=' + search['sp_Cat']['common'] * 1;
		link += '&sp_Cat[verycommon]=' + search['sp_Cat']['verycommon'] * 1;
		break;
		case 'family':
		link += '&sp_Family=' + search['sp_Family'];
		break;
	}

	// Location
	link += '&sp_PChoice=' + search['sp_PChoice'];
	switch (search['sp_PChoice']) {
		case 'all':
		break;
		case 'canton':
		link += '&sp_cC=' + search['sp_cC'];
		link += '&sp_cCO=' + search['sp_cCO'];
		break;
		case 'commune':
		link += '&sp_CommuneCounty=' + search['sp_CommuneCounty'];
		link += '&sp_Commune=' + search['sp_Commune'];
		break;
		case 'place':
		link += '&sp_P=' + search['sp_P'];
		break;
		case 'coord':
		link += '&sp_Coord[W]=' + search['sp_Coord']['W'];
		link += '&sp_Coord[S]=' + search['sp_Coord']['S'];
		link += '&sp_Coord[E]=' + search['sp_Coord']['E'];
		link += '&sp_Coord[N]=' + search['sp_Coord']['N'];
		break;
		case 'grid':
		link += '&sp_Grid=' + search['sp_Grid'];
		break;
	}

	// Other	
	if (document.getElementById('only_mine').checked) {
		link += '&sp_OnlyMyData=1';
	}
	if (document.getElementById('only_new').checked) {
		link += '&sp_OnlyNew=1';
	}
	if (document.getElementById('only_picture').checked) {
		link += '&sp_OnlyWithPicture=1';
	}
	if (document.getElementById('only_sound').checked) {
		link += '&sp_OnlyWithSound=1';
	}

	// Display
	if (search['sp_FChoice'] == 'kml') {
		link += '&sp_FChoice=' + 'export';
	} else {
		link += '&sp_FChoice=' + search['sp_FChoice']
	}

	switch (search['sp_FChoice']) {
		case 'list':
		link += '&sp_FDisplay=' + search['sp_FDisplay'];
		link += '&sp_DFormat=' + search['sp_DFormat'];
		break;
		case 'species':
		case 'csv':
		case 'target':
		link += '&sp_FOrderListSpecies=' + search['sp_FOrderListSpecies'];
		link += '&sp_FListSpeciesChoice=' + search['sp_FListSpeciesChoice'];
		break;
		case 'synth':
		link += '&sp_FOrderSynth=' + search['sp_FOrderSynth'];
		break;
		case 'histo':
		link += '&sp_FGraphChoice=' + search['sp_FGraphChoice'];
		link += '&sp_FGraphFormat=' + search['sp_FGraphFormat'];
		break;
		case 'alt':
		link += '&sp_FAltScale=' + search['sp_FAltScale'];
		link += '&sp_FAltChoice=' + search['sp_FAltChoice'];
		break;
		case 'map':
		link += '&sp_FMapFormat=' + search['sp_FMapFormat'];
		break;
		case 'export':
		link += '&sp_FExportFormat=' + search['sp_FExportFormat'];
		break;
		case 'kml':
		link += '&sp_FExportFormat=' + search['sp_FExportFormat'];
		break;
	}

	// Language
	link += '&langu=' + search['lang'][0]
		// Return
		return link
	}

// Create CSV file of the specie list.
function csv(link, bird_list_mine = 0) {
	jQuery(".overlay").removeClass("hidden");
	jQuery.get(link, function(bird_list) {

		if ( !(bird_list_mine == 0) ){
			list_rm = [];
			bird_list_mine.forEach(function(bl_mi, bl_mid) {
				i = 0;
				condition = true;
				do {
					if (bird_list[i][3] == bl_mi[3]) {
						condition = false;
						list_rm.push(i);
					}
					i++;
					if (i >= bird_list.length) {
						condition = false;
					}
				}
				while (condition);
			})

			var bird_list = jQuery.grep(bird_list, function(n, i) {
				return jQuery.inArray(i, list_rm) == -1;
			});
		}

		var csvContent = "data:text/csv;charset=utf-8,";
		bird_list.forEach(function(infoArray, index) {
			dataString = infoArray.join(",");
			csvContent += index < bird_list.length ? dataString + "\n" : dataString;
		});
		var encodedUri = encodeURI(csvContent);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "my_data.csv");

		jQuery(".overlay").addClass("hidden");
		link.click(); // This will download the data file named "my_data.csv".
	})
}






























//-------------------------------------------------------------------------------------------------------------------------------------------------------
// PART VISUALIZATION
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// This should not change search, it should only modify the visual aspect to fit search. Modification of search are made on the onclick function.
function UpdateStuff() {
	// Place
	jQuery('.nav-pills#place a').each(function(k) {
		if (search['sp_PChoice'] == jQuery(this).attr('name')) {
			jQuery(this).addClass('active');
		} else {
			jQuery(this).removeClass('active');
		}
	});

	// Date
	jQuery('input[type=radio][name=radio_date]').each(function(k) {
		if (search['sp_DChoice'] == this.value) {
			this.checked = true;
		} else {
			this.cheked = false;
		}
	});
	// Specie-Categorie
	jQuery('.list-group#cat a').each(function(k) {
		if (search['sp_Cat'][jQuery(this).attr('name')]) {
			jQuery(this).addClass('active')
		} else {
			jQuery(this).removeClass('active')
		}
	});
	//Specie
	if (search['sp_SChoice'] == 'all') {
		jQuery('#button-species-all').addClass('active')
	} else {
		jQuery('#button-species-all').removeClass('active')
	}
	if (search['sp_SChoice'] == 'species') {
		jQuery('#button-species-species').addClass('active')
	} else {
		jQuery('#button-species-species').removeClass('active')
	}
	//Language
	jQuery('.list-group#search_species_lang a').each(function(k) {
		if (search['lang'].indexOf(jQuery(this).attr('name')) > -1) {
			jQuery(this).addClass('active')
		} else {
			jQuery(this).removeClass('active')
		}
	});
	// Ouputs
	jQuery('ul.nav-pills#out li').each(function(k) {
		if (search['sp_FChoice'] == jQuery(this).attr('name')) {
			// If option of website
			if (jQuery.inArray(jQuery(this).attr('name'), ['list', 'species', 'synth', 'histo', 'alt', 'map']) > -1) {
				jQuery('#website-dropdown-toggle').html(jQuery(this).text() + '<span class="caret"></span>');
				jQuery(this).parent().parent().addClass('active')
			} else {
				jQuery(this).addClass('active');
			}
		} else {
			jQuery(this).removeClass('active');
		}
	});
}


























/////////////////////////////////////////////////////////////////////
jQuery(document).ready(function() {


	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = decodeURIComponent(pair[1]);
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(decodeURIComponent(pair[1]));
		}
	}
	if ('me' in query_string) {
		me = true;
		jQuery('#only_mine-col').show()
		jQuery('#other .col-md-4').addClass('col-md-3')
		jQuery('#other .col-md-3').removeClass('col-md-2')
		jQuery('#target-param').show()
		TurnPage('searchs')
	}

	//Create map   
	map = new L.Map('map1', {
		crs: L.CRS.EPSG3857,
		continuousWorld: true,
		worldCopyJump: false,
	});

	// BaseLayer Swisstopo
	var swisstopo = new L.TileLayer('https://wmts10.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg', {
		layer: 'ch.swisstopo.pixelkarte-farbe-pk1000.noscale',
		maxZoom: 17,
		attribution: 'Map data &copy; 2015 swisstopo',
	});
	var mapbox = L.tileLayer.provider('MapBox', {
		id: 'rafnuss.npl3amec',
		accessToken: token.mapbox
	})

	// Initiate the map
	map.setView(L.latLng(46.57591, 7.84956), 8);

	// Add tileLayer:
	baseLayers = {
		'MapBox': mapbox.addTo(map),
		'OpenStreetMap': L.tileLayer.provider('OpenStreetMap.Mapnik'),
		//'Outdoors' 	: L.tileLayer.provider('Thunderforest.Outdoors'),
		//'Watercolor' 	: L.tileLayer.provider('Stamen.Watercolor'),
		//'NASAGIBS' 	: L.tileLayer.provider('NASAGIBS.ViirsEarthAtNight2012')
		'Swisstopo': swisstopo
	};


	control = L.control.layers(baseLayers, null, {collapsed: true}).addTo(map);


	layerCountries = new L.featureGroup()
	layerCountry = new L.featureGroup()
	layerSearchRectangle = new L.featureGroup();

	var drawControl = new L.Control.Draw({
		draw: {
			polyline: false,
			polygon: false,
			circle: false,
			marker: false,
			circlemarker: false,
			rectangle: {
				shapeOptions: {
					color: '#398439',
					fillOpacity: 0,
					opacity: 1
				}
			}
		},
	});
	map.addControl(drawControl);

	map.on('draw:drawstart',function(){
		jQuery('#map1').css('cursor','crosshair')
	}).on('draw:created', function(e) {
		jQuery('#map1').css('cursor','auto')
		e.layer.setStyle({interactive:false})
		layerSearchRectangle.clearLayers().addLayer(e.layer).addTo(map);
		search['sp_Coord']['S'] = e.layer.getBounds().getSouth();
		search['sp_Coord']['W'] = e.layer.getBounds().getWest();
		search['sp_Coord']['N'] = e.layer.getBounds().getNorth();
		search['sp_Coord']['E'] = e.layer.getBounds().getEast();
		var res = [];
		layerCountries.eachLayer(function(layer) {
			if (res.length > 0) {
				return;
			} else {
				res = leafletPip.pointInLayer(e.layer.getCenter(), layer, true);
				if (res.length > 0) {
					changeCountry(layer.osm_id)
					jQuery('#countrySelect')[0].selectize.setValue(layer.osm_id,true);
				}
			}
		});
		//UpdateStuff();
	});


	L.easyButton('fa-search', function(btn, map){
		jQuery('#sidebar').collapse('toggle')
	}).addTo(map);

	jQuery.getJSON("https://zoziologie.raphaelnussbaumer.com/assets/QueryMapBiolovision/ListOfBird.min.json", function(ListOfBird) {
		jQuery('#search_species').selectize({
			valueField: 'id',
			searchField: ['english', 'francais', 'latin'],
			create: false,
			options: ListOfBird,
			render: {
				item: function(item, escape) {
					return '<div>' + item.english + '</div>';
				},
				option: function(item, escape) {
					return '<div>' + item.english + ' (<i>' + item.latin + '</i>)</div>';
				}
			},
			onChange: function(value) {
				search['sp_S'] = value.toString();
				jQuery('input[type=radio][name=radio_specie][value=species]').click();
			}
		})

	});

	countrieslist.forEach(function(country,idx) {
		jQuery.getJSON("https://zoziologie.raphaelnussbaumer.com/assets/QueryMapBiolovision/geojson/"+country.osm_id+".geojson", function(data){
			var layer = L.geoJSON(data,{
				onEachFeature: function(feature, layer) {
					layer.on('click',function() {
						var ii = Object.keys(this._eventParents)[0];
						changeCountry(this._eventParents[ii].osm_id);
						layerCountries.removeFrom(map);
						search['sp_PChoice'] = 'all';
						jQuery('#place [name="all"]').click();
						jQuery('#countrySelect')[0].selectize.setValue(this._eventParents[ii].osm_id);
					}).bindTooltip(function(e){
						var ii = Object.keys(e._eventParents)[0];
						return e._eventParents[ii].name + ' - ' + e._eventParents[ii].website;
					},{direction:'center'});
				}
			})
			layer.osm_id = country.osm_id
			layer.website = country.website;
			layer.kml = country.kml;
			layer.name = country.name;
			if (layer.kml){
				layer.setStyle({color: '#398439',fillOpacity: 0.3})
			} else {
				layer.setStyle({color: '#843984',fillOpacity: 0.3})
			}

			layerCountries.addLayer(layer);
			countrieslist[idx].layer_id = layerCountries.getLayerId(layer);

			if (search['osm_id'] == country.osm_id){
				changeCountry(search['osm_id']);
				layerCountry.addTo(map)
			}

		})
	});



	jQuery('#countrySelect').selectize({
		valueField: 'osm_id',
		labelField: 'osm_id',
		searchField: ['name', 'website'],
		create: false,
		options: countrieslist,
		render: {
			item: function(item, escape) {
				return '<div>' + item.name + ' - ' + item.website.split('//')[1] + '</div>';
			},
			option: function(item, escape) {
				return '<div>' + item.name + ' - ' + item.website.split('//')[1] + '</div>';
			}
		}
	})

	jQuery('#countrySelect')[0].selectize.setValue(search['osm_id']);
	jQuery('#countrySelect')[0].selectize.on('change',function(value){
		if (value){
			changeCountry(value);
		} else{
			jQuery('#countrySelect')[0].selectize.setValue(search['osm_id']);
		}
		layerSearchRectangle.removeFrom(map);
		layerCountry.addTo(map);
		map.fitBounds(layerCountry.getBounds(), {
			paddingTopLeft: [jQuery('#sidebar').width(), 0]
		});
	})

	jQuery('#place [name="all"]').click(function(e) {
		search['sp_PChoice'] = 'all';
		layerSearchRectangle.removeFrom(map);
		layerCountry.addTo(map);
		UpdateStuff();
	});
	jQuery('#place [name="coord"]').click(function(e) {
		search['sp_PChoice'] = 'coord';
		layerCountry.removeFrom(map);
		layerSearchRectangle.addTo(map);
		UpdateStuff();
	})

	jQuery('#draw-rectangle').click(function(){
		jQuery('.leaflet-draw-draw-rectangle')[0].click()
	})

	jQuery('#search-on-map').click(function(){
		layerSearchRectangle.removeFrom(map);
		layerCountry.removeFrom(map);
		layerCountries.addTo(map);
		map.fitBounds(layerCountries.getBounds(), {
			paddingTopLeft: [jQuery('#sidebar').width(), 0]
		});
		jQuery('#main').append('  <div class="alert alert-info alert-dismissable fade in">\
			<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
			<i class="fa fa-globe" id="globe-zoom" aria-hidden="true"></i> Region <strong>with</strong> zoomable map. <i class="fa fa-globe" id="globe-no-zoom"  aria-hidden="true"></i> Region  <strong>without</strong>  zoomable map \
			</div>')
		.click;
		jQuery('#place').each(function(it,li){jQuery(li).removeClass('active')})
		jQuery('#place [name="all"]').addClass('active');
	})


	// Define datepicker
	jQuery('#input-date-from').datetimepicker({
		format: 'DD.MM.YYYY',
		viewMode: 'years',
		defaultDate: new Date(),
		showTodayButton: true,
		sideBySide: true,
	}).on("dp.change", function(e) {
		search['sp_DFrom'] = e.date.format('DD.MM.YYYY');
		search['sp_DChoice'] = 'range';
		UpdateStuff();
	});
	jQuery('#input-date-to').datetimepicker({
		format: 'DD.MM.YYYY',
		showTodayButton: true,
		viewMode: 'years',
		defaultDate: new Date(),
	}).on("dp.change", function(e) {
		search['sp_DTo'] = e.date.format('DD.MM.YYYY');
		search['sp_DChoice'] = 'range';
		UpdateStuff();
	});
	jQuery('#input-season-from').datetimepicker({
		format: 'DD.MM',
		dayViewHeaderFormat: 'MMMM',
		viewMode: 'months',
		defaultDate: moment("1900-01-01"),
	}).on("dp.change", function(e) {
		search['sp_DSeasonFromDay'] = e.date.format('DD');
		search['sp_DSeasonFromMonth'] = e.date.format('MM');
		search['sp_DChoice'] = 'season';
		UpdateStuff();
	});
	jQuery('#input-season-to').datetimepicker({
		format: 'DD.MM',
		dayViewHeaderFormat: 'MMMM',
		viewMode: 'months',
		defaultDate: moment("1900-12-31"),
	}).on("dp.change", function(e) {
		search['sp_DSeasonToDay'] = e.date.format('DD');
		search['sp_DSeasonToMonth'] = e.date.format('MM');
		search['sp_DChoice'] = 'season';
		UpdateStuff();
	});
	jQuery('#date_ago').change(function(e) {
		search['sp_DChoice'] = 'offset';
		search['sp_DOffset'] = jQuery('#date_ago').val();
		UpdateStuff();
	})
	jQuery('input[type=radio][name=radio_date]').change(function(e) {
		search['sp_DChoice'] = this.value;
		UpdateStuff();
	})
	jQuery('#date-range-10years').click(function(e) {
		var d = new Date();
		jQuery('#input-date-from').data('DateTimePicker').date('01.01.'+ (d.getFullYear()-9).toString())
		jQuery('#input-date-to').data('DateTimePicker').date('31.12.'+d.getFullYear().toString())
	})
	jQuery('#date-range-1year').click(function(e) {
		var d = new Date();
		jQuery('#input-date-from').data('DateTimePicker').date('01.01.'+(d.getFullYear()-1).toString())
		jQuery('#input-date-to').data('DateTimePicker').date('31.12.'+(d.getFullYear()-1).toString())
	})
	jQuery('#date-range-thisyear').click(function(e) {
		var d = new Date();
		jQuery('#input-date-from').data('DateTimePicker').date('01.01.'+d.getFullYear().toString())
		jQuery('#input-date-to').data('DateTimePicker').date('31.12.'+ d.getFullYear().toString())
	})
	jQuery('#date-range-thismonth').click(function(e) {
		var d = new Date();
		jQuery('#input-date-from').data('DateTimePicker').date('01.'+(d.getMonth()+1).toString()+'.'+d.getFullYear().toString())
		jQuery('#input-date-to').data('DateTimePicker').date('31.'+(d.getMonth()+1).toString()+'.'+ d.getFullYear().toString())
	})
	jQuery('#date-season-spring').click(function(e) {
		jQuery('#input-season-from').data('DateTimePicker').date('21.03.1990')
		jQuery('#input-season-to').data('DateTimePicker').date('21.06.1990')
	})
	jQuery('#date-season-summer').click(function(e) {
		jQuery('#input-season-from').data('DateTimePicker').date('21.06.1990')
		jQuery('#input-season-to').data('DateTimePicker').date('21.09.1990')
	})
	jQuery('#date-season-autumn').click(function(e) {
		jQuery('#input-season-from').data('DateTimePicker').date('21.09.1990')
		jQuery('#input-season-to').data('DateTimePicker').date('21.12.1990')
	})
	jQuery('#date-season-winter').click(function(e) {
		jQuery('#input-season-from').data('DateTimePicker').date('21.12.1990')
		jQuery('#input-season-to').data('DateTimePicker').date('21.03.1990')
	})

	DateSeasonPlusMoinsFX = function(jrs) {
		var dmoins = new Date();
		dmoins.setDate(dmoins.getDate()-jrs);
		var dplus = new Date();
		dplus.setDate(dplus.getDate()+jrs);
		jQuery('#input-season-from').data('DateTimePicker').date(dmoins.getDate().toString()+'.'+(dmoins.getMonth()+1).toString()+'.1990');
		jQuery('#input-season-to').data('DateTimePicker').date(dplus.getDate().toString()+'.'+(dplus.getMonth()+1).toString()+'.1990');
	}
	jQuery('#date-season-plusmoins3').click(function(){DateSeasonPlusMoinsFX(3)});
	jQuery('#date-season-plusmoins7').click(function(){DateSeasonPlusMoinsFX(7)});
	jQuery('#date-season-plusmoins14').click(function(){DateSeasonPlusMoinsFX(14)});

	jQuery('input[type=radio][name=radio_specie]').change(function(e) {
		search['sp_SChoice'] = this.value;
		UpdateStuff();
	})
	jQuery('.list-group#cat a').click(function(e) {
		search['sp_Cat'][jQuery(this).attr('name')] = !search['sp_Cat'][jQuery(this).attr('name')];
		UpdateStuff();
	})
	jQuery('.list-group#search_species_lang a').click(function() {
		if (search['lang'].indexOf(jQuery(this).attr('name')) > -1) {
			search['lang'].splice(search['lang'].indexOf(jQuery(this).attr('name')), 1)
		} else {
			search['lang'].push(jQuery(this).attr('name'))
		}
		jQuery('#search_species')[0].selectize.settings.searchField = search['lang'].map(function(item){
			if(item == 'fr'){
				return 'francais'
			} else if (item == 'en') {
				return 'english'
			}
		})
		jQuery('#search_species')[0].selectize.settings.searchField.push('latin')
		UpdateStuff();
	});


	jQuery('ul#out .dropdown-menu li').click(function(e) {
		search['sp_FChoice'] = jQuery(this).attr('name');
		UpdateStuff();
	})





	jQuery("#uploadSpecieList").change(function(evt) {
		
		var reader = new FileReader();
		reader.onload = (function(theFile) {
			return function(e) {
				body = e.target.result;
				var n = body.search('rowlight')-12;
				var m = body.search('<div style="clear:both"></div><script>');
				var body = body.slice(n,m);
				var body = body.split('<div style="clear:both"></div>');

				var bird_list=[];
				for (i = 0; i < body.length-2; i++) { 
					var bird = [];
					var txt = body[i];
					txt = txt.slice(txt.search('href="')+6);
					var url_1 = txt.slice(0,txt.search('"'));
					txt = txt.slice(txt.search('href="')+6);
					var url_2 = txt.slice(0,txt.search('"'));
					txt = txt.slice(txt.search('href="')+6);
					var url_3 = txt.slice(0,txt.search('"'));
					txt = txt.slice(txt.search('ght;">')+6);
					bird.push(parseInt( txt.slice(0,txt.search('</div>'))));
                	//txt = txt.slice(txt.search('itle="')+6);
                	//bird.push(txt.slice(0,txt.search('"')));
                	txt = txt.slice(txt.search('color:#')+7);
                	color = txt.slice(0,txt.search('">'));
                	switch (color) {
                		case '000000':
                		bird.push('unusual to very common');
                		break;
                		case '993366':
                		bird.push('escaped');
                		break;
                		case 'CC3300':
                		bird.push('rare');
                		break;
                		case 'FF0000':
                		bird.push('very rare');
                		break;
                		case 'CC0099':
                		bird.push('never seen');
                		break;
                		default:
                		bird.push('undefine')
                	}
                	txt = txt.slice(txt.search('><b>')+4);
                	bird.push(txt.slice(0,txt.search('</b>')));
                	txt = txt.slice(txt.search('<i>')+3);
                	bird.push(txt.slice(0,txt.search('</i>')));
                	txt = txt.slice(txt.search('height="10">')+13);
                	bird.push(txt.slice(0,txt.search('</div>')).replace('&lt;','<'));
                	txt = txt.slice(txt.search('><i>')+4);
                	bird.push(txt.slice(0,txt.search('</i>')));
                	txt = txt.slice(txt.search('><i>')+4);
                	bird.push(txt.slice(0,txt.search('</i>')));
                	bird.push(url_1.replace(/amp;/g,''));
                	bird.push(url_2.replace(/amp;/g,''));
                	bird.push(url_3.replace(/amp;/g,''));
                	bird_list.push(bird);
                }
                console.log(bird_list)

                var csvContent = "data:text/csv;charset=utf-8,";
                bird_list.forEach(function(infoArray, index) {
                	dataString = infoArray.join(",");
                	csvContent += index < bird_list.length ? dataString + "\n" : dataString;
                });
                var encodedUri = encodeURI(csvContent);
                var link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "my_data.csv");

                jQuery(".overlay").addClass("hidden");
                link.click();
            };
        })(evt.target.files[0]);

        reader.readAsText(evt.target.files[0]);
    });



	jQuery("#uploadeBirdTarget").change(function(evt) {
		
		var reader = new FileReader();
		reader.onload = (function(theFile) {
			return function(e) {
				parser = new DOMParser();
				body = parser.parseFromString( e.target.result,'text/html');
				data=[];
				Array.from(body.getElementsByClassName('ResultsStats')).forEach(function(res){
					d=[];
					d.push(res.getElementsByClassName('ResultsStats-index')[0].innerHTML);
					d.push(res.getElementsByClassName('SpecimenHeader-joined')[0].innerHTML.split(' <em')[0]);
					d.push(res.getElementsByClassName('StatsIcon-stat-count')[0].innerHTML);
					d.push(res.getElementsByClassName('ResultsStats-action')[0].innerHTML.split('href="')[1].split('"')[0]);
					data.push(d)
				})

				var csvContent = "data:text/csv;charset=utf-8,";
				data.forEach(function(d) {
					csvContent += d.join(",") + "\n";
				});
				var encodedUri = encodeURI(csvContent);
				var link = document.createElement("a");
				link.setAttribute("href", encodedUri);
				link.setAttribute("download", "my_data.csv");

				jQuery(".overlay").addClass("hidden");
				link.click();
			};
		})(evt.target.files[0]);

		reader.readAsText(evt.target.files[0]);
	});



	UpdateStuff();
	//alert('Work in Progress! Some function might be unavailable...')
});