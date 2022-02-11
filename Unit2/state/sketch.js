let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  switch (state) {

    case 0:
      scene0();
      break;

    case 1:
      scene1();
      break;

    case 2:
      scene2();
      break;

    case 3:
      scene3();
      break;

    case 4:
      scene4();
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;
}

function scene0() {
  background(0);
  for (var j = 0; j < 1000; j += 25)
    for (var i = 0; i < 1000; i += 25) {
      fill(random(255), random(128), random(255));
      ellipse(i, j, 20, 20);
    }
}

function scene1() {
  background(0, random(50, 255), 0);
  for (var j = 0; j < 1000; j += 40)
    for (var i = 0; i < 1000; i += 25) {
      fill(random(128), random(100), 128)
      ellipse(i, j, 50, 35);
    }
}

function scene2() {
  background(128, 64, 128);
  for (var j = 0; j < 1000; j += 25)
    for (var i = 0; i < 1000; i += 25) {
      fill(255, 50, 50)
      push();
      translate(width / 2, -height);
      rotate(45);
      rect(i, j, 20, 20);
      pop();
    }
}

function scene3() {
  background(255);
  for (var j = 0; j < 1000; j += 25)
    for (var i = 0; i < 1000; i += 25) {
      fill(0, random(255), random(255))
      rect(i, j, 22, 22);
    }
}

function scene4() {
  background(0, 0, 230);
  for (var j = 0; j < 1000; j += 15)
    for (var i = 0; i < 1000; i += 25) {
      fill(255, 150, 50)
      ellipse(i, random(j), 20, 20);
    }
}
