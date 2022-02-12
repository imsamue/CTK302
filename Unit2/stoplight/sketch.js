let a = 0;
let x = 0;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(100, 170, 255);
  fill("orange");
  rect(width / 2, height / 2, 120, 350);
  noStroke();
  fill(60);
  rect(width / 2, 470, width, 60)
  fill("yellow");
  for (a = 0; a < 550; a+=25){
    rect(a, 470, 20, 5);
  }

  switch(state) {
    case 0:
      stroke("black");
      fill("green");
      ellipse(width / 2, height / 2 + 100, 80, 80);
      fill(128);
      ellipse(width / 2, height / 2, 80, 80);
      ellipse(width / 2, height / 2 - 100, 80, 80);
      fill("blue");
      stroke(255);
      strokeWeight(0.5);
      rect(x, 485, 25, 15)
      x+=2.5;
      if (x > 513){
        x = 0
      };
      stroke("black");
    break;

    case 1:
      stroke("black");
      fill(128);
      ellipse(width / 2, height / 2 + 100, 80, 80);
      fill("yellow");
      ellipse(width / 2, height / 2, 80, 80);
      fill(128);
      ellipse(width / 2, height / 2 - 100, 80, 80);
      fill("blue");
      stroke(255);
      strokeWeight(0.5);
      rect(x, 485, 25, 15)
      x+=1;
      if (x > 513){
        x = 0
      };
      stroke("black");
    break;

    case 2:
      stroke("black");
      fill(128);
      ellipse(width / 2, height / 2 + 100, 80, 80);
      ellipse(width / 2, height / 2, 80, 80);
      fill("red");
      ellipse(width / 2, height / 2 - 100, 80, 80);
      fill("blue");
      stroke(255);
      strokeWeight(0.5);
      rect(x, 485, 25, 15)
      stroke("black");
    break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}
