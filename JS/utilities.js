 /* 
////////////////////////////////////////////
//Project 2 - Mind Map program(Thought Bubble)
//Created: 10/22/2016 - Alexia Munoz
//Last Edit: 11/12/2016
//Due Dates: 11/11/2016
//      Prototype 1: 10/26/2016
//      Prototype 2: 10/31/2016
//      Final Version: 11/12/2016
////////////////////////////////////////////
 */
// utilities.js		
"use strict";

function getMouse(e){
	var mouse = {} // make an object
	mouse.x = e.pageX - e.target.offsetLeft;
	mouse.y = e.pageY - e.target.offsetTop;
	return mouse;
};

 // FULL SCREEN MODE
function requestFullscreen(element) {
	if (element.requestFullscreen) {
	  element.requestFullscreen();
	} else if (element.mozRequestFullscreen) {
	  element.mozRequestFullscreen();
	} else if (element.mozRequestFullScreen) { 
	  element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
	  element.webkitRequestFullscreen();
	}
};

function pointInsideCircle(x,y,I){
    var dx=x-I.x;
    var dy=y-I.y;
    return dx*dx+dy*dy<=I.radius*I.radius;
};
function circlesIntersect(c1,c2){
    var dx=c1.x-c2.x;
    var dy=c1.y-c2.y;
    var distance = Math.sqrt(dx*dx + dy*dy);

    return distance < c1.radius + c2.radius +30 ;
};

function getRandomUnitVector(){
	var x = getRandom(-1,1);
	var y = getRandom(-1,1);
	var length = Math.sqrt(x*x + y*y);
	if(length == 0){ // very unlikely
		x=1; // point right
		y=0;
		length = 1;
	} else{
		x /= length;
		y /= length;
	}
	
	return {x:x, y:y};
};

function clamp(val, min, max){
	return Math.max(min, Math.min(max, val));
};







