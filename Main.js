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
