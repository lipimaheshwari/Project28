
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){

	boy=loadImage("boy.png");

}

function setup() {

	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
	mango2=new mango(1010,100,30);
	mango3=new mango(1050,150,30);
	mango4=new mango(1150,160,30);
	mango5=new mango(910,200,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(1110,230,30);
	mango8=new mango(1200,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	constraint = new Const(stoneObj.body,{x:190,y:423});

	detectcollosion(stoneObj,mango1);
	detectcollosion(stoneObj,mango2);
	detectcollosion(stoneObj,mango3);
	detectcollosion(stoneObj,mango4);
	detectcollosion(stoneObj,mango5);
	detectcollosion(stoneObj,mango6);
	detectcollosion(stoneObj,mango7);
	detectcollosion(stoneObj,mango8);

	Engine.run(engine);

}

function draw() {

   background(230);
//    rectMode(CENTER);
   drawSprites();

  //Add code for displaying text here!
  textSize(25);
  text("Press Space to get a second Chance to Play",50 ,50);

  image(boy ,150,340,200,300);
  
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  groundObject.display();

  constraint.display();

  detectcollosion(stoneObj,mango1);
  detectcollosion(stoneObj,mango2);
  detectcollosion(stoneObj,mango3);
  detectcollosion(stoneObj,mango4);
  detectcollosion(stoneObj,mango5);
  detectcollosion(stoneObj,mango6);
  detectcollosion(stoneObj,mango7);
  detectcollosion(stoneObj,mango8);

}

function mouseDragged(){
    Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    constraint.fly();
}

function detectcollosion(Sn,Mn){
	var mangoBodyPosition= Mn.body.position
	var stoneBodyPosition= Sn.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Mn.r+Sn.r)
	{
		Body.setStatic(Mn.body,false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Body.setPosition(stoneObj.body, {x:190,y:423})
		constraint.attach(stoneObj.body)
	}
}