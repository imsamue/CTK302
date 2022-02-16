let font;
state = 0;

function setup() {
  createCanvas(400, 400);
  font = loadFont("assets/school.ttf");
  textAlign(CENTER, CENTER);
}

function draw() {
switch(state){
  case 0:
  background (0, 128, 128);
  textFont(font);
  textSize(50);
  text("How do you know when a\njoke is a Dad joke?", width / 2, height / 2);
  break;

  case 1:
  break;
}
}
