var canvas; //Will be linked to the canvas in our index.html page
var stage; //Is the equivalent of stage in AS3; we'll add "children" to it
 
// Graphics
//[Background]
 
var bg; //The background graphic
 
//[Title View]
  
 
var main; //The Main Background
var startB; //The Start button in the main menu
var creditsB; //The credits button in the main menu
 
//[Credits]
 
 
var credits; //The Credits screen
 
//[Game View]
 
 
var player; //The player paddle graphic
var ball; //The ball graphic
var cpu; //The CPU paddle
var win; //The winning popup
var lose; //The losing popup

// [Score]

var playerScore; // Main player score
var cpuScore; // evil computer opponent score
var cpuSpeed = 6; // the speed of the CPU paddle, faster means a tougher opponent

// General variables

var xSpeed = 5;
var ySpeed = 5;

// The ticker object that can run code every fraction of second, responsible for driving the main game loop
var tkr = new Object;

// The preloader
var preloader;   // will contain the PreloadJS object
var manifest;    // will hold the list of files we need to load
var totalLoaded = 0;  // will hold how many files we have already loaded
var TitleView = new Container();  // this will hold graphics

// the main function called from the html page

function main() {
	// Link the Canvas
	canvas = document.getElementById('PongStage');
	stage = new Stage(canvas);
	stage.mouseEventsEneabled = true;
	
	// Set the flash plugin for browsers that don't support Sound
	SoundJS.FlashPlugin.BASE_PATH = "assets/";
	if (!SoundJS.checkPlugin(true)) {
		alert("ERROR checking the SoundJS plugin!");
		return;
	}
	
	   manifest = [
	                {src:"bg.png", id:"bg"},
	                {src:"main.png", id:"main"},
	                {src:"startB.png", id:"startB"},
	                {src:"creditsB.png", id:"creditsB"},
	                {src:"credits.png", id:"credits"},
	                {src:"paddle.png", id:"cpu"},
	                {src:"paddle.png", id:"player"},
	                {src:"ball.png", id:"ball"},
	                {src:"win.png", id:"win"},
	                {src:"lose.png", id:"lose"},
	                {src:"playerScore.mp3|playerScore.ogg", id:"playerScore"},
	                {src:"enemyScore.mp3|enemyScore.ogg", id:"enemyScore"},
	                {src:"hit.mp3|hit.ogg", id:"hit"},
	                {src:"wall.mp3|wall.ogg", id:"wall"}
	            ];
	   
	   preloader = new PreloadJS();
	   preloader.installPlugin(SoundJS);
	   preloader.onProgress = handleProgress;
	   preloader.onComplete = handleComplete;
	   preloader.onFileLoad = handleFileLoad;
	   preloader.loadManifest(manifest);
	   
	   // Ticker
	   
	   Ticker.setFPS(30);
	   Ticker.addListener(stage);
}


