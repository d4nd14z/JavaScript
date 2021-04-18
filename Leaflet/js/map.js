//Se obtiene este valor desde la siguiente URL: 
//https://wiki.openstreetmap.org/wiki/Tiles
//Se remueven lo signos $, y se reemplaza a, b, c por {s}
const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const myPoints = [
    {
        "title": "Sogamoso",
        "coord": [5.71331760397937, -72.93353855609895]
    },
    {
        "title": "Bucaramanga",
        "coord": [7.137302412338274, -73.1217008829117]
    },
    {
        "title": "Tunja",
        "coord": [5.538511258745033, -73.36037993431093]
    },
    {
        "title": "Cartagena",
        "coord": [10.445795266557008, -75.51998734474184]
    },
    {
        "title": "Zapatoca",
        "coord": [6.818892175603975, -73.26916337013246]
    },
    {
        "title": "Medellin",
        "coord": [6.253359905160042, -75.58826565742494]
    },
    {
        "title": "Armenia",
        "coord": [4.538780987655135, -75.76743195352408]
    },
    {
        "title": "Ecuador",
        "coord": [-2.194743864414324, -79.87992882728578]

    },
    {
        "title": "Aruba",
        "coord": [12.526998949977546, -70.03483772277833]
    },
    {
        "title": "Panama",
        "coord": [9.069938000615709, -79.39401447772981]
    },
    {
        "title": "Moniquirá",
        "coord": [5.877293681497603, -73.5664551894406]
    }
];

const myLocation = [4.7330090833761425, -74.05076980590822];
const zoom = 13;
let myMap = L.map("myMap").setView(myLocation, zoom);
L.tileLayer(tilesProvider, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(myMap);
myMap.attributionControl.setPrefix(false);

//Ubicar "Mi Casa" en el mapa, y dibujar el punto en el mapa
const marker = new L.marker(myLocation, {
    draggable: false 
}).on('click', () => { alert("Mi Casa\nLatitude: " + myLocation[0] + "\nLongitude: " + myLocation[1]); });
myMap.addLayer(marker);

//Recorrer el array de puntos y dibujar una marca para cada uno de ellos
myPoints.forEach(function(p, index){
    var point = new L.marker(p.coord, {
        draggable: false
    }).on('click', () => { 
        //Calcular la distancia desde mis casa a ese punto
        var from = marker.getLatLng(); //Marcador de mi casa
        var to = point.getLatLng();
        let distance = (from.distanceTo(to)).toFixed(0)/1000 + ' km';
        alert(`${p.title}\nLatitude: ${p.coord[0]}\nLongitude: ${p.coord[1]}\nDistancia a mi casa: ${distance}`); 
    });
    myMap.addLayer(point);    
});


//Ubicar un marcador en el punto donde se hace click, y mostrar las coordenadas latitud, y longitud de ese punto.
myMap.on('click', e => {
    let myPoint = myMap.mouseEventToLatLng(e.originalEvent);
    let mark = new L.marker([myPoint.lat, myPoint.lng], {
        draggable: true
    }).on('click', () => {
        var title = prompt("Escriba un título para este punto");
        alert(`${title}\nLatitude: ${myPoint.lat}\nLongitude: ${myPoint.lng}`);
    });
    myMap.addLayer(mark);    
});




/*
//Recorrer el array de puntos y dibujar una marca para los puntos con distancia menor a 1 km
myPoints.forEach(function(p, index){
    var limit = 200; //Se define en Kilometros
    var point = new L.marker(p.coord, {
        draggable: false
    });
    //myMap.addLayer(point);
    //Calcular la distancia desde mi casa a ese punto
    var from = marker.getLatLng();
    var to = point.getLatLng();
    let distance = (from.distanceTo(to)).toFixed(0)/1000;
    console.log(distance);
    if (distance < limit){
        myMap.addLayer(point);
    }
});
*/



//Obtener la posicion actual de acuerdo a la posicion del navegador
/*
navigator.geolocation.getCurrentPosition(
    (pos) => {
        let browserLocation = [pos.coords.latitude, pos.coords.longitude];
        const browserMarker = new L.marker(browserLocation, {
            draggable: false 
        }).on('click', mostrarDetalle);
        myMap.addLayer(browserMarker);
        function mostrarDetalle(e){
            alert ("Latitude: " + pos.coords.latitude + "\n" + "Longitude: " + pos.coords.longitude);
        }
    },
    (err) => {
        console.log(err);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0

    }
);
*/