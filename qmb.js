//-------------------------------------------------------------------------------------------------------------------------------------------------------
// INITIALE
//-------------------------------------------------------------------------------------------------------------------------------------------------------
var isLocate=false, list, me=false;
var marker_color = ['#1087bf', '#f86767', '#7ec9b1', '#f5c272', '#9c89cc', '#f1f075', '#a3e46b', '#ffffff', '#1f1f1f', '#63b6e5', '#fa946e', '#cccccc', '#c5e96f', '#b7ddf3', '#6c6c6c', '#0F668E', '#872424', '#10674C', '#7A5924', '#392177', '#f1f075', '#5C9F20', '#ffffff', '#1f1f1f', '#63b6e5', '#fa946e', '#cccccc', '#c5e96f', '#b7ddf3', '#6c6c6c'];
var search={site:"http://www.ornitho.ch",osm_id:"51701",m_id:"94",sp_DChoice:"offset",sp_DFrom:"",sp_DTo:"",sp_DSeasonFromDay:"1",sp_DSeasonFromMonth:"1",sp_DSeasonToDay:"31",sp_DSeasonToMonth:"12",sp_DOffset:"5",sp_SChoice:"category",speciesFilter:"",sp_S:"1648",sp_Cat:{never:!0,veryrare:!0,rare:!0,unusual:!0,escaped:!1,common:!1,verycommon:!1},sp_Family:1,sp_PChoice:"all",sp_CommuneCounty:3,sp_Commune:801,sp_Info:"",sp_P:0,sp_Coord:{W:"",S:"",E:"",N:""},sp_Grid:"1",sp_AltitudeFrom:193,sp_AltitudeTo:4634,sp_CommentValue:"",sp_OnlyAH:0,sp_OnlyMyData:!1,sp_OnlyNew:!1,sp_OnlyWithPicture:!1,sp_OnlyWithSound:!1,sp_Ats:0,sp_FChoice:"species",sp_FDisplay:"DATE_SPECIES_PLACE",sp_DFormat:"DESC",sp_FOrderListSpecies:"SYSTEMATIC",sp_FListSpeciesChoice:"DATA",sp_DateSynth:"04.09.2015",sp_FOrderSynth:"SYSTEMATIC",sp_FGraphChoice:"DATA",sp_FGraphFormat:"auto",sp_FAltScale:250,sp_FAltChoice:"DATA",sp_FMapFormat:"none",sp_FExportFormat:"KML",mp_item_per_page:60,mp_current_page:1,lang:["en","fr"],kml:!0};
var countrieslist  = [{"osm_id":"51701","name":"Switzerland","kml":true,"website":"http://www.ornitho.ch"},{"osm_id":"365331","name":"Italy","kml":false,"website":"http://www.ornitho.it"},{"osm_id":"16239","name":"Austria","kml":false,"website":"http://www.ornitho.at"},{"osm_id":"51477","name":"Germany","kml":false,"website":"http://www.ornitho.de"},{"osm_id":"349053","name":"Catalonia","kml":true,"website":"http://www.ornitho.cat"},{"osm_id":"2171347","name":"Luxembourg","kml":false,"website":"http://ornitho.lu"},{"osm_id":"49715","name":"Poland","kml":false,"website":"http://ornitho.pl"},{"osm_id":"349042","name":"Basque Country","kml":true,"website":"http://www.ornitho.eus/"},{"osm_id":"8641","name":"Champagne-Ardenne","kml":false,"website":"http://www.faune-Champagne-ardenne.org"},{"osm_id":"8636","name":"Alsace","kml":false,"website":"http://www.faune-alsace.org"},{"osm_id":"8645","name":"Lorraine","kml":false,"website":"http://www.faune-lorraine.org"},{"osm_id":"7428","name":"Charente","kml":false,"website":"http://www.faune-Charente.org"},{"osm_id":"7431","name":"Charente-Maritime","kml":false,"website":"http://www.faune-Charente-maritime.org"},{"osm_id":"8644","name":"Limousin","kml":false,"website":"http://www.faune-limousin.eu"},{"osm_id":"7455","name":"Deux-Sèvres","kml":false,"website":"http://www.nature79.org"},{"osm_id":"8637","name":"Aquitaine","kml":false,"website":"http://www.faune-aquitaine.org"},{"osm_id":"7377","name":"Vienne","kml":false,"website":"http://vienne.lpo.fr"},{"osm_id":"7387","name":"Ain","kml":false,"website":"http://www.faune-ain.org"},{"osm_id":"8638","name":"Auvergne","kml":false,"website":"http://www.faune-auvergne.org"},{"osm_id":"7430","name":"Ardèche","kml":false,"website":"http://www.faune-ardeche.org"},{"osm_id":"7434","name":"Drôme","kml":false,"website":"http://www.faune-drome.org"},{"osm_id":"7407","name":"Haute-Savoie","kml":false,"website":"http://haute-savoie.lpo.fr"},{"osm_id":"7437","name":"Isère","kml":false,"website":"http://www.faune-isere.org"},{"osm_id":"7420","name":"Loire","kml":false,"website":"http://www.faune-loire.org"},{"osm_id":"4850451","name":"Rhône","kml":false,"website":"http://www.faune-rhone.org"},{"osm_id":"7425","name":"Savoie","kml":false,"website":"http://www.faune-savoie.org"},{"osm_id":"102740","name":"Brittany","kml":false,"website":"http://www.faune-bretagne.org"},{"osm_id":"7424","name":"Côte-d'Or","kml":false,"website":"http://www.oiseaux-cote-dor.org"},{"osm_id":"8642","name":"Free County","kml":false,"website":"http://franche-comte.lpo.fr"},{"osm_id":"7448","name":"Nièvre","kml":false,"website":"http://www.faune-nievre.org"},{"osm_id":"7392","name":"Yonne","kml":false,"website":"http://www.faune-yonne.org"},{"osm_id":"7456","name":"Cher","kml":false,"website":"http://www.faune-Cher.org"},{"osm_id":"7408","name":"Indre-et-Loire","kml":false,"website":"http://www.faune-touraine.org"},{"osm_id":"8643","name":"Languedoc-Roussillon","kml":false,"website":"http://www.faune-lr.org"},{"osm_id":"7451","name":"Aveyron","kml":false,"website":"http://www.faune-tarn-aveyron.org"},{"osm_id":"8649","name":"Ile-de-France","kml":false,"website":"http://www.faune-iledefrance.org"},{"osm_id":"7432","name":"Loire-Atlantique","kml":false,"website":"http://www.faune-loire-atlantique.org"},{"osm_id":"7409","name":"Maine-et-Loire","kml":false,"website":"http://www.faune-anjou.org"},{"osm_id":"7438","name":"Mayenne","kml":false,"website":"http://www.faune-maine.org"},{"osm_id":"7443","name":"Sarthe","kml":false,"website":"http://www.faune-maine.org"},{"osm_id":"7402","name":"Vendée","kml":false,"website":"http://www.faune-vendee.org"},{"osm_id":"8654","name":"Provence-Alpes-Côte d'Azur","kml":false,"website":"http://www.faune-paca.org"},{"osm_id":"1260552","name":"Martinique","kml":false,"website":"http://www.faune-martinique.org"},{"osm_id":"77601","name":"Réunion","kml":false,"website":"http://www.faune-reunion.fr"},{"osm_id":"2202121","name":"French Guiana","kml":false,"website":"http://www.faune-guyane.fr"},{"osm_id": "1403916","name": "France","kml": false,"website": "https://www.faune-france.org"}];

