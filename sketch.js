var bg;
var bgImage;
var flappyImage;
var bird;
var Obstacle1;
var Obstacle2;
function preload(){

  bgImage=loadImage("Background2.png");
  flappyImage=loadAnimation("flappy1.png","flappy2.png");
  Obstacle1=loadImage("obstacle1.png");
  Obstacle2=loadImage("obstacle2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
   bg.addImage("background",bgImage);
   bg.x=bg.width/2;
   bg.velocityX=-5;
   bird=createSprite(300,displayHeight/2-100,30,30);
   bird.addAnimation("bird",flappyImage);
   bird.scale=0.3;
   
}


function draw() {
  background("green");  

  if(bg.x<0){
  bg.x=windowWidth/2;
  
  }
  spawnObstacle();
  spawnObstacle1();
   if(keyIsDown(UP_ARROW)){
   bird.velocityY=-13;
   }

   bird.velocityY=bird.velocityY+0.8;
  drawSprites();
}

function spawnObstacle(){
  if(frameCount%100===0){
   var Obstacle=createSprite(windowWidth,150,60,110);
    Obstacle.velocityX=-5;
   Obstacle.addImage(Obstacle1);
  }

}

function spawnObstacle1(){
  if(frameCount%100===0){
   var Obstacle=createSprite(windowWidth,displayHeight-200,60,110);
    Obstacle.velocityX=-5;
   Obstacle.addImage(Obstacle2);
  }

  



}