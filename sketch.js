
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
var dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	

	dustbin1 = new Dustbin(550,640,20,80);
	dustbin2 = new Dustbin(610,660,110,20);
	dustbin3 = new Dustbin(660,640,20,80);
	paper = new Paper(100,500,20);

	ground = new Ground(400,680,800,20);
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

	

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	imageMode(CENTER)
	image(dustbinImg,605,585,150,170);
	paper.display();

	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log(paper);
		Matter.Body.applyForce(paper.paper,paper.paper.position,{x:65,y:-85});
	}
}



