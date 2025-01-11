ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32645").setExtent([581535.316546, 2465657.560089, 698032.495021, 2533679.990861]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.900000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kolkata_hostels_1 = new ol.format.GeoJSON();
var features_kolkata_hostels_1 = format_kolkata_hostels_1.readFeatures(json_kolkata_hostels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_kolkata_hostels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kolkata_hostels_1.addFeatures(features_kolkata_hostels_1);
var lyr_kolkata_hostels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kolkata_hostels_1, 
                style: style_kolkata_hostels_1,
                popuplayertitle: 'kolkata_hostels',
                interactive: true,
                title: '<img src="styles/legend/kolkata_hostels_1.png" /> kolkata_hostels'
            });
var format_lieux_importants_2 = new ol.format.GeoJSON();
var features_lieux_importants_2 = format_lieux_importants_2.readFeatures(json_lieux_importants_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_lieux_importants_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lieux_importants_2.addFeatures(features_lieux_importants_2);
var lyr_lieux_importants_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lieux_importants_2, 
                style: style_lieux_importants_2,
                popuplayertitle: 'lieux_importants',
                interactive: true,
                title: '<img src="styles/legend/lieux_importants_2.png" /> lieux_importants'
            });

lyr_OSMStandard_0.setVisible(true);lyr_kolkata_hostels_1.setVisible(true);lyr_lieux_importants_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_kolkata_hostels_1,lyr_lieux_importants_2];
lyr_kolkata_hostels_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'In charge': 'In charge', 'Adress': 'Adress', 'Number': 'Number', });
lyr_lieux_importants_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Adress': 'Adress', 'Notes': 'Notes', });
lyr_kolkata_hostels_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'In charge': 'TextEdit', 'Adress': 'TextEdit', 'Number': 'TextEdit', });
lyr_lieux_importants_2.set('fieldImages', {'id': '', 'Name': '', 'Adress': '', 'Notes': '', });
lyr_kolkata_hostels_1.set('fieldLabels', {'id': 'header label - always visible', 'Name': 'header label - always visible', 'In charge': 'header label - always visible', 'Adress': 'header label - always visible', 'Number': 'header label - always visible', });
lyr_lieux_importants_2.set('fieldLabels', {'id': 'header label - always visible', 'Name': 'header label - always visible', 'Adress': 'header label - always visible', 'Notes': 'header label - always visible', });
lyr_lieux_importants_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});