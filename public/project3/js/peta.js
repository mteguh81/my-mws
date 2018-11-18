function findLocation(x,y) {
	// console.log(x,y);
	for (var i=0; i< places.length;i++) {
		if (places[i].lokasi[0]==x && places[i].lokasi[1]==y) {
			return i;
		}
	}
	return -1;
}

function showLocation(e) {
	//console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
	let ix= findLocation(e.latlng.lat,e.latlng.lng);
	if (ix >=0) {
		img.src= places[ix].gambar;
		par.textContent=places[ix].review;
		document.getElementById("lbl_gambar").innerHTML = "";
		document.getElementById("lbl_review").innerHTML = "";
		gmb.style.background = "none";
		rev.style.background = "none";
		par.style.fontSize = "22px";
	}
}

let gmb= document.getElementById("gmb");
let rev= document.getElementById("review");
let img= document.createElement('img');
let par= document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

var base_url = window.location.origin;
const URL = base_url + "/my-mws/public/project3/peta.json";

fetch(URL).then(function(response){
	if (response.status !== 200) { //HTTP Status
		console.log('Ada masalah. Status Code: ' + response.status);
		return;
	}
	return response.json()
})
.then ( resp => {
	let places= resp.places;
	localStorage.setItem('places', JSON.stringify(resp.places));
})
.catch(function(err){
	console.log(err);
});

let places= JSON.parse(localStorage.getItem('places'));
for (var p of places) {
	var marker= L.marker(p.lokasi).addTo(mymap).bindPopup("<h2>" + p.sponsor + "</h2>");
	marker.on('click', showLocation);
}
