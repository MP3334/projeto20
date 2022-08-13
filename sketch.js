
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bloco, bloca, bloc;
var chao;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bloco_options = {
	restitution:0.5,
	friction:0.02,
	frictionAir:0
	}
	var bloca_options = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
	}
	var bloc_options = {
	restitution:0.01,
	friction:1,
	frictionAir:0.3
	} 
	var chao_options = {
	isStatic: true
	} 		
	//Crie os Corpos Aqui.
    bloco = Bodies.circle(220,10,10,bloco_options);
	World.add(world,bloco);

	bloca = Bodies.rectangle(110,50,10, 10,bloca_options);
	World.add(world,bloca);

	bloc = Bodies.rectangle(350,50,10, 10,bloc_options);
	World.add(world,bloc);

	chao = Bodies.rectangle(400, 690, 800,10, chao_options );
	World.add(world, chao);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

 rect(chao.position.x, chao.position.y, 800,10);

 rect(bloca.position.x, chao.position.y, 10,10);

 rect(bloc.position.x, chao.position.y, 10,10);

 ellipse(bloco.position.x, chao.position.y, 10,10 );

}



