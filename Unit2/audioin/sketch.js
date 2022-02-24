let mic;
let vol = 0;
let approachingVol = 0;
let theLoudestItGets = 0.6;
let ease = 0.08;
let font1, font2;

function setup() {
  createCanvas(400, 400);
  font1 = loadFont("assets/dreams/caviarbold.ttf");
  font2 = loadFont("assets/mermaid/mermaid");
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


  // this maps z to between 0 and 3 so you can switch on it.
  z = int(map(approachingVol, 0, theLoudestItGets, 0, 3));
  textFont(font2);
  text("z = " + z, 300, 20);
  switch (z) {
    case 0:
      push();
      textAlign(CENTER, CENTER);
      fill("blue");
      text("Silent", width / 2, 350);
      pop();
      break;
    case 1:
      // background("green");
      text("Quiet", 100, 350);
      break;
    case 2:
      // background("yellow");
      text("Loud", 100, 350);
      break;
    default:
      // background("red");
      text("Too Fucking Loud", 100, 350);
      break;
  }
}


function touchStarted() {
  getAudioContext().resume();
}
