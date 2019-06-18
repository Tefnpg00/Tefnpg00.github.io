var wms_layers = [];
var lyr_INFLAMABILITAT_V3_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://sig.gencat.cat/ows/VEGETACIO/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "INFLAMABILITAT_V3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "INFLAMABILITAT_V3",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_INFLAMABILITAT_V3_0, 1]);var format_Nucleos_CAT_1 = new ol.format.GeoJSON();
var features_Nucleos_CAT_1 = format_Nucleos_CAT_1.readFeatures(json_Nucleos_CAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nucleos_CAT_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Nucleos_CAT_1.addFeatures(features_Nucleos_CAT_1);var lyr_Nucleos_CAT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nucleos_CAT_1, 
                style: style_Nucleos_CAT_1,
    title: 'Nucleos_CAT<br />\
    <img src="styles/legend/Nucleos_CAT_1_0.png" /> < 250000<br />\
    <img src="styles/legend/Nucleos_CAT_1_1.png" /> 250000 - 500000<br />\
    <img src="styles/legend/Nucleos_CAT_1_2.png" /> 500000 - 1000000<br />\
    <img src="styles/legend/Nucleos_CAT_1_3.png" /> 1000000 - 1250000<br />\
    <img src="styles/legend/Nucleos_CAT_1_4.png" /> > 1250000<br />'
        });var format_Incendios_CAT_2 = new ol.format.GeoJSON();
var features_Incendios_CAT_2 = format_Incendios_CAT_2.readFeatures(json_Incendios_CAT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incendios_CAT_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Incendios_CAT_2.addFeatures(features_Incendios_CAT_2);var lyr_Incendios_CAT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Incendios_CAT_2, 
                style: style_Incendios_CAT_2,
    title: 'Incendios_CAT<br />\
    <img src="styles/legend/Incendios_CAT_2_0.png" /> incendios 1986<br />\
    <img src="styles/legend/Incendios_CAT_2_1.png" /> incendios 1987<br />\
    <img src="styles/legend/Incendios_CAT_2_2.png" /> incendios 1988<br />\
    <img src="styles/legend/Incendios_CAT_2_3.png" /> incendios 1989<br />\
    <img src="styles/legend/Incendios_CAT_2_4.png" /> incendios 1990<br />\
    <img src="styles/legend/Incendios_CAT_2_5.png" /> incendios 1991<br />\
    <img src="styles/legend/Incendios_CAT_2_6.png" /> incendios 1992<br />\
    <img src="styles/legend/Incendios_CAT_2_7.png" /> incendios 1993<br />\
    <img src="styles/legend/Incendios_CAT_2_8.png" /> incendios 1994<br />\
    <img src="styles/legend/Incendios_CAT_2_9.png" /> incendios 1995<br />\
    <img src="styles/legend/Incendios_CAT_2_10.png" /> incendios 1996<br />\
    <img src="styles/legend/Incendios_CAT_2_11.png" /> incendios 1997<br />\
    <img src="styles/legend/Incendios_CAT_2_12.png" /> incendios 1998<br />\
    <img src="styles/legend/Incendios_CAT_2_13.png" /> incendios 1999<br />\
    <img src="styles/legend/Incendios_CAT_2_14.png" /> incendios 2000<br />\
    <img src="styles/legend/Incendios_CAT_2_15.png" /> incendios 2001<br />\
    <img src="styles/legend/Incendios_CAT_2_16.png" /> incendios 2002<br />\
    <img src="styles/legend/Incendios_CAT_2_17.png" /> incendios 2003<br />\
    <img src="styles/legend/Incendios_CAT_2_18.png" /> incendios 2004<br />\
    <img src="styles/legend/Incendios_CAT_2_19.png" /> incendios 2005<br />\
    <img src="styles/legend/Incendios_CAT_2_20.png" /> incendios 2006<br />\
    <img src="styles/legend/Incendios_CAT_2_21.png" /> incendios 2007<br />\
    <img src="styles/legend/Incendios_CAT_2_22.png" /> incendios 2008<br />\
    <img src="styles/legend/Incendios_CAT_2_23.png" /> incendios 2009<br />\
    <img src="styles/legend/Incendios_CAT_2_24.png" /> incendios 2010<br />\
    <img src="styles/legend/Incendios_CAT_2_25.png" /> incendios 2011<br />\
    <img src="styles/legend/Incendios_CAT_2_26.png" /> incendios 2012<br />\
    <img src="styles/legend/Incendios_CAT_2_27.png" /> incendios 2013<br />\
    <img src="styles/legend/Incendios_CAT_2_28.png" /> incendios 2014<br />\
    <img src="styles/legend/Incendios_CAT_2_29.png" /> incendios 2015<br />\
    <img src="styles/legend/Incendios_CAT_2_30.png" /> incendios 2016<br />\
    <img src="styles/legend/Incendios_CAT_2_31.png" /> incendios 2017<br />\
    <img src="styles/legend/Incendios_CAT_2_32.png" /> incendios 2018<br />'
        });var format_Zonasinundables_CAT_3 = new ol.format.GeoJSON();
