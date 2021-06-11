var bg, drink, brush, eat, gym, sleep, move, astronaut, bath;


function preload(){
  bg=loadImage("images/iss.png");
  drink=loadAnimation("images/drink1.png", "images/drink2.png");
  brush=loadAnimation("images/brush.png");
  //eat=loadAnimation("images/eat1.png", "images/eat2.png");
  gym=loadAnimation("images/gym11.png", "images/gym12.png");
  sleep=loadAnimation("images/sleep.png");  
  move=loadAnimation("images/move1.png", "images/move2.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png")
}

function setup() {
  createCanvas(400, 400);
  
  astronaut=createSprite(200, 200, 10, 10);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale=0.1;
}

function draw() {
  background(bg);
  createEdgeSprites();
  drawSprites();
  
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming");
    astronaut.y=200;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y=300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y=300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    //astronaut.bounceOff(edges)
  }
  
  textSize(20);
  fill("white");
  text("brushing=up arrow", 5, 20);
  text("gym=down arrow", 5, 40);
  text("bath=left arrow",5, 60);
  text("drinking=right arrow", 5, 80);
  text("moving=m key",5, 100);
}

