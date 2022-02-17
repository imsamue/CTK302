let state = 0;
let timer = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("blue");
  switch (state) {
    case 0:
      timer++;
      if (timer > 600) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      timer++;
      if (timer > 540) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
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
