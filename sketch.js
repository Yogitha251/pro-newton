
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 bob1 = new bob(220,500,80);
 bob2 = new bob(300,500,80);
 bob3 = new bob(380,500,80);
 bob4 = new bob(460,500,80);
 bob5 = new bob(540,500,80);

 roof1 = new roof(380,150,440,20);

 rope1 = new rope(bob1.body,roof1.body,0)

	//Create the Bodies Here.

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();
  drawSprites();
 
}



