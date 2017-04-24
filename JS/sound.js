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
// sound.js
"use strict";

var app = app || {};


app.sound = (function(){
    console.log("sound.js module loaded");
	var bgAudio = undefined;
	var effectAudio = undefined;
	
	function init(){
		bgAudio = document.querySelector("#bgAudio");
		bgAudio.volume=0.15;
		effectAudio = document.querySelector("#effectAudio");
		effectAudio.volume = 0.4;
	}

    function playBackground(){
        bgAudio.src = "media/blue_jeans.mp3";
        bgAudio.play();
    }
    function stopBackground(){
		bgAudio.pause();
		bgAudio.currentTime = 0;
	}
	function playEffect(){
		effectAudio.src = "media/single_oil_can.mp3";
		effectAudio.play();
	}
		
	// export a public interface to this module
    return{
    init:init,
    stopBGAudio:stopBackground,
    playEffect:playEffect,
    playBGAudio:playBackground,
};
	// TODO
}());
