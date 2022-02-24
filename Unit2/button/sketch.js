let state = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  switch (state) {

    case 0:
      background(255, 100, 100);
      stroke(0, 0, 100, 128);
      strokeWeight(3);
      fill (100, 100, 255, 64);
      for (var a = 0; a < width + 20; a += 20)
        for (var b = 0; b < width + 20; b += 20)
        rect(a, b, 12, 12);
      break;

    case 1:
      background(175, 0, 100);
      stroke(255);
      strokeWeight(0.3);
      fill(255, 128);
      for (var i = 0; i < width + 20; i += 20)
        for (var j = 0; j < height + 20; j += 20)
          star(i, j, 12, 6, 5);
      break;
  }
  stroke(0, 0, 100);
  strokeWeight(4);
  fill(100, 100, 255);
  rect(width / 2, height / 2, 150, 80, 20);
}

function mouseReleased() {
  if ((mouseX > 125) && (mouseX < 275) && (mouseY > 160) && (mouseY < 240)) {
    state = (state + 1) % 2;
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
