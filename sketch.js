var astronaut,sleep,bath,brush,drink,gym,eat,move;
var iss,issImg;

function preload(){
issImg=loadImage("images/iss.png");
sleep=loadAnimation("images/sleep.png");
bath=loadAnimation("images/bath1.png","images/bath2.png");
brush=loadAnimation("images/brush.png");
drink=loadAnimation("images/drink1.png","images/drink2.png");
eat=loadAnimation("images/eat1.png","images/eat2.png");
gym=loadAnimation("images/gym1.png","images/gym2.png");
move=loadAnimation("images/move.png");


}


function setup() {
  createCanvas(800,800);

  iss=createSprite(400,400,50,50);
  iss.addImage(issImg);
  iss.scale=0.2;
  
  astronaut=createSprite(400,400);
  astronaut.addAnimation("astro",sleep);
  astronaut.scale=0.1;

  wall1=createSprite(400,800,800,10);
  wall1.visible=false;
  wall2=createSprite(800,400,10,800);
  wall2.visible=false;
  wall3=createSprite(400,0,800,10);
  wall3.visible=false;
  wall4=createSprite(0,400,10,800);
  wall4.visible=false;

}

function draw() {
  background(0);
  
  astronaut.bounceOff(wall1);
  astronaut.bounceOff(wall2);
  astronaut.bounceOff(wall3);
  astronaut.bounceOff(wall4);
  

  if(keyDown("M")){
    astronaut.addAnimation("astro",move);
    astronaut.changeAnimation("astro");
    astronaut.velocityX= 2;
    astronaut.velocityY= 2;
  }
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("astro",brush);
    astronaut.changeAnimation("astro");
    astronaut.velocityY=0;
    astronaut.velocityX=0;
    astronaut.y=500;
    astronaut.x=400;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("astro",gym);
    astronaut.changeAnimation("astro");
    astronaut.velocityY=0;
    astronaut.velocityX=0;
    astronaut.y=500;
    astronaut.x=400;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("astro",bath);
    astronaut.changeAnimation("astro");
    astronaut.velocityY=0;
    astronaut.velocityX=0;
    astronaut.y=500;
    astronaut.x=400;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("astro",eat);
    astronaut.changeAnimation("astro");
    astronaut.velocityY= 3;
    astronaut.velocityX=-3;
  }

  drawSprites();
}