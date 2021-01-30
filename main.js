var map;
var exampleJson = "example.json";
var json = "Location History.json";
// var externalJson = document.getElementById('input').files[0];


if(document.getElementById('input').files[0] != null) {

	var externalJson = document.getElementById('input').files[0];

}

function initMap() {

  	var mapProp =  {

		center: new google.maps.LatLng(49.4550, 15.3833),
		zoom: 3,
		mapTypeId: google.maps.MapTypeId.ROADMAP

  	};

  	map = new google.maps.Map(document.getElementById("map"), mapProp);

  	$.getJSON(externalJson, function(json1) {

		$.each(json1.locations, function(key, data) {

		// converting number to string
		var latitudeString = data.latitudeE7.toString();
		var longitudeString = data.longitudeE7.toString();

		// putting . in 
		if (latitudeString.length == 9) {

			var latitudeDot = latitudeString.substring(0,2) + "." + latitudeString.substring(2);
		
		} else if (latitudeString.length == 8) {
		
			var latitudeDot = latitudeString.substring(0,1) + "." + latitudeString.substring(1);
		
		}

		if (longitudeString.length == 9) {

			var longitudeDot = longitudeString.substring(0,2) + "." + longitudeString.substring(2);
		
		} else if (longitudeString.length == 8) {
		
			var longitudeDot = longitudeString.substring(0,1) + "." + longitudeString.substring(1);
		
		}

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

console.log(externalJson.latitudeE7);

// const selectedFile = document.getElementById('input').files[0];
