let x = 0;
let y = 0;
let font;

function preLoad(){
font = loadFont("assets/BADABB.TTF");  
}

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  textAlign(CENTER);
}

function draw() {
  background(0, 128, 128);
  fill(random (255), 0, random(255));
  textSize(random(70, 75));
  textFont(font);
  push();
  translate(x, 200);
  rotate(y);
  text("ZOOM", 0, 0);
  x = x + 5;
  if (x > width) {
    x = 0;
  }
  y += 4;
  pop();
}
