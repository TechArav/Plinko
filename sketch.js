const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,division;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world

  //createSprite(400, 200, 50, 50);
  ground=new Ground(400,350,50,50);
  division=new Division(10,400,50,300);
}

function draw() {
  background(0);  
  Engine.update(engine)

  ground.display();
  division.display();
  
  drawSprites();
}