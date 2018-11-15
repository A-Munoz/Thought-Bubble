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
var app = app || {};


myKeys.keydown = [];


document.getElementById('pointer').onclick = function(e){
    app.main.toolState = app.main.TOOL_STATE.POINTER
}
document.getElementById('move').onclick = function(e){
    app.main.toolState = app.main.TOOL_STATE.HAND
}
document.getElementById('add').onclick = function(e){
    app.main.toolState = app.main.TOOL_STATE.NEWBUBBLE
}
document.getElementById('minus').onclick = function(e){
    app.main.toolState = app.main.TOOL_STATE.DELETINGBUBBLE
}
document.getElementById('shape').onclick = function(e){
    if(app.main.BUBBLE.shape === 'circle'){
        document.getElementById('sImg').src = "media/squareCircle.svg"
        app.main.BUBBLE.shape = 'rect'
    }
    else app.main.BUBBLE.shape = 'circle'
}
document.getElementById('font').onclick = function(e){
    
}
document.getElementById('line').onclick = function(e){
    
}
document.getElementById('minus').onclick = function(e){
    
}

window.addEventListener("keydown",function(e){
	//console.log("keydown=" + e.keyCode);
	myKeys.keydown[e.keyCode] = true;
});
	
window.addEventListener("keyup",function(e){
	//console.log("keyup=" + e.keyCode);
	myKeys.keydown[e.keyCode] = false;
	
	// pausing and resuming
    if(e.keyCode == 69){
        
    }
    if (app.main.toolState == app.main.TOOL_STATE.POINTER){
     //   console.log(app.main.BUBBLE.currentSelected);
        if(!(app.main.BUBBLE.currentSelected == undefined)){
            
             if(app.main.BUBBLE.currentSelected.text == 'Type Here....'){
                    app.main.BUBBLE.currentSelected.text = '';
                }
            
            console.log(app.main.BUBBLE.currentSelected)
            if(e.keyCode == 8){
                var bText = app.main.BUBBLE.currentSelected.text
                bText = bText.split('');
                bText.pop();
                app.main.BUBBLE.currentSelected.text = '';
                for(var n = 0; n < bText.length; n++) {
                    
                    app.main.BUBBLE.currentSelected.text += bText[n] + '';
                }
            }
            else if(e.keyCode == 9){
               app.main.BUBBLE.currentSelected.text += '    ';
            }
            else if(e.keyCode == 32){
               app.main.BUBBLE.currentSelected.text += ' ';
            }
            else{
                var char = String.fromCharCode(e.keyCode);
                app.main.BUBBLE.currentSelected.text += char;
                
            }
                app.main.addText(app.main.BUBBLE.currentSelected);
        }
	}
});