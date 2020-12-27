const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var man;
var rain = [];
var thunder = []; 
var drops;
var divhg = 150;
var number;

var height = 900;
var width = 500; // 250 

function preload(){
    
}

function setup(){
  var canvas = createCanvas(500,900)
  engine = Engine.create()
  world = engine.world;

  man = new Man(200,750,270,270);
}

function draw(){
    background("Black")

    Engine.update(engine)
    man.display();

    if(frameCount%60==0){
      rain.push(new Rain(random(width/2-180,width/2+290),random(0,50)))
    }

    for(var i=0; i < rain.length; i++){
      rain[i].display();
    }

    if(frameCount%20==0){
     thunder.push(new Thunder(random(width/2-100,width/2+100),random(width-200,width+200),10))
    }

    for(var k=0; k < thunder.length; k++){
    thunder[k].display()
    }
  
}


