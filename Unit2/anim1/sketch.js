let x = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 128, 128);
  noStroke();
  fill(128,0,random(128,255));
  rect(x, x, 100, 100);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
}
