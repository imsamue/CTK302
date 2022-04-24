var bubbles = [];
let url = "";

function setup() {
  let key = "1KffNkF_VPJkFmYVQVBFdOl3WR7ZFPAXnUJBhfsd6sbc";
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1";
  loadJSON(url, gotData);

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function gotData(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your name?"],
        data[i]["What is your favorite color?"],
        data[i]["What is your favorite shape?"]));
  }
}

function draw() {
  background(32);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

class Bubble {
  constructor(myName, myColor, myShape) {
    // only the order of these parameters matters!
    this.color = myColor;
    this.shape = myShape;
    this.name = myName;
    this.pos = createVector(random(50, width - 50), random(50, height - 50));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke(0);
    strokeWeight(3);
    if (this.color === "Red") {
      fill("red");
    } else if (this.color === "Pink") {
      fill("pink");
    } else if (this.color === "Orange") {
      fill("orange");
    } else if (this.color === "Yellow") {
      fill("yellow");
    } else if (this.color === "Green") {
      fill("green");
    } else if (this.color === "Cyan") {
      fill("cyan");
    } else if (this.color === "Blue") {
      fill("blue");
    } else if (this.color === "Purple") {
      fill("purple");
    } else fill(random(255), random(255), random(255));

    if (this.shape === "Square") {
      rect(this.pos.x, this.pos.y, 120, 120);
    } else if (this.shape === "Circle") {
      ellipse(this.pos.x, this.pos.y, 120, 120);
    } else if (this.shape === "Triangle") {
      triangle(this.pos.x, this.pos.y - 90, this.pos.x + 80, this.pos.y + 30, this.pos.x - 80, this.pos.y + 30);
    } else star(this.pos.x, this.pos.y, 40, 70, 5);

    fill(255);
    strokeWeight(1.5);
    textSize(24);
    textFont("Courier New");
    text(this.name, this.pos.x, this.pos.y);
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