var features_Zonasinundables_CAT_3 = format_Zonasinundables_CAT_3.readFeatures(json_Zonasinundables_CAT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasinundables_CAT_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Zonasinundables_CAT_3.addFeatures(features_Zonasinundables_CAT_3);var lyr_Zonasinundables_CAT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonasinundables_CAT_3, 
                style: style_Zonasinundables_CAT_3,
                title: '<img src="styles/legend/Zonasinundables_CAT_3.png" /> Zonas inundables_CAT'
            });var format_Gasolineras_CAT_4 = new ol.format.GeoJSON();
var features_Gasolineras_CAT_4 = format_Gasolineras_CAT_4.readFeatures(json_Gasolineras_CAT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gasolineras_CAT_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Gasolineras_CAT_4.addFeatures(features_Gasolineras_CAT_4);var lyr_Gasolineras_CAT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gasolineras_CAT_4, 
                style: style_Gasolineras_CAT_4,
                title: '<img src="styles/legend/Gasolineras_CAT_4.png" /> Gasolineras_CAT'
            });var lyr_CadastralParcel_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/cartografia/INSPIRE/spadgcwms.aspx",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "CadastralParcel",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_CadastralParcel_5, 1]);

lyr_INFLAMABILITAT_V3_0.setVisible(false);lyr_Nucleos_CAT_1.setVisible(true);lyr_Incendios_CAT_2.setVisible(true);lyr_Zonasinundables_CAT_3.setVisible(true);lyr_Gasolineras_CAT_4.setVisible(true);lyr_CadastralParcel_5.setVisible(false);
var layersList = [lyr_INFLAMABILITAT_V3_0,lyr_Nucleos_CAT_1,lyr_Incendios_CAT_2,lyr_Zonasinundables_CAT_3,lyr_Gasolineras_CAT_4,lyr_CadastralParcel_5];
lyr_Nucleos_CAT_1.set('fieldAliases', {'CODINE': 'CODINE', 'NOMBRE': 'NOMBRE', 'KM2': 'KM2', 'HBT': 'HBT', 'DENSIDAD': 'DENSIDAD', 'CP': 'CP', 'PROVIN': 'PROVIN', 'CA': 'CA', 'AUTONOM': 'AUTONOM', 'CU': 'CU', 'AU': 'AU', 'SAU': 'SAU', 'TMA': 'TMA', 'N_CU': 'N_CU', 'N_AU': 'N_AU', 'N_SAU': 'N_SAU', 'CAPITAL': 'CAPITAL', 'FECHA': 'FECHA', 'SHAPEID': 'SHAPEID', 'COL_CU': 'COL_CU', 'COL_AU': 'COL_AU', });
lyr_Incendios_CAT_2.set('fieldAliases', {'GRID_CODE': 'GRID_CODE', 'CODI_FINAL': 'CODI_FINAL', 'MUNICIPI': 'MUNICIPI', 'DATA_INCEN': 'DATA_INCEN', 'OBJECTID': 'OBJECTID', 'layer': 'layer', 'path': 'path', });
lyr_Zonasinundables_CAT_3.set('fieldAliases', {'ID_ZINUN_T': 'ID_ZINUN_T', 'NOM_ZINUN': 'NOM_ZINUN', });
lyr_Gasolineras_CAT_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'objectid': 'objectid', 'provincia': 'provincia', 'municipio': 'municipio', 'localidad': 'localidad', 'código_po': 'código_po', 'dirección': 'dirección', 'margen': 'margen', 'longitud': 'longitud', 'latitud': 'latitud', 'precio_gas': 'precio_gas', 'precio_g_1': 'precio_g_1', 'precio_g_2': 'precio_g_2', 'precio_bio': 'precio_bio', 'precio_nue': 'precio_nue', 'precio_b_1': 'precio_b_1', 'f__éster_': 'f__éster_', 'f__bioalco': 'f__bioalco', 'precio_g_3': 'precio_g_3', 'precio_g_4': 'precio_g_4', 'precio_g_5': 'precio_g_5', 'precio_g_6': 'precio_g_6', 'rótulo': 'rótulo', 'tipo_venta': 'tipo_venta', 'rem_': 'rem_', 'horario': 'horario', 'horario00': 'horario00', 'z': 'z', 'fecha': 'fecha', });
lyr_Nucleos_CAT_1.set('fieldImages', {'CODINE': 'TextEdit', 'NOMBRE': 'TextEdit', 'KM2': 'TextEdit', 'HBT': 'TextEdit', 'DENSIDAD': 'TextEdit', 'CP': 'TextEdit', 'PROVIN': 'TextEdit', 'CA': 'TextEdit', 'AUTONOM': 'TextEdit', 'CU': 'TextEdit', 'AU': 'TextEdit', 'SAU': 'TextEdit', 'TMA': 'TextEdit', 'N_CU': 'TextEdit', 'N_AU': 'TextEdit', 'N_SAU': 'TextEdit', 'CAPITAL': 'TextEdit', 'FECHA': 'TextEdit', 'SHAPEID': 'TextEdit', 'COL_CU': 'TextEdit', 'COL_AU': 'TextEdit', });
lyr_Incendios_CAT_2.set('fieldImages', {'GRID_CODE': 'Range', 'CODI_FINAL': 'TextEdit', 'MUNICIPI': 'TextEdit', 'DATA_INCEN': 'TextEdit', 'OBJECTID': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Zonasinundables_CAT_3.set('fieldImages', {'ID_ZINUN_T': 'TextEdit', 'NOM_ZINUN': 'TextEdit', });
lyr_Gasolineras_CAT_4.set('fieldImages', {'OBJECTID_1': 'Range', 'objectid': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'localidad': 'TextEdit', 'código_po': 'TextEdit', 'dirección': 'TextEdit', 'margen': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'precio_gas': 'TextEdit', 'precio_g_1': 'TextEdit', 'precio_g_2': 'TextEdit', 'precio_bio': 'TextEdit', 'precio_nue': 'TextEdit', 'precio_b_1': 'TextEdit', 'f__éster_': 'TextEdit', 'f__bioalco': 'TextEdit', 'precio_g_3': 'TextEdit', 'precio_g_4': 'TextEdit', 'precio_g_5': 'TextEdit', 'precio_g_6': 'TextEdit', 'rótulo': 'TextEdit', 'tipo_venta': 'TextEdit', 'rem_': 'TextEdit', 'horario': 'TextEdit', 'horario00': 'TextEdit', 'z': 'TextEdit', 'fecha': 'TextEdit', });
lyr_Nucleos_CAT_1.set('fieldLabels', {'CODINE': 'no label', 'NOMBRE': 'inline label', 'KM2': 'no label', 'HBT': 'inline label', 'DENSIDAD': 'no label', 'CP': 'no label', 'PROVIN': 'no label', 'CA': 'no label', 'AUTONOM': 'no label', 'CU': 'no label', 'AU': 'no label', 'SAU': 'no label', 'TMA': 'no label', 'N_CU': 'no label', 'N_AU': 'no label', 'N_SAU': 'no label', 'CAPITAL': 'no label', 'FECHA': 'no label', 'SHAPEID': 'no label', 'COL_CU': 'no label', 'COL_AU': 'no label', });
lyr_Incendios_CAT_2.set('fieldLabels', {'GRID_CODE': 'no label', 'CODI_FINAL': 'no label', 'MUNICIPI': 'inline label', 'DATA_INCEN': 'inline label', 'OBJECTID': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Zonasinundables_CAT_3.set('fieldLabels', {'ID_ZINUN_T': 'no label', 'NOM_ZINUN': 'inline label', });
lyr_Gasolineras_CAT_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'objectid': 'no label', 'provincia': 'no label', 'municipio': 'inline label', 'localidad': 'no label', 'código_po': 'no label', 'dirección': 'no label', 'margen': 'no label', 'longitud': 'inline label', 'latitud': 'inline label', 'precio_gas': 'no label', 'precio_g_1': 'no label', 'precio_g_2': 'no label', 'precio_bio': 'no label', 'precio_nue': 'no label', 'precio_b_1': 'no label', 'f__éster_': 'no label', 'f__bioalco': 'no label', 'precio_g_3': 'no label', 'precio_g_4': 'no label', 'precio_g_5': 'no label', 'precio_g_6': 'no label', 'rótulo': 'no label', 'tipo_venta': 'no label', 'rem_': 'no label', 'horario': 'no label', 'horario00': 'no label', 'z': 'no label', 'fecha': 'no label', });
lyr_Gasolineras_CAT_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});