let song1;
let song2;
let song3;
let state = 0;

function preload() {
  song1 = loadSound("assets/epic.mp3");
}

function setup() {
  createCanvas(500, 500);
  song1.loop();
}

function draw() {
  switch(state){

    case 0:
    break;

    case 1:
    break;

    case 2:
    break;

  }
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();
  }
}

function mouseReleased(){
  state++
  if (state > 2) state = 0;
}

function touchStarted() {
  getAudioContext().resume();
}
