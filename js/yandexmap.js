ymaps.ready(function () {
    var myMap = new ymaps.Map('yMap', {
        center: [59.938635, 30.323118],
        zoom: 17, 
        controls: []
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), );

    myMap.geoObjects.add(myPlacemark);
});