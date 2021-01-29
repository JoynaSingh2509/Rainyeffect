const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function preload(){
}

function setup(){
  createCanvas(400,700) 
  engine=Engine.create();
  world=engine.world;

  rain=new Drop(200,200,14,30);
  man=new Umbrella(200,560,300,300);
 
}

function draw(){
    background(0);
    Engine.update(engine);

    rain.display();
    man.display();
}   

