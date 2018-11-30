let lokasi = [-6.9256321,107.6342151];

var locations = [
	["<strong>Trans Studio Bandung</strong>",-6.9256321,107.6342151],
];

let mymap = L.map('mapid').setView(lokasi, 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   	maxZoom: 20,
   	id: 'mapbox.streets',
	accessToken:'pk.eyJ1IjoidGVndWgxMTAyIiwiYSI6ImNqbmd2MzVvMDAxNWwzanJzOHdhYmcxeXcifQ.Cp5ZDi8-WSUyx-3bictGcw'
}).addTo(mymap);

for (var i = 0; i < locations.length; i++) {
	marker = new L.marker([locations[i][1],locations[i][2]]).bindPopup(locations[i][0]).addTo(mymap);

	marker.openPopup();
}