ListOfBird = [{"id":1,"latin":"Gavia stellata","english":"Red-throated Diver","francais":"Plongeon catmarin","deutch":"Sterntaucher","italiano":"Strolaga minore","rarity":0,"img":"008001_P001_RTDiver"},{"id":2,"latin":"Gavia arctica","english":"Black-throated Diver","francais":"Plongeon arctique","deutch":"Prachttaucher","italiano":"Strolaga mezzana","rarity":0,"img":"-1127467575"},{"id":3,"latin":"Gavia immer","english":"Great Northern Diver","francais":"Plongeon imbrin","deutch":"Eistaucher","italiano":"Strolaga maggiore","rarity":0,"img":"-1125620533"},{"id":4,"latin":"Gavia adamsii","english":"Yellow-billed Diver","francais":"Plongeon à bec blanc","deutch":"Gelbschnabeltaucher","italiano":"Strolaga beccogiallo","rarity":1,"img":"-1124697012"},{"id":5,"latin":"Tachybaptus ruficollis","english":"Little Grebe","francais":"Grèbe castagneux","deutch":"Zwergtaucher","italiano":"Tuffetto","rarity":0,"img":"009001_P001_LittleGrebe"},{"id":6,"latin":"Podiceps auritus","english":"Horned Grebe","francais":"Grèbe esclavon","deutch":"Ohrentaucher","italiano":"Svasso cornuto","rarity":0,"img":"646742474"},{"id":7,"latin":"Podiceps nigricollis","english":"Black-necked Grebe","francais":"Grèbe à cou noir","deutch":"Schwarzhalstaucher","italiano":"Svasso piccolo","rarity":0,"img":"647665995"},{"id":8,"latin":"Podiceps cristatus","english":"Great Crested Grebe","francais":"Grèbe huppé","deutch":"Haubentaucher","italiano":"Svasso maggiore","rarity":0,"img":"009014_P001_GCGrebe"},{"id":9,"latin":"Podiceps grisegena","english":"Red-necked Grebe","francais":"Grèbe jougris","deutch":"Rothalstaucher","italiano":"Svasso collorosso","rarity":0,"img":"644895432"},{"id":10,"francais":"Fulmar boréal","english":"Northern Fulmar","latin":"Fulmarus glacialis","deutch":"Eissturmvogel","rarity":1,"img":""},{"id":11,"francais":"Puffin cendré","english":"Cory’s Shearwater","latin":"Calonectris borealis","deutch":"Gelbschnabel-Sturmtaucher","rarity":1,"img":""},{"id":12,"francais":"Puffin majeur","english":"Great Shearwater","latin":"Puffinus gravis","deutch":"Großer Sturmtaucher","rarity":1,"img":""},{"id":13,"latin":"Puffinus griseus","english":"Sooty Shearwater","francais":"Puffin fuligineux","deutch":"Dunkler Sturmtaucher","italiano":"Berta grigia","rarity":1,"img":"011062_P001_SootyShearwater"},{"id":14,"latin":"Puffinus puffinus","english":"Manx Shearwater","francais":"Puffin des Anglais","deutch":"Schwarzschnabelsturmtaucher","italiano":"Berta minore atlantica","rarity":1,"img":"011066_P002_ManxShearwater"},{"id":15,"francais":"Puffin yelkouan","latin":"Puffinus yelkouan","rarity":1,"img":""},{"id":16,"francais":"Puffin semblable","english":"Macaronesian Shearwater","latin":"Puffinus baroli","deutch":"Kleiner Sturmtaucher","rarity":1,"img":""},{"id":17,"francais":"Océanite tempête","english":"European Storm Petrel","latin":"Hydrobates pelagicus","deutch":"Sturmschwalbe","rarity":1,"img":""},{"id":18,"francais":"Océanite de Castro","latin":"Oceanodroma castro","rarity":1,"img":""},{"id":19,"francais":"Océanite culblanc","english":"Leach's Storm Petrel","latin":"Oceanodroma leucorhoa","deutch":"Wellenläufer","rarity":1,"img":""},{"id":20,"latin":"Pelecanus onocrotalus","english":"Great White Pelican","francais":"Pélican blanc","deutch":"Rosapelikan","italiano":"Pellicano comune","rarity":1,"img":"015001_P001_WhitePelican"},{"id":21,"francais":"Pélican gris","english":"Pink-backed Pelican","latin":"Pelecanus rufescens","deutch":"Rötelpelikan","rarity":1,"img":""},{"id":22,"latin":"Pelecanus crispus","english":"Dalmatian Pelican","francais":"Pélican frisé","deutch":"Krauskopfpelikan","italiano":"Pellicano riccio","rarity":1,"img":"015005_P001_DalmPelican"},{"id":23,"latin":"Morus bassanus","english":"Northern Gannet","francais":"Fou de Bassan","deutch":"Basstölpel","italiano":"Sula","rarity":1,"img":"-2126498933"},{"id":24,"latin":"Phalacrocorax carbo","english":"Great Cormorant","francais":"Grand Cormoran","deutch":"Kormoran","italiano":"Cormorano","rarity":0,"img":"017004_P008_Cormorant"},{"id":25,"latin":"Phalacrocorax carbo carbo","english":"Great Cormorant (P.c.carbo)","francais":"Grand Cormoran (P.c.carbo)","deutch":"Kormoran (P.c.carbo)","italiano":"Cormorano (P.c.carbo)","rarity":1,"img":"017004_P008_Cormorant"},{"id":26,"francais":"Grand Cormoran (P.c.sinensis)","latin":"Phalacrocorax carbo sinensis","rarity":1,"img":""},{"id":27,"latin":"Phalacrocorax aristotelis","english":"European Shag","francais":"Cormoran huppé","deutch":"Krähenscharbe","italiano":"Marangone dal ciuffo","rarity":1,"img":"017012_P001_Shag"},{"id":28,"latin":"Phalacrocorax pygmeus","english":"Pygmy Cormorant","francais":"Cormoran pygmée","deutch":"Zwergscharbe","italiano":"Marangone minore","rarity":1,"img":"017032_P001_PygmyCormorant"},{"id":29,"latin":"Ardea cinerea","english":"Grey Heron","francais":"Héron cendré","deutch":"Graureiher","italiano":"Airone cenerino","rarity":0,"img":"020003_P002_GreyHeron"},{"id":30,"latin":"Ardea purpurea","english":"Purple Heron","francais":"Héron pourpré","deutch":"Purpurreiher","italiano":"Airone rosso","rarity":0,"img":"-1476360846"},{"id":31,"latin":"Ardeola ralloides","english":"Squacco Heron","francais":"Crabier chevelu","deutch":"Rallenreiher","italiano":"Sgarza ciuffetto","rarity":0,"img":"020027_P001_SquaccoHeron"},{"id":32,"latin":"Bubulcus ibis","english":"Cattle Egret","francais":"Héron garde-boeufs","deutch":"Kuhreiher","italiano":"Airone guardabuoi","rarity":0,"img":"-1444037611"},{"id":33,"latin":"Egretta alba","english":"Great White Egret","francais":"Grande Aigrette","deutch":"Silberreiher","italiano":"Airone bianco maggiore","rarity":0,"img":"-1475437325"},{"id":34,"latin":"Egretta garzetta","english":"Little Egret","francais":"Aigrette garzette","deutch":"Seidenreiher","italiano":"Garzetta","rarity":0,"img":"-1446808174"},{"id":35,"latin":"Egretta gularis","english":"Western Reef Heron","francais":"Aigrette des récifs","deutch":"Küstenreiher","italiano":"Airone schistaceo","rarity":1,"img":"020062_P001_WReefHeron"},{"id":36,"latin":"Nycticorax nycticorax","english":"Black-crowned Night Heron","francais":"Bihoreau gris","deutch":"Nachtreiher","italiano":"Nitticora","rarity":0,"img":"-1415408460"},{"id":37,"latin":"Ixobrychus minutus","english":"Little Bittern","francais":"Blongios nain","deutch":"Zwergdommel","italiano":"Tarabusino","rarity":0,"img":"-1362767763"},{"id":38,"latin":"Botaurus stellaris","english":"Eurasian Bittern","francais":"Butor étoilé","deutch":"Rohrdommel","italiano":"Tarabuso","rarity":0,"img":"020059_P001_Bittern"},{"id":39,"latin":"Ciconia ciconia","english":"White Stork","francais":"Cigogne blanche","deutch":"Weissstorch","italiano":"Cicogna bianca","rarity":0,"img":"-542897137"},{"id":40,"latin":"Mycteria ibis","english":"Yellow-billed Stork","francais":"Tantale ibis","deutch":"Nimmersatt","italiano":"Tantalo africano","rarity":1,"img":"023003_P002_YlwBilledStork"},{"id":41,"latin":"Ciconia nigra","english":"Black Stork","francais":"Cigogne noire","deutch":"Schwarzstorch","italiano":"Cicogna nera","rarity":0,"img":"023007_P001_BlackStork"},{"id":42,"latin":"Platalea leucorodia","english":"Eurasian Spoonbill","francais":"Spatule blanche","deutch":"Löffler","italiano":"Spatola","rarity":1,"img":"1232236433"},{"id":43,"latin":"Platalea alba","english":"African Spoonbill","francais":"Spatule d'Afrique","deutch":"Afrikanischer_Löffler","italiano":"Spatola africana","rarity":1,"img":"024028_P001_AfrSpoonbill"},{"id":44,"latin":"Plegadis falcinellus","english":"Glossy Ibis","francais":"Ibis falcinelle","deutch":"Sichler","italiano":"Mignattaio","rarity":1,"img":"1228542349"},{"id":45,"latin":"Phoenicopterus roseus","english":"Greater Flamingo","francais":"Flamant rose","deutch":"Rosaflamingo","italiano":"Fenicottero","rarity":1,"img":"025001_P002_GreaterFlamingo"},{"id":46,"latin":"Phoenicopterus chilensis","english":"Chilean Flamingo","francais":"Flamant du Chili","deutch":"Chileflamingo","italiano":"Fenicottero del Cile","rarity":1,"img":"025002_P001_ChileanFlamingo"},{"id":47,"francais":"Dendrocygne des Antilles","latin":"Dendrocygna arborea","rarity":1,"img":""},{"id":48,"latin":"Dendrocygna autumnalis","english":"Black-bellied Whistling Duck","francais":"Dendrocygne à ventre noir","deutch":"Rotschnabelpfeifgans","italiano":"Anatra fischiatrice beccorosso","rarity":1,"img":"027006_P001_LsrWhistDuck"},{"id":49,"francais":"Dendrocygne siffleur","english":"Lesser Whistling Duck","latin":"Dendrocygna javanica","deutch":"Javapfeifgans","rarity":1,"img":""},{"id":50,"latin":"Dendrocygna viduata","english":"White-faced Whistling Duck","francais":"Dendrocygne veuf","deutch":"Witwenpfeifgans","italiano":"Anatra fischiatrice facciabianca","rarity":1,"img":"027007_P001_WFWhistlingDuck"},{"id":51,"latin":"Dendrocygna bicolor","english":"Fulvous Whistling Duck","francais":"Dendrocygne fauve","deutch":"Gelbbrustpfeifgans","italiano":"Anatra fischiatrice fulva","rarity":1,"img":"027004_P001_FulvWhistlingDk"},{"id":52,"latin":"Cygnus cygnus","english":"Whooper Swan","francais":"Cygne chanteur","deutch":"Singschwan","italiano":"Cigno selvatico","rarity":0,"img":"2134300428"},{"id":53,"latin":"Cygnus columbianus bewickii","english":"Bewick's Swan","francais":"Cygne de Bewick","deutch":"Zwergschwan","italiano":"Cigno minore della tundra","rarity":0,"img":"027015_P001_BewicksSwan"},{"id":54,"latin":"Cygnus olor","english":"Mute Swan","francais":"Cygne tuberculé","deutch":"Höckerschwan","italiano":"Cigno reale","rarity":0,"img":"027010_P001_MuteSwan"},{"id":55,"latin":"Cygnus atratus","english":"Black Swan","francais":"Cygne noir","deutch":"Schwarzschwan","italiano":"Cigno nero","rarity":1,"img":"027011_P001_BlackSwan"},{"id":56,"latin":"Cygnus melanocoryphus","english":"Black-necked Swan","francais":"Cygne à cou noir","deutch":"Schwarzhalsschwan","italiano":"Cigno collonero","rarity":1,"img":""},{"id":57,"latin":"Anser cygnoides","english":"Swan Goose","francais":"Oie cygnoïde","deutch":"Schwanengans","italiano":"Oca cigno","rarity":1,"img":""},{"id":58,"latin":"Anser caerulescens","english":"Snow Goose","francais":"Oie des neiges","deutch":"Schneegans","italiano":"Oca delle nevi","rarity":1,"img":""},{"id":59,"latin":"Anser canagicus","english":"Emperor Goose","francais":"Oie empereur","deutch":"Kaisergans","italiano":"Oca imperatrice","rarity":1,"img":"027024_P008_SnowGoose"},{"id":60,"latin":"Anser anser","english":"Greylag Goose","francais":"Oie cendrée","deutch":"Graugans","italiano":"Oca selvatica","rarity":0,"img":"027022_P001_GreylagGoose"},{"id":61,"latin":"Anser albifrons","english":"Greater White-fronted Goose","francais":"Oie rieuse","deutch":"Blässgans","italiano":"Oca lombardella","rarity":0,"img":"1540152554"},{"id":62,"latin":"Anser erythropus","english":"Lesser White-fronted Goose","francais":"Oie naine","deutch":"Zwerggans","italiano":"Oca lombardella minore","rarity":1,"img":"027021_P002_LsrWFGoose"},{"id":63,"latin":"Anser fabalis","english":"Bean Goose","francais":"Oie des moissons","deutch":"Saatgans","italiano":"Oca granaiola","rarity":0,"img":"027018_P001_TundraBeanGoose"},{"id":64,"francais":"Oie de la taïga (A.f.fabalis)","english":"Bean Goose (ssp. fabalis), Taiga Bean Goose","latin":"Anser fabalis fabalis","deutch":"Saatgans (ssp. fabalis), Waldsaatgans","rarity":1,"img":""},{"id":65,"latin":"Anser brachyrhynchus","english":"Pink-footed Goose","francais":"Oie à bec court","deutch":"Kurzschnabelgans","italiano":"Oca zamperosee","rarity":1,"img":"027019_P002_PinkFootedGoose"},{"id":66,"latin":"Anser fabalis rossicus","english":"Bean Goose (A.f.rossicus)","francais":"Oie de la toundra (A.f.rossicus)","deutch":"Saatgans (A.f.rossicus), Tundrasaatgans","italiano":"Oca granaiola (A.f.rossicus)","rarity":0,"img":"027018_P001_TundraBeanGoose"},{"id":67,"latin":"Anser cf. domestica","english":"Domestic Goose","francais":"Oie domestique","deutch":"Hausgans","italiano":"Oca domestica","rarity":0,"img":"goose_sp"},{"id":68,"latin":"Anser sp.","english":"unidentified Goose","francais":"Oie indéterminée","deutch":"unbest. graue Gänse","italiano":"Oca indet.","rarity":0,"img":"goose_sp"},{"id":69,"latin":"Anser indicus","english":"Bar-headed Goose","francais":"Oie à tête barrée","deutch":"Streifengans","italiano":"Oca indiana","rarity":1,"img":"goose_sp"},{"id":70,"latin":"Branta bernicla","english":"Brant Goose","francais":"Bernache cravant","deutch":"Ringelgans","italiano":"Oca colombaccio","rarity":1,"img":"-2106179129"},{"id":71,"latin":"Branta leucopsis","english":"Barnacle Goose","francais":"Bernache nonnette","deutch":"Weisswangengans","italiano":"Oca facciabianca","rarity":1,"img":"027029_P000_BarnacleGoose"},{"id":72,"latin":"Branta canadensis","english":"Canada Goose","francais":"Bernache du Canada","deutch":"Kanadagans","italiano":"Oca del Canada","rarity":1,"img":"027028_P002_CanadaGoose"},{"id":73,"latin":"Branta ruficollis","english":"Red-breasted Goose","francais":"Bernache à cou roux","deutch":"Rothalsgans","italiano":"Oca collorosso","rarity":1,"img":"-2105255608"},{"id":74,"francais":"Ouette à tête grise","english":"Ashy-headed Goose","latin":"Chloephaga poliocephala","deutch":"Graukopfgans","rarity":1,"img":""},{"id":75,"latin":"Chenonetta jubata","english":"Maned Duck","francais":"Canard à crinière","deutch":"Mähnengans","italiano":"Anatra arboricola australiana","rarity":1,"img":""},{"id":76,"francais":"Ouette de Magellan","latin":"Chloephaga picta","rarity":1,"img":""},{"id":77,"latin":"Tadorna ferruginea","english":"Ruddy Shelduck","francais":"Tadorne casarca","deutch":"Rostgans","italiano":"Casarca","rarity":1,"img":"-2075702936"},{"id":78,"latin":"Tadorna cana","english":"South African Shelduck","francais":"Tadorne à tête grise","deutch":"Graukopfkasarka","italiano":"Casarca sudafricana","rarity":1,"img":""},{"id":79,"latin":"Tadorna tadornoides","english":"Australian Shelduck","francais":"Tadorne d'Australie","deutch":"Halsbandkasarka","italiano":"Casarca australiana","rarity":1,"img":""},{"id":80,"latin":"Tadorna variegata","english":"Paradise Shelduck","francais":"Tadorne de paradis","deutch":"Paradieskasarka","italiano":"Casarca del Paradiso","rarity":1,"img":""},{"id":81,"latin":"Alopochen aegyptiaca","english":"Egyptian Goose","francais":"Ouette d'Egypte","deutch":"Nilgans","italiano":"Oca egiziana","rarity":1,"img":"027041_P001_EgyptianGoose"},{"id":82,"latin":"Tadorna tadorna","english":"Common Shelduck","francais":"Tadorne de Belon","deutch":"Brandgans","italiano":"Volpoca","rarity":0,"img":"027046_P001_Shelduck"},{"id":83,"latin":"Cairina moschata f. domestica","english":"Domestic Muscovy Duck","francais":"Canard de Barbarie","deutch":"Moschusente","italiano":"Anatra muta","rarity":1,"img":""},{"id":84,"latin":"Callonetta leucophrys","english":"Ringed Teal","francais":"Canard à collier noir","deutch":"Rotschulterente","italiano":"Alzavola anellata","rarity":1,"img":""},{"id":85,"latin":"Amazonetta brasiliensis","english":"Brazilian Teal","francais":"Canard amazonette","deutch":"Amazonasente","italiano":"Alzavola brasiliana","rarity":1,"img":""},{"id":86,"latin":"Anas platyrhynchos","english":"Mallard","francais":"Canard colvert","deutch":"Stockente","italiano":"Germano reale","rarity":0,"img":"027083_P001_Mallard"},{"id":87,"latin":"Anas poecilorhyncha","english":"Indian Spot-billed Duck","francais":"Canard à bec tacheté","deutch":"Fleckschnabelente","italiano":"Anatra beccomacchiato","rarity":1,"img":""},{"id":88,"latin":"Anas superciliosa","english":"Pacific Black Duck","francais":"Canard à sourcils","deutch":"Augenbrauenente","italiano":"Anatra del Pacifico","rarity":1,"img":""},{"id":89,"latin":"Anas undulata","english":"Yellow-billed Duck","francais":"Canard à bec jaune","deutch":"Gelbschnabelente","italiano":"Anatra ondulata","rarity":1,"img":""},{"id":90,"latin":"Anas discors","english":"Blue-winged Teal","francais":"Sarcelle à ailes bleues","deutch":"Blauflügelente","italiano":"Marzaiola americana","rarity":1,"img":"027099_P001_BlueWingedTeal"},{"id":91,"latin":"Anas cyanoptera","english":"Cinnamon Teal","francais":"Sarcelle cannelle","deutch":"Zimtente","italiano":"Anatra color cannella","rarity":1,"img":""},{"id":92,"latin":"Anas querquedula","english":"Garganey","francais":"Sarcelle d'été","deutch":"Knäkente","italiano":"Marzaiola","rarity":0,"img":"-1927016055"},{"id":93,"latin":"Anas capensis","english":"Cape Teal","francais":"Canard du Cap","deutch":"Fahlente","italiano":"Alzavola del Capo","rarity":1,"img":"027078_P001_CapeTeal"},{"id":94,"latin":"Anas crecca","english":"Eurasian Teal","francais":"Sarcelle d'hiver","deutch":"Krickente","italiano":"Alzavola","rarity":0,"img":"027076_P001_Teal"},{"id":95,"latin":"Anas hottentota","english":"Hottentot Teal","francais":"Sarcelle hottentote","deutch":"Hottentottenente","italiano":"Anatra ottentotta","rarity":1,"img":""},{"id":96,"latin":"Anas carolinensis","english":"Green-winged Teal","francais":"Sarcelle à ailes vertes","deutch":"Krickente, Amerikanische (Carolinakrickente)","italiano":"Alzavola americana","rarity":1,"img":"-1157723062"},{"id":97,"latin":"Anas formosa","english":"Baikal Teal","francais":"Sarcelle élégante","deutch":"Gluckente","italiano":"Alzavola asiatica","rarity":1,"img":""},{"id":98,"latin":"Anas flavirostris","english":"Yellow-billed Duck","francais":"Sarcelle tachetée","deutch":"Andenente","italiano":"Alzavola macchiettata","rarity":1,"img":""},{"id":99,"latin":"Anas falcata","english":"Falcated Duck","francais":"Canard à faucilles","deutch":"Sichelente","italiano":"Anatra falcata","rarity":1,"img":"027073_P001_FalcatedDuck"},{"id":100,"latin":"Anas versicolor","english":"Silver Teal","francais":"Sarcelle bariolée","deutch":"Silberente","italiano":"Anatra versicolore","rarity":1,"img":""},{"id":101,"latin":"Anas acuta","english":"Northern Pintail","francais":"Canard pilet","deutch":"Spiessente","italiano":"Codone","rarity":0,"img":"027092_P001_Pintail"},{"id":102,"latin":"Anas bahamensis","english":"White-cheeked Pintail","francais":"Canard des Bahamas","deutch":"Bahamaente","italiano":"Codone guancebianche","rarity":1,"img":"027095_P001_RedBilledDuck"},{"id":103,"latin":"Anas castanea","english":"Chestnut Teal","francais":"Sarcelle rousse","deutch":"Kastanienente","italiano":"Anatra castana australiana","rarity":1,"img":""},{"id":104,"latin":"Anas georgica","english":"Yellow-billed Pintail","francais":"Canard à queue pointue","deutch":"Spitzschwanzente","italiano":"Anatra georgiana","rarity":1,"img":""},{"id":105,"latin":"Marmaronetta angustirostris","english":"Marbled Duck","francais":"Sarcelle marbrée","deutch":"Marmelente","italiano":"Anatra marmorizzata","rarity":1,"img":"027106_P001_MarbledTeal"},{"id":106,"latin":"Anas penelope","english":"Eurasian Wigeon","francais":"Canard siffleur","deutch":"Pfeifente","italiano":"Fischione","rarity":0,"img":"027070_P001_Wigeon"},{"id":107,"latin":"Anas americana","english":"American Wigeon","francais":"Canard à front blanc","deutch":"Pfeifente, Nordamerikanische (Kanadapfeifente)","italiano":"Fischione americano","rarity":1,"img":"027071_P001_AmericanWigeon"},{"id":108,"latin":"Anas sibilatrix","english":"Chiloe Wigeon","francais":"Canard de Chiloé","deutch":"Chilepfeifente","italiano":"Fischione del Cile","rarity":1,"img":""},{"id":109,"latin":"Aix galericulata","english":"Mandarin Duck","francais":"Canard mandarin","deutch":"Mandarinente","italiano":"Anatra mandarina","rarity":1,"img":"027063_P001_MandarinDuck"},{"id":110,"latin":"Aix sponsa","english":"Wood Duck","francais":"Canard carolin","deutch":"Brautente","italiano":"Anatra sposa","rarity":1,"img":"027062_P001_WoodDuck"},{"id":111,"latin":"Anas strepera","english":"Gadwall","francais":"Canard chipeau","deutch":"Schnatterente","italiano":"Canapiglia","rarity":0,"img":"027074_P001_Gadwall"},{"id":112,"latin":"Anas clypeata","english":"Northern Shoveler","francais":"Canard souchet","deutch":"Löffelente","italiano":"Mestolone","rarity":0,"img":"027104_P001_Shoveler"},{"id":113,"latin":"Anas rhynchotis","english":"Australian Shoveler","francais":"Canard bridé","deutch":"Löffelente, Halbmond-","italiano":"Mestolone australiano","rarity":1,"img":""},{"id":114,"latin":"Anas platyrhynchos f. domestica","english":"Domestic Duck","francais":"Canard domestique (origine non naturelle)","deutch":"Hausente","italiano":"Anatra domestica","rarity":0,"img":""},{"id":115,"latin":"Netta rufina","english":"Red-crested Pochard","francais":"Nette rousse","deutch":"Kolbenente","italiano":"Fistione turco","rarity":0,"img":"-1297174733"},{"id":116,"latin":"Netta peposaca","english":"Rosy-billed Pochard","francais":"Nette demi-deuil","deutch":"Rosenschnabelente (Peposakaente)","italiano":"Fistione beccorosa","rarity":1,"img":""},{"id":117,"latin":"Netta erythrophthalma","english":"Southern Pochard","francais":"Nette brune","deutch":"Rotaugenente","italiano":"Fistione meridionale","rarity":1,"img":""},{"id":118,"latin":"Aythya ferina","english":"Common Pochard","francais":"Fuligule milouin","deutch":"Tafelente","italiano":"Moriglione","rarity":0,"img":"027112_P001_Pochard"},{"id":119,"latin":"Aythya fuligula","english":"Tufted Duck","francais":"Fuligule morillon","deutch":"Reiherente","italiano":"Moretta","rarity":0,"img":"027120_P001_TuftedDuck"},{"id":120,"latin":"Aythya collaris","english":"Ring-necked Duck","francais":"Fuligule à bec cerclé","deutch":"Ringschnabelente","italiano":"Moretta dal collare","rarity":1,"img":"-1272239666"},{"id":121,"latin":"Aythya nyroca","english":"Ferruginous Duck","francais":"Fuligule nyroca","deutch":"Moorente","italiano":"Moretta tabaccata","rarity":0,"img":"027117_P001_FerruginousDuck"},{"id":122,"francais":"Fuligule de Baer","latin":"Aythya baeri","rarity":1,"img":""},{"id":123,"latin":"Aythya marila","english":"Greater Scaup","francais":"Fuligule milouinan","deutch":"Bergente","italiano":"Moretta grigia","rarity":0,"img":"-1246381078"},{"id":124,"latin":"Aythya affinis","english":"Lesser Scaup","francais":"Fuligule à tête noire","deutch":"Kleine Bergente","italiano":"Moretta grigia minore","rarity":1,"img":"-1245457557"},{"id":125,"latin":"Anatidae sp. x Anatidae sp.","english":"Hybrid duck","francais":"Canard hybride","deutch":"Hybridente","italiano":"Ibridi di anatre","rarity":0,"img":""},{"id":126,"latin":"Bucephala clangula","english":"Common Goldeneye","francais":"Garrot à oeil d’or","deutch":"Schellente","italiano":"Quattrocchi","rarity":0,"img":"027134_P001_Goldeneye"},{"id":127,"latin":"Bucephala albeola","english":"Bufflehead","francais":"Garrot albéole","deutch":"Büffelkopfente","italiano":"Quattrocchi minore","rarity":1,"img":"027132_P001_Bufflehead"},{"id":128,"francais":"Garrot d'Islande","english":"Barrow's Goldeneye","latin":"Bucephala islandica","deutch":"Spatelente","rarity":1,"img":""},{"id":129,"latin":"Clangula hyemalis","english":"Long-tailed Duck","francais":"Harelde boréale","deutch":"Eisente","italiano":"Moretta codona","rarity":0,"img":"-1239916431"},{"id":130,"francais":"Arlequin plongeur","english":"Harlequin Duck","latin":"Histrionicus histrionicus","deutch":"Kragenente","rarity":1,"img":""},{"id":131,"latin":"Somateria mollissima","english":"Common Eider","francais":"Eider à duvet","deutch":"Eiderente","italiano":"Edredone","rarity":0,"img":"027123_P001_Eider"},{"id":132,"francais":"Eider à tête grise","english":"King Eider","latin":"Somateria spectabilis","deutch":"Prachteiderente","rarity":1,"img":""},{"id":133,"latin":"Melanitta nigra","english":"Black Scoter","francais":"Macreuse noire","deutch":"Trauerente","italiano":"Orchetto marino","rarity":0,"img":"-1238992910"},{"id":134,"latin":"Melanitta fusca","english":"Velvet Scoter","francais":"Macreuse brune","deutch":"Samtente","italiano":"Orco marino","rarity":0,"img":"-1217751927"},{"id":135,"francais":"Eider de Steller","english":"Steller's Eider","latin":"Polysticta stelleri","deutch":"Scheckente","rarity":1,"img":""},{"id":136,"latin":"Oxyura leucocephala","english":"White-headed Duck","francais":"Érismature à tête blanche","deutch":"Weisskopfruderente","italiano":"Gobbo rugginoso","rarity":1,"img":""},{"id":137,"latin":"Oxyura jamaicensis","english":"Ruddy Duck","francais":"Érismature rousse","deutch":"Schwarzkopfruderente","italiano":"Gobbo della Giamaica","rarity":1,"img":"027143_P001_RuddyDuck"},{"id":138,"latin":"Oxyura maccoa","english":"Maccoa Duck","francais":"Érismature maccoa","deutch":"Afrikaruderente (Maccoaente)","italiano":"Gobbo maccoa","rarity":1,"img":""},{"id":139,"latin":"Lophodytes cucullatus","english":"Hooded Merganser","francais":"Harle couronné","deutch":"Kappensäger","italiano":"Smergo dal ciuffo","rarity":1,"img":"027135_P001_HoodedMerganser"},{"id":140,"latin":"Mergellus albellus","english":"Smew","francais":"Harle piette","deutch":"Zwergsäger","italiano":"Pesciaiola","rarity":0,"img":"027136_P001_Smew"},{"id":141,"latin":"Mergus merganser","english":"Common Merganser","francais":"Harle bièvre","deutch":"Gänsesäger","italiano":"Smergo maggiore","rarity":0,"img":"027140_P001_Goosander"},{"id":142,"latin":"Mergus serrator","english":"Red-breasted Merganser","francais":"Harle huppé","deutch":"Mittelsäger","italiano":"Smergo minore","rarity":0,"img":"027138_P001_RBMerganser"},{"id":143,"latin":"Elanus caeruleus","english":"Black-winged Kite","francais":"Élanion blanc","deutch":"Gleitaar","italiano":"Nibbio bianco","rarity":1,"img":"030017_P001_BlackWingedKite"},{"id":144,"latin":"Pernis apivorus","english":"European Honey Buzzard","francais":"Bondrée apivore","deutch":"Wespenbussard","italiano":"Falco pecchiaiolo","rarity":0,"img":"1009304945"},{"id":145,"latin":"Milvus milvus","english":"Red Kite","francais":"Milan royal","deutch":"Rotmilan","italiano":"Nibbio reale","rarity":0,"img":"030030_P003_RedKite"},{"id":146,"latin":"Milvus migrans","english":"Black Kite","francais":"Milan noir","deutch":"Schwarzmilan","italiano":"Nibbio bruno","rarity":0,"img":"1046245785"},{"id":147,"latin":"Accipiter gentilis","english":"Northern Goshawk","francais":"Autour des palombes","deutch":"Habicht","italiano":"Astore","rarity":0,"img":"030137_P001_Goshawk"},{"id":148,"latin":"Accipiter nisus","english":"Eurasian Sparrowhawk","francais":"Épervier d'Europe","deutch":"Sperber","italiano":"Sparviere","rarity":0,"img":"030129_P001_Sparrowhawk"},{"id":149,"latin":"Buteo rufinus","english":"Long-legged Buzzard","francais":"Buse féroce","deutch":"Adlerbussard","italiano":"Poiana codabianca","rarity":1,"img":"030185_P003_LongLeggedBzrd"},{"id":150,"latin":"Buteo buteo","english":"Common Buzzard","francais":"Buse variable","deutch":"Mäusebussard","italiano":"Poiana","rarity":0,"img":"030181_P005_Buzzard"},{"id":151,"latin":"Buteo lagopus","english":"Rough-legged Buzzard","francais":"Buse pattue","deutch":"Raufussbussard","italiano":"Poiana calzata","rarity":1,"img":"030184_P003_RLBuzzard"},{"id":152,"latin":"Aquila fasciata","english":"Bonelli's Eagle","francais":"Aigle de Bonelli","deutch":"Habichtsadler","italiano":"Aquila del Bonelli","rarity":1,"img":""},{"id":153,"latin":"Aquila pennata","english":"Booted Eagle","francais":"Aigle botté","deutch":"Zwergadler","italiano":"Aquila minore","rarity":1,"img":"030207_P003_BootedEagle"},{"id":154,"latin":"Aquila chrysaetos","english":"Golden Eagle","francais":"Aigle royal","deutch":"Steinadler","italiano":"Aquila reale","rarity":0,"img":"030201_P001_GoldenEagle"},{"id":155,"francais":"Aigle impérial","english":"Eastern Imperial Eagle","latin":"Aquila heliaca","deutch":"Kaiseradler","rarity":1,"img":""},{"id":156,"latin":"Aquila clanga","english":"Greater Spotted Eagle","francais":"Aigle criard","deutch":"Schelladler","italiano":"Aquila anatraia maggiore","rarity":1,"img":"030197_P001_SpottedEagle"},{"id":157,"latin":"Aquila pomarina","english":"Lesser Spotted Eagle","francais":"Aigle pomarin","deutch":"Schreiadler","italiano":"Aquila anatraia minore","rarity":1,"img":"030196_P003_LsrSpottedEagle"},{"id":158,"latin":"Haliaeetus albicilla","english":"White-tailed Eagle","francais":"Pygargue à queue blanche","deutch":"Seeadler","italiano":"Aquila di mare","rarity":1,"img":"1074874936"},{"id":159,"latin":"Aegypius monachus","english":"Eurasian Black Vulture","francais":"Vautour moine","deutch":"Mönchsgeier","italiano":"Avvoltoio monaco","rarity":1,"img":"028004_P003_BlackVulture"},{"id":160,"latin":"Gyps fulvus","english":"Eurasian Griffon","francais":"Vautour fauve","deutch":"Gänsegeier","italiano":"Grifone","rarity":0,"img":"030048_P003_GriffonVulture"},{"id":161,"latin":"Neophron percnopterus","english":"Egyptian Vulture","francais":"Vautour percnoptère","deutch":"Schmutzgeier","italiano":"Capovaccaio","rarity":1,"img":"030055_P001_EgyptianVulture"},{"id":162,"latin":"Gypaetus barbatus","english":"Bearded Vulture","francais":"Gypaète barbu","deutch":"Bartgeier","italiano":"Gipeto","rarity":0,"img":"030056_P001_Lammergeier"},{"id":163,"latin":"Circus cyaneus","english":"Hen Harrier","francais":"Busard Saint-Martin","deutch":"Kornweihe","italiano":"Albanella reale","rarity":0,"img":"1212479565"},{"id":164,"latin":"Circus macrourus","english":"Pallid Harrier","francais":"Busard pâle","deutch":"Steppenweihe","italiano":"Albanella pallida","rarity":1,"img":"1214326607"},{"id":165,"latin":"Circus pygargus","english":"Montagu's Harrier","francais":"Busard cendré","deutch":"Wiesenweihe","italiano":"Albanella minore","rarity":0,"img":"1216173649"},{"id":166,"latin":"Circus aeruginosus","english":"Western Marsh Harrier","francais":"Busard des roseaux","deutch":"Rohrweihe","italiano":"Falco di palude","rarity":0,"img":"030088_P002_MarshHarrier"},{"id":167,"latin":"Circus sp.","english":"unident. Harrier","francais":"Busard indéterminé","deutch":"unbest. Weihe","italiano":"Albanella indet.","rarity":0,"img":"harrier_sp"},{"id":168,"latin":"Circaetus gallicus","english":"Short-toed Snake Eagle","francais":"Circaète Jean-le-Blanc","deutch":"Schlangenadler","italiano":"Biancone","rarity":0,"img":"030058_P000_ShortToedEagle"},{"id":169,"latin":"Pandion haliaetus","english":"Osprey","francais":"Balbuzard pêcheur","deutch":"Fischadler","italiano":"Falco pescatore","rarity":0,"img":"1294477609"},{"id":170,"francais":"Faucon lanier","english":"Lanner Falcon","latin":"Falco biarmicus","deutch":"Lannerfalke","rarity":1,"img":""},{"id":171,"latin":"Falco cherrug","english":"Saker Falcon","francais":"Faucon sacre","deutch":"Würgfalke","italiano":"Sacro","rarity":1,"img":"032056_P003_SakerFalcon"},{"id":172,"latin":"Falco rusticolus","english":"Gyrfalcon","francais":"Faucon gerfaut","deutch":"Gerfalke","italiano":"Girfalco","rarity":1,"img":"032057_P001_Gyrfalcon"},{"id":173,"latin":"Falco peregrinus","english":"Peregrine Falcon","francais":"Faucon pèlerin","deutch":"Wanderfalke","italiano":"Falco pellegrino","rarity":0,"img":"032060_P001_Peregrine"},{"id":174,"latin":"Falco subbuteo","english":"Eurasian Hobby","francais":"Faucon hobereau","deutch":"Baumfalke","italiano":"Lodolaio","rarity":0,"img":"032043_P003_Hobby"},{"id":175,"latin":"Falco eleonorae","english":"Eleonora's Falcon","francais":"Faucon d'Eléonore","deutch":"Eleonorenfalke","italiano":"Falco della regina","rarity":1,"img":"032047_P001_EleonarasFalcon"},{"id":176,"latin":"Falco columbarius","english":"Merlin","francais":"Faucon émerillon","deutch":"Merlin","italiano":"Smeriglio","rarity":0,"img":"032040_P001_Merlin"},{"id":177,"latin":"Falco vespertinus","english":"Red-footed Falcon","francais":"Faucon kobez","deutch":"Rotfussfalke","italiano":"Falco cuculo","rarity":0,"img":"263681268"},{"id":178,"latin":"Falco naumanni","english":"Lesser Kestrel","francais":"Faucon crécerellette","deutch":"Rötelfalke","italiano":"Grillaio","rarity":1,"img":"032024_P001_LesserKestrel"},{"id":179,"latin":"Falco tinnunculus","english":"Common Kestrel","francais":"Faucon crécerelle","deutch":"Turmfalke","italiano":"Gheppio","rarity":0,"img":"032028_P003_Kestrel"},{"id":180,"latin":"Falco sparverius","english":"American Kestrel","francais":"Crécerelle d'Amérique","deutch":"Buntfalke","italiano":"Gheppio americano","rarity":1,"img":"032027_P003_AmericanKestrel"},{"id":181,"latin":"Tetrao urogallus","english":"Western Capercaillie","francais":"Grand Tétras","deutch":"Auerhuhn","italiano":"Gallo cedrone","rarity":0,"img":"035012_P001_Capercaillie"},{"id":182,"latin":"Tetrao tetrix","english":"Black Grouse","francais":"Tétras lyre","deutch":"Birkhuhn","italiano":"Fagiano di monte","rarity":0,"img":"035010_P002_BlackGrouse"},{"id":183,"latin":"Lagopus muta","english":"Rock Ptarmigan","francais":"Lagopède alpin","deutch":"Alpenschneehuhn","italiano":"Pernice bianca","rarity":0,"img":"035007_P001_Ptarmigan"},{"id":184,"latin":"Tetrastes bonasia","english":"Hazel Grouse","francais":"Gélinotte des bois","deutch":"Haselhuhn","italiano":"Francolino di monte","rarity":0,"img":"035014_P003_HazelGrouse"},{"id":185,"latin":"Alectoris graeca","english":"Rock Partridge","francais":"Perdrix bartavelle","deutch":"Steinhuhn","italiano":"Coturnice","rarity":0,"img":""},{"id":186,"latin":"Alectoris rufa","english":"Red-legged Partridge","francais":"Perdrix rouge","deutch":"Rothuhn","italiano":"Pernice rossa","rarity":1,"img":"035061_P001_RockPartridge"},{"id":187,"latin":"Alectoris chukar","english":"Chukar Partridge","francais":"Perdrix choukar","deutch":"Chukarhuhn","italiano":"Ciukar","rarity":1,"img":"035062_P001_Chukar"},{"id":188,"latin":"Perdix perdix","english":"Grey Partridge","francais":"Perdrix grise","deutch":"Rebhuhn","italiano":"Starna","rarity":0,"img":"035111_P001_Partridge"},{"id":189,"latin":"Coturnix coturnix","english":"Common Quail","francais":"Caille des blés","deutch":"Wachtel","italiano":"Quaglia comune","rarity":0,"img":"035117_P001_Quail"},{"id":190,"latin":"Phasianus colchicus","english":"Common Pheasant","francais":"Faisan de Colchide","deutch":"Fasan (Jagdfasan)","italiano":"Fagiano comune","rarity":0,"img":"035191_P002_Pheasant"},{"id":191,"francais":"Faisan argenté","english":"Silver Pheasant","latin":"Lophura nycthemera","deutch":"Silberfasan","rarity":1,"img":""},{"id":192,"latin":"Chrysolophus pictus","english":"Golden Pheasant","francais":"Faisan doré","deutch":"Goldfasan","italiano":"Fagiano dorato","rarity":1,"img":"035191_P001_Pheasant"},{"id":193,"latin":"Grus grus","english":"Common Crane","francais":"Grue cendrée","deutch":"Kranich","italiano":"Gru","rarity":0,"img":"-512976854"},{"id":194,"latin":"Balearica pavonina","english":"Black-Crowned Crane","francais":"Grue couronnée","deutch":"Kronenkranich","italiano":"Gru pavonina","rarity":1,"img":""},{"id":195,"latin":"Grus virgo","english":"Demoiselle Crane","francais":"Grue demoiselle","deutch":"Jungfernkranich","italiano":"Gru damigella","rarity":1,"img":"039012_P001_DemoiselleCrane"},{"id":196,"latin":"Rallus aquaticus","english":"Water Rail","francais":"Râle d'eau","deutch":"Wasserralle","italiano":"Porciglione","rarity":0,"img":"042032_P001_WaterRail"},{"id":197,"latin":"Crex crex","english":"Corn Crake","francais":"Râle des genêts","deutch":"Wachtelkönig","italiano":"Re di quaglie","rarity":0,"img":"042076_P001_CornCrake"},{"id":198,"latin":"Porzana parva","english":"Little Crake","francais":"Marouette poussin","deutch":"Kleines Sumpfhuhn","italiano":"Schiribilla","rarity":0,"img":"042089_P001_LittleCrake"},{"id":199,"latin":"Porzana pusilla","english":"Baillon's Crake","francais":"Marouette de Baillon","deutch":"Zwergsumpfhuhn","italiano":"Schiribilla grigiata","rarity":1,"img":"042090_P003_BallionsCrake"},{"id":200,"latin":"Porzana porzana","english":"Spotted Crake","francais":"Marouette ponctuée","deutch":"Tüpfelsumpfhuhn","italiano":"Voltolino","rarity":0,"img":"-1376615894"},{"id":202,"latin":"Gallinula chloropus","english":"Common Moorhen","francais":"Gallinule poule-d'eau","deutch":"Teichhuhn","italiano":"Gallinella d'acqua","rarity":0,"img":"042108_P002_Moorhen"},{"id":203,"francais":"Talève d'Allen","english":"Allen's Gallinule","latin":"Porphyrio alleni","deutch":"Bronzesultanshuhn","rarity":1,"img":""},{"id":204,"francais":"Talève sultane","english":"Purple Swamphen","latin":"Porphyrio porphyrio","deutch":"Purpurhuhn","rarity":1,"img":""},{"id":205,"latin":"Fulica atra","english":"Eurasian Coot","francais":"Foulque macroule","deutch":"Blässhuhn","italiano":"Folaga","rarity":0,"img":"042123_P001_Coot"},{"id":206,"francais":"Outarde canepetière","english":"Little Bustard","latin":"Tetrax tetrax","deutch":"Zwergtrappe","rarity":1,"img":""},{"id":207,"francais":"Outarde barbue","english":"Great Bustard","latin":"Otis tarda","deutch":"Großtrappe","rarity":1,"img":""},{"id":209,"latin":"Haematopus ostralegus","english":"Eurasian Oystercatcher","francais":"Huîtrier pie","deutch":"Austernfischer","italiano":"Beccaccia di mare","rarity":0,"img":"051001_P001_Oystercatcher"},{"id":210,"francais":"Vanneau à queue blanche","english":"White-tailed Lapwing","latin":"Vanellus leucurus","deutch":"Weißschwanzkiebitz","rarity":1,"img":""},{"id":211,"latin":"Vanellus gregarius","english":"Sociable Lapwing","francais":"Vanneau sociable","deutch":"Steppenkiebitz","italiano":"Pavoncella gregaria","rarity":1,"img":"056014_P001_SociablePlover"},{"id":213,"latin":"Vanellus vanellus","english":"Northern Lapwing","francais":"Vanneau huppé","deutch":"Kiebitz","italiano":"Pavoncella","rarity":0,"img":"056001_P001_Lapwing"},{"id":214,"francais":"Vanneau éperonné","latin":"Vanellus spinosus","rarity":1,"img":""},{"id":215,"latin":"Pluvialis squatarola","english":"Grey Plover","francais":"Pluvier argenté","deutch":"Kiebitzregenpfeifer","italiano":"Pivieressa","rarity":0,"img":"-702659244"},{"id":216,"latin":"Pluvialis apricaria","english":"European Golden Plover","francais":"Pluvier doré","deutch":"Goldregenpfeifer","italiano":"Piviere dorato","rarity":0,"img":"-704506286"},{"id":217,"latin":"Charadrius hiaticula","english":"Common Ringed Plover","francais":"Grand Gravelot","deutch":"Sandregenpfeifer","italiano":"Corriere grosso","rarity":0,"img":"056030_P004_RingedPlover"},{"id":218,"latin":"Charadrius dubius","english":"Little Ringed Plover","francais":"Petit Gravelot","deutch":"Flussregenpfeifer","italiano":"Corriere piccolo","rarity":0,"img":"-678647698"},{"id":219,"latin":"Charadrius alexandrinus","english":"Kentish Plover","francais":"Gravelot à collier interrompu","deutch":"Seeregenpfeifer","italiano":"Fratino","rarity":1,"img":"-651865589"},{"id":220,"latin":"Charadrius vociferus","english":"Killdeer","francais":"Gravelot kildir","deutch":"Keilschwanzregenpfeifer","italiano":"Corriere americano","rarity":1,"img":"056035_P002_Killdeer"},{"id":221,"latin":"Charadrius morinellus","english":"Eurasian Dotterel","francais":"Pluvier guignard","deutch":"Mornellregenpfeifer","italiano":"Piviere tortolino","rarity":0,"img":"-591836724"},{"id":222,"latin":"Numenius phaeopus","english":"Whimbrel","francais":"Courlis corlieu","deutch":"Regenbrachvogel","italiano":"Chiurlo piccolo","rarity":0,"img":"981969268"},{"id":223,"francais":"Courlis à bec grêle","latin":"Numenius tenuirostris","rarity":1,"img":""},{"id":224,"latin":"Numenius arquata","english":"Eurasian Curlew","francais":"Courlis cendré","deutch":"Grosser Brachvogel","italiano":"Chiurlo maggiore","rarity":0,"img":"057010_P001_Curlew"},{"id":225,"latin":"Limosa limosa","english":"Black-tailed Godwit","francais":"Barge à queue noire","deutch":"Uferschnepfe","italiano":"Pittima reale","rarity":0,"img":"057001_P001_BlkTailedGodwit"},{"id":226,"latin":"Limosa lapponica","english":"Bar-tailed Godwit","francais":"Barge rousse","deutch":"Pfuhlschnepfe","italiano":"Pittima minore","rarity":0,"img":"057003_P001_BarTailedGodwit"},{"id":227,"latin":"Tringa erythropus","english":"Spotted Redshank","francais":"Chevalier arlequin","deutch":"Dunkler Wasserläufer","italiano":"Totano moro","rarity":0,"img":"1007827856"},{"id":228,"latin":"Tringa totanus","english":"Common Redshank","francais":"Chevalier gambette","deutch":"Rotschenkel","italiano":"Pettegola","rarity":0,"img":"057015_P002_Redshank"},{"id":229,"latin":"Tringa stagnatilis","english":"Marsh Sandpiper","francais":"Chevalier stagnatile","deutch":"Teichwasserläufer","italiano":"Albastrello","rarity":0,"img":"1009674898"},{"id":230,"latin":"Tringa nebularia","english":"Common Greenshank","francais":"Chevalier aboyeur","deutch":"Grünschenkel","italiano":"Pantana","rarity":0,"img":"057017_P002_Greenshank"},{"id":231,"latin":"Tringa ochropus","english":"Green Sandpiper","francais":"Chevalier culblanc","deutch":"Waldwasserläufer","italiano":"Piro piro culbianco","rarity":0,"img":"057021_P001_GreenSandpiper"},{"id":232,"latin":"Tringa glareola","english":"Wood Sandpiper","francais":"Chevalier sylvain","deutch":"Bruchwasserläufer","italiano":"Piro piro boschereccio","rarity":0,"img":"1035533486"},{"id":233,"latin":"Actitis hypoleucos","english":"Common Sandpiper","francais":"Chevalier guignette","deutch":"Flussuferläufer","italiano":"Piro piro piccolo","rarity":0,"img":"057026_P001_CommonSandpiper"},{"id":234,"latin":"Actitis macularius","english":"Spotted Sandpiper","francais":"Chevalier grivelé","deutch":"Drosseluferläufer","italiano":"Piro piro macchiato","rarity":1,"img":"057027_P001_SpottedSand"},{"id":235,"latin":"Xenus cinereus","english":"Terek Sandpiper","francais":"Chevalier bargette","deutch":"Terekwasserläufer","italiano":"Piro piro del Terek","rarity":1,"img":"057028_P001_GyTailedTattler"},{"id":236,"latin":"Arenaria interpres","english":"Ruddy Turnstone","francais":"Tournepierre à collier","deutch":"Steinwälzer","italiano":"Voltapietre","rarity":0,"img":"1062315595"},{"id":237,"latin":"Gallinago media","english":"Great Snipe","francais":"Bécassine double","deutch":"Doppelschnepfe","italiano":"Croccolone","rarity":1,"img":"057050_P001_GreatSnipe"},{"id":238,"latin":"Gallinago gallinago","english":"Common Snipe","francais":"Bécassine des marais","deutch":"Bekassine","italiano":"Beccaccino","rarity":0,"img":"057051_P001_Snipe"},{"id":239,"latin":"Lymnocryptes minimus","english":"Jack Snipe","francais":"Bécassine sourde","deutch":"Zwergschnepfe","italiano":"Frullino","rarity":0,"img":"057058_P001_JackSnipe"},{"id":240,"latin":"Scolopax rusticola","english":"Eurasian Woodcock","francais":"Bécasse des bois","deutch":"Waldschnepfe","italiano":"Beccaccia","rarity":0,"img":"057036_P002_Woodcock"},{"id":241,"latin":"Calidris alba","english":"Sanderling","francais":"Bécasseau sanderling","deutch":"Sanderling","italiano":"Piovanello tridattilo","rarity":0,"img":"1151897132"},{"id":242,"latin":"Calidris canutus","english":"Red Knot","francais":"Bécasseau maubèche","deutch":"Knutt","italiano":"Piovanello maggiore","rarity":0,"img":"1150050090"},{"id":243,"latin":"Calidris minuta","english":"Little Stint","francais":"Bécasseau minute","deutch":"Zwergstrandläufer","italiano":"Gambecchio comune","rarity":0,"img":"1155591216"},{"id":244,"latin":"Calidris temminckii","english":"Temminck's Stint","francais":"Bécasseau de Temminck","deutch":"Temminckstrandläufer","italiano":"Gambecchio nano","rarity":0,"img":"1175908678"},{"id":245,"latin":"Calidris fuscicollis","english":"White-rumped Sandpiper","francais":"Bécasseau de Bonaparte","deutch":"Weissbürzelstrandläufer","italiano":"Gambecchio di Bonaparte","rarity":1,"img":"057073_P001_WhiteRumpedSand"},{"id":246,"latin":"Calidris bairdii","english":"Baird's Sandpiper","francais":"Bécasseau de Baird","deutch":"Bairdstrandläufer","italiano":"Gambecchio di Baird","rarity":1,"img":"057074_P001_BairdsSandpiper"},{"id":247,"latin":"Calidris melanotos","english":"Pectoral Sandpiper","francais":"Bécasseau tacheté","deutch":"Graubruststrandläufer","italiano":"Piovanello pettorale","rarity":1,"img":"1180526283"},{"id":248,"latin":"Calidris maritima","english":"Purple Sandpiper","francais":"Bécasseau violet","deutch":"Meerstrandläufer","italiano":"Piovanello violetto","rarity":1,"img":""},{"id":249,"latin":"Calidris alpina","english":"Dunlin","francais":"Bécasseau variable","deutch":"Alpenstrandläufer","italiano":"Piovanello pancianera","rarity":0,"img":"057078_P001_PurpleSandpiper"},{"id":250,"latin":"Calidris ferruginea","english":"Curlew Sandpiper","francais":"Bécasseau cocorli","deutch":"Sichelstrandläufer","italiano":"Piovanello comune","rarity":0,"img":"1205461350"},{"id":251,"latin":"Limicola falcinellus","english":"Broad-billed Sandpiper","francais":"Bécasseau falcinelle","deutch":"Sumpfläufer","italiano":"Gambecchio frullino","rarity":1,"img":"1207308392"},{"id":252,"latin":"Tryngites subruficollis","english":"Buff-breasted Sandpiper","francais":"Bécasseau rousset","deutch":"Grasläufer","italiano":"Piro piro fulvo","rarity":1,"img":"057085_P002_BuffBrstdSand"},{"id":253,"latin":"Philomachus pugnax","english":"Ruff","francais":"Combattant varié","deutch":"Kampfläufer","italiano":"Combattente","rarity":0,"img":"057086_P001_Ruff"},{"id":254,"latin":"Himantopus himantopus","english":"Black-winged Stilt","francais":"Échasse blanche","deutch":"Stelzenläufer","italiano":"Cavaliere d'Italia","rarity":0,"img":"-1699845902"},{"id":255,"latin":"Recurvirostra avosetta","english":"Pied Avocet","francais":"Avocette élégante","deutch":"Säbelschnäbler","italiano":"Avocetta","rarity":0,"img":"-1672140272"},{"id":256,"latin":"Phalaropus fulicarius","english":"Red Phalarope","francais":"Phalarope à bec large","deutch":"Thorshühnchen","italiano":"Falaropo beccolargo","rarity":1,"img":"057035_P002_GreyPharlarope"},{"id":257,"latin":"Phalaropus lobatus","english":"Red-necked Phalarope","francais":"Phalarope à bec étroit","deutch":"Odinshühnchen","italiano":"Falaropo beccosottile","rarity":1,"img":"057034_P002_RedNeckedPhal"},{"id":258,"latin":"Phalaropus sp.","english":"unident. Phalarope","francais":"Phalarope indéterminé","deutch":"unbestimmter Wassertreter","italiano":"Falaropo indet.","rarity":1,"img":"phalarope_sp"},{"id":259,"latin":"Burhinus oedicnemus","english":"Eurasian Stone-curlew","francais":"Oedicnème criard","deutch":"Triel","italiano":"Occhione","rarity":1,"img":"054001_P001_StoneCurlew"},{"id":260,"francais":"Courvite isabelle","english":"Cream-colored Courser","latin":"Cursorius cursor","deutch":"Rennvogel","rarity":1,"img":""},{"id":261,"latin":"Glareola pratincola","english":"Collared Pratincole","francais":"Glaréole à collier","deutch":"Rotflügelbrachschwalbe","italiano":"Pernice di mare","rarity":1,"img":"055012_P001_ColldPratincole"},{"id":262,"francais":"Glaréole à ailes noires","english":"Black-winged Pratincole","latin":"Glareola nordmanni","deutch":"Schwarzflügel-Brachschwalbe","rarity":1,"img":""},{"id":263,"latin":"Stercorarius skua","english":"Great Skua","francais":"Grand Labbe","deutch":"Skua","italiano":"Stercorario maggiore","rarity":1,"img":"060001_P004_GreatSkua"},{"id":264,"latin":"Stercorarius pomarinus","english":"Pomarine Skua","francais":"Labbe pomarin","deutch":"Spatelraubmöwe","italiano":"Stercorario mezzano","rarity":1,"img":"-142102694"},{"id":265,"latin":"Stercorarius parasiticus","english":"Parasitic Skua","francais":"Labbe parasite","deutch":"Schmarotzerraubmöwe","italiano":"Labbo","rarity":1,"img":"-141179173"},{"id":266,"latin":"Stercorarius longicaudus","english":"Long-tailed Skua","francais":"Labbe à longue queue","deutch":"Falkenraubmöwe","italiano":"Labbo codalunga","rarity":1,"img":"060007_P002_LongTailedSkua"},{"id":267,"latin":"Stercorarius sp.","english":"unidentified Skua","francais":"Labbe indéterminé","deutch":"unbest. Raubmöwe","italiano":"Labbo indet.","rarity":0,"img":"skua_sp"},{"id":268,"francais":"Mouette blanche","english":"Ivory Gull","latin":"Pagophila eburnea","deutch":"Elfenbeinmöwe","rarity":1,"img":""},{"id":269,"latin":"Larus audouinii","english":"Audouin's Gull","francais":"Goéland d'Audouin","deutch":"Korallenmöwe","italiano":"Gabbiano corso","rarity":1,"img":"061011_P001_AudouinsGull"},{"id":270,"latin":"Larus canus","english":"Common Gull","francais":"Goéland cendré","deutch":"Sturmmöwe","italiano":"Gavina","rarity":0,"img":"061013_P001_CommonGull"},{"id":272,"latin":"Larus argentatus","english":"Herring Gull","francais":"Goéland argenté","deutch":"Silbermöwe","italiano":"Gabbiano reale nordico","rarity":0,"img":"061015_P001_HerringGull"},{"id":273,"latin":"Larus michahellis","english":"Yellow-legged Gull","francais":"Goéland leucophée","deutch":"Mittelmeermöwe","italiano":"Gabbiano reale","rarity":0,"img":"061092_P001_YlwLeggedGull"},{"id":274,"latin":"Larus cachinnans","english":"Caspian Gull","francais":"Goéland pontique","deutch":"Steppenmöwe","italiano":"Gabbiano reale pontico","rarity":0,"img":"1856522958"},{"id":275,"latin":"Larus fuscus","english":"Lesser Black-backed Gull","francais":"Goéland brun","deutch":"Heringsmöwe","italiano":"Zafferano","rarity":0,"img":"061018_P001_LBBGull"},{"id":276,"latin":"Larus marinus","english":"Great Black-backed Gull","francais":"Goéland marin","deutch":"Mantelmöwe","italiano":"Mugnaiaccio","rarity":0,"img":"061024_P002_GtBlkBackedGull"},{"id":277,"francais":"Goéland ichthyaète","english":"Pallas's Gull","latin":"Larus ichthyaetus","deutch":"Fischmöwe","rarity":1,"img":""},{"id":278,"latin":"Larus hyperboreus","english":"Glaucous Gull","francais":"Goéland bourgmestre","deutch":"Eismöwe","italiano":"Gabbiano glauco","rarity":1,"img":"1658889464"},{"id":279,"latin":"Larus glaucoides","english":"Iceland Gull","francais":"Goéland à ailes blanches","deutch":"Polarmöwe","italiano":"Gabbiano islandico","rarity":1,"img":"1659812985"},{"id":280,"latin":"Larus delawarensis","english":"Ring-billed Gull","francais":"Goéland à bec cerclé","deutch":"Ringschnabelmöwe","italiano":"Gavina americana","rarity":1,"img":"1626566229"},{"id":281,"latin":"Larus melanocephalus","english":"Mediterranean Gull","francais":"Mouette mélanocéphale","deutch":"Schwarzkopfmöwe","italiano":"Gabbiano corallino","rarity":0,"img":"061035_P001_MedGull"},{"id":282,"latin":"Larus ridibundus","english":"Common Black-headed Gull","francais":"Mouette rieuse","deutch":"Lachmöwe","italiano":"Gabbiano comune","rarity":0,"img":"061039_P001_BlackHeadedGull"},{"id":283,"latin":"Larus genei","english":"Slender-billed Gull","francais":"Goéland railleur","deutch":"Dünnschnabelmöwe","italiano":"Gabbiano roseo","rarity":1,"img":"061040_P001_SlenderBillGull"},{"id":284,"latin":"Hydrocoloeus minutus","english":"Little Gull","francais":"Mouette pygmée","deutch":"Zwergmöwe","italiano":"Gabbianello","rarity":0,"img":"1712453682"},{"id":285,"francais":"Mouette de Ross","english":"Ross's Gull","latin":"Hydrocoloeus roseus","deutch":"Rosenmöwe","rarity":1,"img":""},{"id":286,"latin":"Rissa tridactyla","english":"Kittiwake","francais":"Mouette tridactyle","deutch":"Dreizehenmöwe","italiano":"Gabbiano tridattilo","rarity":1,"img":"1715224245"},{"id":287,"latin":"Xema sabini","english":"Sabine's Gull","francais":"Mouette de Sabine","deutch":"Schwalbenmöwe","italiano":"Gabbiano di Sabine","rarity":1,"img":"061048_P001_SabinesGull"},{"id":288,"latin":"Chlidonias hybrida","english":"Whiskered Tern","francais":"Guifette moustac","deutch":"Weissbartseeschwalbe","italiano":"Mignattino piombato","rarity":0,"img":"061049_P001_WhiskeredTern"},{"id":289,"latin":"Chlidonias leucopterus","english":"White-winged Tern","francais":"Guifette leucoptère","deutch":"Weissflügelseeschwalbe","italiano":"Mignattino alibianche","rarity":0,"img":"061050_P001_WtWingedBlkTern"},{"id":290,"latin":"Chlidonias niger","english":"Black Tern","francais":"Guifette noire","deutch":"Trauerseeschwalbe","italiano":"Mignattino comune","rarity":0,"img":"1740159312"},{"id":291,"latin":"Gelochelidon nilotica","english":"Gull-billed Tern","francais":"Sterne hansel","deutch":"Lachseeschwalbe","italiano":"Sterna zampenere","rarity":1,"img":"1742006354"},{"id":292,"latin":"Hydroprogne caspia","english":"Caspian Tern","francais":"Sterne caspienne","deutch":"Raubseeschwalbe","italiano":"Sterna maggiore","rarity":0,"img":"061054_P003_CaspianTern"},{"id":293,"latin":"Sterna hirundo","english":"Common Tern","francais":"Sterne pierregarin","deutch":"Flussseeschwalbe","italiano":"Sterna comune","rarity":0,"img":"1746623959"},{"id":294,"latin":"Sterna paradisaea","english":"Arctic Tern","francais":"Sterne arctique","deutch":"Küstenseeschwalbe","italiano":"Sterna codalunga","rarity":1,"img":"1746623959"},{"id":295,"latin":"Sterna dougallii","english":"Roseate Tern","francais":"Sterne de Dougall","deutch":"Rosenseeschwalbe","italiano":"Sterna di Dougall","rarity":1,"img":"1770635505"},{"id":296,"latin":"Sternula albifrons","english":"Little Tern","francais":"Sterne naine","deutch":"Zwergseeschwalbe","italiano":"Fraticello","rarity":0,"img":"1802958740"},{"id":297,"latin":"Sterna bengalensis","english":"Lesser Crested Tern","francais":"Sterne voyageuse","deutch":"Rüppellseeschwalbe","italiano":"Sterna di Rüppell","rarity":1,"img":"061082_P003_LsrCrestedTern"},{"id":298,"latin":"Sterna sandvicensis","english":"Sandwich Tern","francais":"Sterne caugek","deutch":"Brandseeschwalbe","italiano":"Beccapesci","rarity":0,"img":"061085_P003_SandwichTern"},{"id":299,"francais":"Mergule nain","english":"Little Auk","latin":"Alle alle","deutch":"Krabbentaucher","rarity":1,"img":""},{"id":300,"francais":"Pingouin torda","english":"Razorbill","latin":"Alca torda","deutch":"Tordalk","rarity":1,"img":""},{"id":301,"francais":"Guillemot de Troïl","english":"Common Guillemot","latin":"Uria aalge","deutch":"Trottellumme","rarity":1,"img":""},{"id":302,"francais":"Guillemot à miroir","english":"Black Guillemot","latin":"Cepphus grylle","deutch":"Gryllteiste","rarity":1,"img":""},{"id":304,"francais":"Macareux moine","english":"Atlantic Puffin","latin":"Fratercula arctica","deutch":"Papageitaucher","rarity":1,"img":""},{"id":305,"francais":"Syrrhapte paradoxal","english":"Pallas's Sandgrouse","latin":"Syrrhaptes paradoxus","deutch":"Steppenflughuhn","rarity":1,"img":""},{"id":306,"francais":"Ganga cata","latin":"Pterocles alchata","rarity":1,"img":""},{"id":308,"latin":"Columba livia domestica","english":"Feral Pigeon","francais":"Pigeon biset domestique","deutch":"Strassentaube","italiano":"Piccione torraiolo","rarity":0,"img":"065001_P001_RockDove"},{"id":309,"latin":"Columba oenas","english":"Stock Dove","francais":"Pigeon colombin","deutch":"Hohltaube","italiano":"Colombella","rarity":0,"img":"065006_P001_StockDove"},{"id":310,"latin":"Columba palumbus","english":"Common Wood Pigeon","francais":"Pigeon ramier","deutch":"Ringeltaube","italiano":"Colombaccio","rarity":0,"img":"065009_P001_WoodPigeon"},{"id":311,"latin":"Streptopelia turtur","english":"European Turtle Dove","francais":"Tourterelle des bois","deutch":"Turteltaube","italiano":"Tortora selvatica","rarity":0,"img":"122389581"},{"id":312,"latin":"Streptopelia decaocto","english":"Eurasian Collared Dove","francais":"Tourterelle turque","deutch":"Türkentaube","italiano":"Tortora dal collare","rarity":0,"img":"065057_P001_CollaredDove"},{"id":313,"latin":"Clamator glandarius","english":"Great Spotted Cuckoo","francais":"Coucou geai","deutch":"Häherkuckuck","italiano":"Cuculo dal ciuffo","rarity":1,"img":"071001_P001_GtSpottedCuckoo"},{"id":314,"latin":"Cuculus canorus","english":"Common Cuckoo","francais":"Coucou gris","deutch":"Kuckuck","italiano":"Cuculo","rarity":0,"img":"071014_P001_Cuckoo"},{"id":315,"latin":"Tyto alba","english":"Barn Owl","francais":"Effraie des clochers","deutch":"Schleiereule","italiano":"Barbagianni","rarity":0,"img":"071014_P001_Cuckoo"},{"id":316,"latin":"Otus scops","english":"Eurasian Scops Owl","francais":"Petit-duc scops","deutch":"Zwergohreule","italiano":"Assiolo","rarity":0,"img":"073018_P001_ScopsOwl"},{"id":317,"latin":"Bubo bubo","english":"Eurasian Eagle-Owl","francais":"Grand-duc d'Europe","deutch":"Uhu","italiano":"Gufo reale","rarity":0,"img":"073064_P001_EagleOwl"},{"id":318,"francais":"Chouette épervière","english":"Northern Hawk-Owl","latin":"Surnia ulula","deutch":"Sperbereule","rarity":1,"img":""},{"id":319,"latin":"Glaucidium passerinum","english":"Eurasian Pygmy Owl","francais":"Chevêchette d'Europe","deutch":"Sperlingskauz","italiano":"Civetta nana","rarity":0,"img":"1404194136"},{"id":320,"latin":"Athene noctua","english":"Little Owl","francais":"Chevêche d'Athéna","deutch":"Steinkauz","italiano":"Civetta","rarity":0,"img":"073123_P002_LittleOwl"},{"id":321,"latin":"Strix aluco","english":"Tawny Owl","francais":"Chouette hulotte","deutch":"Waldkauz","italiano":"Allocco","rarity":0,"img":"073093_P002_TawnyOwl"},{"id":322,"latin":"Asio otus","english":"Long-eared Owl","francais":"Hibou moyen-duc","deutch":"Waldohreule","italiano":"Gufo comune","rarity":0,"img":"12708946"},{"id":323,"latin":"Asio flammeus","english":"Short-eared Owl","francais":"Hibou des marais","deutch":"Sumpfohreule","italiano":"Gufo di palude","rarity":0,"img":"16403030"},{"id":324,"latin":"Aegolius funereus","english":"Tengmalm's Owl","francais":"Chouette de Tengmalm","deutch":"Raufusskauz","italiano":"Civetta capogrosso","rarity":0,"img":"073127_P001_TengalmsOwl"},{"id":325,"latin":"Caprimulgus europaeus","english":"European Nightjar","francais":"Engoulevent d'Europe","deutch":"Ziegenmelker","italiano":"Succiacapre","rarity":0,"img":"-777459761"},{"id":326,"latin":"Apus melba","english":"Alpine Swift","francais":"Martinet à ventre blanc","deutch":"Alpensegler","italiano":"Rondone maggiore","rarity":0,"img":"079077_P001_AlpineSwift"},{"id":327,"latin":"Apus apus","english":"Common Swift","francais":"Martinet noir","deutch":"Mauersegler","italiano":"Rondone comune","rarity":0,"img":"079085_P001_Swift"},{"id":328,"latin":"Apus pallidus","english":"Pallid Swift","francais":"Martinet pâle","deutch":"Fahlsegler","italiano":"Rondone pallido","rarity":1,"img":"079084_P001_PallidSwift"},{"id":329,"latin":"Alcedo atthis","english":"Common Kingfisher","francais":"Martin-pêcheur d'Europe","deutch":"Eisvogel","italiano":"Martin pescatore","rarity":0,"img":"084011_P002_Kingfisher"},{"id":330,"latin":"Merops apiaster","english":"European Bee-eater","francais":"Guêpier d'Europe","deutch":"Bienenfresser","italiano":"Gruccione","rarity":0,"img":"-94633170"},{"id":331,"latin":"Coracias garrulus","english":"European Roller","francais":"Rollier d'Europe","deutch":"Blauracke","italiano":"Ghiandaia marina","rarity":1,"img":"088001_P001_Roller"},{"id":332,"latin":"Upupa epops","english":"Eurasian Hoopoe","francais":"Huppe fasciée","deutch":"Wiedehopf","italiano":"Upupa","rarity":0,"img":"469617464"},{"id":333,"latin":"Jynx torquilla","english":"Eurasian Wryneck","francais":"Torcol fourmilier","deutch":"Wendehals","italiano":"Torcicollo","rarity":0,"img":"1527198256"},{"id":334,"latin":"Picus viridis","english":"European Green Woodpecker","francais":"Pic vert","deutch":"Grünspecht","italiano":"Picchio verde","rarity":0,"img":"099178_P001_GreenWoodpecker"},{"id":335,"latin":"Picus canus","english":"Grey-headed Woodpecker","francais":"Pic cendré","deutch":"Grauspecht","italiano":"Picchio cenerino","rarity":0,"img":"099181_P001_GyHddWoodpecker"},{"id":336,"latin":"Dryocopus martius","english":"Black Woodpecker","francais":"Pic noir","deutch":"Schwarzspecht","italiano":"Picchio nero","rarity":0,"img":"099157_P001_BlackWoodpecker"},{"id":337,"latin":"Dendrocopos major","english":"Great Spotted Woodpecker","francais":"Pic épeiche","deutch":"Buntspecht","italiano":"Picchio rosso maggiore","rarity":0,"img":"099101_P001_GSWoodpecker"},{"id":338,"latin":"Dendrocopos medius","english":"Middle Spotted Woodpecker","francais":"Pic mar","deutch":"Mittelspecht","italiano":"Picchio rosso mezzano","rarity":0,"img":"099095_P001_MSWoodpecker"},{"id":339,"latin":"Dendrocopos leucotos","english":"White-backed Woodpecker","francais":"Pic à dos blanc","deutch":"Weissrückenspecht","italiano":"Picchio dorsobianco","rarity":0,"img":"099096_P001_WtBackedWpecker"},{"id":340,"latin":"Dendrocopos minor","english":"Lesser Spotted Woodpecker","francais":"Pic épeichette","deutch":"Kleinspecht","italiano":"Picchio rosso minore","rarity":0,"img":"099086_P001_LSWoodpecker"},{"id":341,"latin":"Picoides tridactylus","english":"Eurasian Three-toed Woodpecker","francais":"Pic tridactyle","deutch":"Dreizehenspecht","italiano":"Picchio tridattilo","rarity":0,"img":"099111_P002_3TWoodpecker"},{"id":343,"latin":"Melanocorypha calandra","english":"Calandra Lark","francais":"Alouette calandre","deutch":"Kalanderlerche","italiano":"Calandra","rarity":1,"img":"116041_P001_CalandraLark"},{"id":345,"latin":"Calandrella brachydactyla","english":"Greater Short-toed Lark","francais":"Alouette calandrelle","deutch":"Kurzzehenlerche","italiano":"Calandrella","rarity":0,"img":"2116024134"},{"id":346,"latin":"Calandrella rufescens","english":"Lesser Short-toed Lark","francais":"Alouette pispolette","deutch":"Stummellerche","italiano":"Calandrina","rarity":1,"img":"116057_P001_LsrShtToedLark"},{"id":347,"latin":"Galerida cristata","english":"Crested Lark","francais":"Cochevis huppé","deutch":"Haubenlerche","italiano":"Cappellaccia","rarity":1,"img":"116069_P002_CrestedLark"},{"id":348,"latin":"Lullula arborea","english":"Woodlark","francais":"Alouette lulu","deutch":"Heidelerche","italiano":"Tottavilla","rarity":0,"img":"116074_P002_Woodlark"},{"id":349,"latin":"Alauda arvensis","english":"Eurasian Skylark","francais":"Alouette des champs","deutch":"Feldlerche","italiano":"Allodola","rarity":0,"img":"116075_P001_Skylark"},{"id":350,"latin":"Eremophila alpestris","english":"Shore Lark","francais":"Alouette haussecol","deutch":"Ohrenlerche","italiano":"Allodola golagialla","rarity":1,"img":"-2091208667"},{"id":351,"latin":"Hirundo rustica","english":"Barn Swallow","francais":"Hirondelle rustique","deutch":"Rauchschwalbe","italiano":"Rondine","rarity":0,"img":"117040_P001_Swallow"},{"id":352,"latin":"Cecropis daurica","english":"Red-rumped Swallow","francais":"Hirondelle rousseline","deutch":"Rötelschwalbe","italiano":"Rondine rossiccia","rarity":1,"img":"-431515222"},{"id":353,"latin":"Ptyonoprogne rupestris","english":"Eurasian Crag Martin","francais":"Hirondelle de rochers","deutch":"Felsenschwalbe","italiano":"Rondine montana","rarity":0,"img":"117036_P002_CragMartin"},{"id":354,"latin":"Delichon urbicum","english":"Common House Martin","francais":"Hirondelle de fenêtre","deutch":"Mehlschwalbe","italiano":"Balestruccio","rarity":0,"img":"117070_P001_HouseMartin"},{"id":355,"latin":"Riparia riparia","english":"Sand Martin","francais":"Hirondelle de rivage","deutch":"Uferschwalbe","italiano":"Topino","rarity":0,"img":"117031_P001_SandMartin"},{"id":356,"latin":"Oriolus oriolus","english":"Eurasian Golden Oriole","francais":"Loriot d'Europe","deutch":"Pirol","italiano":"Rigogolo","rarity":0,"img":"-189564049"},{"id":357,"latin":"Corvus corax","english":"Common Raven","francais":"Grand Corbeau","deutch":"Kolkrabe","italiano":"Corvo imperiale","rarity":0,"img":"173110_P008_Raven"},{"id":358,"latin":"Corvus corone corone","english":"Carrion Crow","francais":"Corneille noire","deutch":"Rabenkrähe","italiano":"Cornacchia nera","rarity":0,"img":"173098_P001_CarrionCrow"},{"id":359,"latin":"Corvus corone corone x corone cornix","english":"Hybrid Carrion x Hooded Crow","francais":"Corneille noire x mantelée hybride","deutch":"Rabenkrähe x Nebelkrähe (Hybrid)","italiano":"Cornacchia nera x C. grigia","rarity":0,"img":""},{"id":360,"latin":"Corvus corone cornix","english":"Hooded Crow","francais":"Corneille mantelée","deutch":"Nebelkrähe","italiano":"Cornacchia grigia","rarity":0,"img":"-297397642"},{"id":361,"latin":"Corvus frugilegus","english":"Rook","francais":"Corbeau freux","deutch":"Saatkrähe","italiano":"Corvo comune","rarity":0,"img":"173088_P002_Rook"},{"id":362,"latin":"Corvus monedula","english":"Western Jackdaw","francais":"Choucas des tours","deutch":"Dohle","italiano":"Taccola","rarity":0,"img":"173074_P001_Jackdaw"},{"id":363,"latin":"Pica pica","english":"Eurasian Magpie","francais":"Pie bavarde","deutch":"Elster","italiano":"Gazza","rarity":0,"img":"173061_P001_Magpie"},{"id":365,"latin":"Nucifraga caryocatactes","english":"Spotted Nutcracker","francais":"Cassenoix moucheté","deutch":"Tannenhäher","italiano":"Nocciolaia","rarity":0,"img":"173070_P001_Nutcracker"},{"id":366,"latin":"Garrulus glandarius","english":"Eurasian Jay","francais":"Geai des chênes","deutch":"Eichelhäher","italiano":"Ghiandaia","rarity":0,"img":"173037_P001_Jay"},{"id":368,"latin":"Pyrrhocorax pyrrhocorax","english":"Red-billed Chough","francais":"Crave à bec rouge","deutch":"Alpenkrähe","italiano":"Gracchio corallino","rarity":0,"img":"-1015896980"},{"id":369,"latin":"Pyrrhocorax graculus","english":"Alpine Chough","francais":"Chocard à bec jaune","deutch":"Alpendohle","italiano":"Gracchio alpino","rarity":0,"img":"173072_P001_AlpineChough"},{"id":370,"latin":"Parus major","english":"Great Tit","francais":"Mésange charbonnière","deutch":"Kohlmeise","italiano":"Cinciallegra","rarity":0,"img":"146036_P001_GreatTit"},{"id":371,"latin":"Parus caeruleus","english":"Blue Tit","francais":"Mésange bleue","deutch":"Blaumeise","italiano":"Cinciarella","rarity":0,"img":"146043_P001_BlueTit"},{"id":372,"francais":"Mésange azurée","latin":"Cyanistes cyanus","rarity":1,"img":""},{"id":373,"latin":"Parus ater","english":"Coal Tit","francais":"Mésange noire","deutch":"Tannenmeise","italiano":"Cincia mora","rarity":0,"img":"146018_P003_CoalTit"},{"id":374,"latin":"Parus cristatus","english":"European Crested Tit","francais":"Mésange huppée","deutch":"Haubenmeise","italiano":"Cincia dal ciuffo","rarity":0,"img":"146022_P001_CrestedTit"},{"id":375,"latin":"Parus palustris","english":"Marsh Tit","francais":"Mésange nonnette","deutch":"Sumpfmeise","italiano":"Cincia bigia","rarity":0,"img":"146001_P002_MarshTit"},{"id":376,"latin":"Parus montanus","english":"Alpine or Willow Tit","francais":"Mésange boréale (M. alpestre ou des saules)","deutch":"Mönchsmeise (Alpen-_oder_Weidenmeise)","italiano":"Cincia alpestre o C. dei salici","rarity":0,"img":"146004_P001_WillowTit"},{"id":377,"latin":"Aegithalos caudatus","english":"Long-tailed Tit","francais":"Mésange à longue queue","deutch":"Schwanzmeise","italiano":"Codibugnolo","rarity":0,"img":"144001_P003_LongTailedTit"},{"id":378,"latin":"Remiz pendulinus","english":"Eurasian Penduline Tit","francais":"Rémiz penduline","deutch":"Beutelmeise","italiano":"Pendolino","rarity":0,"img":"145001_P001_PendulineTit"},{"id":379,"latin":"Panurus biarmicus","english":"Bearded Reedling","francais":"Panure à moustaches","deutch":"Bartmeise","italiano":"Basettino","rarity":0,"img":"1718549519"},{"id":380,"latin":"Sitta europaea","english":"Eurasian Nuthatch","francais":"Sittelle torchepot","deutch":"Kleiber","italiano":"Picchio muratore","rarity":0,"img":"147001_P001_Nuthatch"},{"id":381,"latin":"Certhia familiaris","english":"Eurasian Treecreeper","francais":"Grimpereau des bois","deutch":"Waldbaumläufer","italiano":"Rampichino alpestre","rarity":0,"img":"148001_P001_Treecreeper"},{"id":382,"latin":"Certhia brachydactyla","english":"Short-toed Treecreeper","francais":"Grimpereau des jardins","deutch":"Gartenbaumläufer","italiano":"Rampichino comune","rarity":0,"img":"148003_P001_STTreecreeper"},{"id":383,"latin":"Tichodroma muraria","english":"Wallcreeper","francais":"Tichodrome échelette","deutch":"Mauerläufer","italiano":"Picchio muraiolo","rarity":0,"img":"147022_P002_Wallcreeper"},{"id":384,"latin":"Cinclus cinclus","english":"White-throated Dipper","francais":"Cincle plongeur","deutch":"Wasseramsel","italiano":"Merlo acquaiolo","rarity":0,"img":"126001_P001_Dipper"},{"id":385,"latin":"Troglodytes troglodytes","english":"Eurasian Wren","francais":"Troglodyte mignon","deutch":"Zaunkönig","italiano":"Scricciolo","rarity":0,"img":"127054_P001_Wren"},{"id":386,"latin":"Erithacus rubecula","english":"European Robin","francais":"Rougegorge familier","deutch":"Rotkehlchen","italiano":"Pettirosso","rarity":0,"img":"130019_P001_Robin"},{"id":387,"latin":"Luscinia luscinia","english":"Thrush Nightingale","francais":"Rossignol progné","deutch":"Sprosser","italiano":"Usignolo maggiore","rarity":1,"img":"130035_P002_ThrNightingale"},{"id":388,"latin":"Luscinia megarhynchos","english":"Common Nightingale","francais":"Rossignol philomèle","deutch":"Nachtigall","italiano":"Usignolo","rarity":0,"img":"875590868"},{"id":389,"latin":"Luscinia svecica","english":"Bluethroat","francais":"Gorgebleue à miroir","deutch":"Blaukehlchen","italiano":"Pettazzurro","rarity":0,"img":"130037_P001_Bluethroat"},{"id":390,"latin":"Luscinia svecica svecica","english":"Red-spotted Bluethroat","francais":"Gorgebleue à miroir roux (L.s.svecica)","deutch":"Rotsterniges Blaukehlchen","italiano":"Pettazzurro orientale","rarity":0,"img":"130037_P001_Bluethroat"},{"id":391,"latin":"Luscinia svecica cyanecula","english":"White-spotted Bluethroat","francais":"Gorgebleue à miroir blanc (L.s.cyanecula)","deutch":"Weisssterniges Blaukehlchen","italiano":"Pettazzurro occidentale","rarity":0,"img":"130037_P001_Bluethroat"},{"id":392,"francais":"Robin à flancs roux","english":"Red-flanked Bluetail","latin":"Tarsiger cyanurus","deutch":"Blauschwanz","rarity":1,"img":""},{"id":393,"latin":"Irania gutturalis","english":"White-throated Robin","francais":"Iranie à gorge blanche","deutch":"Weisskehlsänger","italiano":"Pettirosso golabianca","rarity":1,"img":"130057_P002_WtThroatedRobin"},{"id":394,"latin":"Phoenicurus ochruros","english":"Black Redstart","francais":"Rougequeue noir","deutch":"Hausrotschwanz","italiano":"Codirosso spazzacamino","rarity":0,"img":"1046442253"},{"id":395,"latin":"Phoenicurus phoenicurus","english":"Common Redstart","francais":"Rougequeue à front blanc","deutch":"Gartenrotschwanz","italiano":"Codirosso comune","rarity":0,"img":"1047365774"},{"id":396,"latin":"Saxicola rubetra","english":"Whinchat","francais":"Tarier des prés","deutch":"Braunkehlchen","italiano":"Stiaccino","rarity":0,"img":"1786182574"},{"id":397,"latin":"Saxicola rubicola","english":"Eurasian Stonechat","francais":"Tarier pâtre","deutch":"Schwarzkehlchen","italiano":"Saltimpalo","rarity":0,"img":"130144_P001_Stonechat"},{"id":398,"latin":"Oenanthe isabellina","english":"Isabelline Wheatear","francais":"Traquet isabelle","deutch":"Isabellsteinschmätzer","italiano":"Culbianco isabellino","rarity":1,"img":"130169_P002_IsabWheatear"},{"id":399,"latin":"Oenanthe oenanthe","english":"Northern Wheatear","francais":"Traquet motteux","deutch":"Steinschmätzer","italiano":"Culbianco","rarity":0,"img":"130156_P001_Wheatear"},{"id":400,"latin":"Oenanthe deserti","english":"Desert Wheatear","francais":"Traquet du désert","deutch":"Wüstensteinschmätzer","italiano":"Monachella del deserto","rarity":1,"img":"130166_P001_DesertWheatear"},{"id":401,"latin":"Oenanthe hispanica","english":"Black-eared Wheatear","francais":"Traquet oreillard","deutch":"Mittelmeersteinschmätzer","italiano":"Monachella","rarity":1,"img":"130164_P001_BlkEaredWhtr"},{"id":402,"francais":"Traquet pie","english":"Pied Wheatear","latin":"Oenanthe pleschanka","deutch":"Nonnensteinschmätzer","rarity":1,"img":""},{"id":403,"latin":"Monticola saxatilis","english":"Rufous-tailed Rock Thrush","francais":"Monticole de roche","deutch":"Steinrötel","italiano":"Codirossone","rarity":0,"img":"130195_P001_RockThrush"},{"id":404,"latin":"Monticola solitarius","english":"Blue Rock Thrush","francais":"Monticole bleu","deutch":"Blaumerle","italiano":"Passero solitario","rarity":0,"img":"130200_P001_BlueRockThrush"},{"id":405,"francais":"Grive de Sibérie","english":"Siberian Thrush","latin":"Zoothera sibirica","deutch":"Schieferdrossel","rarity":1,"img":""},{"id":406,"francais":"Grive dorée","english":"White's Thrush","latin":"Zoothera dauma","deutch":"Erddrossel","rarity":1,"img":""},{"id":407,"latin":"Turdus torquatus","english":"Ring Ouzel","francais":"Merle à plastron","deutch":"Ringdrossel","italiano":"Merlo dal collare","rarity":0,"img":"-1530775983"},{"id":408,"latin":"Turdus merula","english":"Common Blackbird","francais":"Merle noir","deutch":"Amsel","italiano":"Merlo","rarity":0,"img":"130277_P001_Blackbird"},{"id":409,"francais":"Grive obscure","english":"Eyebrowed Thrush","latin":"Turdus obscurus","deutch":"Weißbrauendrossel","rarity":1,"img":""},{"id":410,"latin":"Turdus atrogularis","english":"Black-throated Thrush","francais":"Grive à gorge noire","deutch":"Schwarzkehldrossel","italiano":"Tordo golanera","rarity":1,"img":""},{"id":411,"francais":"Grive de Naumann","latin":"Turdus naumanni","rarity":1,"img":""},{"id":412,"latin":"Turdus pilaris","english":"Fieldfare","francais":"Grive litorne","deutch":"Wacholderdrossel","italiano":"Cesena","rarity":0,"img":"-1499376269"},{"id":413,"latin":"Turdus iliacus","english":"Redwing","francais":"Grive mauvis","deutch":"Rotdrossel","italiano":"Tordo sassello","rarity":0,"img":"130289_P001_Redwing"},{"id":414,"latin":"Turdus philomelos","english":"Song Thrush","francais":"Grive musicienne","deutch":"Singdrossel","italiano":"Tordo bottaccio","rarity":0,"img":"130290_P001_SongThrush"},{"id":415,"latin":"Turdus viscivorus","english":"Mistle Thrush","francais":"Grive draine","deutch":"Misteldrossel","italiano":"Tordela","rarity":0,"img":"130292_P002_MistleThrush"},{"id":416,"latin":"Cettia cetti","english":"Cetti's Warbler","francais":"Bouscarle de Cetti","deutch":"Seidensänger","italiano":"Usignolo di fiume","rarity":0,"img":"136021_P003_CettisWarbler"},{"id":417,"latin":"Locustella naevia","english":"Common Grasshopper Warbler","francais":"Locustelle tachetée","deutch":"Feldschwirl","italiano":"Forapaglie macchiettato","rarity":0,"img":"136074_P001_GrasshopperWblr"},{"id":418,"latin":"Locustella fluviatilis","english":"River Warbler","francais":"Locustelle fluviatile","deutch":"Schlagschwirl","italiano":"Locustella fluviatile","rarity":1,"img":"136078_P001_RiverWarbler"},{"id":419,"latin":"Locustella luscinioides","english":"Savi's Warbler","francais":"Locustelle luscinioïde","deutch":"Rohrschwirl","italiano":"Salciaiola","rarity":0,"img":"-1435161843"},{"id":420,"latin":"Acrocephalus melanopogon","english":"Moustached Warbler","francais":"Lusciniole à moustaches","deutch":"Mariskensänger","italiano":"Forapaglie castagnolo","rarity":1,"img":"136082_P001_MoustachedWblr"},{"id":421,"latin":"Acrocephalus arundinaceus","english":"Great Reed Warbler","francais":"Rousserolle turdoïde","deutch":"Drosselrohrsänger","italiano":"Cannareccione","rarity":0,"img":"-1382521146"},{"id":422,"latin":"Acrocephalus scirpaceus","english":"Eurasian Reed Warbler","francais":"Rousserolle effarvatte","deutch":"Teichrohrsänger","italiano":"Cannaiola comune","rarity":0,"img":"136089_P003_ReedWarbler"},{"id":423,"latin":"Acrocephalus palustris","english":"Marsh Warbler","francais":"Rousserolle verderolle","deutch":"Sumpfrohrsänger","italiano":"Cannaiola verdognola","rarity":0,"img":"136092_P002_MarshWarbler"},{"id":424,"latin":"Acrocephalus dumetorum","english":"Blyth's Reed Warbler","francais":"Rousserolle des buissons","deutch":"Buschrohrsänger","italiano":"Cannaiola di Blyth","rarity":1,"img":"136093_P001_BlythsReedWblr"},{"id":425,"latin":"Acrocephalus agricola","english":"Paddyfield Warbler","francais":"Rousserolle isabelle","deutch":"Feldrohrsänger","italiano":"Cannaiola di Jerdon","rarity":1,"img":"136087_P002_PaddyfieldWblr"},{"id":426,"latin":"Acrocephalus schoenobaenus","english":"Sedge Warbler","francais":"Phragmite des joncs","deutch":"Schilfrohrsänger","italiano":"Forapaglie comune","rarity":0,"img":"136084_P002_SedgeWarbler"},{"id":427,"latin":"Acrocephalus paludicola","english":"Aquatic Warbler","francais":"Phragmite aquatique","deutch":"Seggenrohrsänger","italiano":"Pagliarolo","rarity":1,"img":"136083_P001_AquaticWarbler"},{"id":428,"latin":"Hippolais polyglotta","english":"Melodious Warbler","francais":"Hypolaïs polyglotte","deutch":"Orpheusspötter","italiano":"Canapino comune","rarity":0,"img":"136116_P001_MelodiousWblr"},{"id":429,"latin":"Hippolais icterina","english":"Icterine Warbler","francais":"Hypolaïs ictérine","deutch":"Gelbspötter","italiano":"Canapino maggiore","rarity":0,"img":"136117_P001_IcterineWarbler"},{"id":430,"francais":"Hypolaïs pâle","english":"Eastern Olivaceous Warbler","latin":"Hippolais pallida","deutch":"Blassspötter","rarity":1,"img":""},{"id":432,"latin":"Hippolais caligata","english":"Booted Warbler","francais":"Hypolaïs bottée","deutch":"Buschspötter","italiano":"Canapino asiatico","rarity":1,"img":"136112_P001_BootedWarbler"},{"id":433,"latin":"Sylvia atricapilla","english":"Eurasian Blackcap","francais":"Fauvette à tête noire","deutch":"Mönchsgrasmücke","italiano":"Capinera","rarity":0,"img":"136342_P001_Blackcap"},{"id":434,"latin":"Sylvia nisoria","english":"Barred Warbler","francais":"Fauvette épervière","deutch":"Sperbergrasmücke","italiano":"Bigia padovana","rarity":0,"img":"136347_P001_BarresWarbler"},{"id":435,"latin":"Sylvia hortensis","english":"Orphean Warbler","francais":"Fauvette orphée","deutch":"Orpheusgrasmücke","italiano":"Bigia grossa","rarity":1,"img":"136348_P001_EOrpheanWarbler"},{"id":436,"latin":"Sylvia borin","english":"Garden Warbler","francais":"Fauvette des jardins","deutch":"Gartengrasmücke","italiano":"Beccafico","rarity":0,"img":"136343_P001_Gardenwarbler"},{"id":437,"latin":"Sylvia communis","english":"Common Whitethroat","francais":"Fauvette grisette","deutch":"Dorngrasmücke","italiano":"Sterpazzola","rarity":0,"img":"136344_P001_Whitethroat"},{"id":438,"latin":"Sylvia curruca","english":"Lesser Whitethroat","francais":"Fauvette babillarde","deutch":"Klappergrasmücke","italiano":"Bigiarella","rarity":0,"img":"136345_P003_LsrWhitethroat"},{"id":439,"latin":"Sylvia melanocephala","english":"Sardinian Warbler","francais":"Fauvette mélanocéphale","deutch":"Samtkopfgrasmücke","italiano":"Occhiocotto","rarity":1,"img":"136345_P002_LsrWhitethroat"},{"id":440,"latin":"Sylvia cantillans","english":"Subalpine Warbler","francais":"Fauvette passerinette","deutch":"Weissbartgrasmücke","italiano":"Sterpazzolina","rarity":0,"img":"1165473293"},{"id":441,"latin":"Sylvia conspicillata","english":"Spectacled Warbler","francais":"Fauvette à lunettes","deutch":"Brillengrasmücke","italiano":"Sterpazzola della Sardegna","rarity":1,"img":"136355_P001_SpectacledWblr"},{"id":442,"latin":"Sylvia undata","english":"Dartford Warbler","francais":"Fauvette pitchou","deutch":"Provencegrasmücke","italiano":"Magnanina comune","rarity":1,"img":"136357_P001_DartfordWarbler"},{"id":443,"latin":"Cercotrichas galactotes","english":"Rufous-tailed Scrub Robin","francais":"Agrobate roux","deutch":"Heckensänger","italiano":"Usignolo d'Africa","rarity":1,"img":""},{"id":444,"latin":"Cisticola juncidis","english":"Zitting Cisticola","francais":"Cisticole des joncs","deutch":"Cistensänger","italiano":"Beccamoschino","rarity":1,"img":"136156_P003_FanTailedWblr"},{"id":445,"latin":"Phylloscopus trochilus","english":"Willow Warbler","francais":"Pouillot fitis","deutch":"Fitis","italiano":"Luì grosso","rarity":0,"img":"136286_P001_WillowWarbler"},{"id":446,"latin":"Phylloscopus collybita","english":"Common Chiffchaff","francais":"Pouillot véloce","deutch":"Zilpzalp","italiano":"Luì piccolo","rarity":0,"img":"136287_P001_Chiffchaff"},{"id":447,"francais":"Pouillot véloce (P.c.abietinus)","latin":"Phylloscopus collybita abietinus","rarity":1,"img":""},{"id":448,"latin":"Phylloscopus collybita tristis","english":"Common Chiffchaff (P.c.tristis)","francais":"Pouillot de Sibérie","deutch":"Zilpzalp (P.c.tristis)","italiano":"Luì piccolo (P.c.tristis)","rarity":1,"img":"136288_P001_CaucChiffchaff"},{"id":449,"latin":"Phylloscopus bonelli","english":"Western Bonelli's Warbler","francais":"Pouillot de Bonelli","deutch":"Berglaubsänger","italiano":"Luì bianco","rarity":0,"img":"388792132"},{"id":450,"latin":"Phylloscopus sibilatrix","english":"Wood Warbler","francais":"Pouillot siffleur","deutch":"Waldlaubsänger","italiano":"Luì verde","rarity":0,"img":"389715653"},{"id":451,"latin":"Phylloscopus fuscatus","english":"Dusky Warbler","francais":"Pouillot brun","deutch":"Dunkellaubsänger","italiano":"Luì scuro","rarity":1,"img":"136292_P001_DuskyWarbler"},{"id":452,"latin":"Phylloscopus inornatus","english":"Yellow-browed Warbler","francais":"Pouillot à grands sourcils","deutch":"Gelbbrauenlaubsänger","italiano":"Luì forestiero","rarity":1,"img":"136302_P002_YBWarbler"},{"id":453,"francais":"Pouillot boréal","english":"Arctic Warbler","latin":"Phylloscopus borealis","deutch":"Wanderlaubsänger","rarity":1,"img":""},{"id":454,"latin":"Phylloscopus trochiloides","english":"Greenish Warbler","francais":"Pouillot verdâtre","deutch":"Grünlaubsänger","italiano":"Luì verdastro","rarity":1,"img":""},{"id":455,"latin":"Regulus regulus","english":"Goldcrest","francais":"Roitelet huppé","deutch":"Wintergoldhähnchen","italiano":"Regolo","rarity":0,"img":"1193178923"},{"id":456,"latin":"Regulus ignicapilla","english":"Firecrest","francais":"Roitelet à triple bandeau","deutch":"Sommergoldhähnchen","italiano":"Fiorrancino","rarity":0,"img":"1170090898"},{"id":457,"latin":"Muscicapa striata","english":"Spotted Flycatcher","francais":"Gobemouche gris","deutch":"Grauschnäpper","italiano":"Pigliamosche","rarity":0,"img":"161732174"},{"id":458,"latin":"Ficedula hypoleuca","english":"European Pied Flycatcher","francais":"Gobemouche noir","deutch":"Trauerschnäpper","italiano":"Balia nera","rarity":0,"img":"246696106"},{"id":459,"latin":"Ficedula albicollis","english":"Collared Flycatcher","francais":"Gobemouche à collier","deutch":"Halsbandschnäpper","italiano":"Balia dal collare","rarity":0,"img":"137056_P001_CollaredFly"},{"id":460,"latin":"Ficedula parva","english":"Red-breasted Flycatcher","francais":"Gobemouche nain","deutch":"Zwergschnäpper","italiano":"Pigliamosche pettirosso","rarity":1,"img":"273478215"},{"id":461,"latin":"Prunella modularis","english":"Dunnock","francais":"Accenteur mouchet","deutch":"Heckenbraunelle","italiano":"Passera scopaiola","rarity":0,"img":"129010_P001_Dunnock"},{"id":462,"latin":"Prunella collaris","english":"Alpine Accentor","francais":"Accenteur alpin","deutch":"Alpenbraunelle","italiano":"Sordone","rarity":0,"img":"129001_P001_AlpineAccentor"},{"id":463,"latin":"Anthus pratensis","english":"Meadow Pipit","francais":"Pipit farlouse","deutch":"Wiesenpieper","italiano":"Pispola","rarity":0,"img":"118031_P001_MeadowPipit"},{"id":464,"latin":"Anthus richardi","english":"Richard's Pipit","francais":"Pipit de Richard","deutch":"Spornpieper","italiano":"Calandro maggiore","rarity":1,"img":"1220790055"},{"id":465,"latin":"Anthus campestris","english":"Tawny Pipit","francais":"Pipit rousseline","deutch":"Brachpieper","italiano":"Calandro","rarity":0,"img":"118025_P001_TawnyPipit"},{"id":466,"latin":"Anthus hodgsoni","english":"Olive-backed Pipit","francais":"Pipit à dos olive","deutch":"Waldpieper","italiano":"Prispolone indiano","rarity":1,"img":""},{"id":467,"latin":"Anthus trivialis","english":"Tree Pipit","francais":"Pipit des arbres","deutch":"Baumpieper","italiano":"Prispolone","rarity":0,"img":"118033_P001_OBPipit"},{"id":468,"latin":"Anthus cervinus","english":"Red-throated Pipit","francais":"Pipit à gorge rousse","deutch":"Rotkehlpieper","italiano":"Pispola golarossa","rarity":0,"img":"118035_P001_RTPipit"},{"id":469,"latin":"Anthus spinoletta","english":"Water Pipit","francais":"Pipit spioncelle","deutch":"Bergpieper","italiano":"Spioncello","rarity":0,"img":"118038_P001_WaterPipit"},{"id":470,"francais":"Pipit maritime (A.p.petrosus)","latin":"Anthus petrosus petrosus","rarity":1,"img":""},{"id":471,"francais":"Pipit maritime (A.p.littoralis)","latin":"Anthus petrosus littoralis","rarity":1,"img":""},{"id":472,"latin":"Motacilla alba","english":"White Wagtail","francais":"Bergeronnette grise","deutch":"Bachstelze","italiano":"Ballerina bianca","rarity":0,"img":"118063_P008_WhiteWagtail"},{"id":473,"latin":"Motacilla alba yarrellii","english":"Pied Wagtail","francais":"Bergeronnette de Yarrell","deutch":"Trauerbachstelze","italiano":"Ballerina nera","rarity":1,"img":"118063_P008_WhiteWagtail"},{"id":474,"latin":"Motacilla cinerea","english":"Grey Wagtail","francais":"Bergeronnette des ruisseaux","deutch":"Bergstelze (Gebirgsstelze)","italiano":"Ballerina gialla","rarity":0,"img":"118004_P001_GreyWagtail"},{"id":475,"latin":"Motacilla flava","english":"Yellow Wagtail","francais":"Bergeronnette printanière","deutch":"Schafstelze","italiano":"Cutrettola","rarity":0,"img":"118002_P001_YellowWagtail"},{"id":476,"latin":"Motacilla flava flava","english":"Western Yellow Wagtail (M.f.flava)","francais":"Bergeronnette printanière (M.f.flava)","deutch":"Schafstelze (M.f.flava)","italiano":"Cutrettola (M.f.flava)","rarity":0,"img":"-1764802261"},{"id":477,"francais":"Bergeronnette flavéole (M.f.flavissima)","english":"British Yellow Wagtail (ssp. flavissima)","latin":"Motacilla flava flavissima","deutch":"Schafstelze (ssp. flavissima), Gelbkopf-Schafstelze","rarity":1,"img":""},{"id":478,"latin":"Motacilla flava thunbergi","english":"Grey-headed Wagtail (M.f.thunbergi)","francais":"Bergeronnette nordique (M.f.thunbergi)","deutch":"Schafstelze (M.f.thunbergi)","italiano":"Cutrettola (M.f.thunbergi)","rarity":0,"img":"118002_P001_YellowWagtail"},{"id":479,"latin":"Motacilla flava feldegg","english":"Black-headed Wagtail (ssp. feldegg)","francais":"Bergeronnette des Balkans (M.f.feldegg)","deutch":"Schafstelze (M.f.feldegg)","italiano":"Cutrettola (M.f.feldegg)","rarity":0,"img":"118002_P001_YellowWagtail"},{"id":480,"latin":"Motacilla flava cinereocapilla","english":"Western Yellow Wagtail (M.f.cinereocapilla)","francais":"Bergeronnette d'Italie (M.f.cinereocapilla)","deutch":"Schafstelze (M.f.cinereocapilla)","italiano":"Cutrettola (M.f.cinereocapilla)","rarity":0,"img":"118002_P001_YellowWagtail"},{"id":481,"latin":"Motacilla flava iberiae","english":"Western Yellow Wagtail (M.f.iberiae)","francais":"Bergeronnette ibérique (M.f.iberiae)","deutch":"Schafstelze (M.f.iberiae)","italiano":"Cutrettola (M.f.iberiae)","rarity":1,"img":"118002_P001_YellowWagtail"},{"id":482,"francais":"Bergeronnette printanière (M.f.lutea)","english":"Yellow-headed Wagtail (lutea)","latin":"Motacilla flava lutea","deutch":"Schafstelze (ssp. lutea), Wolgaschafstelze","rarity":1,"img":""},{"id":483,"francais":"Bergeronnette printanière (M.f.beema)","latin":"Motacilla flava beema","rarity":1,"img":""},{"id":484,"latin":"Motacilla citreola","english":"Citrine Wagtail","francais":"Bergeronnette citrine","deutch":"Zitronenstelze","italiano":"Cutrettola testagialla orientale","rarity":1,"img":"1164455274"},{"id":485,"latin":"Bombycilla garrulus","english":"Bohemian Waxwing","francais":"Jaseur boréal","deutch":"Seidenschwanz","italiano":"Beccofrusone","rarity":0,"img":"973847021"},{"id":486,"latin":"Lanius excubitor","english":"Great Grey Shrike","francais":"Pie-grièche grise","deutch":"Raubwürger","italiano":"Averla maggiore","rarity":0,"img":"1984521225"},{"id":487,"francais":"Pie-grièche méridionale","latin":"Lanius meridionalis","rarity":1,"img":""},{"id":488,"latin":"Lanius minor","english":"Lesser Grey Shrike","francais":"Pie-grièche à poitrine rose","deutch":"Schwarzstirnwürger","italiano":"Averla cenerina","rarity":1,"img":"122070_P001_LsrGreyShrike"},{"id":489,"latin":"Lanius senator","english":"Woodchat Shrike","francais":"Pie-grièche à tête rousse","deutch":"Rotkopfwürger","italiano":"Averla capirossa","rarity":0,"img":"122080_P001_WoodchatShrike"},{"id":490,"latin":"Lanius collurio","english":"Red-backed Shrike","francais":"Pie-grièche écorcheur","deutch":"Neuntöter","italiano":"Averla piccola","rarity":0,"img":"1956815595"},{"id":491,"latin":"Sturnus vulgaris","english":"Common Starling","francais":"Étourneau sansonnet","deutch":"Star","italiano":"Storno","rarity":0,"img":"164078_P001_Starling"},{"id":492,"latin":"Sturnus roseus","english":"Rosy Starling","francais":"Etourneau roselin","deutch":"Rosenstar","italiano":"Storno roseo","rarity":1,"img":"164077_P001_RosyStarling"},{"id":493,"latin":"Passer domesticus","english":"House Sparrow","francais":"Moineau domestique","deutch":"Haussperling","italiano":"Passera europea","rarity":0,"img":"163023_P001_HouseSparrow"},{"id":494,"latin":"Passer hispaniolensis italiae","english":"Italian Sparrow","francais":"Moineau cisalpin","deutch":"Italiensperling","italiano":"Passera d'Italia","rarity":0,"img":""},{"id":495,"latin":"Passer montanus","english":"Eurasian Tree Sparrow","francais":"Moineau friquet","deutch":"Feldsperling","italiano":"Passera mattugia","rarity":0,"img":"163039_P001_TreeSparrow"},{"id":496,"latin":"Montifringilla nivalis","english":"White-winged Snowfinch","francais":"Niverolle alpine","deutch":"Schneesperling","italiano":"Fringuello alpino","rarity":0,"img":"163048_P000_Snowfinch"},{"id":497,"latin":"Petronia petronia","english":"Rock Sparrow","francais":"Moineau soulcie","deutch":"Steinsperling","italiano":"Passera lagia","rarity":1,"img":"163045_P001_RockSparrow"},{"id":498,"latin":"Coccothraustes coccothraustes","english":"Hawfinch","francais":"Grosbec casse-noyaux","deutch":"Kernbeisser","italiano":"Frosone","rarity":0,"img":"-1974640328"},{"id":499,"latin":"Carduelis chloris","english":"European Greenfinch","francais":"Verdier d'Europe","deutch":"Grünfink","italiano":"Verdone","rarity":0,"img":"161042_P001_Greenfinch"},{"id":500,"latin":"Carduelis carduelis","english":"European Goldfinch","francais":"Chardonneret élégant","deutch":"Distelfink (Stieglitz)","italiano":"Cardellino","rarity":0,"img":"161065_P001_Goldfinch"},{"id":501,"latin":"Carduelis spinus","english":"Eurasian Siskin","francais":"Tarin des aulnes","deutch":"Erlenzeisig","italiano":"Lucherino","rarity":0,"img":"161046_P001_Siskin"},{"id":502,"latin":"Carduelis cannabina","english":"Common Linnet","francais":"Linotte mélodieuse","deutch":"Hänfling (Bluthänfling)","italiano":"Fanello","rarity":0,"img":"161068_P001_Linnet"},{"id":503,"latin":"Carduelis flavirostris","english":"Twite","francais":"Linotte à bec jaune","deutch":"Berghänfling","italiano":"Fanello nordico","rarity":1,"img":"161067_P002_Twite"},{"id":504,"latin":"Carduelis cabaret","english":"Lesser Redpoll","francais":"Sizerin cabaret","deutch":"Alpenbirkenzeisig","italiano":"Organetto minore","rarity":0,"img":"-1350349032"},{"id":505,"latin":"Carduelis flammea","english":"Common Redpoll","francais":"Sizerin flammé","deutch":"Taigabirkenzeisig","italiano":"Organetto nordico","rarity":1,"img":"-1349425511"},{"id":506,"francais":"Sizerin blanchâtre","english":"Arctic Redpoll","latin":"Carduelis hornemanni","deutch":"Polarbirkenzeisig","rarity":1,"img":""},{"id":507,"latin":"Serinus citrinella","english":"Citril Finch","francais":"Venturon montagnard","deutch":"Zitronengirlitz (Zitronenzeisig)","italiano":"Venturone alpino","rarity":0,"img":"161008_P001_CitrilFinch"},{"id":508,"latin":"Serinus serinus","english":"European Serin","francais":"Serin cini","deutch":"Girlitz","italiano":"Verzellino","rarity":0,"img":"161005_P001_Serin"},{"id":509,"francais":"Serin du Mozambique","latin":"Serinus mozambicus","rarity":1,"img":""},{"id":510,"latin":"Serinus canaria f. domestica","english":"Domestic Canary","francais":"Canari","deutch":"Kanarienvogel","italiano":"Canarino","rarity":1,"img":"161007_P002_Canary"},{"id":511,"latin":"Pyrrhula pyrrhula","english":"Eurasian Bullfinch","francais":"Bouvreuil pivoine","deutch":"Gimpel","italiano":"Ciuffolotto","rarity":0,"img":"161114_P001_Bullfinch"},{"id":512,"latin":"Carpodacus erythrinus","english":"Common Rosefinch","francais":"Roselin cramoisi","deutch":"Karmingimpel","italiano":"Ciuffolotto scarlatto","rarity":0,"img":"1631380302"},{"id":513,"francais":"Durbec des sapins","english":"Pine Grosbeak","latin":"Pinicola enucleator","deutch":"Hakengimpel","rarity":1,"img":""},{"id":515,"latin":"Loxia curvirostra","english":"Red Crossbill","francais":"Bec-croisé des sapins","deutch":"Fichtenkreuzschnabel","italiano":"Crociere","rarity":0,"img":"161107_P002_Crossbill"},{"id":516,"francais":"Bec-croisé perroquet","english":"Parrot Crossbill","latin":"Loxia pytyopsittacus","deutch":"Kiefernkreuzschnabel","rarity":1,"img":""},{"id":517,"latin":"Loxia leucoptera","english":"Two-barred Crossbill","francais":"Bec-croisé bifascié","deutch":"Bindenkreuzschnabel","italiano":"Crociere fasciato","rarity":1,"img":"161108_P003_2BarredXbill"},{"id":518,"latin":"Fringilla coelebs","english":"Common Chaffinch","francais":"Pinson des arbres","deutch":"Buchfink","italiano":"Fringuello","rarity":0,"img":"161001_P001_Chaffinch"},{"id":519,"latin":"Fringilla montifringilla","english":"Brambling","francais":"Pinson du Nord","deutch":"Bergfink","italiano":"Peppola","rarity":0,"img":"161003_P001_Brambling"},{"id":520,"latin":"Emberiza calandra","english":"Corn Bunting","francais":"Bruant proyer","deutch":"Grauammer","italiano":"Strillozzo","rarity":0,"img":"155003_P002_CornBunting"},{"id":521,"latin":"Emberiza citrinella","english":"Yellowhammer","francais":"Bruant jaune","deutch":"Goldammer","italiano":"Zigolo giallo","rarity":0,"img":"155004_P001_Yellowhammer"},{"id":522,"latin":"Emberiza leucocephalos","english":"Pine Bunting","francais":"Bruant à calotte blanche","deutch":"Fichtenammer","italiano":"Zigolo golarossa","rarity":1,"img":"155005_P005_PineBunting"},{"id":523,"latin":"Emberiza melanocephala","english":"Black-headed Bunting","francais":"Bruant mélanocéphale","deutch":"Kappenammer","italiano":"Zigolo capinero","rarity":1,"img":"155034_P001_BlackHeadedBunt"},{"id":524,"francais":"Bruant à tête rousse","english":"Red-headed Bunting","latin":"Emberiza bruniceps","deutch":"Braunkopfammer","rarity":1,"img":""},{"id":525,"francais":"Bruant auréole","english":"Yellow-breasted Bunting","latin":"Emberiza aureola","deutch":"Weidenammer","rarity":1,"img":""},{"id":526,"latin":"Emberiza cirlus","english":"Cirl Bunting","francais":"Bruant zizi","deutch":"Zaunammer","italiano":"Zigolo nero","rarity":0,"img":"155014_P002_CirlBunting"},{"id":527,"latin":"Emberiza hortulana","english":"Ortolan Bunting","francais":"Bruant ortolan","deutch":"Ortolan","italiano":"Ortolano","rarity":0,"img":"155012_P001_OrtolanBunting"},{"id":528,"latin":"Emberiza cia","english":"Rock Bunting","francais":"Bruant fou","deutch":"Zippammer","italiano":"Zigolo muciatto","rarity":0,"img":"155006_P001_RockBunting"},{"id":529,"latin":"Emberiza rustica","english":"Rustic Bunting","francais":"Bruant rustique","deutch":"Waldammer","italiano":"Zigolo boschereccio","rarity":1,"img":"155025_P001_RusticBunting"},{"id":530,"latin":"Emberiza pusilla","english":"Little Bunting","francais":"Bruant nain","deutch":"Zwergammer","italiano":"Zigolo minore","rarity":1,"img":"1648366607"},{"id":531,"latin":"Emberiza schoeniclus","english":"Common Reed Bunting","francais":"Bruant des roseaux","deutch":"Rohrammer","italiano":"Migliarino di palude","rarity":0,"img":"155040_P001_ReedBunting"},{"id":532,"latin":"Calcarius lapponicus","english":"Lapland Bunting","francais":"Bruant lapon","deutch":"Spornammer","italiano":"Zigolo della Lapponia","rarity":1,"img":"1704701388"},{"id":533,"latin":"Plectrophenax nivalis","english":"Snow Bunting","francais":"Bruant des neiges","deutch":"Schneeammer","italiano":"Zigolo delle nevi","rarity":1,"img":"1707471951"},{"id":534,"latin":"Nymphicus hollandicus","english":"Cockatiel","francais":"Calopsitte élégante","deutch":"Nymphensittich","italiano":"Calopsitta","rarity":1,"img":""},{"id":535,"latin":"Platycercus adscitus","english":"Pale-headed Rosella","francais":"Perruche à tête pâle","deutch":"Blasskopfrosella","italiano":"Rosella pallida","rarity":1,"img":""},{"id":536,"latin":"Melopsittacus undulatus","english":"Budgerigar","francais":"Perruche ondulée","deutch":"Wellensittich","italiano":"Parrocchetto ondulato","rarity":1,"img":""},{"id":537,"latin":"Psittacula krameri","english":"Rose-ringed Parakeet","francais":"Perruche à collier","deutch":"Halsbandsittich","italiano":"Parrocchetto dal collare","rarity":1,"img":""},{"id":538,"latin":"Psittacula cyanocephala","english":"Plum-headed Parakeet","francais":"Perruche à tête prune","deutch":"Pflaumenkopfsittich","italiano":"Parrochetto testa di prugna","rarity":1,"img":""},{"id":539,"latin":"Amazona aestiva","english":"Turquoise-fronted Amazon","francais":"Amazone à front bleu","deutch":"Blaustirnamazone","italiano":"Amazzone fronteblu","rarity":1,"img":""},{"id":543,"latin":"Leiothrix lutea","english":"Red-billed Leiothrix","francais":"Léiothrix jaune","deutch":"Sonnenvogel","italiano":"Usignolo del Giappone","rarity":1,"img":""},{"id":544,"francais":"Tisserin gendarme","latin":"Ploceus cucullatus","rarity":1,"img":""},{"id":545,"latin":"Ploceus melanocephalus","english":"Black-headed Weaver","francais":"Tisserin à tête noire","deutch":"Schwarzkopfweber","italiano":"Tessitore testanera","rarity":1,"img":""},{"id":546,"latin":"Euplectes afer","english":"Yellow-crowned Bishop","francais":"Euplecte vorabé","deutch":"Tahaweber","italiano":"Vescovo dorato","rarity":1,"img":""},{"id":549,"latin":"Amandava amandava","english":"Red Avadavat","francais":"Bengali rouge","deutch":"Tigerfink","italiano":"Bengalino comune","rarity":1,"img":"162062_P001_RedAvadavat"},{"id":550,"latin":"Taeniopygia guttata","english":"Zebra Finch","francais":"Diamant mandarin","deutch":"Zebrafink","italiano":"Diamante mandarino","rarity":1,"img":""},{"id":553,"francais":"Veuve dominicaine","latin":"Vidua macroura","rarity":1,"img":""},{"id":555,"latin":"Cardinalis cardinalis","english":"Northern Cardinal","francais":"Cardinal rouge","deutch":"Rotkardinal","italiano":"Cardinale rosso","rarity":1,"img":""},{"id":558,"francais":"Choucador pourpré","english":"Purple Starling","latin":"Lamprotornis purpureus","deutch":"Purpurglanzstar","rarity":1,"img":""},{"id":562,"latin":"Agapornis roseicollis","english":"Rosy-faced Lovebird","francais":"Inséparable rosegorge","deutch":"Rosenköpfchen","italiano":"Inseparabile facciarosa","rarity":1,"img":""},{"id":563,"latin":"Myiopsitta monachus","english":"Monk Parakeet","francais":"Conure veuve","deutch":"Mönchssittich","italiano":"Parrocchetto monaco","rarity":1,"img":""},{"id":566,"latin":"Poicephalus senegalus","english":"Senegal Parrot","francais":"Perroquet youyou","deutch":"Mohrenkopfpapagei","italiano":"Pappagallo del Senegal","rarity":1,"img":""},{"id":567,"latin":"Cathartes aura","english":"Turkey Vulture","francais":"Urubu à tête rouge","deutch":"Truthahngeier","italiano":"Avvoltoio collorosso","rarity":1,"img":""},{"id":568,"francais":"Choucador superbe","latin":"Lamprotornis superbus","rarity":1,"img":""},{"id":569,"francais":"Amazone à tête jaune","english":"Yellow-headed Amazon","latin":"Amazona oratrix","deutch":"Gelbkopfamazone","rarity":1,"img":""},{"id":570,"latin":"Columba guinea","english":"Speckled Pigeon","francais":"Pigeon roussard","deutch":"Guineataube","italiano":"Colomba di Guinea","rarity":1,"img":""},{"id":571,"latin":"Garrulax perspicillatus","english":"Masked Laughingthrush","francais":"Garrulaxe masqué","deutch":"Maskenhäherling","italiano":"Garrulo schiamazzante dagli occhiali","rarity":1,"img":""},{"id":573,"francais":"Tourterelle maillée","english":"Laughing Dove","latin":"Streptopelia senegalensis","deutch":"Palmtaube","rarity":1,"img":""},{"id":574,"francais":"Merle à plastron alpestre","english":"Ring Ouzel (ssp. alpestris)","latin":"Turdus torquatus alpestris","deutch":"Ringdrossel (ssp. alpestris)","rarity":1,"img":""},{"id":576,"latin":"Bucanetes githagineus","english":"Trumpeter Finch","francais":"Roselin githagine","deutch":"Wüstengimpel","italiano":"Trombettiere","rarity":1,"img":""},{"id":578,"latin":"Estrilda astrild","english":"Common Waxbill","francais":"Astrild ondulé","deutch":"Wellenastrild","italiano":"Astrilde di S. Elena","rarity":1,"img":""},{"id":579,"latin":"Cyanocorax yncas","english":"Green Jay","francais":"Geai vert","deutch":"Grünhäher","italiano":"Ghiandaia verde","rarity":1,"img":""},{"id":580,"latin":"Larus atricilla","english":"Laughing Gull","francais":"Mouette atricille","deutch":"Aztekenmöwe","italiano":"Gabbiano sghignazzante","rarity":1,"img":""},{"id":582,"latin":"Psittacus erithacus","english":"Grey Parrot","francais":"Perroquet jaco","deutch":"Graupapagei","italiano":"Pappagallo cenerino","rarity":1,"img":""},{"id":585,"latin":"Platycercus eximius","english":"Eastern Rosella","francais":"Perruche omnicolore","deutch":"Rosella","italiano":"Rosella comune","rarity":1,"img":""},{"id":586,"latin":"Scopus umbretta","english":"Hamerkop","francais":"Ombrette africaine","deutch":"Hammerkopf","italiano":"Uccello martello","rarity":1,"img":""},{"id":587,"latin":"Lanius isabellinus","english":"Isabelline Shrike","francais":"Pie-grièche isabelle","deutch":"Isabellwürger","italiano":"Averla isabellina","rarity":1,"img":""},{"id":588,"latin":"Threskiornis aethiopicus","english":"Sacred Ibis","francais":"Ibis sacré","deutch":"Heiliger Ibis","italiano":"Ibis sacro","rarity":1,"img":""},{"id":589,"latin":"Chlamydotis macqueenii","english":"Macqueen's Bustard","francais":"Outarde de Macqueen","deutch":"Steppenkragentrappe","italiano":"Ubara asiatica","rarity":1,"img":""},{"id":590,"latin":"Pluvialis fulva","english":"Pacific Golden Plover","francais":"Pluvier fauve","deutch":"Pazifischer Goldregenpfeifer","italiano":"Piviere orientale","rarity":1,"img":"-1044526043"},{"id":591,"latin":"Larus pipixcan","english":"Franklin's Gull","francais":"Mouette de Franklin","deutch":"Präriemöwe","italiano":"Gabbiano di Franklin","rarity":1,"img":""},{"id":1000,"francais":"Traquet rieur","latin":"Oenanthe leucura","rarity":1,"img":""},{"id":1001,"francais":"Martin triste","english":"Common Myna","latin":"Acridotheres tristis","deutch":"Hirtenmaina","rarity":1,"img":""},{"id":1002,"latin":"Agapornis fischeri","english":"Fischer's Lovebird","francais":"Inséparable de Fischer","deutch":"Pfirsichköpfchen","italiano":"Inseparabile di Fischer","rarity":1,"img":""},{"id":1003,"latin":"Agapornis personatus","english":"Yellow-collared Lovebird","francais":"Inséparable masqué","deutch":"Schwarzköpfchen","italiano":"Inseparabile mascherato","rarity":1,"img":""},{"id":1005,"francais":"Canard noir","latin":"Anas rubripes","rarity":1,"img":""},{"id":1006,"francais":"Oie rieuse du Groenland","english":"Greater White-fronted Goose (ssp. flavirostris)","latin":"Anser albifrons flavirostris","deutch":"Blässgans (ssp. flavirostris), Grönländische","rarity":1,"img":""},{"id":1007,"francais":"Pipit de Godlewski","english":"Blyth's Pipit","latin":"Anthus godlewskii","deutch":"Steppenpieper","rarity":1,"img":""},{"id":1008,"francais":"Pipit de la Petchora","english":"Pechora Pipit","latin":"Anthus gustavi","deutch":"Petschorapieper","rarity":1,"img":""},{"id":1009,"francais":"Martinet des maisons","english":"Little Swift","latin":"Apus affinis","deutch":"Haussegler","rarity":1,"img":""},{"id":1010,"francais":"Aigle ibérique","latin":"Aquila adalberti","rarity":1,"img":""},{"id":1011,"latin":"Aquila nipalensis","english":"Steppe Eagle","francais":"Aigle des steppes","deutch":"Steppenadler","italiano":"Aquila delle steppe","rarity":1,"img":""},{"id":1012,"francais":"Grand Héron","latin":"Ardea herodias","rarity":1,"img":""},{"id":1014,"francais":"Fuligule à dos blanc","english":"Canvasback","latin":"Aythya valisineria","deutch":"Riesentafelente","rarity":1,"img":""},{"id":1015,"francais":"Bartramie des champs","latin":"Bartramia longicauda","rarity":1,"img":""},{"id":1016,"francais":"Bernache à ventre pâle","english":"Brant Goose (ssp. hrota), Pale-bellied","latin":"Branta bernicla hrota","deutch":"Ringelgans (ssp. hrota), Hellbäuchige","rarity":1,"img":""},{"id":1017,"francais":"Bernache du Pacifique","english":"Bant Goose (ssp. nigricans), Black","latin":"Branta bernicla nigricans","deutch":"Ringelgans (ssp. nigricans), Pazifische","rarity":1,"img":""},{"id":1018,"francais":"Harfang des neiges","english":"Snowy Owl","latin":"Bubo scandiacus","deutch":"Schneeeule","rarity":1,"img":""},{"id":1019,"francais":"Pétrel de Bulwer","english":"Bulwer's Petrel","latin":"Bulweria bulwerii","deutch":"Bulwer-Sturmvogel","rarity":1,"img":""},{"id":1020,"latin":"Buteo buteo vulpinus","english":"Steppe Buzzard","francais":"Buse des steppes","deutch":"Falkenbussard","italiano":"Poiana delle steppe","rarity":1,"img":""},{"id":1021,"francais":"Héron vert","latin":"Butorides virescens","rarity":1,"img":""},{"id":1022,"francais":"Bécasseau à queue pointue","english":"Sharp-tailed Sandpiper","latin":"Calidris acuminata","deutch":"Spitzschwanz-Strandläufer","rarity":1,"img":""},{"id":1023,"francais":"Bécasseau échasse","english":"Stilt Sandpiper","latin":"Micropalama himantopus","deutch":"Bindenstrandläufer","rarity":1,"img":""},{"id":1024,"francais":"Bécasseau d'Alaska","latin":"Calidris mauri","rarity":1,"img":""},{"id":1025,"francais":"Bécasseau minuscule","english":"Least Sandpiper","latin":"Calidris minutilla","deutch":"Wiesenstrandläufer","rarity":1,"img":""},{"id":1026,"francais":"Bécasseau semipalmé","english":"Semipalmated Sandpiper","latin":"Calidris pusilla","deutch":"Sandstrandläufer","rarity":1,"img":""},{"id":1027,"francais":"Bécasseau à cou roux","english":"Red-necked Stint","latin":"Calidris ruficollis","deutch":"Rotkehlstrandläufer","rarity":1,"img":""},{"id":1028,"latin":"Callipepla californica","english":"California Quail","francais":"Colin de Californie","deutch":"Schopfwachtel","italiano":"Colino della California","rarity":1,"img":"2027390356"},{"id":1029,"francais":"Engoulevent à collier roux","latin":"Caprimulgus ruficollis","rarity":1,"img":""},{"id":1031,"francais":"Grive à joues grises","latin":"Catharus minimus","rarity":1,"img":""},{"id":1032,"francais":"Grive à dos olive","english":"Swainson's Thrush","latin":"Catharus ustulatus","deutch":"Zwergdrossel","rarity":1,"img":""},{"id":1033,"francais":"Chevalier semipalmé","latin":"Tringa semipalmata","rarity":1,"img":""},{"id":1034,"francais":"Martinet ramoneur","latin":"Chaetura pelagica","rarity":1,"img":""},{"id":1035,"francais":"Pluvier asiatique","latin":"Charadrius asiaticus","rarity":1,"img":""},{"id":1036,"francais":"Gravelot de Leschenault","english":"Greater Sand Plover","latin":"Charadrius leschenaultii","deutch":"Wüstenregenpfeifer","rarity":1,"img":""},{"id":1037,"francais":"Gravelot mongol","english":"Lesser Sand Plover","latin":"Charadrius mongolus","deutch":"Mongolenregenpfeifer","rarity":1,"img":""},{"id":1038,"francais":"Gravelot pâtre","latin":"Charadrius pecuarius","rarity":1,"img":""},{"id":1040,"francais":"Engoulevent d'Amérique","latin":"Chordeiles minor","rarity":1,"img":""},{"id":1041,"francais":"Coulicou à bec jaune","latin":"Coccyzus americanus","rarity":1,"img":""},{"id":1042,"francais":"Coulicou à bec noir","english":"Black-billed Cuckoo","latin":"Coccyzus erythropthalmus","deutch":"Schwarzschnabelkuckuck","rarity":1,"img":""},{"id":1043,"francais":"Colin de Virginie","english":"Northern Bobwhite","latin":"Colinus virginianus","deutch":"Virginiawachtel","rarity":1,"img":""},{"id":1044,"francais":"Choucas de Daourie","english":"Daurian Jackdaw","latin":"Coloeus dauuricus","deutch":"Elsterdohle","rarity":1,"img":""},{"id":1045,"francais":"Corbeau familier","latin":"Corvus splendens","rarity":1,"img":""},{"id":1047,"francais":"Paruline rayée","latin":"Setophaga striata","rarity":1,"img":""},{"id":1049,"francais":"Goglu des prés","latin":"Dolichonyx oryzivorus","rarity":1,"img":""},{"id":1050,"francais":"Bruant cendrillard","english":"Cretzschmar's Bunting","latin":"Emberiza caesia","deutch":"Grauortolan","rarity":1,"img":""},{"id":1052,"francais":"Bruant roux","latin":"Emberiza rutila","rarity":1,"img":""},{"id":1053,"latin":"Euodice malabarica","english":"White-throated Munia","francais":"Capucin bec-de-plomb","deutch":"Malabarfasänchen","italiano":"Becco d'argento indiano","rarity":1,"img":""},{"id":1055,"latin":"Ficedula semitorquata","english":"Semicollared Flycatcher","francais":"Gobemouche à demi-collier","deutch":"Halbringschnäpper","italiano":"Balia semitorquata","rarity":1,"img":""},{"id":1056,"francais":"Frégate superbe","latin":"Fregata magnificens","rarity":1,"img":""},{"id":1058,"francais":"Cochevis de Thékla","latin":"Galerida theklae","rarity":1,"img":""},{"id":1059,"latin":"Geronticus eremita","english":"Northern Bald Ibis","francais":"Ibis chauve","deutch":"Waldrapp","italiano":"Ibis eremita","rarity":1,"img":""},{"id":1060,"francais":"Hypolaïs obscure","latin":"Iduna opaca","rarity":1,"img":""},{"id":1061,"francais":"Hypolaïs rama","english":"Sykes's Warbler","latin":"Hippolais rama","deutch":"Steppenspötter","rarity":1,"img":""},{"id":1062,"francais":"Hirondelle à front blanc","latin":"Petrochelidon pyrrhonota","rarity":1,"img":""},{"id":1065,"francais":"Pie-grièche brune","english":"Brown Shrike","latin":"Lanius cristatus","deutch":"Braunwürger","rarity":1,"img":""},{"id":1066,"francais":"Pie-grièche masquée","english":"Masked Shrike","latin":"Lanius nubicus","deutch":"Maskenwürger","rarity":1,"img":""},{"id":1067,"francais":"Goéland dominicain","latin":"Larus dominicanus","rarity":1,"img":""},{"id":1068,"latin":"Larus fuscus fuscus","english":"Lesser Black-backed Gull (L.f.fuscus)","francais":"Goéland de la Baltique","deutch":"Heringsmöwe (L.f.fuscus)","italiano":"Zafferano (L.f.fuscus)","rarity":1,"img":"061018_P001_LBBGull"},{"id":1069,"francais":"Goéland de Kumlien","english":"Iceland Gull (ssp. kumlieni), Kumlien's Gull","latin":"Larus glaucoides kumlieni","deutch":"Polarmöwe (ssp. kumlieni), Kumlienmöwe","rarity":1,"img":""},{"id":1070,"latin":"Larus philadelphia","english":"Bonaparte's Gull","francais":"Mouette de Bonaparte","deutch":"Bonapartemöwe","italiano":"Gabbiano di Bonaparte","rarity":1,"img":"1711530161"},{"id":1071,"francais":"Goéland d'Amérique","english":"American Herring Gull","latin":"Larus smithsonianus","deutch":"Silbermöwe (Amerikanische), Kanadamöwe","rarity":1,"img":""},{"id":1072,"francais":"Marabout d'Afrique","latin":"Leptoptilos crumeniferus","rarity":1,"img":""},{"id":1073,"francais":"Bécassin à bec court","english":"Short-billed Dowitcher","latin":"Limnodromus griseus","deutch":"Kleiner Schlammläufer","rarity":1,"img":""},{"id":1074,"francais":"Bécassin à long bec","english":"Long-billed Dowitcher","latin":"Limnodromus scolopaceus","deutch":"Großer Schlammläufer","rarity":1,"img":""},{"id":1075,"francais":"Locustelle de Pallas","latin":"Locustella certhiola","rarity":1,"img":""},{"id":1076,"francais":"Locustelle fasciée","latin":"Locustella fasciolata","rarity":1,"img":""},{"id":1077,"francais":"Locustelle lancéolée","english":"Lanceolated Warbler","latin":"Locustella lanceolata","deutch":"Strichelschwirl","rarity":1,"img":""},{"id":1078,"francais":"Calliope sibérienne","english":"Siberian Rubythroat","latin":"Luscinia calliope","deutch":"Rubinkehlchen","rarity":1,"img":""},{"id":1079,"francais":"Macreuse à bec jaune","english":"Black Scoter","latin":"Melanitta americana","deutch":"Pazifiktrauerente","rarity":1,"img":""},{"id":1080,"francais":"Macreuse à ailes blanches","latin":"Melanitta deglandi","rarity":1,"img":""},{"id":1081,"francais":"Macreuse à front blanc","english":"Surf Scoter","latin":"Melanitta perspicillata","deutch":"Brillenente","rarity":1,"img":""},{"id":1082,"francais":"Dindon sauvage","english":"Wild Turkey","latin":"Meleagris gallopavo","deutch":"Truthuhn","rarity":1,"img":""},{"id":1083,"latin":"Merops persicus","english":"Blue-cheeked Bee-eater","francais":"Guêpier de Perse","deutch":"Blauwangenspint","italiano":"Gruccione egiziano","rarity":1,"img":""},{"id":1084,"francais":"Océanite de Wilson","english":"Wilson's Storm Petrel","latin":"Oceanites oceanicus","deutch":"Buntfuß-Sturmschwalbe","rarity":1,"img":""},{"id":1085,"francais":"Océanite de Swinhoe","latin":"Oceanodroma monorhis","rarity":1,"img":""},{"id":1086,"latin":"Oena capensis","english":"Namaqua Dove","francais":"Tourterelle masquée","deutch":"Kaptäubchen","italiano":"Tortora maschera di ferro","rarity":1,"img":""},{"id":1087,"francais":"Traquet à tête blanche","english":"White-crowned Wheatear","latin":"Oenanthe leucopyga","deutch":"Saharasteinschmätzer","rarity":1,"img":""},{"id":1088,"francais":"Paruline à collier","english":"Northern Parula","latin":"Setophaga americana","deutch":"Meisenwaldsänger","rarity":1,"img":""},{"id":1089,"francais":"Moineau espagnol","latin":"Passer hispaniolensis","rarity":1,"img":""},{"id":1090,"francais":"Moineau doré","latin":"Passer luteus","rarity":1,"img":""},{"id":1091,"francais":"Cormoran à aigrettes","latin":"Phalacrocorax auritus","rarity":1,"img":""},{"id":1092,"francais":"Phalarope de Wilson","english":"Wilson's Phalarope","latin":"Phalaropus tricolor","deutch":"Wilsonwassertreter","rarity":1,"img":""},{"id":1093,"francais":"Cardinal à poitrine rose","english":"Rose-breasted Grosbeak","latin":"Pheucticus ludovicianus","deutch":"Rosenbrust-Kernknacker","rarity":1,"img":""},{"id":1094,"francais":"Flamant nain","english":"Lesser Flamingo","latin":"Phoenicopterus minor","deutch":"Zwergflamingo","rarity":1,"img":""},{"id":1095,"francais":"Rougequeue de Moussier","latin":"Phoenicurus moussieri","rarity":1,"img":""},{"id":1096,"latin":"Phylloscopus humei","english":"Hume's Leaf Warbler","francais":"Pouillot de Hume","deutch":"Tienschanlaubsänger","italiano":"Luì di Hume","rarity":1,"img":""},{"id":1098,"francais":"Pouillot oriental","english":"Eastern Bonelli's Warbler","latin":"Phylloscopus orientalis","deutch":"Berglaubsänger (ssp. orientalis), Balkanlaubsänger","rarity":1,"img":""},{"id":1099,"latin":"Phylloscopus proregulus","english":"Pallas’s Leaf Warbler","francais":"Pouillot de Pallas","deutch":"Goldhähnchenlaubsänger","italiano":"Luì di Pallas","rarity":1,"img":"1018633454"},{"id":1100,"francais":"Pouillot de Schwarz","english":"Radde's Warbler","latin":"Phylloscopus schwarzi","deutch":"Bartlaubsänger","rarity":1,"img":""},{"id":1101,"francais":"Tangara écarlate","latin":"Piranga olivacea","rarity":1,"img":""},{"id":1102,"francais":"Pluvier bronzé","english":"American Golden Plover","latin":"Pluvialis dominica","deutch":"Prärie-Goldregenpfeifer (Amerikanischer)","rarity":1,"img":""},{"id":1104,"francais":"Grèbe à bec bigarré","english":"Pied-billed Grebe","latin":"Podilymbus podiceps","deutch":"Bindentaucher","rarity":1,"img":""},{"id":1105,"francais":"Marouette de Caroline","latin":"Porzana carolina","rarity":1,"img":""},{"id":1106,"francais":"Accenteur à gorge noire","english":"Black-throated Accentor","latin":"Prunella atrogularis","deutch":"Schwarzkehlbraunelle","rarity":1,"img":""},{"id":1107,"francais":"Puffin des Baléares","english":"Balearic Shearwater","latin":"Puffinus mauretanicus","deutch":"Balearensturmtaucher","rarity":1,"img":""},{"id":1111,"latin":"Saxicola maurus","english":"Siberian Stonechat","francais":"Tarier de Sibérie","deutch":"Pallasschwarzkehlchen","italiano":"Saltimpalo siberiano","rarity":1,"img":""},{"id":1112,"francais":"Paruline des ruisseaux","latin":"Parkesia noveboracensis","rarity":1,"img":""},{"id":1113,"francais":"Venturon corse","latin":"Serinus corsicanus","rarity":1,"img":""},{"id":1114,"francais":"Paruline flamboyante","latin":"Setophaga ruticilla","rarity":1,"img":""},{"id":1115,"francais":"Sittelle corse","latin":"Sitta whiteheadi","rarity":1,"img":""},{"id":1116,"francais":"Sterne bridée","english":"Bridled Tern","latin":"Onychoprion anaethetus","deutch":"Zügelseeschwalbe","rarity":1,"img":""},{"id":1117,"francais":"Sterne élégante","english":"Elegant Tern","latin":"Sterna elegans","deutch":"Schmuckseeschwalbe","rarity":1,"img":""},{"id":1118,"francais":"Sterne de Forster","latin":"Sterna forsteri","rarity":1,"img":""},{"id":1120,"francais":"Sterne royale","latin":"Sterna maxima","rarity":1,"img":""},{"id":1121,"francais":"Tourterelle orientale","english":"Oriental Turtle Dove","latin":"Streptopelia orientalis","deutch":"Orientturteltaube","rarity":1,"img":""},{"id":1122,"latin":"Streptopelia risoria","english":"African Collared Dove","francais":"Tourterelle rieuse","deutch":"Lachtaube","italiano":"Tortora domestica","rarity":1,"img":""},{"id":1123,"francais":"Étourneau soyeux","latin":"Sturnus sericeus","rarity":1,"img":""},{"id":1124,"latin":"Sturnus unicolor","english":"Spotless Starling","francais":"Étourneau unicolore","deutch":"Einfarbstar","italiano":"Storno nero","rarity":1,"img":""},{"id":1125,"francais":"Fauvette de Rüppell","latin":"Sylvia ruppeli","rarity":1,"img":""},{"id":1126,"francais":"Fauvette sarde","latin":"Sylvia sarda","rarity":1,"img":""},{"id":1127,"latin":"Syrmaticus reevesii","english":"Reeves's Pheasant","francais":"Faisan vénéré","deutch":"Königsfasan","italiano":"Fagiano venerato","rarity":1,"img":""},{"id":1128,"francais":"Albatros à sourcils noirs","english":"Black-browed Albatross","latin":"Thalassarche melanophris","deutch":"Schwarzbrauenalbatros","rarity":1,"img":""},{"id":1130,"francais":"Chevalier à pattes jaunes","english":"Lesser Yellowlegs","latin":"Tringa flavipes","deutch":"Kleiner Gelbschenkel","rarity":1,"img":""},{"id":1131,"francais":"Chevalier criard","latin":"Tringa melanoleuca","rarity":1,"img":""},{"id":1132,"latin":"Tringa solitaria","english":"Solitary Sandpiper","francais":"Chevalier solitaire","deutch":"Einsamer Wasserläufer","italiano":"Piro-piro solitario","rarity":1,"img":""},{"id":1133,"francais":"Grive à ailes rousses","english":"Dusky Thrush","latin":"Turdus eunomus","deutch":"Rostflügeldrossel","rarity":1,"img":""},{"id":1134,"francais":"Grive à gorge rousse","latin":"Turdus ruficollis","rarity":1,"img":""},{"id":1135,"francais":"Guillemot de Brünnich","english":"Thick-billed Murre","latin":"Uria lomvia","deutch":"Dickschnabellumme","rarity":1,"img":""},{"id":1136,"francais":"Paruline obscure","latin":"Leiothlypis peregrina","rarity":1,"img":""},{"id":1137,"francais":"Viréo à oeil rouge","latin":"Vireo olivaceus","rarity":1,"img":""},{"id":1138,"francais":"Carouge à tête jaune","latin":"Xanthocephalus xanthocephalus","rarity":1,"img":""},{"id":1139,"francais":"Bruant à couronne blanche","latin":"Zonotrichia leucophrys","rarity":1,"img":""},{"id":1141,"francais":"Faucon de l'Amour","latin":"Falco amurensis","rarity":1,"img":""},{"id":1142,"francais":"Faucon de Barbarie","latin":"Falco pelegrinoides","rarity":1,"img":""},{"id":1143,"latin":"Gyps rueppellii","english":"Rueppell's Griffon","francais":"Vautour de Rüppell","deutch":"Sperbergeier","italiano":"Grifone di Rueppell","rarity":1,"img":""},{"id":1144,"francais":"Fou masqué","latin":"Sula dactylatra","rarity":1,"img":""},{"id":1145,"latin":"Gavia sp.","english":"unidentified Diver","francais":"Plongeon indéterminé","deutch":"unbest. Seetaucher","italiano":"Strolaga indet.","rarity":0,"img":"diver_sp"},{"id":1146,"francais":"Grèbe indéterminé","english":"Grebe, unidentified","latin":"Podicipedidae sp.","deutch":"Lappentaucher, unbestimmt","rarity":1,"img":""},{"id":1148,"latin":"Ciconia abdimii","english":"Abdim's Stork","francais":"Cigogne d'Abdim","deutch":"Abdimstorch","italiano":"Cicogna di Abdim","rarity":1,"img":""},{"id":1149,"francais":"Canard de surface indéterminé","english":"Dabbling Duck, unidentified","latin":"Anatidae sp.","deutch":"Gründelente, unbestimmt","rarity":1,"img":""},{"id":1150,"francais":"Canard plongeur indéterminé","english":"Diving Duck, unidentified","latin":"Aythya sp.","deutch":"Tauchente, unbestimmt","rarity":1,"img":""},{"id":1151,"francais":"Harle indéterminé (Mergus)","latin":"Mergus sp.","rarity":1,"img":""},{"id":1152,"francais":"Canard indéterminé","english":"Duck, unidentified","latin":"Anas / Aythya sp.","deutch":"Ente, unbestimmt","rarity":1,"img":""},{"id":1155,"francais":"Caracara huppé","english":"Southern Crested Caracara","latin":"Caracara plancus","deutch":"Schopfkarakara","rarity":1,"img":""},{"id":1156,"latin":"Coturnix japonica","english":"Japanese Quail","francais":"Caille du Japon","deutch":"Japanwachtel","italiano":"Quaglia giapponese","rarity":1,"img":""},{"id":1157,"francais":"Grand limicole indéterminé","latin":"Charadriiformes sp.","rarity":1,"img":""},{"id":1158,"francais":"petit limicole indéterminé","latin":"Charadriiformes sp.","rarity":1,"img":""},{"id":1159,"francais":"Goéland argenté, pontique ou leucophée","english":"Herring / Yellow-legged / Caspian Gull","latin":"Larus argentatus / cachinnans / michahellis","deutch":"Silber-_oder_Mittelmeer-_oder_Steppenmöwe","rarity":1,"img":""},{"id":1160,"francais":"Goéland argenté (L.a.argentatus)","latin":"Larus argentatus argentatus","rarity":1,"img":""},{"id":1161,"francais":"Goéland argenté (L.a.argenteus)","latin":"Larus argentatus argenteus","rarity":1,"img":""},{"id":1162,"francais":"Goéland brun (L.f.graellsii)","english":"Lesser Black-backed Gull (ssp. graellsii)","latin":"Larus fuscus graellsii","deutch":"Heringsmöwe (ssp. graellsii)","rarity":1,"img":""},{"id":1163,"latin":"Larus sp.","english":"unidentified Gull","francais":"Goéland indéterminé","deutch":"unbest. Grossmöwe","italiano":"Gabbiano indet.","rarity":0,"img":"gull_sp"},{"id":1164,"francais":"Mouette indéterminée","latin":"Larus sp.","rarity":1,"img":""},{"id":1165,"francais":"Pigeon biset (origine naturelle)","latin":"Columba livia","rarity":1,"img":""},{"id":1167,"francais":"Chouette de l'Oural","english":"Ural Owl","latin":"Strix uralensis","deutch":"Habichtskauz","rarity":1,"img":""},{"id":1169,"francais":"Pic syriaque","english":"Syrian Woodpecker","latin":"Dendrocopos syriacus","deutch":"Blutspecht","rarity":1,"img":""},{"id":1172,"francais":"Choucas des tours oriental","english":"Eastern Jackdaw (soemmerringii)","latin":"Coloeus monedula soemmerringii","deutch":"Dohle (ssp. soemmerringii), Halsbanddohle","rarity":1,"img":""},{"id":1174,"francais":"Cassenoix moucheté sibérien","english":"Spotted Nutcracker (ssp. macrorhynchos)","latin":"Nucifraga caryocatactes macrorhynchos","deutch":"Tannenhäher (ssp. macrorhynchos), Sibirischer","rarity":1,"img":""},{"id":1178,"francais":"Merle à plastron nordique","english":"Ring Ouzel (ssp. torquatus)","latin":"Turdus torquatus torquatus","deutch":"Ringdrossel (ssp. torquatus)","rarity":1,"img":""},{"id":1179,"latin":"Acrocephalus palustris / scirpaceus","english":"Eurasian Reed or Marsh Warbler","francais":"Rousserolle verderolle ou effarvatte","deutch":"Teich- oder Sumpfrohrsänger","italiano":"Cannaiola indet.","rarity":0,"img":"136089_P003_ReedWarbler"},{"id":1180,"francais":"Pouillot véloce (P.c.collybita)","latin":"Phylloscopus collybita collybita","rarity":1,"img":""},{"id":1182,"francais":"Bergeronnette grise (M.a.alba)","latin":"Motacilla alba alba","rarity":1,"img":""},{"id":1185,"latin":"Sturnus malabaricus","english":"Chestnut-tailed Starling","francais":"Étourneau à tête grise","deutch":"Graukopfstar","italiano":"Storno testagrigia","rarity":1,"img":""},{"id":1187,"latin":"Eudocimus ruber","english":"Scarlet Ibis","francais":"Ibis rouge","deutch":"Scharlachsichler","italiano":"Ibis rosso","rarity":1,"img":""},{"id":1191,"francais":"Cigogne indéterminée","latin":"Ciconia sp.","rarity":1,"img":""},{"id":1192,"francais":"Faucon indéterminé","latin":"Falco sp.","rarity":1,"img":""},{"id":1194,"francais":"Laridé indéterminé","english":"unidentified Gull","latin":"Laridae sp.","deutch":"Möwe, unbestimmt","rarity":1,"img":""},{"id":1195,"francais":"Pigeon indéterminé","latin":"Columba sp.","rarity":1,"img":""},{"id":1196,"latin":"Falconiformes sp.","english":"unidentified raptor","francais":"Rapace indéterminé","deutch":"unbest. Greifvogel","italiano":"Rapace indeterminato","rarity":0,"img":"raptor_sp"},{"id":1197,"francais":"Aigle indéterminé (Aquila)","english":"unidentified Eagle (Aquila)","latin":"Aquila sp.","deutch":"Adler, unbestimmt","rarity":1,"img":""},{"id":1198,"francais":"Buse indéterminée","english":"Buzzard, unidentified","latin":"Buteo sp.","deutch":"Bussard, unbestimmt","rarity":1,"img":""},{"id":1199,"francais":"Corvidé indéterminé","english":"Crow/Raven, unidentified","latin":"Corvus sp.","deutch":"Krähe/Rabe, unbestimmt","rarity":1,"img":""},{"id":1200,"francais":"Hirondelle indéterminée","english":"Swallow, unidentified","latin":"Hirundinidae","deutch":"Schwalbe, unbestimmt","rarity":1,"img":""},{"id":1201,"francais":"Milan indéterminé","english":"Kite, unidentified","latin":"Milvus sp.","deutch":"Milan, unbestimmt","rarity":1,"img":""},{"id":1202,"francais":"Alcidé indéterminé","latin":"Alcidae sp.","rarity":1,"img":""},{"id":1203,"latin":"Passeriformes sp.","english":"unidentified Passerine","francais":"Passereau indéterminé","deutch":"unbest. Sperlingsvogel","italiano":"Passera indet.","rarity":0,"img":"passerine_sp"},{"id":1204,"francais":"Merle / Grive indéterminé","english":"Thrush, unidentified","latin":"Turdus sp.","deutch":"Drossel, unbestimmt","rarity":1,"img":""},{"id":1205,"latin":"Psittacula eupatria","english":"Alexandrine Parakeet","francais":"Perruche alexandre","deutch":"Alexandersittich","italiano":"Parrocchetto di Alessandro","rarity":1,"img":""},{"id":1209,"francais":"Pipit farlousane","english":"Buff-bellied Pipit","latin":"Anthus rubescens","deutch":"Pazifikpieper","rarity":1,"img":""},{"id":1210,"francais":"Pipit indéterminé","english":"Pipit, unidentified","latin":"Anthus sp.","deutch":"Pieper, unbestimmt","rarity":1,"img":""},{"id":1212,"francais":"Martinet genre Apus","english":"unidentified Swift","latin":"Apus sp.","deutch":"Segler, unbestimmt","rarity":1,"img":""},{"id":1214,"francais":"Puffin indéterminé","english":"unidentified Shearwater","latin":"Puffinus / Calonectris sp.","deutch":"Sturmtaucher, unbestimmt","rarity":1,"img":""},{"id":1215,"francais":"Bécasseau indéterminé","english":"Sandpiper / Stint, unidentified","latin":"Calidris / Limicola / Tryngites sp.","deutch":"Strandläufer, unbestimmt","rarity":1,"img":""},{"id":1216,"francais":"Gravelot indéterminé","english":"small Plover, unidentified","latin":"Charadrius sp.","deutch":"Kleiner Regenpfeifer, unbestimmt","rarity":1,"img":""},{"id":1223,"francais":"Fringille indéterminé","latin":"Fringillidae sp.","rarity":1,"img":""},{"id":1226,"francais":"Hypolaïs indéterminée","latin":"Hippolais / Iduna sp.","rarity":1,"img":""},{"id":1228,"francais":"Pie-grièche à tête rousse (L.s.badius)","latin":"Lanius senator badius","rarity":1,"img":""},{"id":1233,"francais":"Locustelle indéterminée","latin":"Locustella sp.","rarity":1,"img":""},{"id":1234,"francais":"Gorgebleue de Nantes (L.s.namnetum)","latin":"Luscinia svecica namnetum","rarity":1,"img":""},{"id":1236,"francais":"Bergeronnette grise (M.a.subpersonata)","latin":"Motacilla alba subpersonata","rarity":1,"img":""},{"id":1240,"francais":"Rapace nocturne indéterminé","english":"Owl sp.","latin":"Strigiformes sp.","deutch":"Eule / Kauz, unbestimmt","rarity":1,"img":""},{"id":1241,"francais":"Courlis indéterminé","latin":"Numenius sp.","rarity":1,"img":""},{"id":1242,"francais":"Mésange indéterminée","english":"Tit, unidentified","latin":"Paridae sp.","deutch":"Meise, unbestimmt","rarity":1,"img":""},{"id":1244,"francais":"Rougequeue indéterminé","english":"Redstart, unidentified","latin":"Phoenicurus sp.","deutch":"Rotschwanz, unbestimmt","rarity":1,"img":""},{"id":1246,"francais":"Pouillot indéterminé","english":"Phylloscopus-Warbler, unidentified","latin":"Phylloscopus sp.","deutch":"Laubsänger, unbestimmt","rarity":1,"img":""},{"id":1247,"francais":"Pinson des arbres / du Nord","english":"Chaffinch / Brambling","latin":"Fringilla coelebs / montifringilla","deutch":"Buch-_oder_Bergfink","rarity":1,"img":""},{"id":1249,"francais":"Pluvier (Pluvialis) indéterminé","latin":"Pluvialis sp.","rarity":1,"img":""},{"id":1250,"francais":"Marouette indéterminée","latin":"Porzana sp.","rarity":1,"img":""},{"id":1252,"francais":"Rallidé indéterminé","latin":"Rallidae sp.","rarity":1,"img":""},{"id":1254,"francais":"Roitelet indéterminé","english":"Fire/Goldcrest","latin":"Regulus sp.","deutch":"Goldhähnchen, unbestimmt","rarity":1,"img":""},{"id":1259,"latin":"Sterna hirundo / paradisaea","english":"Common / Arctic Tern","francais":"Sterne pierregarin ou arctique","deutch":"Fluss-_oder_Küstenseeschwalbe","italiano":"Sterna codalunga / comune","rarity":0,"img":"061058_P000_ArcticTern"},{"id":1260,"francais":"Sterne indéterminée","english":"Sternidae, unidentified","latin":"Sternidae sp.","deutch":"Seeschwalbe, unbestimmt","rarity":1,"img":""},{"id":1261,"francais":"Fauvette indéterminée","latin":"Sylvia sp.","rarity":1,"img":""},{"id":1262,"francais":"Chevalier indéterminé (Tringa)","english":"unidentified Sandpiper (Tringa)","latin":"Tringa sp.","deutch":"Wasserläufer, unbestimmt","rarity":1,"img":""},{"id":1266,"francais":"Guillemot de Troïl ou Pingouin torda","english":"Razorbill / Common Guillemot","latin":"Uria aalge / Alca torda","deutch":"Trottellumme_oder_Tordalk","rarity":1,"img":""},{"id":1267,"francais":"Bruant indéterminé (Emberiza)","english":"Bunting, unidentified","latin":"Emberiza sp.","deutch":"Ammer, unbestimmt","rarity":1,"img":""},{"id":1269,"francais":"Faucon crécerellette ou crécerelle","latin":"Falco naumanni / tinnunculus","rarity":1,"img":""},{"id":1270,"francais":"Corneille noire ou mantelée","english":"Carrion or Hooded Crow","latin":"Corvus corone / cornix","deutch":"Raben-_oder_Nebelkrähe (Aaskrähe)","rarity":1,"img":""},{"id":1272,"latin":"Eclectus roratus","english":"Eclectus Parrot","francais":"Grand Éclectus","deutch":"Edelpapagei","italiano":"Ecletto","rarity":1,"img":""},{"id":1274,"latin":"Agapornis canus","english":"Grey-headed Lovebird","francais":"Inséparable à tête grise","deutch":"Grauköpfchen","italiano":"Inseparabile testagrigia","rarity":1,"img":""},{"id":1280,"francais":"Pipit maritime","english":"Rock Pipit","latin":"Anthus petrosus","deutch":"Strandpieper","rarity":1,"img":""},{"id":1282,"francais":"Conure à tête bleue","latin":"Aratinga acuticaudata","rarity":1,"img":""},{"id":1285,"francais":"Conure verte","english":"Green Parakeet","latin":"Aratinga holochlora","deutch":"Grünsittich","rarity":1,"img":""},{"id":1289,"latin":"Cacatua galerita","english":"Sulphur-crested Cockatoo","francais":"Cacatoès à huppe jaune","deutch":"Gelbhaubenkakadu","italiano":"Grande cacatua ciuffogiallo","rarity":1,"img":""},{"id":1291,"francais":"Bécasseau de l'Anadyr","english":"Great Knot","latin":"Calidris tenuirostris","deutch":"Knutt, Großer","rarity":1,"img":""},{"id":1293,"latin":"Cyanoliseus patagonus","english":"Burrowing Parakeet","francais":"Conure de Patagonie","deutch":"Felsensittich","italiano":"Conuro della Patagonia","rarity":1,"img":""},{"id":1294,"francais":"Émeu d'Australie","english":"Emu","latin":"Dromaius novaehollandiae","deutch":"Emu","rarity":1,"img":""},{"id":1299,"francais":"Euplecte monseigneur","latin":"Euplectes hordeaceus","rarity":1,"img":""},{"id":1303,"francais":"Euplecte ignicolore","latin":"Euplectes orix","rarity":1,"img":""},{"id":1306,"latin":"Geopelia cuneata","english":"Diamond Dove","francais":"Géopélie diamant","deutch":"Diamanttäubchen","italiano":"Tortora diamantina","rarity":1,"img":""},{"id":1307,"francais":"Mainate religieux","latin":"Gracula religiosa","rarity":1,"img":""},{"id":1310,"francais":"Pie-grièche à tête rousse (L.s.senator)","latin":"Lanius senator senator","rarity":1,"img":""},{"id":1317,"francais":"Conure nanday","latin":"Aratinga nenday","rarity":1,"img":""},{"id":1319,"francais":"Buse de Harris","english":"Harris's Hawk","latin":"Parabuteo unicinctus","deutch":"Wüstenbussard","rarity":1,"img":""},{"id":1320,"francais":"Flamant des Caraïbes","english":"American Flamingo","latin":"Phoenicopterus ruber","deutch":"Kubaflamingo","rarity":1,"img":""},{"id":1321,"latin":"Phylloscopus ibericus","english":"Iberian Chiffchaff","francais":"Pouillot ibérique","deutch":"Iberienzilpzalp","italiano":"Luì iberico","rarity":1,"img":"367735919"},{"id":1323,"francais":"Pic de Sharpe","latin":"Picus viridis sharpei","rarity":1,"img":""},{"id":1324,"latin":"Platycercus elegans","english":"Crimson Rosella","francais":"Perruche de Pennant","deutch":"Pennantsittich","italiano":"Rosella di Pennant","rarity":1,"img":""},{"id":1330,"latin":"Psephotus haematonotus","english":"Red-rumped Parrot","francais":"Perruche à croupion rouge","deutch":"Singsittich","italiano":"Parrocchetto groppone rosso","rarity":1,"img":""},{"id":1336,"francais":"Nandou d'Amérique","english":"Greater Rhea","latin":"Rhea americana","deutch":"Nandu","rarity":1,"img":""},{"id":1340,"francais":"Sicale bouton-d'or","latin":"Sicalis flaveola","rarity":1,"img":""},{"id":1342,"francais":"Fauvette ibérique (inornata)","english":"Western Subalpine Warbler","latin":"Sylvia inornata","deutch":"Iberien-Bartgrasmücke (Westl. Weißbart-Grasmücke)","rarity":1,"img":""},{"id":1343,"francais":"Fauvette de Moltoni (subalpina)","english":"Moltoni’s Warbler","latin":"Sylvia subalpina","deutch":"Ligurien-Bartgrasmücke (Moltonigrasmücke)","rarity":1,"img":""},{"id":1347,"francais":"Loriquet à tête bleue","latin":"Trichoglossus haematodus","rarity":1,"img":""},{"id":1348,"francais":"Cordonbleu à joues rouges","latin":"Uraeginthus bengalus","rarity":1,"img":""},{"id":1352,"latin":"Chrysolophus amherstiae","english":"Lady Amherst's Pheasant","francais":"Faisan de Lady Amherst","deutch":"Diamantfasan","italiano":"Fagiano di Lady Amherst","rarity":1,"img":""},{"id":1353,"francais":"Sterne inca","english":"Inca Tern","latin":"Larosterna inca","deutch":"Inkaseeschwalbe","rarity":1,"img":""},{"id":1355,"francais":"Gobemouche gris (M.s.tyrrhenica)","latin":"Muscicapa striata tyrrhenica","rarity":1,"img":""},{"id":1356,"francais":"Pouillot à pattes sombres","english":"Grey-legged Leaf-Warbler","latin":"Phylloscopus plumbeitarsus","deutch":"Middendorfflaubsänger","rarity":1,"img":""},{"id":1357,"francais":"Goéland brun (L.f.intermedius)","english":"Lesser Black-backed Gull (ssp. intermedius)","latin":"Larus fuscus intermedius","deutch":"Heringsmöwe (ssp. intermedius)","rarity":1,"img":""},{"id":1358,"francais":"Bécasse d'Amérique","latin":"Scolopax minor","rarity":1,"img":""},{"id":1360,"francais":"Goéland cantabrique","latin":"Larus michahellis lusitanius","rarity":1,"img":""},{"id":1362,"francais":"Bruant masqué","english":"Black-faced Bunting","latin":"Emberiza spodocephala","deutch":"Maskenammer","rarity":1,"img":""},{"id":1363,"francais":"Fauvette des Balkans (cantillans)","english":"Eastern Subalpine Warbler","latin":"Sylvia cantillans","deutch":"Balkan-Bartgrasmücke (Östl. Weißbart-Grasmücke)","rarity":1,"img":""},{"id":1364,"latin":"Aythya ferina x nyroca","english":"Common Pochard x Ferruginous Duck","francais":"Fuligule hybride milouin x nyroca","deutch":"Tafel-_x_Moorente","italiano":"Moriglione x Moretta tabaccata","rarity":0,"img":""},{"id":1365,"francais":"Océanite indéterminé","latin":"Hydrobatidae sp.","rarity":1,"img":""},{"id":1366,"francais":"Pouillot fitis (P.t.acredula )","latin":"Phylloscopus trochilus acredula","rarity":1,"img":""},{"id":1368,"francais":"Oie rieuse (A.a.albifrons)","latin":"Anser albifrons albifrons","rarity":1,"img":""},{"id":1369,"francais":"Oie cendrée (A.a.anser)","latin":"Anser anser anser","rarity":1,"img":""},{"id":1370,"francais":"Oie cendrée (A.a.rubrirostris)","latin":"Anser anser rubrirostris","rarity":1,"img":""},{"id":1371,"francais":"Bernache à ventre sombre","english":"Brant Goose (ssp. bernicla), Dark-bellied","latin":"Branta bernicla bernicla","deutch":"Ringelgans (ssp. bernicla), Dunkelbäuchige","rarity":1,"img":""},{"id":1373,"francais":"Pétrel géant","latin":"Macronectes giganteus","rarity":1,"img":""},{"id":1374,"francais":"Puffin de Macaronésie","latin":"Puffinus baroli","rarity":1,"img":""},{"id":1375,"francais":"Fou brun","english":"Brown Booby","latin":"Sula leucogaster","deutch":"Weißbauchtölpel","rarity":1,"img":""},{"id":1388,"francais":"Épervier à pieds courts","latin":"Accipiter brevipes","rarity":1,"img":""},{"id":1392,"francais":"Faucon concolore","latin":"Falco concolor","rarity":1,"img":""},{"id":1393,"francais":"Faucon pèlerin (F.p.calidus)","english":"Peregrine Falcon (F.p.calidus)","latin":"Falco peregrinus calidus","deutch":"Wanderfalke (ssp. calidus)","rarity":1,"img":""},{"id":1408,"francais":"Barge à queue noire (L.l.islandica)","english":"Black-tailed Godwit (ssp. islandica)","latin":"Limosa limosa islandica","deutch":"Uferschnepfe (ssp. islandica), Isländische","rarity":1,"img":""},{"id":1411,"francais":"Courlis cendré (N.a.orientalis)","latin":"Numenius arquata orientalis","rarity":1,"img":""},{"id":1416,"latin":"Larus fuscus heuglini","english":"Heuglin's Gull","francais":"Goéland de Sibérie","deutch":"Tundramöwe","italiano":"Zafferano (L.f.heuglini)","rarity":1,"img":"061018_P001_LBBGull"},{"id":1417,"francais":"Sterne fuligineuse","english":"Sooty Tern","latin":"Onychoprion fuscatus","deutch":"Rußseeschwalbe","rarity":1,"img":""},{"id":1424,"francais":"Effraie des clochers (T.a.alba)","latin":"Tyto alba alba","rarity":1,"img":""},{"id":1425,"francais":"Effraie des clochers (T.a.guttata)","latin":"Tyto alba guttata","rarity":1,"img":""},{"id":1431,"francais":"Pic à dos blanc (D.l.leucotos)","latin":"Dendrocopos leucotos leucotos","rarity":1,"img":""},{"id":1433,"francais":"Ammomane élégante","latin":"Ammomanes cinctura","rarity":1,"img":""},{"id":1435,"latin":"Melanocorypha bimaculata","english":"Bimaculated Lark","francais":"Alouette monticole","deutch":"Bergkalanderlerche","italiano":"Calandra asiatica","rarity":1,"img":"116042_P001_BimaculatedLark"},{"id":1440,"francais":"Accenteur montanelle","english":"Siberian Accentor","latin":"Prunella montanella","deutch":"Bergbraunelle","rarity":1,"img":""},{"id":1448,"francais":"Rougequeue noir (P.o.phoenicuroides)","english":"Black Redstart (ssp. phoenicuroides)","latin":"Phoenicurus ochruros phoenicuroides","deutch":"Hausrotschwanz (ssp. phoenicuroides)","rarity":1,"img":""},{"id":1450,"francais":"Rougequeue à front blanc (P.p.samamisicus)","latin":"Phoenicurus phoenicurus samamisicus","rarity":1,"img":""},{"id":1452,"francais":"Tarier de Sibérie (S.m.variegatus)","latin":"Saxicola maurus variegatus","rarity":1,"img":""},{"id":1453,"francais":"Traquet du Groenland","latin":"Oenanthe oenanthe leucorhoa","rarity":1,"img":""},{"id":1455,"francais":"Traquet oreillard (ssp. hispanica)","english":"Western Black-eared Wheatear","latin":"Oenanthe hispanica","deutch":"Maurensteinschmätzer","rarity":1,"img":""},{"id":1456,"francais":"Traquet oreillard (ssp. melanoleuca)","english":"Eastern Black-eared Wheatear","latin":"Oenanthe melanoleuca","deutch":"Balkansteinschmätzer","rarity":1,"img":""},{"id":1466,"francais":"Fauvette minule","latin":"Sylvia minula","rarity":1,"img":""},{"id":1468,"francais":"Fauvette du désert","english":"Asian Desert Warbler","latin":"Sylvia nana","deutch":"Wüstengrasmücke","rarity":1,"img":""},{"id":1474,"francais":"Gobemouche de la taïga","latin":"Ficedula albicilla","rarity":1,"img":""},{"id":1477,"latin":"Aegithalos caudatus caudatus","english":"White-headed Long-tailed Tit (A.c.caudatus)","francais":"Mésange à longue queue (A.c.caudatus)","deutch":"Schwanzmeise (A.c.caudatus)","italiano":"Codibugnolo (A.c.caudatus)","rarity":1,"img":"144001_P001_LongTailedTit"},{"id":1481,"francais":"Pie-grièche isabelle (ssp. isabellinus)","english":"Isabelline Shrike (ssp. isabellinus)","latin":"Lanius isabellinus isabellinus","deutch":"Isabellwürger (ssp. isabellinus)","rarity":1,"img":""},{"id":1482,"francais":"Pie-grièche isabelle (ssp. phoenicuroides)","english":"Isabelline Shrike (ssp. phoenicuroides), Turkestan","latin":"Lanius isabellinus phoenicuroides","deutch":"Isabellwürger (ssp. phoenicuroides), Rotschwanzwürger","rarity":1,"img":""},{"id":1483,"francais":"Pie-grièche grise (L.e.homeyeri)","english":"Great Grey Shrike (L.e.homeyeri)","latin":"Lanius excubitor homeyeri","deutch":"Raubwürger (ssp. homeyeri)","rarity":1,"img":""},{"id":1486,"francais":"Pie-grièche méridionale (L.m.pallidirostris)","english":"Steppe Grey Shrike (ssp. pallidirostris)","latin":"Lanius meridionalis pallidirostris","deutch":"Raubwürger (ssp. pallidirostris), Steppenraubwürger","rarity":1,"img":""},{"id":1491,"latin":"Passer domesticus x italiae","english":"Italian x House Sparrow","francais":"Moineau hybride (domestique x cisalpin)","deutch":"Italiensperling x Haussperling","italiano":"Passera italiae x domesticus (reg. sett. e Alpi)","rarity":0,"img":""},{"id":1492,"francais":"Moineau hybride (cisalpin x espagnol)","latin":"Passer italiae x hispaniolensis","rarity":1,"img":""},{"id":1496,"francais":"Bouvreuil trompetant","english":"Eurasian Bullfinch (ssp. pyrrhula)","latin":"Pyrrhula pyrrhula pyrrhula","deutch":"Gimpel (ssp. pyrrhula), Trompetergimpel","rarity":1,"img":""},{"id":1499,"latin":"Branta hutchinsii","english":"Cackling Goose","francais":"Bernache de Hutchins","deutch":"Zwergkanadagans","italiano":"Oca della tundra","rarity":1,"img":"-2106179129"},{"id":1500,"francais":"Oiseau indéterminé","latin":"Aves sp.","rarity":1,"img":""},{"id":1501,"latin":"Phylloscopus collybita ssp.","english":"Siberian-type Chiffchaff","francais":"Pouillot de type sibérien","deutch":"Zilpzalp sibirischer Typ","italiano":"Luì piccolo di tipo siberiano","rarity":1,"img":"367735919"},{"id":1502,"francais":"Cygne de Bewick ou chanteur","english":"Whooper_/_Bewick's Swan","latin":"Cygnus cygnus / bewickii","deutch":"Sing-_oder_Zwergschwan","rarity":1,"img":""},{"id":1503,"francais":"Milan hybride noir x royal","english":"Black_x_Red Kite (hybrid)","latin":"Milvus migrans x milvus","deutch":"Schwarz-_x_Rotmilan","rarity":1,"img":""},{"id":1504,"francais":"Grue du Canada","english":"Sandhill Crane","latin":"Grus canadensis","deutch":"Kanadakranich","rarity":1,"img":""},{"id":1505,"francais":"Canard huppé","english":"Crested Duck","latin":"Lophonetta specularioides","deutch":"Schopfente","rarity":1,"img":""},{"id":1506,"francais":"Grèbe esclavon ou à cou noir","english":"Horned / Black-necked Grebe","latin":"Podiceps auritus / nigricollis","deutch":"Ohren-_oder_Schwarzhalstaucher","rarity":1,"img":""},{"id":1507,"francais":"Pétrel gongon","latin":"Pterodroma feae","rarity":1,"img":""},{"id":1510,"francais":"Puffin majeur ou Calonectris ssp","latin":"Calonectris ssp / Puffinus gravis","rarity":1,"img":""},{"id":1511,"francais":"Cygne indéterminé","english":"Swan, unidentified","latin":"Cygnus sp.","deutch":"Schwan, unbestimmt","rarity":1,"img":""},{"id":1512,"francais":"Cormoran huppé de Méditerranée","latin":"Phalacrocorax aristotelis desmarestii","rarity":1,"img":""},{"id":1513,"francais":"Guifette indéterminée","english":"Chlidonias-Tern, unidentified","latin":"Chlidonias sp.","deutch":"Sumpfseeschwalbe, unbestimmt","rarity":1,"img":""},{"id":1514,"francais":"Pétrel géant subantarctique","latin":"Macronectes halli","rarity":1,"img":""},{"id":1515,"francais":"Pétrel de Madère","latin":"Pterodroma madeira","rarity":1,"img":""},{"id":1516,"francais":"Bécassine de Wilson","latin":"Gallinago delicata","rarity":1,"img":""},{"id":1517,"francais":"Fauvette naine","latin":"Sylvia nana","rarity":1,"img":""},{"id":1519,"francais":"Pouillot du Caucase","english":"Green Warbler","latin":"Phylloscopus nitidus","deutch":"Wacholderlaubsänger","rarity":1,"img":""},{"id":1520,"francais":"Bruant à gorge blanche","english":"White-throated Sparrow","latin":"Zonotrichia albicollis","deutch":"Weißkehlammer","rarity":1,"img":""},{"id":1521,"francais":"Bruant à sourcils jaunes","latin":"Emberiza chrysophrys","rarity":1,"img":""},{"id":1522,"francais":"Fauvette babillarde (S.c.blythi)","latin":"Sylvia curruca blythi","rarity":1,"img":""},{"id":1525,"francais":"Sizerin flammé (C.f.rostrata)","latin":"Carduelis flammea rostrata","rarity":1,"img":""},{"id":1526,"francais":"Roselin de Lichtenstein","latin":"Rhodospiza obsoleta","rarity":1,"img":""},{"id":1527,"francais":"Pétrel de Madère ou gongon","latin":"Pterodroma madeira / feae","rarity":1,"img":""},{"id":1528,"francais":"Albatros indéterminé","english":"Albatross, unidentified","latin":"Diomedeidae sp.","deutch":"Albatros, unbestimmt","rarity":1,"img":""},{"id":1529,"francais":"Frégate indéterminée","latin":"Fregata sp.","rarity":1,"img":""},{"id":1530,"francais":"Gravelot mongol ou de Leschenault","latin":"Charadrius mongolus / leschenaultii","rarity":1,"img":""},{"id":1533,"francais":"Hypolaïs obscure ou pâle","latin":"Iduna opaca / pallida","rarity":1,"img":""},{"id":1534,"francais":"Hypolaïs bottée ou rama","latin":"Iduna caligata / rama","rarity":1,"img":""},{"id":1536,"francais":"Pélican, indéterminé","english":"Pelican, unidentified","latin":"Pelecanus sp.","deutch":"Pelikan, unbestimmt","rarity":1,"img":""},{"id":1537,"latin":"Aquila pomarina / clanga","english":"Lesser / Greater Spotted Eagle","francais":"Aigle pomarin ou criard","deutch":"Schelladler / Schreiadler","italiano":"Aquila anatraia maggiore / Aquila anatraia minore","rarity":1,"img":""},{"id":1540,"francais":"Pluvier fauve ou bronzé","english":"American / Pacific Golden Plover","latin":"Pluvialis fulva / dominica","deutch":"Prärie- / Tundra-Goldregenpfeifer (Amerikanischer / Pazifischer)","rarity":1,"img":""},{"id":1541,"francais":"Sterne 'à bec orange'","latin":"Sterna elegans/bengalensis/elegans x bengalensis","rarity":1,"img":""},{"id":1542,"francais":"Aigle hybride pomarin x criard","english":"Lesser x Greater Spotted Eagle","latin":"Aquila pomarina x clanga","deutch":"Schrei-_x_Schelladler","rarity":1,"img":""},{"id":1543,"francais":"Grive hybride de Naumann x à ailes rousses","latin":"Turdus naumanni x Turdus eunomus","rarity":1,"img":""},{"id":1544,"francais":"Grive hybride à gorge noire x à gorge rousse","latin":"Turdus atrogularis x Turdus ruficollis","rarity":1,"img":""},{"id":1545,"francais":"Mésange de Pleske","latin":"Cyanistes caeruleus x cyanus","rarity":1,"img":""},{"id":1546,"francais":"Étourneau unicolore ou sansonnet","latin":"Sturnus unicolor / vulgaris","rarity":1,"img":""},{"id":1547,"latin":"Melospiza melodia","english":"Song Sparrow","francais":"Bruant chanteur","deutch":"Singammer","italiano":"Passero cantore","rarity":1,"img":""},{"id":1548,"francais":"Bruant des roseaux (E.s.witherbyi)","latin":"Emberiza schoeniclus witherbyi","rarity":1,"img":""},{"id":1549,"latin":"Lanius senator x collurio","english":"Woodchat x Red-backed Shrike","francais":"Pie-grièche hybride (L.senator x collurio)","deutch":"Rotkopfwürger x Neuntöter","italiano":"Averla capirossa x piccola","rarity":0,"img":""},{"id":1550,"francais":"Paruline à flancs marron","latin":"Setophaga pensylvanica","rarity":1,"img":""},{"id":1551,"francais":"Fou à pieds rouges","latin":"Sula sula","rarity":1,"img":""},{"id":1553,"francais":"Canard colvert x pilet","english":"Mallard_x_Northern Pintail","latin":"Anas platyrhynchos x acuta","deutch":"Stock-_x_Spießente","rarity":1,"img":""},{"id":1555,"francais":"Fuligule hybride milouin x morillon","english":"Common Pochard_x_Tufted Duck (hybrid)","latin":"Aythya ferina x fuligula","deutch":"Tafel-_x_Reiherente","rarity":1,"img":""},{"id":1556,"francais":"Hybride Fuligule milouin x Nette rousse","english":"Common_x_Red-crested Pochard","latin":"Netta rufina x Aythya ferina","deutch":"Kolben-_x_Tafelente","rarity":1,"img":""},{"id":1557,"latin":"Aythya fuligula x nyroca","english":"Tufted x Ferruginous Duck","francais":"Fuligule hybride morillon x nyroca","deutch":"Reiherente x Moorente","italiano":"Moretta x Moretta tabaccata","rarity":0,"img":""},{"id":1558,"francais":"Fuligule hybride morillon x milouinan","english":"Tufted Duck_x_Greater Scaup","latin":"Aythya fuligula x marila","deutch":"Reiher-_x_Bergente","rarity":1,"img":""},{"id":1559,"francais":"Ibis de la Puna","latin":"Plegadis ridgwayi","rarity":1,"img":""},{"id":1560,"francais":"Oie cendrée x Bernache du canada","english":"Greylag_x_Canada Goose (hybrid)","latin":"Anser anser x Branta canadensis","deutch":"Grau-_x_Kanadagans","rarity":1,"img":""},{"id":1563,"francais":"Paon bleu","english":"Indian Peafowl","latin":"Pavo cristatus","deutch":"Pfau","rarity":1,"img":""},{"id":1566,"francais":"Faisan versicolore","latin":"Phasianus versicolor","rarity":1,"img":""},{"id":1567,"latin":"Numida meleagris","english":"Helmeted Guineafowl","francais":"Pintade de Numidie","deutch":"Helmperlhuhn","italiano":"Faraona","rarity":1,"img":""},{"id":1574,"francais":"Vanneau armé","latin":"Vanellus armatus","rarity":1,"img":""},{"id":1582,"latin":"Corvus albus","english":"Pied Crow","francais":"Corbeau pie","deutch":"Schildrabe","italiano":"Corvo bianconero","rarity":1,"img":""},{"id":1591,"francais":"Plongeon catmarin ou arctique","english":"Red-throated / Black-throated Diver","latin":"Gavia stellata / arctica","deutch":"Stern-_oder_Prachttaucher","rarity":1,"img":""},{"id":1593,"francais":"Dendrocygne indéterminé","english":"Whistling Duck, unidentified","latin":"Dendrocygna sp.","deutch":"Pfeifgans, unbestimmt","rarity":1,"img":""},{"id":1594,"francais":"Cygne siffleur","english":"Whistling Swan","latin":"Cygnus columbianus colombianus","deutch":"Pfeifschwan","rarity":1,"img":""},{"id":1595,"francais":"Oie cygnoïde domestique","english":"Swan Goose (domestic form)","latin":"Anser cygnoides f. domestica","deutch":"Höckergans","rarity":1,"img":""},{"id":1596,"francais":"Oie indéterminée (Anser/Branta)","english":"Goose (Anser / Branta), unidentified","latin":"Anser / Branta sp.","deutch":"Gans (Anser / Branta), unbestimmt","rarity":1,"img":""},{"id":1597,"francais":"Oie rieuse ou des moissons","english":"Greater White-fronted / Bean Goose","latin":"Anser albifrons / fabalis","deutch":"Bläss-_oder_Saatgans","rarity":1,"img":""},{"id":1598,"francais":"Oie de Ross","english":"Ross's Goose","latin":"Anser rossii","deutch":"Zwergschneegans","rarity":1,"img":""},{"id":1599,"latin":"Anas crecca / querquedula","english":"Eurasian Teal / Garganey","francais":"Sarcelle d'hiver / d'été","deutch":"Krickente / Knäkente","italiano":"Alzavola / Marzaiola","rarity":0,"img":""},{"id":1600,"francais":"Canard colvert (bâtard)","english":"Domestic Duck (Bastard)","latin":"Anas platyrhynchos (Bastard)","deutch":"Stockente, Bastard, fehlfarben","rarity":1,"img":""},{"id":1601,"francais":"Morillon à tête rouge","english":"Redhead","latin":"Aythya americana","deutch":"Rotkopfente","rarity":1,"img":""},{"id":1602,"francais":"Fuligule morillon ou milouinan","english":"Tufted Duck / Greater Scaup","latin":"Aythya fuligula / marila","deutch":"Reiher-_oder_Bergente","rarity":1,"img":""},{"id":1603,"francais":"Macreuse noire ou brune","english":"Common / Velvet Scoter","latin":"Melanitta nigra / fusca","deutch":"Trauer-_oder_Samtente","rarity":1,"img":""},{"id":1604,"francais":"Harle huppé ou bièvre","english":"Red-breasted Merganser / Goosander","latin":"Mergus serrator / merganser","deutch":"Mittel-_oder_Gänsesäger","rarity":1,"img":""},{"id":1605,"francais":"Glaréole indéterminée","english":"Pratincole, unidentified","latin":"Glareola sp.","deutch":"Brachschwalbe, unbestimmt","rarity":1,"img":""},{"id":1607,"francais":"Bécassin indéterminé","english":"Dowitcher, unidentified","latin":"Limnodromus sp.","deutch":"Schlammläufer, unbestimmt","rarity":1,"img":""},{"id":1608,"francais":"Mouette rieuse / Goéland cendré","english":"Black-headed / Common Gull","latin":"Larus ridibundus / canus","deutch":"Lachmöwe_oder_Sturmmöwe","rarity":1,"img":""},{"id":1609,"francais":"Goéland pontique ou leucophée","english":"Yellow-legged / Caspian Gull","latin":"Larus cachinnans / michahellis","deutch":"Mittelmeer-_oder_Steppenmöwe (Weißkopfmöwe)","rarity":1,"img":""},{"id":1613,"francais":"Tourterelle triste","english":"Mourning Dove","latin":"Zenaida macroura","deutch":"Carolinataube","rarity":1,"img":""},{"id":1615,"francais":"Cincle plongeur (C.c.cinclus)","english":"White-throated Dipper (ssp. cinclus)","latin":"Cinclus cinclus cinclus","deutch":"Wasseramsel (ssp. cinclus)","rarity":1,"img":""},{"id":1618,"francais":"Merle pâle","english":"Pale Thrush","latin":"Turdus pallidus","deutch":"Fahldrossel","rarity":1,"img":""},{"id":1619,"francais":"Grive mauvis (ssp. coburni)","english":"Redwing (ssp. coburni)","latin":"Turdus iliacus coburni","deutch":"Rotdrossel (ssp. coburni)","rarity":1,"img":""},{"id":1620,"francais":"Merle d'Amérique","english":"American Robin","latin":"Turdus migratorius","deutch":"Wanderdrossel","rarity":1,"img":""},{"id":1621,"francais":"Pouillot de Temminck","english":"Eastern Crowned Warbler","latin":"Phylloscopus coronatus","deutch":"Kronenlaubsänger","rarity":1,"img":""},{"id":1624,"francais":"Bruant à cou gris","english":"Grey-necked Bunting","latin":"Emberiza buchanani","deutch":"Steinortolan","rarity":1,"img":""},{"id":1626,"francais":"Cygne hybride indéterminé","english":"Swan hybrid, unidentified (hybrid)","latin":"Cygnus sp. x Cygnus sp.","deutch":"Schwanen-Hybrid, unbestimmt","rarity":1,"img":""},{"id":1627,"francais":"Bernache hybride Canada x nonnette","english":"Canada x Barnacle Goose (hybrid)","latin":"Branta canadensis x leucopsis","deutch":"Kanada-_x_Weißwangengans","rarity":1,"img":""},{"id":1628,"francais":"Bernache du Canada x ?","english":"Canada Goose x ? (hybrid)","latin":"Branta canadensis x ?","deutch":"Kanadagans-Hybrid, unbestimmt","rarity":1,"img":""},{"id":1629,"francais":"Bernache nonnette x ?","english":"Barnacle Goose x ? (hybrid)","latin":"Branta leucopsis x ?","deutch":"Weißwangengans-Hybrid, unbestimmt","rarity":1,"img":""},{"id":1630,"francais":"Oie hybride","english":"Goose hybrid, unidentified","latin":"Anser / Branta hybrid","deutch":"Gänsehybrid, unbestimmt","rarity":1,"img":""},{"id":1631,"francais":"Oie cendrée x ?","english":"Greylag Goose x ? (hybrid)","latin":"Anser anser x ?","deutch":"Graugans-Hybrid, unbestimmt","rarity":1,"img":""},{"id":1632,"francais":"Anas indéterminé x Anas indéterminé","english":"Anas hybrid, unidentified","latin":"Anas sp. x Anas sp.","deutch":"Gründelenten-Hybrid, unbestimmt","rarity":1,"img":""},{"id":1633,"francais":"Canard plongeur indét. x Canard plongeur indét.","english":"Aythya hybrid, unidentified","latin":"Aythya sp. x Aythya sp.","deutch":"Tauchenten-Hybrid, unbestimmt","rarity":1,"img":""},{"id":1634,"francais":"Canard indéterminé x Canard indéterminé","english":"Duck hybrid, unidentified","latin":"Anatinae hybridus sp.","deutch":"Enten-Hybrid, unbestimmt","rarity":1,"img":""},{"id":1635,"latin":"Tetrao tetrix x urogallus","english":"Black Grouse x Capercaillie","francais":"Tétras lyre x Grand Tétras","deutch":"Birk- x Auerhuhn (Rackelhuhn) (Hybrid)","italiano":"Fagiano di monte x Gallo cedrone","rarity":0,"img":""},{"id":1639,"francais":"Grimpereau indéterminé","english":"Treecreeper, unidentified","latin":"Certhia sp.","deutch":"Baumläufer, unbestimmt","rarity":1,"img":""},{"id":1641,"francais":"Moineau hybride (domestique x friquet)","english":"House_x_Eurasian Tree Sparrow","latin":"Passer domesticus x montanus","deutch":"Haus-_x_Feldsperling","rarity":1,"img":""},{"id":1643,"francais":"Perdrix indéterminée","latin":"Perdix / Alectoris sp.","rarity":1,"img":""},{"id":1644,"francais":"Pic indéterminé","latin":"Picidae sp.","rarity":1,"img":""},{"id":1645,"francais":"Rousserolle indéterminée","latin":"Acrocephalus sp.","rarity":1,"img":""},{"id":1646,"francais":"Sarcelle indéterminée","latin":"Anas sp.","rarity":1,"img":""},{"id":1647,"francais":"Tadorne indéterminé","latin":"Tadorna sp.","rarity":1,"img":""},{"id":1648,"latin":"Exotic aves","english":"Exotic bird","francais":"Oiseau exotique","deutch":"Exotische Vögel","italiano":"Uccello esotico","rarity":1,"img":""},{"id":1706,"francais":"Sizerin boréal (C.f.flammea)","english":"Mealy Redpoll","latin":"Carduelis flammea flammea","deutch":"Birkenzeisig (ssp. flammea), Taigabirkenzeisig","rarity":1,"img":""},{"id":1707,"francais":"Bécasseau à longs doigts","english":"Long-toed Stint","latin":"Calidris subminuta","deutch":"Langzehen-Strandläufer","rarity":1,"img":""},{"id":2000,"francais":"Espèce non listée","english":"Species not in the list","latin":"Species ignota","deutch":"Art nicht in der Liste","rarity":1,"img":""},{"id":11077,"francais":"Coscoroba blanc","english":"Coscoroba Swan","latin":"Coscoroba coscoroba","deutch":"Coscorobaschwan","rarity":1,"img":""},{"id":11078,"francais":"Ouette des Andes","english":"Andean Goose","latin":"Chloephaga melanoptera","deutch":"Andengans","rarity":1,"img":""},{"id":11082,"francais":"Ouette à tête rousse","english":"Ruddy-headed Goose","latin":"Chloephaga rubidiceps","deutch":"Rotkopfgans","rarity":1,"img":""},{"id":11083,"latin":"Neochen jubata","english":"Orinoco Goose","francais":"Ouette de l'Orénoque","deutch":"Orinokogans","italiano":"Oca dell'Orinoco","rarity":1,"img":""},{"id":11107,"francais":"Sarcelle de la puna","latin":"Anas puna","rarity":1,"img":""},{"id":11321,"francais":"Gravelot semipalmé","latin":"Charadrius semipalmatus","rarity":1,"img":""},{"id":11322,"latin":"Parus montanus rhenanus / salicarius","english":"Willow Tit","francais":"Mésange des saules","deutch":"Weidenmeise","italiano":"Cincia dei salici","rarity":0,"img":"146004_P001_WillowTit"},{"id":11323,"latin":"Parus montanus montanus","english":"Alpine Willow Tit","francais":"Mésange alpestre","deutch":"Alpenmeise","italiano":"Cincia alpestre","rarity":0,"img":"146004_P001_WillowTit"},{"id":11547,"francais":"Albatros à nez jaune","latin":"Diomedea chlororhynchos","rarity":1,"img":""},{"id":11714,"latin":"Coryphospingus cucullatus","english":"Red-crested Finch","francais":"Araguira rougeâtre","deutch":"Haubenkronfink","italiano":"Fringuello crestarossa","rarity":1,"img":""},{"id":11783,"latin":"Carduelis magellanica","english":"Hooded Siskin","francais":"Chardonneret de Magellan","deutch":"Magellanzeisig","italiano":"Lucherino testanera","rarity":1,"img":""},{"id":12444,"francais":"Paruline masquée","latin":"Geothlypis trichas","rarity":1,"img":""},{"id":12741,"francais":"Conure soleil","latin":"Aratinga solstitialis","rarity":1,"img":""},{"id":12755,"latin":"Pyrrhura molinae","english":"Green-cheeked Parakeet","francais":"Conure de Molina","deutch":"Molinasittich","italiano":"Parrocchetto guanceverdi","rarity":1,"img":""},{"id":13090,"latin":"Pulsatrix perspicillata","english":"Spectacled Owl","francais":"Chouette à lunettes","deutch":"Brillenkauz","italiano":"Gufo dagli occhiali","rarity":1,"img":""},{"id":13586,"francais":"Ibis blanc","latin":"Eudocimus albus","rarity":1,"img":""},{"id":15148,"francais":"Roselin familier","english":"House Finch","latin":"Carpodacus mexicanus","deutch":"Hausgimpel","rarity":1,"img":""},{"id":15149,"francais":"Aigrette hybride garzette x des récifs","latin":"Egretta garzetta x gularis","rarity":1,"img":""},{"id":15203,"francais":"Colombidé indéterminé","latin":"Columbidae sp.","rarity":1,"img":""},{"id":15204,"latin":"Psittacidae sp.","english":"Psittacidae sp.","francais":"Psittacidé indéterminé","deutch":"Psittacidae sp.","italiano":"Psittacidae sp.","rarity":1,"img":""},{"id":15210,"francais":"Paruline jaune","latin":"Setophaga aestiva","rarity":1,"img":""},{"id":15213,"francais":"Fuligule indéterminé","latin":"Aythya sp.","rarity":1,"img":""},{"id":15216,"francais":"Fuligule hybride indéterminé","latin":"Aythya sp x Aythya sp.","rarity":1,"img":""},{"id":15217,"francais":"Céréopse cendré","english":"Cape Barren Goose","latin":"Cereopsis novaehollandiae","deutch":"Hühnergans","rarity":1,"img":""},{"id":15219,"francais":"Hirondelle rustique x de fenêtre","english":"Barn Swallow x House Martin","latin":"Hirundo rustica X Delichon urbicum","deutch":"Rauch-_x_Mehlschwalbe","rarity":1,"img":""},{"id":15221,"francais":"Lagopède alpin (L.m.pyrenaica)","latin":"Lagopus muta pyrenaica","rarity":1,"img":""},{"id":15225,"francais":"Moineau domestique ou cisalpin","latin":"Passer domesticus / italiae","rarity":1,"img":""},{"id":15226,"francais":"Perdrix grise des Pyrénées","latin":"Perdix perdix hispaniensis","rarity":1,"img":""},{"id":15227,"francais":"Pie-grièche grise / méridionale","latin":"Lanius excubitor / meridionalis","rarity":1,"img":""},{"id":15230,"latin":"Anas aucklandica","english":"Brown Teal","francais":"Sarcelle brune","deutch":"Aucklandente","italiano":"Anatra della Nuova Zelanda","rarity":1,"img":""},{"id":15232,"latin":"Aythya novaeseelandiae","english":"New Zealand Scaup","francais":"Fuligule de Nouvelle-Zélande","deutch":"Maoriente","italiano":"Moretta della Nuova Zelanda","rarity":1,"img":""},{"id":15238,"francais":"Grosbec masqué","english":"Japanese Grosbeak","latin":"Eophona personata","deutch":"Maskenkernbeisser","rarity":1,"img":""},{"id":15240,"latin":"Motacilla flava flavissima / lutea","english":"Western Yellow Wagtail (M.f. flavissima / lutea)","francais":"Bergeronnette printanière (M.f.flavissima / lutea)","deutch":"Schafstelze (M.f.flavissima / lutea)","italiano":"Cutrettola (M.f.flavissima / lutea)","rarity":0,"img":"118002_P002_YellowWagtail"},{"id":15241,"latin":"Pycnonotus leucotis","english":"White-eared Bulbul","francais":"Bulbul à oreillons blancs","deutch":"Weissohrbülbül","italiano":"Bulbul orecchie bianche","rarity":1,"img":""},{"id":15242,"latin":"Paradoxornis webbianus","english":"Vinous-throated Parrotbill","francais":"Paradoxornis de Webb","deutch":"Braunkopf-Papageimeise","italiano":"Panuro di Webb","rarity":1,"img":""},{"id":15243,"francais":"Cochevis huppé / de Thékla","latin":"Galerida cristata / theklae","rarity":1,"img":""},{"id":15244,"francais":"Sizerin indéterminé","latin":"Carduelis flammea / hornemanni / cabaret","rarity":1,"img":""},{"id":15245,"francais":"Rougequeue noir x à front blanc","english":"Black x Common Redstart (hybrid)","latin":"Phoenicurus ochruros x phoenicurus","deutch":"Haus-_x_Gartenrotschwanz","rarity":1,"img":""},{"id":15246,"francais":"Courlis nain","english":"Little Curlew","latin":"Numenius minutus","deutch":"Zwergbrachvogel","rarity":1,"img":""},{"id":15247,"francais":"Hibou moyen-duc / des marais","english":"Long-eared / Short-eared Owl","latin":"Asio otus / flammeus","deutch":"Wald-_oder_Sumpfohreule","rarity":1,"img":""},{"id":15248,"francais":"Busard pâle / cendré","english":"Pallid / Montagu's Harrier","latin":"Circus macrourus / pygargus","deutch":"Steppen-_oder_Wiesenweihe","rarity":1,"img":""},{"id":15249,"francais":"Grue royale","english":"Grey-Crowned Crane","latin":"Balearica regulorum","deutch":"Südafrikanischer Kronenkranich","rarity":1,"img":""},{"id":15250,"francais":"Grue du Japon","english":"Red-crowned Crane","latin":"Grus japonensis","deutch":"Mandschurenkranich","rarity":1,"img":""},{"id":15252,"francais":"Oie néné","english":"Nene","latin":"Branta sandvicensis","deutch":"Hawaiigans","rarity":1,"img":""},{"id":15253,"francais":"Oie de Gambie","english":"Spur-winged Goose","latin":"Plectropterus gambensis","deutch":"Sporngans","rarity":1,"img":""},{"id":15254,"francais":"Fuligule hybride à bec cerclé x morillon","english":"Ring-necked Duck x Tufted Duck (hybrid)","latin":"Aythya collaris x fuligula","deutch":"Ringschnabel-_x_Reiherente","rarity":1,"img":""},{"id":15258,"francais":"Guêpier écarlate","english":"Northern Carmine Bee-eater","latin":"Merops nubicus","deutch":"Scharlachspint","rarity":1,"img":""},{"id":15259,"francais":"Vacher à tête brune","english":"Brown-headed Cowbird","latin":"Molothrus ater","deutch":"Braunkopf-Kuhstärling","rarity":1,"img":""},{"id":15260,"francais":"Pouillot véloce / ibérique","latin":"Phylloscopus collybita / ibericus","rarity":1,"img":""},{"id":15267,"francais":"Mouette mélanocéphale x rieuse","english":"Mediterranean x Black-headed Gull","latin":"Larus melanocephalus x ridibundus","deutch":"Schwarzkopf-_x_Lachmöwe","rarity":1,"img":""},{"id":15268,"francais":"Goéland hybride leucophée x marin","english":"Yellow-legged x Greater Black-backed Gull","latin":"Larus michahellis x Larus marinus","deutch":"Mittelmeer-_x_Mantelmöwe","rarity":1,"img":""},{"id":15269,"francais":"Océanite tempête / culblanc","english":"European / Leach's Storm Petrel","latin":"Hydrobates pelagicus / Oceanodroma leucorhoa","deutch":"Sturmschwalbe_oder_Wellenläufer","rarity":1,"img":""},{"id":15386,"latin":"Anas luzonica","english":"Philippine Duck","francais":"Canard des Philippines","deutch":"Philippinenente","italiano":"Anatra delle Filippine","rarity":1,"img":""},{"id":15387,"francais":"Canard hybride chipeau x colvert","english":"Gadwall x Mallard (hybrid)","latin":"Anas strepera x platyrhynchos","deutch":"Schnatter-_x_Stockente","rarity":1,"img":""},{"id":19483,"francais":"Pie-grièche indéterminée","latin":"Lanius sp.","rarity":1,"img":""},{"id":19489,"francais":"Tadorne casarca x de Belon","english":"Ruddy x Common Shelduck","latin":"Tadorna ferruginea x tadorna","deutch":"Rost- x Brandgans","rarity":1,"img":""},{"id":19494,"francais":"Martinet de Sibérie","english":"Fork-tailed Swift","latin":"Apus pacificus","deutch":"Pazifiksegler","rarity":1,"img":""},{"id":19495,"francais":"Inséparable de Fischer x masqué","latin":"Agapornis fischeri x personatus","rarity":1,"img":""},{"id":19496,"francais":"Glaréole orientale","latin":"Glareola maldivarum","rarity":1,"img":""},{"id":19517,"francais":"Verdier de l'Himalaya","latin":"Carduelis spinoides","rarity":1,"img":""},{"id":19591,"francais":"Goéland hybride sp.","latin":"Larus hybrid sp.","rarity":1,"img":""},{"id":19592,"francais":"Goéland hybride brun x leucophée","latin":"Larus fuscus x Larus michahellis","rarity":1,"img":""},{"id":19593,"francais":"Goéland hybride argenté x bourgmestre","latin":"Larus argentatus x Larus hyperboreus","rarity":1,"img":""},{"id":19594,"francais":"Goéland hybride argenté x brun","latin":"Larus argentatus x Larus fuscus","rarity":1,"img":""},{"id":19595,"francais":"Goéland hybride argenté x leucophée","latin":"Larus argentatus x Larus michahellis","rarity":1,"img":""},{"id":19596,"francais":"Goéland hybride argenté x pontique","latin":"Larus argentatus x Larus cachinnans","rarity":1,"img":""},{"id":19599,"francais":"Gorgebleue à miroir blanc / de Nantes","latin":"Luscinia svecica cyanecula / namnetum","rarity":1,"img":""},{"id":24840,"francais":"Grue caronculée","latin":"Bugeranus carunculata","rarity":1,"img":""},{"id":24841,"francais":"Perruche à ventre orange","latin":"Neophema chrysogaster","rarity":1,"img":""},{"id":24844,"francais":"Pic vert / de Sharpe","latin":"Picus viridis viridis / sharpei","rarity":1,"img":""},{"id":24850,"latin":"Pelecanus onocrotalus x crispus","english":"Great White x Dalmatian Pelican","francais":"Pélican hybride blanc x frisé","deutch":"Rosa- x Krauskopfpelikan","italiano":"Pellicano comune x riccio","rarity":1,"img":""},{"id":32045,"francais":"Oie de la toundra","latin":"Anser serrirostris","rarity":1,"img":""},{"id":32295,"latin":"Gavia pacifica","english":"Pacific Loon","francais":"Plongeon du Pacifique","deutch":"Pazifiktaucher","italiano":"Strolaga del Pacifico","rarity":1,"img":""},{"id":32336,"francais":"Puffin de Scopoli","latin":"Calonectris diomedea","rarity":1,"img":""},{"id":32610,"francais":"Pygargue à tête blanche","latin":"Haliaeetus leucocephalus","rarity":1,"img":""},{"id":32847,"francais":"Jacana à poitrine dorée","english":"African Jacana","latin":"Actophilornis africanus","deutch":"Blaustirn-Blatthühnchen","rarity":1,"img":""},{"id":32913,"francais":"Goéland de la Véga","latin":"Larus vegae","rarity":1,"img":""},{"id":33226,"francais":"Touraco vert","latin":"Tauraco persa","rarity":1,"img":""},{"id":33241,"latin":"Musophaga violacea","english":"Violet Turaco","francais":"Touraco violet","deutch":"Schildturako","italiano":"Turaco violetto","rarity":1,"img":""},{"id":33872,"francais":"Martin-chasseur géant","latin":"Dacelo novaeguineae","rarity":1,"img":""},{"id":34435,"francais":"Perruche de Sparrman","latin":"Cyanoramphus novaezelandiae","rarity":1,"img":""},{"id":34453,"francais":"Perruche splendide","latin":"Neophema splendida","rarity":1,"img":""},{"id":34484,"francais":"Perruche érythroptère","latin":"Aprosmictus erythropterus","rarity":1,"img":""},{"id":34485,"francais":"Perruche de Barraband","latin":"Polytelis swainsonii","rarity":1,"img":""},{"id":36921,"francais":"Fauvette de l'Atlas","latin":"Sylvia deserticola","rarity":1,"img":""},{"id":37186,"francais":"Moqueur polyglotte","latin":"Mimus polyglottos","rarity":1,"img":""},{"id":37701,"francais":"Traquet kurde","latin":"Oenanthe xanthoprymna","rarity":1,"img":""},{"id":38170,"francais":"Veuve royale","latin":"Vidua regia","rarity":1,"img":""},{"id":38469,"francais":"Quiscale bronzé","latin":"Quiscalus quiscula","rarity":1,"img":""},{"id":38600,"francais":"Sporophile petit-chanteur","latin":"Tiaris canorus","rarity":1,"img":""},{"id":38657,"francais":"Pic hybride cendré x vert","english":"Grey-headed x Green Woodpecker","latin":"Picus canus x viridis","deutch":"Grau_x_Grünspecht","rarity":1,"img":""},{"id":38658,"francais":"Gobemouche gris (M.s.balearica)","latin":"Muscicapa striata balearica","rarity":1,"img":""},{"id":38659,"francais":"Gobemouche gris (M.s.tyrrhenica / balearica)","latin":"Muscicapa striata tyrrhenica / balearica","rarity":1,"img":""},{"id":38736,"francais":"Inséparable indéterminé","latin":"Agapornis sp.","rarity":1,"img":""},{"id":38796,"francais":"Oie cendrée férale","latin":"Anser anser f. domestica","rarity":1,"img":""},{"id":38983,"francais":"Perdrix rochassière","latin":"Alectoris graeca x rufa","rarity":1,"img":""},{"id":47585,"francais":"Fuligule hybride milouin x milouinan","latin":"Aythya ferina x marila","rarity":1,"img":""}]
ListOfBirdLA = {};
ListOfBird.forEach(function(i,id){
	ListOfBirdLA[i.latin] = id;
})


