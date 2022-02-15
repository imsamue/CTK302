let a = 0;
let x = 0;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background(100, 170, 255);
  fill("orange");
  rect(width / 2, height / 2, 200, 600);
  noStroke();
  fill(60);
  rect(width / 2, 750, width, 70);
  for (a = 0; a < 850; a += 25) {
    fill("white");
    rect(a, 750, 20, 5);
  fill("blue");
  stroke(255);
  strokeWeight(0.5);
  rect(x, 770, 40, 15);
  if (x > 820) {
    x = 0
  };
}

  switch (state) {
    case 0:
      stroke("black");
      fill("green");
      ellipse(width / 2, height / 2 + 170, 150, 150);
      fill(128);
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 - 170, 150, 150);
      x+=3
      break;

    case 1:
      stroke("black");
      fill(128);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      fill("yellow");
      ellipse(width / 2, height / 2, 150, 150);
      fill(128);
      ellipse(width / 2, height / 2 - 170, 150, 150);
      x+=1
      break;

    case 2:
      stroke("black");
      fill(128);
      ellipse(width / 2, height / 2 + 170, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);
      fill("red");
      ellipse(width / 2, height / 2 - 170, 150, 150);
      break;
  }
  timer++;
  if (timer > 100) {
    timer = 0;
    state++;
    if (state > 2) state = 0;
  }
}
