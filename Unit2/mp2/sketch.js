let x = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let state = 0;
let timer = 0;
let font0, font1;
let sound0, sound1, sound2, song1;

function preload() {
  sound0 = loadSound("assets/crickets.wav");
  sound1 = loadSound("");
  sound2 = loadSound("assets/birds.wav");
  song1 = loadSound("assets/breakingfree.mp3");
  sound0.loop();
  sound0.pause();
  sound1.loop();
  sound1.pause();
  sound2.loop();
  sound2.pause();
  song1.loop();
  song1.pause();
}

function setup() {
  createCanvas(1000, 500);
  font0 = loadFont("assets/glimmer.otf");
  font1 = loadFont("assets/type.ttf");
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  switch (state) {

    case 0:
      room();
      textFont(font0);
      textSize(25);
      text("Welcome to the New\nClickable Adventure of", 500, 100);
      textSize(50);
      text("SORIN'S DREAMS", 500, 175);
      break;

    case 1:
      sound0.play();
      state = 2;
      break;

    case 2:
      room();
      push();
      scale(0.6);
      translate(400, 350);
      sorinSit();
      pop();
      timer++;
      if (timer > 30) {
        timer = 0;
        state = 2;
      }
      break;

    case 3:
      room();
      push();
      scale(0.6);
      translate(400, 350);
      sorinSit();
      pop();
      fill(255);
      strokeWeight(0.75);
      ellipse(415, 235, 20, 20);
      timer++;
      if (timer > 30) {
        timer = 0;
        state = 3;
      }
      break;

    case 4:
      room();
      push();
      scale(0.6);
      translate(400, 350);
      sorinSit();
      pop();
      fill(255);
      strokeWeight(0.75);
      ellipse(415, 235, 20, 20);
      ellipse(435, 215, 25, 25);
      timer++;
      if (timer > 30) {
        timer = 0;
        state = 4;
      }
      break;

    case 5:
      room();
      push();
      scale(0.6);
      translate(400, 350);
      sorinSit();
      pop();
      fill(255);
      strokeWeight(0.75);
      ellipse(415, 235, 20, 20);
      ellipse(435, 215, 25, 25);
      ellipse(500, 175, 120, 70);
      textFont(font1);
      textSize(30);
      fill("black");
      noStroke();
      text("What does Sorin\ndream about\nat night?", 675, 150);
      break;

    case 6:
      background(100, 200, 255);
      noStroke();
      fill(255, 100, 100);
      push();
      scale(0.5);
      translate(a, 100);
      fish1();
      a += 3;
      if (a > 1700) a = -600;
      pop();

      push();
      scale(0.7);
      translate(b, 400);
      fish0();
      b -= 4;
      if (b < -650) b = 1400;
      pop();
      break;

    case 7:
      break;

    case 8:
      break;

    case 9:
      background("blue");
      //stars
      background(0, 0, 255);
      noStroke();
      fill("yellow");
      for (d = 0; d < 1200; d += 150) {
        for (e = 0; e < 1200; e += 200) {
          push();
          translate(d + 50, e + 50);
          rotate(degrees(frameCount / 200));
          star(0, 0, 8, 20, 5);
          pop();
        }
      }
      push();
      translate(x, 25);
      x = x - 10;
      if (x < -400) {
        x = 1400;
      }
      sorinRun();
      pop();
      break;
  }
}

function mouseReleased() {
  state++;
  if (state >= 1 && state <= 5) state = 5;
  if (state > 9) state = 0;
  sound0.pause();
  sound1.pause();
  sound2.pause();
  song1.pause();
}

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

  //eyes closed
  strokeWeight(2);
  stroke(240, 230, 0, 128);
  fill(255, 0);
  arc(180, 115, 25, 15, 0, 180);
  arc(220, 115, 25, 15, 0, 180);

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

function sorinRun() {
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
  translate(200, 250, 30, 100);
  rotate(60);
  ellipse(0, 0, 30, 100);
  pop();
  ellipse(350, 300, 30, 100);

  //body
  noStroke();
  fill(255);
  push();
  translate(295, 235);
  rotate(-75);
  ellipse(0, 0, 110, 220);
  pop();

  // front legs
  stroke(100);
  strokeWeight(0.5);
  push();
  translate(200, 280);
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
  ellipse(200, 133, 120, 120);

  //nose
  fill("pink");
  triangle(200, 133, 190, 143, 210, 143);

  //black fur patches
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
  arc(200, 145, 50, 60, 20, 160, CHORD);
}

function room() {
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
  stroke(0);
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
}

function fish0() {
  ellipse(width / 2, height / 2, 200, 100);
  triangle(580, height / 2, 650, 200, 650, 300);
  fill(255);
  ellipse(440, height / 2, 15, 15);
}

function fish1() {
  noStroke();
  ellipse(width / 2, height / 2, 200, 100);
  triangle(420, height / 2, 350, 200, 350, 300);
  fill(255);
  ellipse(560, height / 2, 15, 15);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function touchStarted() {
  getAudioContext().resume();
}
