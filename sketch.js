
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,lwall,rwall,bwall,paper;

function preload(){


}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,690,1500,20);

	paper = new Paper(200,600);

	lwall = new Dustbin(300,630,10,80);
	rwall = new Dustbin(1280,630,10,80);
	bwall = new Dustbin(1190,670,190,10);




	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

   ground.display();
   paper.display();
  // lwall.display();
   //rwall.display();
   bwall.display();

  
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:80,y:-85});

	}

}