//jQuery.getJSON("https://zoziologie.raphaelnussbaumer.com/wp-content/plugins/improvedBiolovisionVisualisation/ListOfBird.min.json", function(data) {});




function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}
function unique(arr) {
	var hash = {}, result = [];
	for ( var i = 0, l = arr.length; i < l; ++i ) {
        if ( !hash.hasOwnProperty(arr[i]) ) { //it works with objects! in FF, at least
        	hash[ arr[i] ] = true;
        	result.push(arr[i]);
        }
    }
    return result;
}

function TurnPage(newPage) {
	jQuery('ul[role="tablist"] li').each(function(it,li){
		jQuery(li).removeClass('active')
	})
	jQuery('#li-'+newPage).addClass('active')

	jQuery('.sidebar-content .sidebar-pane').each(function(it,div){
		jQuery(div).removeClass('active')
	})
	jQuery('#'+newPage).addClass('active')
}

function intiateMap(){
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
	if ('search' in query_string) {
		search = JSON.parse(query_string['search']);
	}
	if ('links' in query_string) {
		JSON.parse(decodeURIComponent(query_string['links'])).map(function(link){return link.replace('http:','https:')}).forEach(function(uri){
			TurnPage('searchs')
			filename = "https://zoziologie.raphaelnussbaumer.com/iBV-js?type=kml&link=" + encodeURIComponent(uri);
			kml(filename)
		})
	} else if (!me){
		TurnPage('searchs')
		//uri = 'http://www.ornitho.ch/index.php?m_id=97&p_c=1&p_cc=-1&sp_tg=1&sp_DateSynth=18.10.2016&sp_DChoice=offset&sp_DOffset=4&sp_SChoice=category&sp_Cat[never]=1&sp_Cat[veryrare]=1&sp_Cat[rare]=1&sp_PChoice=all&backlink=skip&sp_FChoice=export&sp_FExportFormat=KML&langu=en';
		//filename = "https://zoziologie.raphaelnussbaumer.com/iBV-js?type=kml&link=" + encodeURIComponent(uri);
		//kml('https://zoziologie.raphaelnussbaumer.com/wp-content/plugins/improvedBiolovisionVisualisation/auto-download-rare.kml');
	} 
}



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



