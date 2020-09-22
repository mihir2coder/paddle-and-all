var ball,img,paddle,paddle1
function preload() {
ball=loadImage("ball.png");
paddle=loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball2=createSprite(200,200,10,10);
  paddle1=createSprite(390,200,10,10);
  /* assign the images to the sprites */
  ball2.addImage("ball1",ball);
  paddle1.addImage("p",paddle);
  
  /* give the ball an initial velocity of 9 in the X direction */
ball2.velocityX=3
  

}

function draw() {
  background(205,153,0);
 var edges=createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball2.bounceOff(paddle1,randomVelocity)
  ball2.bounceOff(edges[0]); 
  ball2.bounceOff(edges[2]); 
  ball2.bounceOff(edges[3]);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle1.y=paddle1.y-20
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle1.y=paddle1.y+20
  }
  drawSprites();
  
}

function randomVelocity()
{
ball2.velocityY=random(1,7);
}

