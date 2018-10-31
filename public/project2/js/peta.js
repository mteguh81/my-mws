let lokasi = [-6.1997187,106.8362613];
let sponsor = "Kantor 7Langit";

let mymap = L.map('mapid').setView(lokasi, 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 20,
	id: 'mapbox.streets',
	accessToken:'pk.eyJ1IjoidGVndWgxMTAyIiwiYSI6ImNqbmd2MzVvMDAxNWwzanJzOHdhYmcxeXcifQ.Cp5ZDi8-WSUyx-3bictGcw'
}).addTo(mymap);

var marker = L.marker(lokasi).addTo(mymap);

var popup = L.popup();
			
function onMapClick(e) {
	popup.setLatLng(e.latlng).setContent(sponsor).openOn(mymap);
}

mymap.on('click', onMapClick);