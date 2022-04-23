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
  createCanvas(1000, 500);

  let button = select("#submit");
  button.mousePressed(userInput);

  font = loadFont("assets/champagne/CLbold.ttf");
  angleMode(DEGREES);
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
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
  switch (state) {
    case 0:
      c1 = color(140, 170, 255);
      c2 = color(100, 130, 255);
      setGradient(c1, c2);

      fill("black");
      textFont(font);
      textSize(44);
      push();
      textAlign(LEFT, CENTER);
      text("What is the weather in " + name + "?", 20, 136);
      pop();

      textSize(28);
      text("The windspeed is " + windspeed + " MPH", 20, 200);
      text("The temperature is " + temperature + " F", 20, 240);
      text("The weather is " + description, 20, 280);

      cloud(x, 275, 3);
      x = x + windspeed / 3;
      if (x > width + 12) x = -12;
      //thermometer
      // fill("red");
      // y = map(temperature, -10, 100, 5, height - 10);
      // rect(width / 2, 100, 20, y);

      break;
  }
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
