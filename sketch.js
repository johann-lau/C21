const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var arrow1, arrow2
var box1, box2, box3, box4;
var ball, arrow1, arrow2;
let engine;
let world;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
	box1 = new makeRect(225, 375, 0);
	box2 = new makeRect(375, 175, PI/2);
	box3 = new makeRect(175, 25, 0);
	box4 = new makeRect(25, 225, PI/2);

	ball_options = {density:1, restitution:0.1}
	ball = Bodies.circle(200,200,20,ball_options);
	World.add(world, ball);

	arrow1 = createImg("Arrow1.png");
	arrow1.position(5,5);
	arrow1.size(40,40);
	arrow1.mouseClicked(vforce);

	arrow2 = createImg("Arrow2.png");
	arrow2.position(355,5);
	arrow2.size(40,40);
	arrow2.mouseClicked(hforce);
}

function draw() {
  background(51);
	box1.show();
	box2.show();
	box3.show();
	box4.show();
	ellipse(ball.position.x, ball.position.y, 20)
  Engine.update(engine);
}

function vforce() {
	Body.applyForce(ball, {x:0, y:0}, {x:0, y:-50});
}

function hforce() {
	Body.applyForce(ball, {x:0, y:0}, {x:3, y:0});
}

//Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});