var RSS = function() {
	//NOT WORKING!
	var uri = 'https://www.ornitho.ch/feedrss.php?l=en';
	jQuery.get(uri, function(data) {
		console.log(data)
	})
	jQuery.ajax({
		type: "GET",
		url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(uri),
		dataType: 'json',
		error: function() {
			alert('Unable to load feed, Incorrect path or invalid feed');
		},
		success: function(xml) {
			values = xml.responseData.feed.entries;
			console.log(values);
		}
	})
}


function kml(link, bird_list_mine = 0) {

	jQuery(".overlay").removeClass("hidden");

	link2layer(link,function(layer){
		
		if ( !(bird_list_mine == 0) ){
			bird_list_mine_sp = bird_list_mine.map(function(bl){return bl[2]});
			layer.eachLayer(function(obs){
				if (bird_list_mine_sp.indexOf(obs.feature.properties.specie)>=0){
					obs.removeFrom(layer)
				}
			})

			if (layer.getLayers().length == 0){
				jQuery(".overlay").addClass("hidden");
				return;
			}
		}

		addList(layer)


		var layer_d = L.markerClusterGroup({
			showCoverageOnHover: false,
			maxClusterRadius: 50,
			spiderfyDistanceMultiplier: 2,
			iconCreateFunction: function(cluster) {

				var sp = cluster.getAllChildMarkers().map(function(obs){return parseInt(obs.feature.properties.specie_idx)});
				var unique_sp = unique(sp);
				var counts = cluster.getAllChildMarkers().map(function(obs){return obs.feature.properties.count=='x' ? '' : parseInt(obs.feature.properties.count)});
				var max = Math.max(...counts); //counts.reduce(function(nv,v){return nv<v ? v : nv});
				var min = Math.min(...counts); //var min = counts.reduce(function(nv,v){return nv>v ? v : nv});
				var count = min == max ? max.toString() : min.toString()+'-'+max.toString();

				if (unique_sp.length == 1){
					return L.divIcon({
						html:"<div class='icon-perso-div'>\
						<div class='icon-perso-count icon-perso-count-obs' style='margin: 40px 60px;'>"+cluster.getChildCount()+"</div>\
						<div class='icon-perso-count icon-perso-count-ind' style='margin: 50px 20px;'>"+count+"</div>\
						<img class='icon-perso-img' src='https://zoziologie.raphaelnussbaumer.com/wp-content/plugins/improvedBiolovisionVisualisation/Icons/"+ListOfBird[unique_sp[0]].img+".png'>\
						</div>",
						iconAnchor:[40, 30],
					});
				} else {
					var c = hexToRgb(marker_color[cluster._group.id]);
					var style = 'style="background-color:rgba(' + c.r.toString() + ',' + c.g.toString() + ',' + c.b.toString() + ',.6)"';
					return L.divIcon({
						html:"<div class='icon-perso-count icon-perso-count-obs' style='margin: 16px 24px;'>"+cluster.getChildCount()+"</div>\
						<div class='icon-perso-count icon-perso-count-ind' style='margin: 24px -16px;'>"+count+"</div>\
						<div class='marker-cluster-perso' " + style + "><div " + style + "><span>" + unique_sp.length.toString() + "</span></div></div>",
					});

				}
			}
		});

		layer_d.id = layer.id;
		layer_d.legend = layer.legend;
		layer_d.link = layer.link;

		layer.eachLayer(function(obs){
			layer_d.addLayer(obs)
		})


		// Desactivate other layer and add the new one.
		jQuery('.leaflet-control-layers-overlays input:checkbox:checked').click()
		control.addOverlay(layer_d,layer_d.legend);
		layer_d.on('add',function(){
			jQuery('.list-' + layer_d.id).show()
		}).on('remove',function(){
			jQuery('.list-' + layer_d.id).hide()
		})
		layers_display.addLayer(layer_d);
		layer.display_id = layers_display.getLayerId(layer_d);

		// Add to normal layer
		layers_search.push(layer);
		

		var links = [];
		links.push(layer_d.link);
		if (links.length > 0) {
			jQuery('input#last-query').val('https://zoziologie.raphaelnussbaumer.com/iBV/?links=' + encodeURIComponent(JSON.stringify([links[links.length - 1]])));
			jQuery('input#all-query').val('https://zoziologie.raphaelnussbaumer.com/iBV/?links=' + encodeURIComponent(JSON.stringify(links)));
		} else {
			jQuery('input#last-query').val('https://zoziologie.raphaelnussbaumer.com/iBV');
			jQuery('input#all-query').val('https://zoziologie.raphaelnussbaumer.com/iBV/');
		}

		map.fitBounds(layer_d.getBounds(), {
			paddingTopLeft: [jQuery('.sidebar').width(), 0]
		});
		jQuery(".overlay").addClass("hidden");
	},function(error,data){
		console.log(data)
		alert(error)
		jQuery(".overlay").addClass("hidden");
	})
}






























