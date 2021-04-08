const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,height,1000,20)
    box1 = new Box(700,350,70,70);
    box2 = new Box(910,350,70,70);
pig1=new Pig(805,360)
log1=new Log(805,300,290,PI/2)

box3 = new Box(700,250,70,70);
    box4 = new Box(910,250,70,70);
pig2=new Pig(805,270)
log2=new Log(805,200,290,PI/2)

box5 = new Box(805,150,70,70);
log3=new Log(705,150,150,PI/7)
log4=new Log(905,150,150,-PI/7)

bird1=new Bird(200,200) 
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}