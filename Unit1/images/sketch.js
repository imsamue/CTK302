let sorin;
let bed;
let sun;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);

  sorin = loadImage("assets/sorin.jpeg");
  bed = loadImage("assets/catsbed.jpg");
  sun = loadImage("assets/catssun.jpg");
}

function draw() {
  image(sorin, width/2, 100, 150, 150);
  image(bed, width/2, 200, 100, 133);
  image(sun, width/2, 300, 130, 100);
}
