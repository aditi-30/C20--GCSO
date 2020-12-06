
var car
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  //speed=random(55,90);
  //=random(400,1500);
  speed=55
  weight=400


  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor="grey"

  car=createSprite(50, 200, 50, 50);
  car.shapeColor="red"

  

  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
console.log(deformation) 
if(deformation>180)
{
  car.shapeColor="red"
}
if(deformation<=180 && deformation>=100)
{
  car.shapeColor="yellow"

if(deformation<=100)
{
  car.shapeColor="green"
}
  }
}
  drawSprites();
}
