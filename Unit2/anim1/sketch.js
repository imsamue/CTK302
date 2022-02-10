let x = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 128, 128);
  noStroke();
  fill(0, 0, 255)
  rect(x, x, 100, 100);
  x+=5;
  if (x > width) {
    fill(0, 0, random(128, 255));
    x = 0;
  }
}
