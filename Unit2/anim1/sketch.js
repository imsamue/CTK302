let x = 0;
let font;

function setup() {
  createCanvas(400, 400);
  font = loadFont("assets/Minnie.ttf");
}

function draw() {
    background(0, 128, 128);
    fill(255);
    textSize(50);
    textFont("font");
    text("ZOOM", x, 100);
    x = x + 2;
    if (x > width) {
        x = 0;
    }
}
