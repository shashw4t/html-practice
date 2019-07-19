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