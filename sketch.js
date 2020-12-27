
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Boy,BoyIMG;
var maxDrops=100;
var Drops=[];
var t1,t2,t3,t4;

function preload()
{

	t1=loadImage("1.png")
	t2=loadImage("2.png")
	t3=loadImage("3.png")
	t4=loadImage("4.png")
	
	BoyIMG=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png",)
}


function setup() {
	createCanvas(430,800);


	engine = Engine.create();
	world = engine.world;

	Boy=createSprite(210,650,10,10)
	Boy.addAnimation("Walk",BoyIMG)
	Boy.scale=0.4;


    Ub=new umbrella(214,585,60)


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
 

  if (frameCount % 60 === 0){
	var thunder = createSprite(200,180,10,10);

	
		var rand = Math.round(random(1,4));
	 switch(rand) {
	   case 1: thunder.addImage(t1);
			   break;
	   case 2: thunder.addImage(t2);
			   break;
	   case 3: thunder.addImage(t3);
			   break;
	   case 4: thunder.addImage(t4);
			   break;
	   default: break;
	 }
	 thunder.scale = 0.6;

	 thunder.lifetime=10;

  }

















  drawSprites();
  for (var i = 0; i < Drops.length; i++) {
	

	Drops[i].display();
 }

 if (frameCount%1===0) {
	Drops.push(new drops(random(0,400),0,3))
}




 
 
}



