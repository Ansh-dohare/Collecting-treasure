var PLAY = 1;
var END = 0;
var gameState = 1;
var sword, swordImage,  gameoverImage;
var fruitsGroup, enemyGroup, fruit, enemyImage ;
var fruit1Image,fruit2Image, fruit3Image, fruit4Image,fruit1,fruit2,fruit3,fruit4;

var swooshSound, gameoverSound;


function preload(){
  
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  enemyImage = loadAnimation("alien1.png", "alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png");
  
  swooshSound = loadSound("knifeSwooshSound.mp3");
  gameoverSound = loadSound("gameover.mp3");


}

function setup(){
  createCanvas(400,400);

  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
 

  fruitGroup = createGroup();
  enemyGroup = createGroup();

  score = 0;


}

function draw(){
background("skyblue");

  
  if(gameState === PLAY){
  sword.x = World.mouseX;
  sword.y = World.mouseY;
    
 var select_item = Math.round(random(1,5));
   if(World.frameCount % 100 === 0){
      if(select_item == 1){
        fruit1()
      } else if(select_item == 2){
        enemy()
      } else if(select_item == 3){
        fruit2()
      } else if(select_item == 4){
        fruit3()
      }else if(select_item == 5){
        fruit4()
      }
 }   
 if(sword.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
    score = score+1;
  }
  
else if(sword.isTouching(enemyGroup)){
     
  enemyGroup.destroyEach();
  gameState = END;
    fruitGroup.destroyEach();
 }
  

  
  
  
  }


if(gameState === END){
  
 text("press 'R' to restart",150,250);
  enemyGroup.setVelocityXEach = 0;
  fruitGroup.setVle0cityXEach = 0; 
  sword.addImage(gameoverImage);
  sword.scale = 1.8;
  sword.x = 200;
  sword.y = 200; 
  
  if(keyDown("r")){
    gameState = PLAY;
    score = 0;
    sword.addImage(swordImage);
    sword.scale = 0.7;
  }
  
  
   
}  
  
drawSprites();

text("score: " + score,300,30);

  
}

function enemy(){
  var enemy = createSprite(400,Math.round(random(30,200)),10,10)
  enemy.addAnimation("enemy_blinking", enemyImage);
  enemy.velocityX = -7;
  enemy.scale = 0.75;
  enemy.lifetime = 150;
  enemyGroup.add(enemy);
  
}


function fruit1(){
  
var  fruit1 = createSprite(400, Math.round(random(30,200)),10,10);
  fruit1.addImage(fruit1Image);
  fruit1.velocityX = -5;
  fruit1.lifetime = 150;
  fruit1.scale = 0.2;
  fruitGroup.add(fruit1);
}

function fruit2(){
  var fruit2 = createSprite(400, Math.round(random(300,200)),10,10);
  fruit2.addImage(fruit2Image);
  fruit2.velocityX = -5;
  fruit2.lifetime = 150;
  fruit2.scale = 0.2;
  fruitGroup.add(fruit2);
}

function fruit3(){
  var fruit3 = createSprite(400,Math.round(random(30,200)),10,10);
  fruit3.addImage(fruit3Image);
  fruit3.velocityX = -5;
  fruit3.lifetime = 150;
  fruit3.scale = 0.2;
  fruitGroup.add(fruit3);
}

function fruit4(){
  var fruit4 = createSprite(400,Math.round(random(30,200)),10,10);
  fruit4.addImage(fruit4Image);
  fruit4.lifetime = 150;
  fruit4.velocityX = -5;
  fruit4.scale = 0.2;
  fruitGroup.add(fruit4);
}





