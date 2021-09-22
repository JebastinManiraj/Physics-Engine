
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball,ball1;
var ground,ground1,wedge;
var angle =60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  
  ground1 = Bodies.rectangle(350,250,100,20,ground_options);
  World.add(world,ground1);
  
  ball1 = Bodies.circle(350,10,20,ball_options);
  World.add(world,ball1);

  wedge = Bodies.rectangle(50,250,100,20,ground_options);
  World.add(world,wedge);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
 


  Matter.Body.rotate(wedge,angle);

  push();

  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle += 0.5;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground1.position.x,ground1.position.y,100,20);
  ellipse(ball1.position.x,ball1.position.y,20);
}

