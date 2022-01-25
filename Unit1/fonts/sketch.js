let font1, font2;

function setup() {
  createCanvas(500, 500);
  font1=loadFont("assets/dancing.ttf")
  font2=loadFont("assets/southmore.ttf")
  textAlign(CENTER)
  angleMode(DEGREES);
}

function draw() {
  background(100,0,50);
  stroke(0);
  //font1
  fill(255,0,0);
  textSize(80);
  textFont(font1);
  text("Bom Dia", width/2, 100);

  //font2
  fill(100,100,255);
  textSize(60);
  textFont(font2);
  push();
  translate(width/2, 300);
  rotate(-30);
  text("Buenos Dias", 0, 0);
  pop();
}
