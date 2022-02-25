let mic;
let vol = 0;
let approachingVol = 0;
let theLoudestItGets = 0.6;
let ease = 0.08;
let font1, font2;

function setup() {
  createCanvas(400, 400);
  font1 = loadFont("assets/dreams/caviarbold.ttf");
  font2 = loadFont("assets/mermaid/mermaid.ttf");
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(255, 0, 255);

  vol = mic.getLevel();
  approachingVol += (vol - approachingVol) * ease;

  fill(255);
  textFont(font1);
  textSize(20);
  text("Click the screen first to give\npermission for mic input.", 10, 40);
  textSize(24);
  text(
    "My volume is " +
    vol.toFixed(3) +
    "\nApproaching Vol = " +
    approachingVol.toFixed(3),
    10,
    120
  );

  x = map(vol, 0, theLoudestItGets, 0, width);
  fill(0, 192, 0);
  stroke(128);
  rect(x, 200, 50, 50);

  y = map(approachingVol, 0, theLoudestItGets, 0, width);
  rect(y, 270, 50, 50);

  z = int(map(approachingVol, 0, theLoudestItGets, 0, 3));
  textFont(font2);
  push();
  fill(0);
  textAlign(RIGHT, TOP);
  textStyle(BOLD);
  textSize(28);
  text("z = " + z, width - 5, 0);
  pop();
  switch (z) {
    case 0:
      push();
      textSize(36);
      textAlign(CENTER, CENTER);
      fill("blue");
      text("Silent", width / 2, 350);
      pop();
      break;

    case 1:
      push();
      textSize(36);
      textAlign(CENTER, CENTER);
      fill("green");
      text("Quiet", width / 2, 350);
      pop();
      break;

    case 2:
      push();
      textSize(36);
      textAlign(CENTER, CENTER);
      fill("yellow");
      text("Loud", width / 2, 350);
      pop();
      break;

    default:
      push();
      textSize(36);
      textAlign(CENTER, CENTER);
      fill("red");
      text("TOO FUCKING LOUD", width / 2, 350);
      pop();
      break;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
