// let myCar;
// let myCar1;
// let myCar2;
let cars = [];
let frogPos;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // myCar = new Car();
  // myCar1 = new Car();
  // myCar2 = new Car();
  for (let i = 0; i < 60; i++) {
    cars.push(new Car());
    frogPos = createVector(width / 2, height - 100);
  }

}

function draw() {
  background(255);
  // myCar.display();
  // myCar.move();
  //
  // myCar1.display();
  // myCar1.move();
  //
  // myCar2.display();
  // myCar2.move();
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
}

class Car {
  constructor() {
    //attributes get added in the constructor
    this.pos = createVector(100, 100);
    this.v = createVector(random(-3, 3), random(-3, 3));
    //change above code to make them all vertical
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100, 255);
    this.size = random(10, 100);
  }

  display() {
    fill(this.r, this.g, this.b, this.o);
    // rect(this.pos.x, this.pos.y, 75, 25);
    // ellipse(this.pos.x + 10, this.pos.y + 40, 28, 28);
    // ellipse(this.pos.x + 65, this.pos.y + 40, 28, 28);
    textSize(this.size);
    text("ZOOM", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height
  }
}
