var snakeGroup;
var score = 0 ;
function setup() {
  createCanvas(600,600);
  rabbit = createSprite(50,550,30,30); 
  edges = createEdgeSprites();
  brick1 = createSprite (300,200,100,30);
  brick1.velocityX = +11;  
  brick2 = createSprite (200,350,100,30);
  brick2.velocityX = -8; 
  brick3 = createSprite (100,450,100,30);
  brick3.velocityX = +10;  
  carrot = createSprite(550,50,30,30)
  rabbit.shapeColor = "pink";
  brick1.shapeColor = "brown";
  brick2.shapeColor = "brown";
  brick3.shapeColor = "brown";
  carrot.shapeColor = "red";
  snakeGroup = new Group();
}

function draw() {
  background("black");
  rabbit.bounceOff(edges[0]);
  rabbit.bounceOff(edges[1]);
  rabbit.bounceOff(edges[2]);
  rabbit.bounceOff(edges[3]);
  brick1.bounceOff(edges[0]);
  brick1.bounceOff(edges[1]);
  brick2.bounceOff(edges[0]);
  brick2.bounceOff(edges[1]);
  brick3.bounceOff(edges[0]);
  brick3.bounceOff(edges[1]);
  if (keyDown("up")){
    rabbit.y = rabbit.y - 4;
} 
  if (keyDown("down")){
  rabbit.y = rabbit.y + 4 ;
}
  if (keyDown("left")){
  rabbit.x = rabbit.x -4 ;
}
  if (keyDown("right")){
  rabbit.x = rabbit.x +4 ;
}
if (rabbit.isTouching(brick1)){
  rabbit.x = 50;
  rabbit.y = 550 ;
}
if (rabbit.isTouching(brick2)){
  rabbit.x = 50;
  rabbit.y = 550 ;
}
if (rabbit.isTouching(brick3)){
  rabbit.x = 50;
  rabbit.y = 550 ;
}
if (rabbit.isTouching(carrot)){
  textSize (50) ;
  text("YOU WIN !", 70,550);
  generateWorms = null;
}
  stroke("blue");
  generateWorms();
  for (var i = 0 ; i<(snakeGroup).length ; i++){
    var temp = (snakeGroup).get(i);
    if(rabbit.isTouching(temp)){
      rabbit.x = 50;
      rabbit.y = 550;
      score++;
    }
  }
  drawSprites();
}
function generateWorms(){
  if(frameCount%30 == 0){

    snake = createSprite(500,random(70,520),random(30,120),5);
    snake.shapeColor = "green"; 
    snake.velocityX = -8;
    snake.velocityY =  0;
    snakeGroup.add(snake);
  }
}
