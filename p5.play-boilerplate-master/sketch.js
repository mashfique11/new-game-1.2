var car,carImage
var player,allPlayers
var obstacles
var background,backgroundImage,bg
var bullet,bullets
var fuel,fuelImage
var track
var gameState
var allGameObjects,obstacelsGroup
var bullet

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  
  car = createSprite(windowWidth/2,windowHeight-40,20,20)

  
}

function draw() {
  background("red");  
  drawSprites();
  playerMovements()
  spawnObstacles()
  play()
  mousePressed()
  
}

function playerMovements(){
  if(keyIsDown(LEFT_ARROW)){
    car.position.x = car.position.x - 10
  }
  if(keyIsDown(RIGHT_ARROW)){
    car.position.x = car.position.x + 10
  }
  if(keyIsDown(UP_ARROW)){
    car.position.y = car.position.y - 10
  }
  if(keyIsDown(DOWN_ARROW)){
    car.position.y = car.position.y + 10
  }
}

function play(){
 // camera.position.y = car.position.y

 
 

 allGameObjects = new Group()

 //allGameObjects.add(car)
 //allGameObjects.add(obstacles)
 //allGameObjects.add(background)

 

 if(car.y<=windowHeight/2){
  car.y = windowHeight/2
  background.velocitY = -10
  obstacles.velocitY =10
 }
}

function spawnObstacles(){
  if(frameCount % 60 == 0){
  var randX = Math.round(random(windowWidth - windowWidth,windowWidth))
  var randY = Math.round(random(windowHeight-windowHeight, windowHeight/2))
  var randSize = Math.round(random(30,40))
  obstacles = createSprite(randX,randY,randSize,randSize)
  obstacelsGroup =  new Group()
  obstacelsGroup.add(obstacles)

  }
}

function mousePressed(){
  bullet = createSprite(1000,1000,100,100)
}