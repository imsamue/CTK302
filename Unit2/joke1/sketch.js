let font;
let font1;
let a = 0;
let b = 0;
state = 0;

function setup() {
  createCanvas(400, 400);
  font = loadFont("assets/school.ttf");
  font1 = loadFont("assets/blocks.ttf");
  textAlign(CENTER, CENTER);
  angleMode(DEGREES);
}

function draw() {
  switch (state) {
    case 0:
      background(0, 150, 150);
      for (a = 0; a < 400; a += 25)
        for (b = 0; b < 400; b += 25) {
          fill(255, 150);
          textFont(font1);
          textStyle(NORMAL);
          textSize(25);
          text("?", a + 12.5, b + 12.5);
        }
      fill("black");
      textFont(font);
      textStyle(BOLD);
      textSize(100);
      textLeading(70);
      text("How do you\nknow when a\njoke is\na Dad joke?", width / 2, height / 2);
      break;

    case 1:
      background(0, 128, 128);
      fill(0, 225, 0, 24);
      noStroke();
      for (a = 0; a < 400; a += 25)
        for (b = 0; b < 400; b += 25) {
          rect(a + 3.5, b + 3.5, 18, 18);
        }
          fill("black");
          textFont(font1);
          textSize(50);
          push();
          translate(width / 2, height / 2);
          rotate(-20);
          text("When it's\napparant!", 0, 0);
          pop();
          break;
        }
  }

  function mouseReleased() {
    state++;
    if (state > 1) state = 0;
  }
