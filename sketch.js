var banana,bananaImage,obstacle,obstacleImage,b,score, obstacleGroup, bananaGroup, monkey, monkeyImage, a, invisible, gameState, rock;


function preload() {
  /* preload your images here of the ball and the paddle */
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png","Monkey_09.png", "Monkey_10.png" );
  b = loadImage("jungle.jpg");
}
function setup() {
  createCanvas(600, 200);
  
  score = 0;
  
  a = createSprite(300, -50);
  a.addImage("abc", b);
  a.scale = 1.25;
  a.velocityX = -5;
  a.visible = false;
  
  monkey = createSprite(70, 160);
  monkey.addAnimation("a", monkeyImage);
  monkey.scale = 0.1;  
  
  invisible = createSprite(50, 190, 100, 2);
  invisible.visible = false;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  gameState = 1;
}

function draw() {
  background("yellow");
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisible);
  if(a.x < 0){
    a.x = 600;
  }
  if(gameState === 1){

    if(keyDown("space")&&monkey.y > 150){
      monkey.velocityY = -12.5;
    }
    a.visible = true;
    
    switch(score){
      case -10: monkey.scale = 0.08;
              break;
      case -20: monkey.scale = 0.06;
              break;  
      case -30: monkey.scale = 0.04;
              break;
      case -40: monkey.scale = 0.02;
              break;
      case -50: monkey.scale = 0;
                a.velocityX = 0;
                obstacleGroup.destroyEach();
                bananaGroup.destroyEach();
                obstacleGroup.setLifetimeEach(-1);
                bananaGroup.setLifetimeEach(-1);
                a.visible = false;
                stroke("red");
                fill("blue");
                strokeWeight(5);
                textSize(50);
                text("Game Over", 175, 100);
              break;        
      case 10: monkey.scale = 0.12;
              break;
      case 0: monkey.scale = 0.1;
              break;        
      case 20: monkey.scale = 0.14;
              break;  
      case 30: monkey.scale = 0.16;
              break;
      case 40: monkey.scale = 0.18;
              break;
      case 50: monkey.scale = 0.2;
              break;
      case 60: monkey.scale = 0.22;
              break;  
      case 70: monkey.scale = 0.24;
              break;
      case 80: monkey.scale = 0.26;
              break;        
      default : break;        
              
    }
    
    crock();
    cbanana();
    spawnObstacle();
    spawnBanana();
    
  }
  drawSprites();
  
}
function spawnBanana(){
  if(frameCount%300=== 0 ){
    banana = createSprite(630, 160);
    banana.addImage("a", bananaImage);
    banana.velocityX = -10;
    banana.scale = 0.06;
    banana.rotation = -20;
    banana.lifetime = 65;
    bananaGroup.add(banana);
  }
}
function spawnObstacle(){
  if(frameCount%80=== 0 ){
    rock = createSprite(630, 160);
    rock.addImage("a", obstacleImage);
    rock.velocityX = -10;
    rock.scale = 0.15;
    rock.lifetime = 65;
    obstacleGroup.add(rock);
  }
}
function crock(){
  if(obstacleGroup.isTouching(monkey)){
    score = score - 10;
    obstacleGroup.destroyEach();
  }
}
function cbanana(){
  if(bananaGroup.isTouching(monkey)){
    score = score + 10;
    bananaGroup.destroyEach();
  }
}
