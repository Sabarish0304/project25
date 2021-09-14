
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,600,70);

	ground = new Ground(400,680,800,20);

	left = new Dustbin(550, 620, 20, 100);
	bottom = new Dustbinbase(610, 660, 100, 20);
	right = new Dustbin(670, 620, 20, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  Engine.update(engine);

  paper1.display();
  ground.display();
  
  left.display();
  right.display();
  bottom.display(); 
   
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35});
	}
}

