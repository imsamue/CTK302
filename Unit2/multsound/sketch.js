let song1;
let song2;
let song3;
let state = 0;

function preload() {
  song1 = loadSound("assets/nine.mp4");
  song2 = loadSound("assets/gospel.mp4");
  song3 = loadSound("assets/hopes.mp4");
  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      text("9 in the Afternoon", 20, 20);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      text("This is Gospel", 20, 20);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      text("High Hopes", 20, 20);
      break;
  }
}

function mouseReleased() {
  state++
  if (state > 5) state = 0;
  song1.pause();
  song2.pause();
  song3.pause();
}

function touchStarted() {
  getAudioContext().resume();
}
