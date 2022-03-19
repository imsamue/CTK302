let s = 128;
let fishes = [];
let birds = [];
let stars = [];
let sorinPos;
let font0;
let font1;
let font2;
let state = 0;
let timer = 0;
let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  font0 = loadFont("assets/rumble.otf");
  font1 = loadFont("assets/neon.otf");
  font2 = loadFont("assets/Astronomus.ttf");

  for (let i = 0; i < 30; i++) {
    stars.push(new Star());
  }
  for (let j = 0; j < 20; j++) {
    fishes.push(new Fish());
  }

  sorinPos = createVector(width / 2, height - 100);
}

function draw() {
  switch (state) {

    //welcome screen
    case 0:
      c1 = color(128, 128, 255);
      c2 = color(50, 0, 192);
      setGradient(c1, c2);
      push();
      translate(0, height / 2.5);
      scale(0.8);
      sorinSit();
      pop();
      fill("white");
      textSize(112);
      textFont(font0);
      text("Welcome", width / 2, height / 6);
      textSize(64);
      text("Sorin is hungry-\nCan you help him?", width / 2, height / 2);
      textSize(52);
      textFont(font2);
      stroke(0);
      strokeWeight(0.5);
      fill(226, 0, 0);
      text("Click to Start", width / 2, (height * 4) / 5);
      timer = 0;
      break;

      //instruction screen
    case 1:
      background(0);
      fill(0, 255, 192);
      fish();
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 3;
      }
      break;

      //start countdown
    case 2:
      s = 128;
      state = 3;
      break;

    case 3:
      fill("white");
      background("red");
      textSize(s);
      s += 2;
      textFont(font1);
      text("3", width / 2, height / 2);
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 4;
      }
      break;

    case 4:
      s = 128;
      state = 5;
      break;

    case 5:
      background("red");
      textSize(s);
      s += 2;
      text("2", width / 2, height / 2);
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 6;
      }
      break;

    case 6:
      s = 128;
      state = 7;
      break;

    case 7:
      background("red");
      textSize(s);
      s += 2;
      text("1", width / 2, height / 2);
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 8;
      }
      break;

      //game
    case 8:
      game();
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 9;
      }
      if (score > 100) {
        state = 10;
      }
      fill("white");
      textFont(font1);
      textSize(28);
      text("Score: " + score, 100, 25);
      break;

      //win
    case 9:
      background("red");
      text("You Lost!", width / 2, height / 2);
      resetTheGame();
      break;

      //lose
    case 10:
      background("green");
      text("You Won!", width / 2, height / 2);
      resetTheGame();
      break;
  }
}

function game() {
  background("navy");

  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
    stars[i].move();
    if (stars[i].pos.dist(sorinPos) < 50) {
      stars.splice(i, 1);
      score+=5;
    }
  }

  for (let j = 0; j < fishes.length; j++) {
    fishes[j].display();
    fishes[j].move();
    if (fishes[j].pos.dist(sorinPos) < 40) {
      fishes.splice(j, 1);
      score+=10;
    }
  }

  fill("green");
  push();
  // scale(0.2);
  ellipse(sorinPos.x, sorinPos.y, 50, 50);
  pop();
  checkForKeys();
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 1:
      state = 2;
      break;

    case 2:
      state = 8;
      break;

    case 3:
      state = 8;
      break;

    case 4:
      state = 8;
      break;

    case 5:
      state = 8;
      break;

    case 6:
      state = 8;
      break;

    case 7:
      state = 8;
      break;

    case 9:
      state = 0;
      break;

    case 10:
      state = 0;
      break;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) sorinPos.x -= 5;
  if (sorinPos.x < 0) sorinPos.x = width;
  if (keyIsDown(RIGHT_ARROW)) sorinPos.x += 5;
  if (sorinPos.x > width) sorinPos.x = 0;
  if (keyIsDown(UP_ARROW)) sorinPos.y -= 5;
  if (sorinPos.y < 0) sorinPos.y = 0;
  if (keyIsDown(DOWN_ARROW)) sorinPos.y += 5;
  if (sorinPos.y > height) sorinPos.y = height;
}

function resetTheGame() {
  timer = 0;
  score = 0;
  stars = [];
  fishes = [];
  // Spawn objects
  for (let i = 0; i < 40; i++) {
    stars.push(new Star());
  }
  for (let j = 0; j < 30; j++) {
    fishes.push(new Fish());
  }
  sorinPos = createVector(width / 2, height - 100);
}

//code from REAS at https://editor.p5js.org/REAS/sketches/S1TNUPzim
function setGradient(c1, c2) {
  noFill();
  for (let y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
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

  //eyes open
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
  translate(200, 250);
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

function fish() {
  noStroke();
  ellipse(width / 2, height / 2, 200, 100);
  triangle(width / 2 + 80,
    height / 2,
    width / 2 + 150,
    height / 2 - 50,
    width / 2 + 150,
    height / 2 + 50);
  fill(255);
  ellipse(width / 2 - 60, height / 2, 15, 15);
}

class Star {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.v = createVector(random(-6, 6), random(-3, 3));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100, 255);
    this.size = random(48, 128);
  }

  display() {
    fill(this.r, this.b, this.g, this.o);
    rect(this.pos.x, this.pos.y, 75, 25);
    ellipse(this.pos.x, this.pos.y + 40, 30, 30);
    ellipse(this.pos.x + 70, this.pos.y + 40, 30, 30);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

class Fish {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.v = createVector(0, random(-6));
    this.r = random(100, 255);
    this.g = random(100, 255);
    this.b = random(100, 255);
    this.o = random(100);
    this.size = random(48, 128);
  }

  display() {
    fill(this.r, this.g, this.b);
    fish(this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
