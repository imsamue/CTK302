let sorin;
let bed;
let sun;

function setup() {
  createCanvas(500, 500);
  background(0);
  imageMode(CENTER);

  fill(50, 100, 50);
  rect(100, 0, 300, 500)
  sorin = loadImage("assets/sorin.jpeg");
  bed = loadImage("assets/catsbed.jpg");
  sun = loadImage("assets/catssun.jpg");
}

function draw() {
  image(sorin, width/2, 100, 100, 100);
  image(bed, width/2, 250, 100, 133);
  image(sun, width/2, 400, 133, 100);
}