//-------------------------------------------------------------------------------------------------------------------------------------------------------
// PART VISUALIZATION
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// This should not change search, it should only modify the visual aspect to fit search. Modification of search are made on the onclick function.
function UpdateStuff() {
	// Place
	/*jQuery('ul.nav-pills#place li').each(function(k) {
		if (search['sp_PChoice'] == jQuery(this).attr('name')) {
			jQuery(this).addClass('active');
		} else {
			jQuery(this).removeClass('active');
		}
	});*/

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

var addRecord = function(obs) {
	var prop = obs.feature.properties;
	jQuery('#record-date').html(prop.date.format("dddd, MMMM Do, YYYY"))
	jQuery('#record-specie').html(prop.specie)
	jQuery('#record-place').html('<a href="http://www.google.com/maps/place/' + prop.latLng[0] + ',' + prop.latLng[1] + '/data=!3m1!1e3" target="_blank">' + prop.place.split(' - Switzerland')[0] + '</a>')
	jQuery('#record-author').html(prop.observer)
	jQuery('#record-number').html(prop.count)
	jQuery('#record-comment').html(prop.comment)
	jQuery('.carousel-inner').html('');
	jQuery('.Myslider').slick('removeSlide', null, null, true);
	jQuery('.MysliderModal').html('');
	if (prop.img != null) {
		for (i = 0; i < prop.img.length; i++) {
			jQuery('.Myslider').slick('slickAdd', '<div class="record-img-slider" style="background-image:url(' + prop.img[i] + ')" onclick="document.getElementById(\'sModal' + i + '\').style.display=\'block\'"></div>')
			jQuery('.MysliderModal').prepend('<div id="sModal' + i + '" class="modal"><div class="modal-content" style="background-image:url(' + prop.img[i] + ')" onclick="document.getElementById(\'sModal' + i + '\').style.display=\'none\'" ><span class="close" >&times;</span></div></div>');
		}
	} else {
		
	}
	jQuery('#record-link-a').prop("href", prop.link)
	if (!jQuery('#li-record').hasClass('active')) {
		jQuery('#li-record a')[0].click()
	}
	jQuery('#li-record').show()
}


var link2layer = function(link,successCB,errorCB) {
	if (typeof(link)!='string'){
		throw('link needs to be a string!')
	}
	var layer_tmp = omnivore.kml(link).on('ready', function() {
		if (typeof layer_tmp.getBounds()._southWest == "undefined") {
			var data = layer_tmp;
			console.log(link)
			var error_message = "No data available for your query. Try something else!";
			if (errorCB && typeof(errorCB) === "function") {
				errorCB(error_message, data);
			}
		} else {
			var layer = L.featureGroup();
			layer.id = layers_search.length;
			layer.legend = '<img src="https://api.mapbox.com/v4/marker/pin-s+' + marker_color[layer.id].split('#')[1] + '.png?access_token=' + token.mapbox + '" style="position:absolute;"><span style="padding-left:22px;">Query ' + layers_search.length.toString() + '</span>';
			layer.list_specie=[];
			layer.link = link.split('&link=')[1];

			var list_no_icon=[];

			layer_tmp.eachLayer(function(obs) {
				var prop = {};
				prop.id = obs._leaflet_id;
				var desc = obs.feature.properties.description.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/fsfds/g, '');
				prop.date = moment(desc.match(/\w+,[^<]+/)[0], 'dddd, MMMM Do, YYYY');
				prop.specie = desc.match(/<b>[^:<]+<\/b>/g)[1].split('<b>')[1].split('</b>')[0];
				prop.latin = desc.match(/<i>[^:<]+<\/i>/g)[0].split('<i>')[1].split('</i>')[0];
				prop.place = desc.match(/<br\/>[^:<]+<br\/>/g)[0].split('<br/>')[1].split('<br/>')[0];
				prop.observer = desc.match(/<u>[^:<]+<\/u>/g)[0].split('<u>')[1].split('</u>')[0];
				prop.count = desc.match(/<\/u><br\/>[^]+\sind/)[0].split('/>')[1].split(' ind')[0].replace('>', '').replace('~', '').replace(/\D+/g, "x");
				prop.alt = desc.match(/: ([0-9]+)<br\/>/g)[0].split(': ')[1].split('<br/>')[0];
				prop.comment = desc.match(/Comment : [^>]+/);
				if (prop.comment != null) {
					prop.comment = prop.comment[0].split('Comment : ')[1].split('<br/')[0];
				}
				prop.link = desc.match(/http:[^"]+/)[0]
				prop.img = jQuery.map(desc.match(/https:\/\/cdnmedia3\.biolovision\.net\/[^"]+/g), function(l) {
					return l.replace('/xsmall', '')
				});
				prop.latLng = [obs.getLatLng().lat, obs.getLatLng().lng];
				if (ListOfBirdLA[prop.latin]>-1){
					prop.specie_idx = ListOfBirdLA[prop.latin];
				} else{
					alert('Error with: ' + prop.latin)
				}
				prop.specie_id = ListOfBird[prop.specie_idx].id;
				prop.rarity = ListOfBird[prop.specie_idx].rarity;
				prop.family = ListOfBird[prop.specie_idx].family;
				prop.distance;
				
				layer.list_specie.push(prop.specie_idx);

				if (ListOfBird[prop.specie_idx].img.length>0) {
					obs.setIcon(L.divIcon({
						html:"<div class='icon-perso-div'>\
						<div class='icon-perso-count icon-perso-count-ind' style='margin: 50px 20px;'>"+prop.count+"</div>\
						<img class='icon-perso-img' src='https://zoziologie.raphaelnussbaumer.com/wp-content/plugins/improvedBiolovisionVisualisation/Icons/"+ListOfBird[prop.specie_idx].img+".png'>\
						</div>",
						iconAnchor:[40, 30],
					}))
				} else {
					list_no_icon.push(ListOfBird[prop.specie_idx].english)
					obs.setIcon(L.MakiMarkers.icon({
						color: marker_color[layer.id],
						size: 'm',
						icon: (prop.count < 100 || prop.count == 'x') ? prop.count : '99'
					}));
				}

				obs.on('click', function() {
					addRecord(obs)
					addRecord(obs)
				});
				obs.feature.properties = prop;
				layer.addLayer(obs);
			})

			console.log(unique(list_no_icon))

			if (successCB && typeof(successCB) === "function") {
				successCB(layer);
			}
		}
	}).on('error', function(e) {
		var data = link
		var error_message = "Query url did not succeed: " + link;
		if (errorCB && typeof(errorCB) === "function") {
			errorCB(error_message, data);
		}
	});
}




var addList = function(layer) {
	//jQuery('#lists > .list').html("");
	layer.eachLayer(function(obs) {
		var prop = obs.feature.properties;
		var list_item = '<div class="panel panel-default list-'+layer.id+' list-item" id="list-item-'+obs._leaflet_id+'">';
		list_item += '<span class="id hidden">'+prop.id+'</span>';
		list_item += '<span class="specie_id hidden">'+prop.specie_id+'</span>';
		list_item += '<span class="latLng hidden">'+prop.latLng+'</span>';
		list_item += '<div class="panel-heading list-zoom" value="'+layer.id+','+obs._leaflet_id+'">';
		list_item += prop.count + ' <span class="specie">' + prop.specie + '</span>';
		list_item += ' <span class="rarity hidden">('+prop.rarity+')</span>';
		list_item += '<span class="observer hidden">' + prop.observer + '</span> (' + prop.observer.match(/([^- ']+)/g).map(function(i){return i[0]}).join('') + ')';
		var date_diff = moment().diff(prop.date,'days');
		if (date_diff == 0){
			list_item += ' - Today';
		} else if (date_diff == 1) {
			list_item += ' - Yesterday';
		} else {
			list_item += ' - ' + date_diff.toString() + ' days ago';
		}
		if (prop.comment || prop.img.length > 0){
			list_item += ' - ';
			if (prop.comment) {
				list_item += '<span class="glyphicon glyphicon-comment"></span>';
			}
			if (prop.img.length > 0) {
				list_item += '<span class="glyphicon glyphicon-picture"></span>';
			}
		}
		list_item += '<span style="float:right;">';
		//list_item += '<a target="_blank" class="list-zoom" value="'+layer.id+','+obs._leaflet_id+'" data-toggle="tooltip" title="More detail"><span class="glyphicon glyphicon-search"></span></a>';
		list_item += '<a href="' + prop.link + '" target="_blank" data-toggle="tooltip" title="see on ornitho.ch"><span class="glyphicon glyphicon-link"></span></a>';
		//list_item += '<a class="show-more" data-parent="#panel-group-list" data-toggle="collapse" href="#list-item-more-'+layer.id+'-'+prop.id+'"><span class="glyphicon glyphicon-chevron-down"></span></a>';
		list_item += '</span>';
		/*list_item += '</div><div class="panel-collapse collapse" id="list-item-more-'+layer.id+'-'+prop.id+'">';
		if (prop.comment) {
			list_item += '<p><i><span class="comment">"' + prop.comment + '"</span></i></p>';
		}
		if (prop.img.length > 0) {
			prop.img.forEach(function(img) {
				list_item += '<img width="100%" src="' + img + '" onclick="">';
				jQuery('.list-img').on('click', function(item) {
					console.log(item)
				})
			});
		}
		list_item += '</div>'*/
		list_item += '</div>';
		jQuery('#panel-group-list').append(list_item);
	})


	jQuery('#panel-group-list .list-zoom').click(function(e){
		var id = this.getAttribute('value').split(',');
		var obs = layers_search[id[0]].getLayer(id[1]);
		var circle = L.circle(obs.getLatLng(),1000).addTo(map)
		map.fitBounds(circle.getBounds(), {
			paddingTopLeft: [jQuery('.sidebar').width(), 0]
		});
		circle.removeFrom(map)
		addRecord(obs)
		addRecord(obs)
	})

	list.reIndex();
}


/*
var filter2map = function(res){
	var res_id = res.map(function(item){return item.values().id})
	layers_search.forEach(function(layer_s,id){
		layer_d = layers_display.getLayer(layer_s.display_id);
		layer_s.eachLayer(function(obs){
			layer_d_sp = layer_d.getLayer(layer_s[obs.feature.properties.specie_idx])
			if ( res_id.indexOf(obs.feature.properties.id.toString()) >= 0){
				layer_d_sp.addLayer(obs);
			} else {
				layer_d_sp.removeLayer(obs);
			}
		})
	})
}
*/
var filter2map = function(res){
	var res_id = res.map(function(item){return item.values().id})
	layers_search.forEach(function(layer,id){
		layer_d = layers_display.getLayer(layer.display_id);
		layer.eachLayer(function(obs){
			if ( res_id.indexOf(obs.feature.properties.id.toString()) >= 0){
				obs.addTo(layer_d)
			} else {
				obs.removeFrom(layer_d)
			}
		})
	})
}




























/////////////////////////////////////////////////////////////////////
jQuery(document).ready(function() {

	if (/Mobi/.test(navigator.userAgent)) {
		jQuery('#sidebar').addClass('collapsed')
	}

	// Remove avada style!
	jQuery('#avada-stylesheet-inline-css').remove()
	jQuery('#avada-stylesheet-css').remove()


	intiateMap()

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
		'MapBox': mapbox,
		'OpenStreetMap': L.tileLayer.provider('OpenStreetMap.Mapnik'),
		//'Outdoors' 	: L.tileLayer.provider('Thunderforest.Outdoors'),
		//'Watercolor' 	: L.tileLayer.provider('Stamen.Watercolor'),
		//'NASAGIBS' 	: L.tileLayer.provider('NASAGIBS.ViirsEarthAtNight2012')
		'Swisstopo': swisstopo
	};
	//if (me) {swisstopo.addTo(map)} else {mapbox.addTo(map)}
	mapbox.addTo(map);

	control = L.control.layers(baseLayers, null, {
		collapsed: true
	}).addTo(map);

	var sidebar = L.control.sidebar('sidebar').addTo(map);


	L.MakiMarkers.accessToken = token.mapbox;

	//
	layers_search = [];
	layers_display = new L.featureGroup().addTo(map);
	layerCountries = new L.featureGroup()
	layerCountry = new L.featureGroup()
	layerSearchRectangle = new L.featureGroup();

	var drawControl = new L.Control.Draw({
		draw: {
			polyline: false,
			polygon: false,
			circle: false,
			marker: false,
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
		jQuery('.sidebar-close').click();	
		jQuery('#map1').css('cursor','crosshair')
	}).on('draw:created', function(e) {
		jQuery('#map1').css('cursor','auto')
		jQuery('#li-searchs a')[0].click()
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





	countrieslist.forEach(function(country,idx) {
		jQuery.getJSON("https://zoziologie.raphaelnussbaumer.com/wp-content/plugins/improvedBiolovisionVisualisation/geojson/"+country.osm_id+".geojson", function(data){
			var layer = L.geoJSON(data,{
				onEachFeature: function(feature, layer) {
					layer.on('click',function() {
						var ii = Object.keys(this._eventParents)[0];
						changeCountry(this._eventParents[ii].osm_id);
						layerCountries.removeFrom(map);
						jQuery('.close').click();
						jQuery('#li-searchs a')[0].click();
						search['sp_PChoice'] = 'all';
						jQuery('#place li[name="all"]').click();
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
			paddingTopLeft: [jQuery('.sidebar').width(), 0]
		});
	})

	//jQuery('li[name=canton]').addClass('disabled')
	jQuery('ul#place li[name="all"]').click(function(e) {
		search['sp_PChoice'] = 'all';
		layerSearchRectangle.removeFrom(map);
		layerCountry.addTo(map);
		/*map.fitBounds(layerCountry.getBounds(), {
			paddingTopLeft: [jQuery('.sidebar').width(), 0]
		});*/
	});
	jQuery('ul#place li[name="coord"]').click(function(e) {
		search['sp_PChoice'] = 'coord';
		layerCountry.removeFrom(map);
		layerSearchRectangle.addTo(map);
		if (layerSearchRectangle.getLayers().length<1){
			jQuery('#draw-rectangle')[0].click()
		}
			//map.fitBounds(layerSearchRectangle.getBounds(), {
			//	paddingTopLeft: [jQuery('.sidebar').width(), 0]
			//});
		})

	jQuery('#draw-rectangle').click(function(){
		jQuery('.leaflet-draw-draw-rectangle')[0].click()
	})

	jQuery('#search-on-map').click(function(){
		layerSearchRectangle.removeFrom(map);
		layerCountry.removeFrom(map);
		layerCountries.addTo(map);
		map.fitBounds(layerCountries.getBounds(), {
			paddingTopLeft: [jQuery('.sidebar').width(), 0]
		});
		jQuery('.sidebar-close').click();
		jQuery('#main').append('  <div class="alert alert-info alert-dismissable fade in">\
			<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>\
			<i class="fa fa-globe" id="globe-zoom" aria-hidden="true"></i> Region <strong>with</strong> zoomable map. <i class="fa fa-globe" id="globe-no-zoom"  aria-hidden="true"></i> Region  <strong>without</strong>  zoomable map \
			</div>')
		.click;
		jQuery('ul#place li').each(function(it,li){jQuery(li).removeClass('active')})
		jQuery('ul#place li[name="all"]').addClass('active');
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
	jQuery('#kml-button').click(function(e) {
		if (search['kml']) {
			search['sp_FChoice'] = jQuery(this).attr('name');
			UpdateStuff();
		}
	})
	jQuery('#csv-button').click(function(e) {
		search['sp_FChoice'] = jQuery(this).attr('name');
		UpdateStuff();
	})


	// Copy text
	jQuery('button#last-query-btn').click(function() {
		var copyTextarea = document.querySelector('input#last-query');
		copyTextarea.select();
		document.execCommand('copy');
	});
	jQuery('button#all-query-btn').click(function() {
		var copyTextarea = document.querySelector('input#all-query');
		copyTextarea.select();
		document.execCommand('copy');
	});
	jQuery.urlShortener.settings.apiKey = 'AIzaSyCh4qHyAs3D3pywPPJryV8641HziM4aXgw';
	jQuery('button#all-query-btn-st').click(function() {
		if (jQuery('input#all-query').val().includes('goo.gl')) {
			var copyTextarea = document.querySelector('input#all-query');
			copyTextarea.select();
			document.execCommand('copy');
		} else {
			jQuery.urlShortener({
				longUrl: jQuery('input#all-query').val(),
				success: function(shortUrl) {
					jQuery('input#all-query').val(shortUrl)
					var copyTextarea = document.querySelector('input#all-query');
					copyTextarea.select();
					document.execCommand('copy');
				},
				error: function(err) {
					alert(JSON.stringify(err));
				}
			});
		}
	});
	jQuery('button#last-query-btn-st').click(function() {
		if (jQuery('input#last-query').val().includes('goo.gl')) {
			var copyTextarea = document.querySelector('input#last-query');
			copyTextarea.select();
			document.execCommand('copy');
		} else {
			jQuery.urlShortener({
				longUrl: jQuery('input#last-query').val(),
				success: function(shortUrl) {
					jQuery('input#last-query').val(shortUrl)
					var copyTextarea = document.querySelector('input#last-query');
					copyTextarea.select();
					document.execCommand('copy');
				},
				error: function(err) {
					alert(JSON.stringify(err));
				}
			});
		}
	});


	var submit_fx = function() {
		event.preventDefault();
		
		if (jQuery('input[name="target"]').prop('checked')){
			var ini_sp_DChoice = search['sp_DChoice'];
			var ini_sp_FChoice = search['sp_FChoice'];
			var ini_sp_PChoice = search['sp_PChoice'];
			var ini_sp_DFrom = search['sp_DFrom'];
			var ini_sp_DTo = search['sp_DTo'];
			search['sp_FChoice'] = "species";
			document.getElementById('only_mine').checked = true;
			switch (jQuery('input[name="target-yearlife"]:checked').val()) {
				case 'same':
				break;
				case 'year':
				var now = new Date();
				search['sp_DFrom'] = '01.01.'+now.getFullYear().toString();
				search['sp_DTo'] = '31.12.'+now.getFullYear().toString();
				search['sp_DChoice'] = 'range';
				break;
				case 'all':
				search['sp_DChoice'] = 'all';
				break;
			}
			search['sp_PChoice'] = jQuery('input[name="target-coordall"]:checked').val();
			var link_mine = 'https://zoziologie.raphaelnussbaumer.com/iBV-js?type=csv&link=' + encodeURIComponent(getLink());

			search['sp_DChoice']=ini_sp_DChoice;
			search['sp_PChoice']=ini_sp_PChoice;
			search['sp_FChoice']=ini_sp_FChoice;
			search['sp_DFrom'] = ini_sp_DFrom;
			search['sp_DTo'] = ini_sp_DTo;
			document.getElementById('only_mine').checked = false;
		}

		if (search['sp_FChoice'] == 'kml') {
			var link = 'https://zoziologie.raphaelnussbaumer.com/iBV-js?type=kml&link=' + encodeURIComponent(getLink());
			if (jQuery('input[name="target"]').prop('checked')){
				jQuery.get(link_mine,function(bird_list_mine){
					kml(link,bird_list_mine)
				})
			}else {
				kml(link)
			}

		} else if (search['sp_FChoice'] == 'csv') {
			search['sp_FChoice'] = "species";
			var link = 'https://zoziologie.raphaelnussbaumer.com/iBV-js?type=csv&link=' + encodeURIComponent(getLink());
			search['sp_FChoice'] = "csv";

			if (jQuery('input[name="target"]').prop('checked')){
				jQuery.get(link_mine,function(bird_list_mine){
					csv(link,bird_list_mine)
				})
			}else {
				csv(link)
			}

		}  else {
			// on Website
			var link = getLink();
			window.open(link, '_blank');
		}
	};
	jQuery('#yourForm').submit(submit_fx);
	// NOT WORKING jQuery("#input-date-from, #input-date-to, input-season-from, input-season-to").keyup(function(e){if(e.keyCode == 13){submit_fx();}});



	//Open Specie Info page
	jQuery('#button-sp-info').click(function() {
		var link = search['site'] + '/index.php?m_id=81&frmSpecies=' + search['sp_S'] + '&langu=' + search['lang'][0];
		window.open(link, '_blank');
	});

	// Carrousel
	jQuery('.Myslider').slick();


	list = new List('lists', {
		valueNames: ['id','specie_id','specie','observer','count','comment','latLng','rarity']
	});
	
	jQuery('#list-filter').keyup(function(){
		var res = list.search(this.value,['specie','observer','comment']);
		filter2map(res)
	})


	jQuery('#sort-distance').click(function(){
		map.on('locationerror', function(e){
			alert(e.message);
		}).on('locationfound', function(e){
			if (!isLocate){
				var radius = e.accuracy / 2;
				var location_circle = L.circle(e.latlng, 10000,{
					stroke: '#136AEC',
					opacity:'.5',
					weight: '2',
					fill: '0'
				}).addTo(map);
				L.circle(e.latlng, radius,{
					stroke: '#136AEC',
					opacity:'.5',
					weight: '2',
					fillColor:'#136AEC',
					fillOpacity: '.15'
				}).addTo(map);
				L.circle(e.latlng, 1,{
					stroke: '#136AEC',
					opacity:'.9',
					weight: '2',
					fillColor:'#2A93EE',
					fillOpacity: '.7'
				}).addTo(map);
				isLocate=true;

				var swiss = jQuery.grep(layerCountries.getLayers(),function(l){
					return l.name=="Switzerland"
				})
				if (swiss[0].getBounds().contains(e.latlng)){
					baseLayers['Swisstopo'].addTo(map)
					baseLayers['MapBox'].removeFrom(map)
				}
				map.fitBounds(location_circle.getBounds(), {
					paddingTopLeft: [jQuery('.sidebar').width(), 0]
				});
			}
			var sorted = list.sort('latLng',{
				locate:e.latlng,
				sortFunction: function(a, b, opt) {
					var dist_a = opt.locate.distanceTo(L.latLng(a.values().latLng.split(',')));
					var dist_b = opt.locate.distanceTo(L.latLng(b.values().latLng.split(',')));
					if (dist_a<dist_b) {return -1;}
					if (dist_a>dist_b) {return 1;}
					return 0;
				}
			})
		});
		map.locate();
	})
	
	map.on('move',function(e){
		if (jQuery('#li-record').hasClass('active') && !jQuery('#li-lists').hasClass('active') && e.hasOwnProperty('originalEvent')){
			jQuery('#li-lists > a')[0].click()
		}
		var bds = this.getBounds()
		list.filter(function(item){
			if (bds.contains(L.latLng(item.values().latLng.split(',')))){
				return true;
			} else {
				return false;
			}
		});
		if (jQuery('#list-filter').val()){
			var res = list.search(jQuery('#list-filter').val(),['specie','observer','comment']);
			filter2map(res)
		}
	})



	jQuery(".btn-group.btn-group-sort > .btn").click(function(){
		jQuery(this).addClass("active").siblings().removeClass("active");
		jQuery(this).blur();
	});
	jQuery(".btn-group.btn-group-rarity > .btn").click(function(){
		jQuery(this).blur();
		jQuery(this).toggleClass("active");
		var filterstr = jQuery.map(jQuery(".btn-group.btn-group-rarity > .btn.active"), function(i){return i.value})
		var res = list.filter(function(item){
			var rarity = item.values().rarity
			if (filterstr.indexOf(rarity.substring(1,rarity.length-1))>-1){
				return true;
			} else {
				return false;
			}
		});
		filter2map(res)
	});





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