var style_kolkata_hostels_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var style = new ol.style.Style({
        image: new ol.style.Circle({
            radius: 4.0 + size,
            stroke: new ol.style.Stroke({
                color: 'rgba(35,35,35,1.0)',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter'
            }),
            fill: new ol.style.Fill({
                color: 'rgba(227,26,28,1.0)' // Couleur rouge
            }),
        }),
    });
    return style;
};
