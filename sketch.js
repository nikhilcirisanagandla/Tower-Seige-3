const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine

var polygon,polygonImage,slingShot
var backgroundImg
var score = 0;
var bg = "bg1.jpg"
function preload(){
getBackgroundImg();
polygonImage = loadImage("polygon.png")



}

function setup() {
 createCanvas(800,400);
engine=Engine.create()
world=engine.world

 ground = new Ground(450,390,900,20);
 stand1 = new Ground(390,300,250,10);
 stand2 = new Ground(700,200,200,10);

 block1 = new Block(300,275,30,40);
 block2 = new Block(330,275,30,40);
 block3 = new Block(360,275,30,40);
 block4 = new Block(390,275,30,40);
 block5 = new Block(420,275,30,40);
 block6 = new Block(450,275,30,40);
 block7 = new Block(480,275,30,40);
 block8 = new Block(330,235,30,40);
 block9 = new Block(360,235,30,40);
 block10 = new Block(390,235,30,40);
 block11 = new Block(420,235,30,40);
 block12 = new Block(450,235,30,40);
 block13 = new Block(360,195,30,40);
 block14 = new Block(390,195,30,40);
 block15 = new Block(420,195,30,40);
 block16 = new Block(390,155,30,40);

 blocks1 = new Block(640,175,30,40);
 blocks2 = new Block(670,175,30,40);
 blocks3 = new Block(700,175,30,40);
 blocks4 = new Block(730,175,30,40);
 blocks5 = new Block(760,175,30,40);
 blocks6 = new Block(670,135,30,40);
 blocks7 = new Block(700,135,30,40);
 blocks8 = new Block(730,135,30,40);
 blocks9 = new Block(700,95,30,40);




polygon = Bodies.circle(50,200,20)
World.add(world,polygon)

slingShot = new Sling(this.polygon,{x:100,y:200})

}

function draw() {
    if(backgroundImg)
 background(backgroundImg); 
 Engine.update(engine)

 text("Score: "+score, 750,40);

ground.display()
stand1.display()
stand2.display()

block1.score()
block2.score()
block3.score()
block4.score()
block5.score()
block6.score()
block7.score()
block8.score()
block9.score()
block10.score()
block11.score()
block12.score()
block13.score()
block14.score()
block15.score()
block16.score()

blocks1.score()
blocks2.score()
blocks3.score()
blocks4.score()
blocks5.score()
blocks6.score()
blocks7.score()
blocks8.score()
blocks9.score()

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()

blocks1.display()
blocks2.display()
blocks3.display()
blocks4.display()
blocks5.display()
blocks6.display()
blocks7.display()
blocks8.display()
blocks9.display()



imageMode(CENTER)
image(polygonImage,polygon.position.x,polygon.position.y,30,30);
slingShot.display()
}

function mouseDragged(){
 Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
 
 }
 
 
 function mouseReleased(){
 slingShot.fly()
 
 }

 async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "bg1.jpg";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

