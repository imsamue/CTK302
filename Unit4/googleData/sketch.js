var bubbles = [];
let url = "";

function setup() {
  let key = "1FAIpQLSeVFUtCGtWkpYWaoUHITLK7Dy842618zwzo1fXIXuIpNtMqRA"; // this is KEY of the URL from the sheet
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.
  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects
function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your favorite color?"],
        // data[i]["What are you thankful for?"],
        data[i]["What is your name?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(color, thankful, name) {
    // only the order of these parameters matters!
    this.color = color;
    this.thankful = thankful;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y + 10, 120, 120);
    fill("this.color");
    text(
      this.name + "\n" + this.happy + "\n" + this.thankful,
      this.pos.x,
      this.pos.y
    );
  }
}
