var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg,bgImg;
var player, girlmg, girl_running,floatingilses,isleimg,isle2img;
var girl_running2;
var clouds,cloudimg;

var ground;
var coin,coinimg;
var boostitem;

var coinsGroup;
var ilsesGroup;
var  restart;

var score = 0;

function preload(){
  
  girlmg = loadImage("assets/g1.png");
  girl_running = loadImage("assets/g3.png");
 // girl_running2 = loadImage("assets/")
// girl_running2 = loadAnimation("")
  isleimg = loadImage("assets/isle1.png");
  cloudimg = loadImage("assets/clouds.png");
  coinimg = loadImage("assets/coin.png");


  bgImg = loadImage("assets/background.jpg");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 2;
  // adding velocity to bg
  bg.velocityX = -3;


  // making coin sprite
  coin = createSprite(120,50,60,60);
  coin.addImage(coinimg);  
  coin.scale = 0.3;

  // creating a group
  coinsGroup = new Group();


ground = createSprite(700,550,1500,20);
ground.visible = true;



//creating the player sprite
player = createSprite(50, displayHeight-300, 50, 50);
 player.addImage(girlmg)
 //player.addAnimation("running",girl_running)
   player.scale = 1.4;
   player.debug = true
   player.setCollider("rectangle",0,0,40,70)


}

function draw() {
  background(0); 


 // if(gameState === PLAY){
    //move the ground
   // bg.velocityX = -4;
      
    //score = score + Math.round(frameCount/60);
    
  //}
  //else if(gameState === END){
    //stop the ground
    //bg.velocityX = 0;
  //}
    
    // if( islesGroup.isTouching(player)){
      //  gameState = END;
       
 //    }
  
  //else if (gameState === END) {
    //GameOver.visible = true;
    //floatingilses.visible = false;
    
    //set velocity of each game object to 0
    //bg.velocityX = 0;
    //player.velocityY = 0;
    //player.velocityX = 0;
    //floatingilses.velocityX = 0;
    // }


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
//if(keyDown("DOWN_ARROW")||touches.length>0){
 //player.y = player.y+30
//}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30;
 }

if(coinsGroup.isTouching(player)){
score+=1;
coinsGroup[0].destroy();

}
// gravity
player.velocityY = player.velocityY + 0.4;

player.collide(ground)


if (bg.x < 300){
  bg.x = bg.width/2;
}

//release bullets and change the image of shooter to shooting position when space is pressed
//if(keyWentDown("space")){
 
  //player.addImage(girl_running)
 
//}

//player goes back to original standing image once we stop pressing the space bar
//else if(keyWentUp("space")){
  //player.addImage(girlmg)
//}

Spawnislands();
Spawnclouds();
Spawnitem();

drawSprites();
textSize(20);
text("Coin = "+score,20,60);

}

function Spawnislands (){

  if(frameCount %260 === 0 ){
floatingilses = createSprite(width/2+800,400,30,60)
floatingilses.y = Math.round(random(200,400))
floatingilses.addImage(isleimg)
floatingilses.scale = 0.5
floatingilses.velocityX = -3;

floatingilses.lifetime = 600;
 //islesGroup.add(floatingilses)

  }
  

  
}

function Spawnclouds (){

  if(frameCount %90 === 0 ){
clouds = createSprite(1200,100,60,60);
clouds.velocityX = -3;
clouds.addImage(cloudimg)
clouds.scale = 0.5;
clouds.lifetime = 600;

  }

  
  
}
function Spawnitem(){

  if(frameCount %50 ===0 ){
  boostitem = createSprite(800,80,50,50);
  boostitem.x = Math.round(random(100,1000))
  boostitem.velocityY = 3;
  boostitem.addImage(coinimg);  
  boostitem.scale = 0.5;

  // adding sprite in a group
coinsGroup.add(boostitem);

  }

}

//girl image sprite,obsacles image & when touch game over


function reset() {

  gameState = PLAY;
  restart.visible = false;

  //obstaclesGroup.destroyEach();
  coinsGroup.destroyEach();

  //player.changeAnimation("running", girl_running);
  //player.scale = 0.3;

  

  score = 0;
 
}