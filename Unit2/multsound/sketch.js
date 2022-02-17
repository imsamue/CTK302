let song1;
let song2;
let song3;
let font;
let state = 0;

function preload() {
  font = loadFont("assets/Panic.ttf");
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
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  switch (state) {

    case 0:
      song1.play();
      state = 1;
      break;

    case 1:
      background("purple");
      fill(255);
      textSize(80);
      textFont(font);
      text("9 in the\nAfternoon", width / 2, height / 2);
      break;

    case 2:
      song2.play();
      state = 3;
      break;

    case 3:
      background("blue");
      fill(255);
      text("This is Gospel", width / 2, height / 2);
      break;

    case 4:
      song3.play();
      state = 5;
      break;

    case 5:
      background("yellow");
      fill(0);
      text("High Hopes", width / 2, height / 2);
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
