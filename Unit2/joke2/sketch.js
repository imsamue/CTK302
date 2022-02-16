let joke;
let x = 0;
let xoff = 0.0;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 300);
  textAlign(CENTER, CENTER);
  joke = loadFont("assets/caviar/CaviarDreams_Bold.ttf");
}

function draw() {
  switch (state) {

    case 0:
      background(100, 200, 255);
      stroke(192);
      strokeWeight(0.6);
      fill(255, 128);
      xoff = xoff + 0.01;
      let n = noise(xoff) * (width / 10);
      ellipse(n + 40, x, 45, 45);
      ellipse(n + 20, x + 100, 30, 30);
      ellipse(-n + 100, x + 150, 30, 30);
      ellipse(n + 175, x + 80, 25, 25);
      ellipse(n + 400, x + 60, 35, 35);
      ellipse(-n + 225, x + 120, 30, 30);
      ellipse(n + 300, x + 200, 20, 20);
      ellipse(-n + 330, x + 75, 30, 30);
      ellipse(n + 360, x + 260, 40, 40);
      ellipse(-n + 260, x + 15, 30, 30);
      ellipse(n + 150, x + 40, 25, 25);

      x = x - 1;
      if (x < 0) {
        x = height;
      }
      stroke(0, 0, 100);
      textFont(joke);
      textSize(40);
      fill("black");
      text("How do you make\nan octopus laugh?", width / 2, height / 4);

      timer++;
      if (timer > (4 * 60)) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background(100, 200, 255);
      stroke(0, 0, 128);
      strokeWeight(1.5);
      fill(255);
      textSize(50);
      text("With ten tickles!", width / 2, height / 3);
      fill(180, 0, 180);
      beginShape();
      curveVertex(-10, 130);
      curveVertex(0, 150);
      curveVertex(80, 180);
      curveVertex(200, 160);
      curveVertex(300, 180);
      curveVertex(400, 175);
      curveVertex(420, 215);
      curveVertex(400, 250);
      curveVertex(300, 230);
      curveVertex(200, 210);
      curveVertex(80, 230);
      curveVertex(0, 175);
      curveVertex(-10, 150);
      endShape();
      timer++;
      if (timer > (3 * 60)) {
        timer = 0;
        state = 0;
      }
      break;
  }
}
