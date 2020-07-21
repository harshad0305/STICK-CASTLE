function setup() {
  createCanvas(400,400);
 
}

function draw() {
  background(0);  
  rect(70,200,40,200);
  rect(270,200,40,200);
  rect(110,250,40,150);
  rect(230,250,40,150);
  rect(150,300,80,100);
  rect(55,150,10,300);
  rect(315,150,10,300);
  triangle(65,200,95,150,115,200);
  triangle(315,200,300,150,260,200);
  triangle(190,250,150,300,230,300);
  drawSprites();
}