var movingRect,fixedRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(500,200,50,50)
movingRect.shapeColor="black"
fixedRect.shapeColor="blue"
fixedRect.debug=true
movingRect.debug=true
}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX
  movingRect.y=mouseY 
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="yellow"
fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="black"
fixedRect.shapeColor="blue"
  }
  drawSprites();
}