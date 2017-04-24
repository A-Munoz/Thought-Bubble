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
//keys.js
"use strict";

var myKeys = {};


myKeys.keydown = [];



window.addEventListener("keydown",function(e){
	//console.log("keydown=" + e.keyCode);
	myKeys.keydown[e.keyCode] = true;
});
	
window.addEventListener("keyup",function(e){
	//console.log("keyup=" + e.keyCode);
	myKeys.keydown[e.keyCode] = false;
	
	// pausing and resuming
	var char = String.fromCharCode(e.keyCode);
    if (app.main.toolState == app.main.TOOL_STATE.POINTER){
     //   console.log(app.main.BUBBLE.currentSelected);
        if(!(app.main.BUBBLE.currentSelected == undefined)){
          /*  if(e.keyCode == 8){
                app.main.removeText(app.main.BUBBLE.currentSelected);
            }*/
            
                app.main.addText(app.main.BUBBLE.currentSelected,char);
        }
	}
});