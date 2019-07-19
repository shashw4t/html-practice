//initialize variables for color buttons and auto mode
var light = new Array(); 
var t; 
var color=0; 
var flipping=0; 
var speed=2000;  
light[0] = 'black'; 
light[1] = 'white'; 
light[2] = "red"; 
light[3] = "blue"; 
light[4] = "green"; 
light[5] = "orange";

function flip(whichway){
    //changes the screen color when called
    document.bgColor = light[whichway];   
    stopFlip(); 
}      
function autoFlip(speed) {
    //changes the screen color automatically at an interval set by speed
    document.bgColor = light[color]; 
    if (color < light.length-1) {         
      color++;     
    } else {         
      color=0;     
    }
    t = setTimeout("autoFlip(speed)",speed); 
} 
function doAutoFlip(speed){
    //start the auto-flipping if it's not already going. 
    if (!flipping){         
      flipping=1;         
      autoFlip(speed);     
    }    
} 
function stopFlip() {
     //stop the auto-flipping
    clearTimeout(t);     
    flipping=0; 
}


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