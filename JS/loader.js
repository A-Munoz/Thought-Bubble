/*////////////////////////////////////////////
//Project 2 - Mind Map program(Thought Bubble)
//Created: 11/5/2016 - Alexia Munoz
//Last Edit: 11/11/2016
//Due Dates: 11/11/2016
//      Prototype 1: 10/26/2016
//      Prototype 2: 10/31/2016
//      Final Version: 11/11/2016
////////////////////////////////////////////*/

//Loader JS - Loads app and appropirate javascript files
"use strict";


var app = app || {};


window.onload = function(){
	console.log("window.onload called");
    app.sound.init();
    app.main.sound = app.sound;
    app.main.init();
    document.querySelector("#toolSelection").onchange = function(e){
				switch(e.target.value){
                 case 'pointer':
                     app.main.toolState =  app.main.TOOL_STATE.POINTER;
                     break;
                 case 'add':
                     app.main.toolState = app.main.TOOL_STATE.NEWBUBBLE;
                     break;
                case 'delete':
                     app.main.toolState = app.main.TOOL_STATE.DELETINGBUBBLE;
                     break;
                 default:
                     app.main.toolState = app.main.TOOL_STATE.POINTER;
                     break;
             }
			};
    document.querySelector("#colorSelection").onchange = function(e){
             app.main.BUBBLE.sColor = app.main.color[e.target.value];
             };
    document.querySelector("#shapeSelection").onchange = function(e){
             app.main.BUBBLE.shape = e.target.value;
             }; 
    document.querySelector("#lineWeight").onchange = function(e){
            app.main.BUBBLE.sWeight = e.target.value;
        };
    document.querySelector("#soundBox").onchange = function(e){
       if(e.target.checked){
           app.sound.playBGAudio();
           app.main.music = true;
       }
      else{
          app.sound.stopBGAudio();
          app.main.music = false;
      }
    };
    
  // window.addEventListener('resize',app.main.canvasSize(app.main.canvas), false);
};
