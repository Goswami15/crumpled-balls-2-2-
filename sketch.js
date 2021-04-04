const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var ground1;
var bin1;
var bin2, bin3;
function preload() {}

function setup() {
  createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;

  ball1 = new Ball();
  ground1 = new Ground();

  bin1 = new Bin(850, 220, 10, 100);
  bin2 = new Bin(1050, 220, 10, 100);
  bin3 = new Bin(950, 270, 210, 10);
}

function draw() {
  Engine.update(engine);

  background(0);

  ground1.display();

  bin1.display();
  ball1.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball1.body, ball1.body.position, {
      x: 130,
      y: -130,
    });
  }
}
