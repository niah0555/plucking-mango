
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var BoyImage;
function preload(){

  Boy = loadImage("Plucking mangoes/boy.png");


}

	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

 
   tree1=new tree( 500, 500, 50);
   mango1 = new mango(500, 400, 300);
   mango2 = new mango(600, 460, 100);
   mango3 = new mango(400, 420, 120);
   mango4 = new mango(500, 409, 100);
   mango5 = new mango(240, 370, 200);
   mango6 = new mango(400, 450, 160);
   stone1 = new stone(500, 300, 100);
Boy= createSprite(400, 400, 100, 100);
Boy.addImage("Boy", BoyImage);
ground1 = new ground(400, 100, 800, 20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
detectollosion(stone1, mango1);
detectollosion(stone1, mango2);
detectollosion(stone1, mango3);
detectollosion(stone1, mango4);
detectollosion(stone1, mango5);
detectollosion(stone1, mango6);

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
  tree1.display();
 stone1.display();
ground1.display();

  drawSprites();
  
}

function KeyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone1.body,{x:235, y:420})
launcher1.attach(stone1.body);

}
}


function mouseDragged(){
  if(state == "start")
  
      Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  
  }
  
  
  function mouseReleased(){
      slingshot.fly();
      state="fly";
  }
  
