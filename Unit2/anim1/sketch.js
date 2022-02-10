let x = 0;
let y = 0;
let font;

function preLoad(){
font = loadFont("assets/BADABB.ttf");
}

function setup() {
  createCanvas(600, 400);
  font = loadFont("assets/BADABB.ttf");
  angleMode(DEGREES);
  textAlign(CENTER);
}

function draw() {
  background(0, 128, 128);
  fill(random (255), 0, random(255));
  textSize(random(100, 105));
  push();
  translate(x, 200);
  rotate(y);
  textFont(font);
  text("ZOOM", 0, 0);
  x = x + 5;
  if (x > width) {
    x = 0;
  }
  y += 4;
  pop();
}
