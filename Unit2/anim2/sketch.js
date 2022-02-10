let x = 0

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(100, 100, 255);
  push();
  translate(x, 0);
  x += 12;
  if (x > width + 400) {
    x = -600;
  }
  scale(-1, 1);
  Sorin();
  pop();
}

function Sorin() {
  //tail
  fill(0);
  push();
  translate(420, 260);
  rotate(80);
  ellipse(0, 0, 20, 60);
  pop();
  ellipse(447, 241, 15, 35);

  // back legs
  fill("white");
  push();
  translate(width / 3, 250);
  rotate(60);
  ellipse(0, 0, 30, 100);
  pop();
  ellipse(350, 300, 30, 100);

  //body
  noStroke();
  fill(255);
  push();
  translate(width / 3 + 95, 235);
  rotate(-75);
  ellipse(0, 0, 110, 220);
  pop();

  // front legs
  stroke(100);
  strokeWeight(0.5);
  push();
  translate(width / 3, 280);
  rotate(30);
  ellipse(0, 0, 30, 100);
  pop();
  push();
  translate(310, 300);
  rotate(55);
  ellipse(0, 0, 30, 100);
  pop();

  //head
  noStroke();
  fill(255);
  ellipse(width / 3, height / 3, 120, 120);

  //nose
  fill("pink");
  triangle(
    width / 3,
    height / 3,
    width / 3 - 10,
    height / 3 + 10,
    width / 3 + 10,
    height / 3 + 10
  );

  //black fur patches
  fill(0);
  beginShape();
  curveVertex(width / 3, 72);
  curveVertex(width / 3 + 5, 72);
  curveVertex(210, 100);
  curveVertex(204, 120);
  curveVertex(220, 130);
  curveVertex(260, 120);
  curveVertex(240, 90);
  endShape();
  arc(width / 3, height / 3, 120, 120, -84, -11, OPEN);

  beginShape();
  curveVertex(width / 3, 72);
  curveVertex(width / 3 - 5, 72);
  curveVertex(190, 100);
  curveVertex(196, 120);
  curveVertex(180, 130);
  curveVertex(140, 120);
  curveVertex(160, 90);
  endShape();
  arc(width / 3, height / 3, 120, 120, 191, 264, OPEN);

  push();
  translate(0, 5);
  beginShape();
  curveVertex(240, 160);
  curveVertex(260, 177);
  curveVertex(250, 210);
  curveVertex(270, 230);
  curveVertex(300, 260);
  curveVertex(340, 250);
  curveVertex(370, 260);
  curveVertex(400, 260);
  curveVertex(400, 260);
  curveVertex(420, 260);
  endShape();
  pop();

  push();
  translate(280, 244);
  rotate(15);
  arc(0, 0, 280, 140, -120, 355)
  pop();

  push();
  translate(258, 186);
  rotate(-30);
  ellipse(0, 0, 30, 40);
  pop();

  //ears
  fill("black");
  triangle(140, 60, 150, 110, 175, 80);
  triangle(260, 60, 255, 110, 225, 80);
  fill("pink");
  triangle(148, 70, 155, 95, 170, 85);
  triangle(252, 70, 250, 95, 230, 85);

  //eyes
  strokeWeight(0.25);
  stroke(0);
  fill(230, 230, 0);
  ellipse(180, 115, 25, 15);
  ellipse(220, 115, 25, 15);
  fill(0);
  ellipse(180, 115, 5, 10);
  ellipse(220, 115, 5, 10);

  //whiskers
  strokeWeight(1);
  stroke(180);
  line(190, 142, 150, 150);
  line(210, 142, 250, 150);
  line(190, 139, 150, 139);
  line(210, 139, 250, 139);
  line(190, 136, 150, 128);
  line(210, 136, 250, 128);

  //mouth
  stroke(0);
  fill(200, 0, 100);
  arc(width / 3, 145, 50, 60, 20, 160, CHORD);
}
