var bullet, wall;
var thickness, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed= random(30,100);
  weight= random(700,2500);
  thickness= random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor= color(255,0,102);
  bullet.velocityX= speed;

  wall= createSprite(1100,200,thickness,height/2);
  wall.shapeColor= color(80,80,80);

}

function draw() {
  background("black"); 
  
 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage= 0.5*weight*speed* speed/(thickness* thickness*thickness);

   if (damage>10){
     wall.shapeColor= color(255,0,0);
   }

   if (damage<10){
     wall.shapeColor= color(0,255,0);
  }
  
 }

 hasCollided();
 
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge= lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

