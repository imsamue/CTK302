let cars = [];
let pic;

function setup() {
  createCanvas(450, 600);
  pic = loadImage("assets/tent.jpg");
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  image(pic, 0, 0, width, height);
  cars.push(new Car());
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}


class Car {
  constructor() {
    this.pos = createVector(width / 2 - 20, height / 2 - 70);
    this.vel = createVector(random(-8, 8), random(-10, -5));
    this.r = random(255);
    this.g = random(255);
    this.b = 255;
    this.a = random(192, 255);
    this.s1 = random(10, 30);
    this.s2 = random (5, 15);
    this.n = random(5, 10);
  }

  display() {
    fill(this.r, this.g, this.b, this.a);
    star(this.pos.x, this.pos.y, 25, 5, this.n);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
