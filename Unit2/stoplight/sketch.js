let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  fill("orange");
  rect(width / 2, height / 2, 120, 350);
  fill("green");
  ellipse(width / 2, height / 2 + 100, 80, 80);
  fill("yellow");
  ellipse(width / 2, height / 2, 80, 80);
  fill("red");
  ellipse(width / 2, height / 2 - 100, 80, 80);
}
