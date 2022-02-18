let state = 0;
let timer = 0;

function setup() {
  createCanvas(1000, 500);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 50);
  //floor
  fill(100, 80, 50);
  beginShape();
  vertex(0, 440);
  vertex(width / 2, 320);
  vertex(width, 440);
  vertex(width, height);
  vertex(0, width);
  endShape();
  //floorboards
  line(400, 316, width, 460);
  line(400, 336, width, 480);
  line(350, 344, width, 500);
  line(300, 352, width, 520);
  line(250, 360, width, 540);
  line(200, 368, width, 560);
  line(200, 388, width, 580);
  line(150, 396, width, 600);
  line(100, 404, width, 620);
  line(50, 412, width, 640);
  line(0, 420, width, 660);
  line(0, 440, width, 680);
  line(0, 460, width, 700);
  line(0, 480, width, 720);
  stroke(0);
  //walls
  fill(230, 210, 120);
  quad(0, 100, width / 2, 20, width / 2, 320, 0, 440);
  quad(width / 2, 20, width, 100, width, 440, width / 2, 320);
  //baseboard
  fill(80, 60, 30);
  quad(0, 420, width / 2, 300, width / 2, 320, 0, 440);
  quad(width / 2, 300, width, 420, width, 440, width / 2, 320);
  //window
  quad(60, 140, 160, 120, 160, 320, 60, 340);
  fill(0, 0, 50);
  quad(70, 146, 150, 130, 150, 314, 70, 330);

  switch (state) {

    case 0:
      push();
      scale(0.6);
      translate(400, 350);
      sorinSit();
      strokeWeight(2);
      stroke(240, 230, 0, 128);
      fill(255, 0);
      arc(180, 115, 25, 15, 0, 180);
      arc(220, 115, 25, 15, 0, 180);
      pop();
      timer++;
      if (timer > 30) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      push();
      scale(0.6);
      translate(400, 350);
      sorinSit();
      strokeWeight(2);
      stroke(240, 230, 0, 128);
      fill(255, 0);
      arc(180, 115, 25, 15, 0, 180);
      arc(220, 115, 25, 15, 0, 180);
      pop();
      fill(255);
      strokeWeight(0.75);
      ellipse(415, 235, 20, 20);
      timer++;
      if (timer > 30) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      push();
      scale(0.6);
      translate(400, 350);
      sorinSit();
      strokeWeight(2);
      stroke(240, 230, 0, 128);
      fill(255, 0);
      arc(180, 115, 25, 15, 0, 180);
      arc(220, 115, 25, 15, 0, 180);
      pop();
      fill(255);
      strokeWeight(0.75);
      ellipse(415, 235, 20, 20);
      ellipse(435, 215, 25, 25);
      timer++;
      if (timer > 30) {
        timer = 0;
        state = 3;
      }
      break;

    case 3:
      push();
      scale(0.6);
      translate(400, 350);
      sorinSit();
      strokeWeight(2);
      stroke(240, 230, 0, 128);
      fill(255, 0);
      arc(180, 115, 25, 15, 0, 180);
      arc(220, 115, 25, 15, 0, 180);
      pop();
      fill(255);
      strokeWeight(0.75);
      ellipse(415, 235, 20, 20);
      ellipse(435, 215, 25, 25);
      ellipse(500, 175, 120, 70);
      break;
  }
}

// function mouseReleased() {
//   state++;
//   if (state > 2) state = 0;
// }

function sorinSit() {
  //head
  noStroke();
  fill(255);
  ellipse(200, 133, 120, 120);

  //nose
  fill("pink");
  triangle(200, 133, 190, 143, 210, 143);

  // //black fur patches
  fill(0);
  beginShape();
  curveVertex(200, 72);
  curveVertex(205, 72);
  curveVertex(210, 100);
  curveVertex(204, 120);
  curveVertex(220, 130);
  curveVertex(260, 120);
  curveVertex(240, 90);
  endShape();
  arc(200, 133, 120, 120, -84, -11, OPEN);

  beginShape();
  curveVertex(200, 72);
  curveVertex(195, 72);
  curveVertex(190, 100);
  curveVertex(196, 120);
  curveVertex(180, 130);
  curveVertex(140, 120);
  curveVertex(160, 90);
  endShape();
  arc(200, 133, 120, 120, 191, 264, OPEN);

  //ears
  fill("black");
  triangle(140, 60, 150, 110, 175, 80);
  triangle(260, 60, 255, 110, 225, 80);
  fill("pink");
  triangle(148, 70, 155, 95, 170, 85);
  triangle(252, 70, 250, 95, 230, 85);

  //eyes
  // strokeWeight(0.25);
  // stroke(0);
  // fill(240, 230, 0);
  // ellipse(180, 115, 25, 15);
  // ellipse(220, 115, 25, 15);
  // fill(0);
  // ellipse(180, 115, 5, 10);
  // ellipse(220, 115, 5, 10);

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
  fill(0, 0);
  arc(200, 140, 40, 40, 30, 150);

  //tail
  fill(0);
  push();
  translate(145, 270);
  rotate(45);
  ellipse(0, 0, 20, 60);
  pop();
  ellipse(128, 300, 15, 35);

  //body
  noStroke();
  fill(255);
  ellipse(200, 245, 105, 150);
  rect(200, 300, 90, 50, 35, 35, 20, 20);

  //legs
  stroke(190);
  strokeWeight(1);
  ellipse(180, 280, 30, 100);
  ellipse(220, 280, 30, 100);
}
