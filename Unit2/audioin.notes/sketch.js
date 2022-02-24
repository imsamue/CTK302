let mic;
let vol = 0;
let approachingVol = 0;

// variables that you might want to tweak
let theLoudestItGets = 0.6; // check your mic inputs and see how loud it gets, put it here.
let ease = 0.08; // how responsive do you want this? Higher numbers mean faster response.

function setup() {
  createCanvas(400, 400);

  // all we need to use the mic
  mic = new p5.AudioIn(); // new usually means it belongs in setup
  mic.start();
}

function draw() {
  background("green");

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // make a "gradual" easing variable that approaches the original vol
  approachingVol += (vol - approachingVol) * ease;

  // text on the screen for debugging
  textSize(18);
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
    vol.toFixed(3) +
    "\nApproaching Vol = " +
    approachingVol.toFixed(3),
    10,
    60
  );

  // this moves that first box
  x = map(vol, 0, theLoudestItGets, 0, width);
  //takes volume, value between 0 and 0.6, distributes between 0 and width
  rect(x, 200, 50, 50);

  // use y for your "gradual" variable!
  y = map(approachingVol, 0, theLoudestItGets, 0, width);
  rect(y, 270, 50, 50);


  // this maps z to between 0 and 3 so you can switch on it.
  z = int(map(approachingVol, 0, theLoudestItGets, 0, 3));
  text("z = " + z, 300, 20);
  switch (z) {
    case 0:
      // background("blue");
      text("Silent", 100, 350);
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
