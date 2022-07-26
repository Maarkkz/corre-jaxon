var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var path1

function preload(){
  path = loadImage ("path.png");
  boy = loadAnimation ("jake1.png" , "jake2.png");
 
}

function setup(){
  
  createCanvas(400,400);
 path1 = createSprite (200,200);
path1.addImage (path);
path1.velocityY = 4;
path.scale=1.2;

boy1 = createSprite (180,340,30,30);
boy1.addAnimation ("jake", boy);
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  
boy1.x = World.mouseX;
  edges= createEdgeSprites();
  boy1.collide(edges[3]);
  boy1.collide(leftBoundary);
  boy1.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path1.y > 400 ){
    path1.y = height/2;
  }
  
  drawSprites();
}
