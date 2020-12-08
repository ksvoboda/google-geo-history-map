var map;
var exampleJson = "example.json";
var json = "Location History.json";

gapi.load('auth2', function() {
  // Library loaded.
});

function initMap() {

  var mapProp =  {

    center: new google.maps.LatLng(49.4550, 15.3833),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };

  map = new google.maps.Map(document.getElementById("map"), mapProp);

  $.getJSON(json, function(json1) {

    $.each(json1.locations, function(key, data) {

      // converting number to string
      var latitudeString = data.latitudeE7.toString();
      var longitudeString = data.longitudeE7.toString();

      // putting . after 2 digits
      var latitudeDot = latitudeString.substring(0,2) + "." + latitudeString.substring(2);
      var longitudeDot = longitudeString.substring(0,2) + "." + longitudeString.substring(2);

      // converting string to number (float)
      var latitudeNum = parseFloat(latitudeDot);
      var longitudeNum = parseFloat(longitudeDot);

      // console.log(latitudeNum);
      // console.log(longitudeNum);

      // creating latLng variable for each marker
      // var coordinates = new google.map.latLng(latitudeNum, longitudeNum);

      // console.log(coordinates);

      // placing each marker on the map
      var marker = new google.maps.Marker({

        position: { lat: latitudeNum, lng: longitudeNum },
        map: map,
        title: data.name,

      });

      const infowindow = new google.maps.InfoWindow({

        content: data.name,

      });

      marker.addListener("click", () => {

        infowindow.open(map, marker);

      });

    });

  });

}

var lat = 5598;

var num = lat.toString().replace(/(..)$/, ".$1");

var floatNum = parseFloat(num);

// console.log(initMap.latLng);