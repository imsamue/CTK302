let s = 128;
let fishes = [];
let birds = [];
let stars = [];
let sorinPos;
let font0;
let font1;
let font2;
let font3;
let fishpic;
let birdpic;
let sorinpic;
let bowlpic;
let state = 0;
let timer = 0;
let score = 0;
p5.disableFriendlyErrors = true;

function preload() {
  font0 = loadFont("assets/rumble.otf");
  font1 = loadFont("assets/neon.otf");
  font2 = loadFont("assets/Astronomus.ttf");
  font3 = loadFont("assets/Gameplay.ttf");
  fishpic = loadImage("assets/fishsmall.png");
  birdpic = loadImage("assets/birdsmall.png");
  sorinpic = loadImage("assets/sorinsmall.png");
  bowlpic = loadImage("assets/bowlsmall.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  for (let i = 0; i < 25; i++) {
    stars.push(new Star());
  }
  for (let j = 0; j < 20; j++) {
    fishes.push(new Fish());
  }
  for (let k = 0; k < 15; k++) {
    birds.push(new Bird());
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
      translate(0, 125);
      scale(1.1);
      sorinSit();
      pop();
      push();
      translate(550, 200);
      scale(0.8);
      bowl();
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
      background(0, 0, 32);
      textFont(font3);
      textSize(36);
      fill("red");
      text("Help  Sorin  fill  his  Tummy  by  eating\nstars,  fishes,  and  birds", width / 2, 50);
      fill("yellow");
      textSize(28);
      text("But  hurry!  Because  you  only  have  10  seconds  to  get  500  points", width / 2, 150);
      //game pieces
      fill(255, 128, 128);
      star(width / 3, height / 2 - 25, 40, 20, 5);

      tint(255);
      push();
      translate(width / 3, height / 2 + 90);
      image(fishpic, 0, 0, 100, 50);
      pop();

      push();
      translate(width / 3, height / 2 + 210);
      image(birdpic, 0, 0, 120, 60);
      pop();
      //point values
      fill("white");
      textSize(36);
      push();
      textAlign(LEFT);
      text("=          15 pts", width / 2, height / 2 - 25);
      text("=          25 pts", width / 2, height / 2 + 90);
      text("=          40 pts", width / 2, height / 2 + 210);
      pop();
      timer++;
      if (timer > 5 * 60) {
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
      s += 3;
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
      s += 3;
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
      s += 3;
      text("1", width / 2, height / 2);
      timer++;
      if (timer > 1 * 60) {
        timer = 0;
        state = 8;
      }
      break;

      //game
    case 8:
      c1 = color(0, 0, 80);
      c2 = color(50, 160, 255);
      setGradient(c1, c2);

      push();
      scale(2);
      cloud(50, 100, 2);
      cloud(375, 45, 2);
      cloud(500, 90, 2.5);
      cloud(width / 6, 75, 2.25);
      pop();

      game();
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 9;
      }
      if (score >= 500) {
        state = 10;
      }
      fill("white");
      textFont(font3);
      textSize(28);
      text("Score: " + score, 100, 25);
      let t = timer / 60;
      let sec = round(t, 2);
      if (timer > (7 * 60)) {
        fill("red");
      } else {
        fill("white");
      }
      text("Time: " + sec, width - 100, 25);
      break;

      //lose
    case 9:
      c1 = color(0);
      c2 = color(64, 0, 0);
      setGradient(c1, c2);
      for (var a = 0; a < 2000; a += 100)
        for (var b = 0; b < 2000; b += 75) {
          image(bowlpic, a + 50, b + 25, 75, 50);
        }
      textFont(font0);
      strokeWeight(2);
      textSize(200);
      fill("white");
      text("You Lost!", width / 2, height / 2);
      resetTheGame();
      break;

      //win
    case 10:
      c1 = color(0, 255, 0);
      c2 = color(0, 96, 0);
      setGradient(c1, c2);
      fill(255, 255, 0, 116);

      for (var a = 0; a < 2000; a += 100)
        for (var b = 0; b < 2000; b += 100) {
          push();
          translate(a + 25, b + 25);
          rotate(degrees(frameCount / 200));
          star(0, 0, 30, 15, 7);
          pop();
        }

      push();
      translate(0, 80);
      sorinSit();
      pop();
      textFont(font0);
      textSize(200);
      fill("black");
      text("You Won!", width / 2, height / 2);
      resetTheGame();
      break;
  }
}

