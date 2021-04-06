 var ball,edges;
 var block1,block2,block3,block4;
 var music;
function setup(){
 createCanvas(800,800) 
 block1=createSprite(100,790,200,20)  
 block1.shapeColor="lime"

 block2=createSprite(300,790,200,20)  
 block2.shapeColor="cyan"

 block3=createSprite(500,790,200,20)  
 block3.shapeColor="red"

 block4=createSprite(700,790,200,20)  
 block4.shapeColor="yellow"

 ball = createSprite(400,400,50,50);
 ball.velocityX=3
 ball.velocityY=5
 
}


function draw(){
 background("white")
 edges=createEdgeSprites(); 
 
 if(ball.isTouching(block1)){
    ball.shapeColor="lime"
 }
 if(ball.isTouching(block2)){
    ball.shapeColor="cyan"
 }
 if(ball.isTouching(block3)){
    ball.shapeColor="red"
 }
 if(ball.isTouching(block4)){
    ball.shapeColor="yellow"
 }
 ball.bounceOff(block4)
 ball.bounceOff(block3)
 ball.bounceOff(block2)
 ball.bounceOff(block1)
 ball.bounceOff(edges)

 drawSprites();


}