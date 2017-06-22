//Funcion que inserta el mapa en el div
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {lat: -9.1191427, lng: -77.0349046},
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false
  });
//variables que invocan los input de inicio y destino
  var inicio = document.getElementById('inputInicio');
  var fin = document.getElementById('inputDestino');
//autocompletado en los input
  new google.maps.places.Autocomplete(inicio);
  new google.maps.places.Autocomplete(fin);

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

//funcion que hace recorrido
  var laRuta = function(directionsService,directionsDisplay){
    directionsService.route({
    origin: inicio.value,
    destination: fin.value,
    travelMode: 'DRIVING' //modo de viaje
    }, function (response,status){
      if (status === 'OK') {
          directionsDisplay.setDirections(response);
        }else{
      window.alert("Lo sentimos. No tenemos ruta a ese destino.");
      }
    })
  };

    directionsDisplay.setMap(map);
    var obtenerRuta = function(){
      laRuta(directionsService,directionsDisplay);
    };

    document.getElementById("trazar").addEventListener('click', obtenerRuta);  
};