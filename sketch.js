var wall,car;
var speed,weight;

function setup() {
  createCanvas(1200,800);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "grey";
 // wall.debug = true;
  car = createSprite(50,200,50,50);
  car.shapeColor = "red";
  //car.debug = true;
  speed=random(55,90)
  weight=random(400,1500)

  car.velocityX = speed;
  
}

function draw() {
  background(0,0,0);  

  if(wall.X-car.X<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500;
   if (deformation>180){
   car.shapeColour=colour(255,0,0)
   }
   if(deformation<180 && deformation>100){
   car.shapeColour=colour(230,230,0)
   }
   if(deformation<100){
   car.shapeColour=colour(0,255,0)
   }
   
  }
  if (car.y - wall.y < wall.height/2 + car.height/2
   && wall.y - car.y < wall.height/2 + car.height/2){
   car.velocityY = car.velocityY * (-1);
   wall.velocityY = wall.velocityY * (-1);
  }
  drawSprites();
}
