var anthony,anthonyImg;
var boeing,boeingImg;
var boy,boyImg;
var jet;
var enemyjet;
var bullets,bulletImg;
var coins,coinsImg;
var bg;
var score=0;
var enemyImg;
var anthonyImg1;
var backg,bg1,bg2,background2;
var PLAY=1;
var END=0;
var gameState=PLAY;
var enemyG1,enemyG2,enemyG3,bulletG;


function preload(){
anthonyImg=loadAnimation("soldier1.png","soldier2.png","soldier3.png","soldier4.png","soldier5.png","soldier6.png")
boeingImg=loadImage("jet.png")
boyImg=loadImage("boy.png")
coinImg=loadImage("coin.png")
bg=loadImage("background.jpg")
bulletImg=loadImage("bullet.jpg")
enemyImg=loadImage("enemy jet.png")
anthonyImg1=loadAnimation("soldier1.png")
bg1=loadImage("background.jpg")
bg2=loadImage("sky.jpg")

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  boeing=createSprite(200,300,20,10)
  boeing.shapeColor="red"
  boeing.addImage(boeingImg)
  boeing.scale=0.5;
  

  anthony=createSprite(150,600,30,20)
  anthony.shapeColor="blue"
  anthony.addAnimation("Img",anthonyImg1)
  anthony.addAnimation("Img1",anthonyImg)
  anthony.scale=0.1
   
  enemyG1=new Group();
  enemyG2=new Group();
  enemyG3=new Group();
  bulletG=new Group();

}

  

function draw() {
background(bg1); 

if(gameState===PLAY){

boeing.x=mouseX;
boeing.y=mouseY;


spawnbullets();
if(bulletG.isTouching(enemyG1)){
  enemyG1.destroyEach ()
  bulletG.destroyEach ()
  score=score+10;
  
}
if(bulletG.isTouching(enemyG2)){
  enemyG2.destroyEach ()
  bulletG.destroyEach ()
  score=score+15;
  
}
if(bulletG.isTouching(enemyG3)){
  enemyG3.destroyEach ()
  bulletG.destroyEach ()
  score=score+5;
  
}

var selectenemy=Math.round(random(1,3))

if(World.frameCount%60===0){
  if(selectenemy===1){
    spawnjet1();
  }else if(selectenemy===2){
    spawnjet2()
  }else{
    spawnjet3();
  }
}

if(enemyG1.isTouching(boeing)||enemyG2.isTouching(boeing)||enemyG3.isTouching(boeing)){
  boeing.visible=false;
  gameState=END;
}
}
drawSprites();
if(gameState===END){
  textSize (30)
  fill("red")
  text("YOU LOSE",500,170)
  text("press R to restart",500,220)
  enemyG1.velocityY=0;
  enemyG2.velocityY=0;
  enemyG3.velocityY=0;
if(keyWentDown("R")){
  boeing.visible=true;
  gameState=PLAY;
  score=0;
}

}

textSize(30)
fill("black")
text ("SCORE"+score,200,50)
}
//if(keyDown(LEFT_ARROW)){
  //anthony.x=anthony.x-5;
 
  
//}

//if(keyDown (RIGHT_ARROW)){
  //anthony.x=anthony.x+5;
  //anthony.changeAnimation("Img1",anthonyImg)
//}


//}




  function spawnjet1(){
  if(World.frameCount% 60===0){
    enemyjet1=createSprite(100,50,20,20)
    enemyjet1.addImage(enemyImg)
    enemyjet1.scale=0.2
    enemyjet1.shapeColor="white"
    enemyjet1.velocityX=-5;

    enemyjet1.x=Math.round(random(1000,1200))
   enemyjet1.y=Math.round(random(20,800))

   enemyG1.add(enemyjet1)

   //coins=createSprite(1000,200,20,30)
    //coins.shapeColor="purple"
    //coins.velocityX=-5
    //coins.addImage(coinImg);
    //coins.scale=0.05;

    //coins.y=Math.round(random(20,800))
}
  }
function spawnjet2(){
  if(World.frameCount% 60===0){
    enemyjet2=createSprite(100,50,20,20)
    enemyjet2.addImage(enemyImg)
    enemyjet2.scale=0.2
    enemyjet2.shapeColor="white"
    enemyjet2.velocityX=-5;

    enemyjet2.x=Math.round(random(1000,1200))
   enemyjet2.y=Math.round(random(20,800))

   enemyG2.add(enemyjet2)
}
}

function spawnjet3(){
  if(World.frameCount% 60===0){
    enemyjet3=createSprite(100,50,20,20)
    enemyjet3.addImage(enemyImg)
    enemyjet3.scale=0.2
    enemyjet3.shapeColor="white"
    enemyjet3.velocityX=-5;

    enemyjet3.x=Math.round(random(1000,1200))
   enemyjet3.y=Math.round(random(20,800))

   enemyG3.add(enemyjet3)
  }
}
  function spawnbullets(){
    bullets=createSprite(boeing.x,boeing.y,10,40)
    bullets.visible= false;
    if(keyDown ("SPACE")){
      bullets.visible=true;
      bullets.velocityX=+5;
      bullets.addImage(bulletImg)
      bullets.scale=0.01;
}
bulletG.add(bullets);
  }


 
  

//if (gameState===END){
 // fill("black")
  //textSize(20)
  //text("you won",200,200,20,30)

   //boy=createSprite(300,250,20,30)
  //boy.shapeColor="pink"
  
//}
  //if(bullets.isTouching(enemyjet)){
  //enemyjet.destroy();
  //bullets.destroy();
  //}




  
//if(keyDown(UP_ARROW)){
//boeing.y=boeing.y+5;
//}
 

  
