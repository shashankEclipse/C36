var database;
var gameState = 0;
var playerCount;
var form;
var game;
var player;

function setup(){
    createCanvas(400,400);
    
    database = firebase.database();
    //database sets the location
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
}


