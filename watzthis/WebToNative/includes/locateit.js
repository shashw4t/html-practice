
function $(id){
    //gets an element by the id passed to it. this is used to display the map.
    return document.getElementById(id);
}

//initialize map variables;
var you = {};
var map = {};

function getLoc() {
if (navigator.geolocation){
    //if the browser supports geolocation, get current location and display on a map.
        var gps = navigator.geolocation;
        gps.getCurrentPosition(function(position){
                var latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                var opts = {zoom:6, center:latLng, mapTypeId: google.maps.MapTypeId.ROADMAP};
                map = new google.maps.Map($("map_canvas"), opts);
                you = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        title: "There you are!"
                });
                var infowindow = new google.maps.InfoWindow({
                map: map,
                position: latLng,
                content: 'Location found using HTML5.'
                });
        });
        
} else {
    //if the browser doesn't support geolocation, display an alert saying so.
    alert("Your browser doesn't support geolocation."); 
}
}