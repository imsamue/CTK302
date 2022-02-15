let x = 210;
let y = 400;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("blue");
  switch (state) {
    case 0:
      stroke(255, 32, 64);
      strokeWeight(12);
      fill(255);
      ellipse(width / 2, height / 2, 250, 250);
      noStroke();
      fill("black");
      ellipse(width / 2, height / 2, 15, 15);
      stroke(20);
      strokeWeight(6);
      push();
      translate(width / 2, height / 2);
      rotate(frameCount / 100);
      line(0, 0, 0, -80);
      pop();
      line(width / 2, height / 2, 260, height / 2);
      noStroke();
      textSize(22);
      text("12", width / 2, height / 4);
      text("3", (width * 3) / 4, height / 2);
      text("6", width / 2, (height * 3) / 4);
      text("9", width / 4, height / 2);

      timer++;
      if (timer > 600) {
        timer = 0;
        state = 1;
      }

      break;

    case 1:
      noStroke();
      fill("yellow");
      circle(width / 2, y, width / 2);
      y = y - 1;
      if (y < -200) {
        y = 400;
      }
      fill(50, 192, 50);
      rect(0, (height * 2) / 3, width, height / 3);

      timer++;
      if (timer > 540) {
        timer = 0;
        state = 2;
      }

      break;

    case 2:
      stroke("brown");
      strokeWeight(0.5);
      fill(80, 50, 50);
      rect(width / 4, height / 4 - 50, width / 2, 25);
      rect(width / 4, (height * 3) / 4 + 25, width / 2, 25);
      fill(255, 210);
      noStroke();
      triangle(
        width / 2,
        height / 2,
        width / 4,
        height / 4 - 25,
        (width * 3) / 4,
        height / 4 - 25
      );
      triangle(
        width / 2,
        height / 2,
        width / 4,
        (height * 3) / 4 + 25,
        (width * 3) / 4,
        (height * 3) / 4 + 25
      );
      fill(200, 200, 60);
      triangle(width / 2, height / 2, 152, 140, 248, 140);
      quad(
        120,
        (height * 3) / 4,
        280,
        (height * 3) / 4,
        (width * 3) / 4,
        (height * 3) / 4 + 25,
        width / 4,
        (height * 3) / 4 + 25
      );
      stroke(128);
      ellipse(width / 2, x, 10, 20);
      x++;
      if (x > 310) {
        x = 210;
      }

      timer++;
      if (timer > 360) {
        timer = 0;
        state = 0;
      }

      break;
  }
}

// function mouseReleased() {
//   state++;
//   if (state > 2) state = 0;
// }
