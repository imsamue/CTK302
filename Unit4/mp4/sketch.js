let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let description = "";
let font;
let pic;

function setup() {
  createCanvas(1000, 500);
  // HERE is the call to get the weather. We build the string first.
  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Salem,MA,US&units=imperial&";
  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
  // let myIDString = "appid=xxxxx";
  let myIDString = "appid=0f4017190a37b246eda6c1c83528b182";
  let myTotalString = myCityString + myIDString;
  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.

  font = loadFont("assets/champagne/CLbold.ttf");
  pic = loadImage("assets/sunset.jpg");
  imageMode(CENTER);
  angleMode(DEGREES);

  let inp = createInput("");
  inp.position(25, 25);
  inp.size(200);
  inp.input(myInputEvent);
}


function myInputEvent() {
  console.log("you are typing: ", this.value());
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humiditiy = weather.main.humidity;
  description = weather.weather[0].description;
}

function draw() {
  switch (state) {
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background ("purple");
      textFont(font);
      textSize(28);
      text();
      break;

    case 2:
      c1 = color(140, 170, 255);
      c2 = color(100, 130, 255);
      setGradient(c1, c2);

      image(pic, 800, height / 2, 450, 750);

      fill("black");
      textFont(font);
      textSize(44);
      push();
      textAlign(LEFT, CENTER);
      text("What is the weather in " + weather.name + "?", 20, 136);
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
