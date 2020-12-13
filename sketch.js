
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime= 0;
var bananaGroup;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
  
monkey = createSprite(50,530,10,10);
monkey.addAnimation("monkey", monkey_running);
monkey.scale= 0.2;

  ground= createSprite(300,580,1200,40);
  ground.velocityX= -10;
  
  bananaGroup = new Group();
  rockGroup = new Group();
  stroke("black")
  fill("black")
  textSize(20);
}


function draw() {
  background("white");
  
  
  if(ground.x <0){
    
    ground.x= 300
  }
  if(keyDown("space")){
    monkey.velocityY= -10;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground)
  spawnbanana()
  spawnObstacles()
  survivalTime = survivalTime + Math.round(getFrameRate()/60)
  drawSprites();
  
  text("SURVIVAL TIME:"+ survivalTime, 50,100);
}

function spawnbanana(){
  
if(frameCount%80 === 0)  {
var banana = createSprite(600,Math.round(random(20,500)),20,20);

banana.addImage("label1",bananaImage);  

banana.velocityX = -6;  
banana.scale= 0.2;
bananaGroup.add(banana);
} 
    
}

function spawnObstacles(){
  if(frameCount%300 === 0)  {
var rock = createSprite(610,520,20,20);

rock.addImage("label1",obstaceImage);  

rock.velocityX = -6;  
rock.scale= 0.2;
rockGroup.add(rock);
} 
}


