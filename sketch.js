const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground1;



function setup(){
     createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(240,50,50,50);
box2= new Box(205,300,50,50)
ground1=new ground(200,390,400,30);


  
 
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground1.display();
   box1.display();
box2.display();
}