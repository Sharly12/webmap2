var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Population_1 = new ol.format.GeoJSON();
var features_Population_1 = format_Population_1.readFeatures(json_Population_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Population_1.addFeatures(features_Population_1);
var lyr_Population_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Population_1, 
                style: style_Population_1,
                popuplayertitle: "Population ",
                interactive: true,
    title: 'Population <br />\
    <img src="styles/legend/Population_1_0.png" /> 0 - 700<br />\
    <img src="styles/legend/Population_1_1.png" /> 700 - 1000<br />\
    <img src="styles/legend/Population_1_2.png" /> 1000 - 1350<br />\
    <img src="styles/legend/Population_1_3.png" /> 1350 - 2000<br />\
    <img src="styles/legend/Population_1_4.png" /> 2000 - 27776<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Population_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Population_1];
lyr_Population_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_Population_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'DSD_C': 'TextEdit', 'GND_N': 'TextEdit', 'GND_NO': 'TextEdit', 'GND_C': 'TextEdit', 'PROVINCE_C': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'GN_UID': 'TextEdit', 'OID_': 'Range', 'UID_DIST_D': 'TextEdit', 'TOT_POP': 'Range', 'RANK_POP': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'RATIOSEX': 'TextEdit', 'RANK_SR': 'TextEdit', '0TO14': 'Range', '15TO59': 'Range', 'OVER60': 'Range', 'RATIODEPEN': 'TextEdit', 'RANK_DR': 'TextEdit', 'BUDDHIST': 'Range', 'HINDU': 'Range', 'ISLAM': 'Range', 'ROMANCATHO': 'Range', 'OTHERCHRIS': 'Range', 'OTHERELIGI': 'Range', 'SINHALESE': 'Range', 'SRILANKATA': 'Range', 'INDIANTAMI': 'Range', 'SRILANKAMO': 'Range', 'OTHERETHGR': 'Range', 'NAME_DIST_': 'TextEdit', 'NUM_GN': 'TextEdit', 'Area': 'TextEdit', });
lyr_Population_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'DSD_C': 'hidden field', 'GND_N': 'header label - visible with data', 'GND_NO': 'header label - visible with data', 'GND_C': 'header label - visible with data', 'PROVINCE_C': 'header label - visible with data', 'DISTRICT_C': 'header label - always visible', 'GN_UID': 'header label - visible with data', 'OID_': 'hidden field', 'UID_DIST_D': 'no label', 'TOT_POP': 'no label', 'RANK_POP': 'hidden field', 'MALE': 'hidden field', 'FEMALE': 'no label', 'RATIOSEX': 'hidden field', 'RANK_SR': 'hidden field', '0TO14': 'hidden field', '15TO59': 'hidden field', 'OVER60': 'hidden field', 'RATIODEPEN': 'hidden field', 'RANK_DR': 'hidden field', 'BUDDHIST': 'hidden field', 'HINDU': 'hidden field', 'ISLAM': 'hidden field', 'ROMANCATHO': 'hidden field', 'OTHERCHRIS': 'hidden field', 'OTHERELIGI': 'hidden field', 'SINHALESE': 'hidden field', 'SRILANKATA': 'hidden field', 'INDIANTAMI': 'hidden field', 'SRILANKAMO': 'hidden field', 'OTHERETHGR': 'hidden field', 'NAME_DIST_': 'hidden field', 'NUM_GN': 'hidden field', 'Area': 'hidden field', });
lyr_Population_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});