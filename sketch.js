let tileCountX = 10;
let tileCountY = 10;
let tileWidth, tileHeight;
let count = 0;
let colorStep = 15;
let circleCount;
let endSize, endOffset;
let actRandomSeed = 0;
let sketch;

function setup() { 
  sketch = createCanvas(500,500);
  sketch.parent("p5");
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
} 

function draw() { 
  smooth();
  noFill();
  stroke(0, 128);
  background(random(100,200),random(100,200),random(100,200)); 
  randomSeed(actRandomSeed);
  push();
  translate((width/tileCountX)/2, (height/tileCountY)/2);
  circleCount = mouseX/30 + 1;
  endSize = map(mouseX, 0,width, tileWidth/2.0,0);
  endOffset = map(mouseY, 0,height, 0,(tileWidth-endSize)/2);
  pop();
  for (let gridY=0; gridY<=tileCountY; gridY++) {
    for (let gridX=0; gridX<=tileCountX; gridX++) {  
      push();
      translate(tileWidth*gridX, tileHeight*gridY);
      scale(1, tileHeight/tileWidth);

      var toggle = int(random(0,4));
      if (toggle == 0) rotate(-HALF_PI);  
      if (toggle == 1) rotate(0);  
      if (toggle == 2) rotate(HALF_PI);  
      if (toggle == 3) rotate(PI);  
      
      // draw module
      for(let i=0; i<circleCount; i++) {
       let diameter = map(i, 0,circleCount-1, tileWidth,endSize);
       let offset = map(i, 0,circleCount-1, 0,endOffset);
        ellipse(offset, 0, diameter,diameter);
      }
      pop();
    }
  }
} 

function mousePressed() {
  actRandomSeed = int(random(100000));
}

function keyTyped() {
  if (key == 'g') save("P_2_1_3_01.jpg");
}
