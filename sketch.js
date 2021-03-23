const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1 ,box1 , box2 ;
var bg
var ball1,ball2

function preload(){
bg=loadImage("sprites/cls.jpg")

}




function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;
  
    ground1 = new ground(200,695,1000,40)
  ground1.width/2
    ball2=new ball(200,200)
   
    
}

function draw(){
  Engine.update(engine);
    background(bg);
    
   
   
      
      stroke(50)
      textSize(100)
text("2X1=2",200,200)



    ground1.display();
   
  ball2.display();
    
}


function keyPressed(){
if(keyCode===RIGHT_ARROW){

  ball2.x = ball2.x+10;
}


}