function game() {

  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
    stars[i].move();
    if (stars[i].pos.dist(sorinPos) < 50) {
      stars.splice(i, 1);
      score += 15;
    }
  }

  for (let j = 0; j < fishes.length; j++) {
    fishes[j].display();
    fishes[j].move();
    if (fishes[j].pos.dist(sorinPos) < 44) {
      fishes.splice(j, 1);
      score += 25;
    }
  }

  for (let k = 0; k < birds.length; k++) {
    birds[k].display();
    birds[k].move();
    if (birds[k].pos.dist(sorinPos) < 36) {
      birds.splice(k, 1);
      score += 40;
    }
  }
  tint(255, 255, 255);
  image(sorinpic, sorinPos.x, sorinPos.y, 150, 130);
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
  if (keyIsDown(LEFT_ARROW)) sorinPos.x -= 4;
  if (sorinPos.x < 0) sorinPos.x = width;
  if (keyIsDown(RIGHT_ARROW)) sorinPos.x += 4;
  if (sorinPos.x > width) sorinPos.x = 0;
  if (keyIsDown(UP_ARROW)) sorinPos.y -= 4;
  if (sorinPos.y < 0) sorinPos.y = 0;
  if (keyIsDown(DOWN_ARROW)) sorinPos.y += 4;
  if (sorinPos.y > height) sorinPos.y = height;
}

function resetTheGame() {
  timer = 0;
  score = 0;
  stars = [];
  fishes = [];
  birds = [];
  // Spawn objects
  for (let i = 0; i < 25; i++) {
    stars.push(new Star());
  }
  for (let j = 0; j < 20; j++) {
    fishes.push(new Fish());
  }
  for (let k = 0; k < 15; k++) {
    birds.push(new Bird());
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

//code from jackiezen at https://editor.p5js.org/jackiezen/sketches/rJEziNOR
function cloud(x, y, size) {
  fill(255, 192);
  noStroke();
  arc(x, y, 25 * size, 20 * size, 180 + 360, 360);
  arc(x + 10, y, 25 * size, 45 * size, PI + 180 + 360, 360);
  arc(x + 25, y, 25 * size, 35 * size, PI + 180 + 360, 360);
  arc(x + 40, y, 30 * size, 20 * size, PI + 180 + 360, 360);
}

function bowl() {
  noStroke();
  fill(255, 0, 0);
  quad(
    width / 2 - 75,
    height / 2 - 6,
    width / 2 + 75,
    height / 2 - 6,
    width / 2 + 93.5,
    height / 2 + 50,
    width / 2 - 93.5,
    height / 2 + 50
  );
  arc(width / 2, height / 2 + 50, 185, 75, 0, 180, OPEN);
  fill(208, 0, 0);
  ellipse(width / 2, height / 2, 150, 75);
  strokeWeight(3);
  stroke(64);
  arc(width / 2, height / 2 + 25, 100, 50, 180, 0, OPEN);
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

class Star {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.v = createVector(random(-3, 3), random(-1.5, 1.5));
    this.r = random(128, 255);
    this.g = random(64, 128);
    this.b = random(64, 128);
    this.o = random(208, 255);
  }

  display() {
    fill(this.r, this.g, this.b, this.o);
    star(this.pos.x, this.pos.y, 30, 15, 5);
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
    this.pos = createVector(random(width), random(height));
    this.v = createVector(random(-4, 4), random(-2, 2));
    this.r = random(255);
    this.g = random(128, 255);
    this.b = random(128, 255);
  }

  display() {
    tint(this.r, this.g, this.b);
    image(fishpic, this.pos.x, this.pos.y, 80, 40);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

class Bird {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.v = createVector(random(-5, 5), random(-2.5, 2.5));
    this.r = random(192, 255);
    this.g = random(192, 255);
  }

  display() {
    tint(this.r, this.g, 255);
    image(birdpic, this.pos.x, this.pos.y, 100, 50);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
