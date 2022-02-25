let numberOfTouches;
let font1;
let pic1, pic2, pic3;

function setup() {
  createCanvas(400, 400);
  font1 = loadFont("assets/song.ttf");
  pic1 = loadImage("assets/lonely.jpg");
  pic2 = loadImage("assets/two.jpg");
  pic3 = loadImage("assets/three.jfif");
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  clear();
  background(0);
  numberOfTouches = touches.length;
  fill(255);
  textFont(font1);
  textSize(24);
  text(numberOfTouches + " touches", width / 2, 380);

  switch (numberOfTouches) {
    case 0:
      textSize(36);
      text("No one is touching the screen", width / 2, 40);
      break;

    case 1:
      text("It's kind of lonely here", width / 2, 40);
      image(pic1, width / 2, height / 2, 400, 300);
      break;

    case 2:
      text("Two fingers are touching the screen", width / 2, 40);
      image(pic2, width / 2, height / 2, 400, 300);
      break;

    case 3:
      text("Three are touching the screen", width / 2, 40);
     image(pic3, width / 2, height / 2, 400, 300);
      break;
  }
}
