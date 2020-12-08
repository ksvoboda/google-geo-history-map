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

      // placing each marker on the map
      var marker = new google.maps.Marker({

        position: { lat: latitudeNum, lng: longitudeNum },
        map: map,
        title: data.name,

      });

      /*
      const infowindow = new google.maps.InfoWindow({

        content: data.name,
        // accuracy
        // activity 

      });

      marker.addListener("click", () => {

        infowindow.open(map, marker);

      });
      */

    });

  });

}

var lat = -50107869;

var num = lat.toString();

if (num.length == 9) {

  var floatNum = num.substring(0,2) + "." + num.substring(2);

} else if (num.length = 8) {

  var floatNum = num.substring(0,1) + "." + num.substring(1);

}

console.log(floatNum);