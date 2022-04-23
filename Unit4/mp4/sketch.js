let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let description = "";
let font;
let button;
let input;

let myCityStringBeg = "https://api.openweathermap.org/data/2.5/weather?zip=";
let myCityStringEnd = "&units=imperial&";
let myIDString = "appid=0f4017190a37b246eda6c1c83528b182";

function setup() {
  createCanvas(windowWidth, windowHeight);

  let button = select("#submit");
  button.mousePressed(userInput);

  font = loadFont("assets/champagne/CLbold.ttf");
  angleMode(DEGREES);
}

function gotData(data) {
  weather = data;
  print(weather);
  name = weather.name;
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humiditiy = weather.main.humidity;
  description = weather.weather[0].description;
}

function userInput() {
  let input = select("#zipCode");
  let myTotalString = myCityStringBeg + input.value() + myCityStringEnd + myIDString;
  loadJSON(myTotalString, gotData);
}

function draw() {
  c1 = color(140, 170, 255);
  c2 = color(96, 128, 235);
  setGradient(c1, c2);

  fill("black");
  textFont(font);
  textSize(60);
  push();
  textAlign(LEFT, CENTER);
  text("What is the weather in " + name + "?", 20, 60);
  pop();

  textSize(28);
  text("The windspeed is " + windspeed.toFixed(1) + " MPH", 20, 140);
  text("The temperature is " + temperature.toFixed(0) + " F", 20, 180);
  text("The weather is " + description, 20, 220);

  cloud(x, 350, 4);
  x = x + windspeed / 3;
  if (x > width + 24) x = -18;

  //thermometer
  fill(0, 0);
  stroke(0);
  strokeWeight(2);
  rect(100, 425, width - 200, 40);

  fill("red");
  noStroke();
  y = map(temperature, -10, 100, 100, width - 200);
  rect(100, 426, y, 38);
  stroke(0);
  strokeWeight(2);
  arc(100, 440, 90, 90, 35, 340, OPEN);


}

//code from REAS at https://editor.p5js.org/REAS/sketches/S1TNUPzim
function setGradient(c1, c2) {
  noFill();
  for (let y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

//code from jackiezen at https://editor.p5js.org/jackiezen/sketches/rJEziNOR
function cloud(x, y, size) {
  fill(255, 192);
  noStroke();
  arc(x, y, 25 * size, 20 * size, 180 + 360, 360);
  arc(x + 10, y, 25 * size, 45 * size, PI + 180 + 360, 360);
  arc(x + 25, y, 25 * size, 35 * size, PI + 180 + 360, 360);
  arc(x + 40, y, 30 * size, 20 * size, PI + 180 + 360, 360);
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
