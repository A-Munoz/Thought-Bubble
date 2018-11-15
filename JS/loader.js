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
   // app.sound.init();
   // app.main.sound = app.sound;
    app.main.init();
    
//CANVAS CONTROLLS
/*document.getElementById('pointer').addEventListener('click', function(e){
   app.main.toolState = app.main.TOOL_STATE.POINTER;
})
document.getElementById('plusMin').addEventListener('click', function(e){
    app.main.toolState = app.main.TOOL_STATE.NEWBUBBLE;
})
document.getElementById('color').addEventListener('click', function(e){
    app.main.toolState = app.main.TOOL_STATE.DELETINGBUBBLE;
})
document.getElementById('shape').addEventListener('click', function(e){
   
})
document.getElementById('font').addEventListener('click', function(e){
   
})*/
   /* document.getElementById("soundBox").onclick = function(e){
       if(e.target.checked){
           //app.sound.playBGAudio();
           //app.sound.playBGAudio();
         //  app.main.music = true;
       }
      else{
          //app.sound.stopBGAudio();
        //  app.main.music = false;
      }
    };
    */
  // window.addEventListener('resize',app.main.canvasSize(app.main.canvas), false);
};
