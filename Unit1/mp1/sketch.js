function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER);
}

function draw() {
  if (mouseIsPressed) {
    background("blue");

    //stars
    noStroke();
    fill(255);
    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 300));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 500));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(0.5));
    rotate(degrees(frameCount / 250.0));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 350));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 400));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 400));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 400));
    star(0, 0, 8, 20, 5);
    pop();

    //head
    fill(255);
    ellipse(width / 3, height / 3, 120, 120);

    //nose
    fill("pink");
    triangle(
      width / 3,
      height / 3,
      width / 3 - 10,
      height / 3 + 10,
      width / 3 + 10,
      height / 3 + 10
    );

    //black fur patches
    fill(0);
    beginShape();
    curveVertex(width / 3, 72);
    curveVertex(width / 3 + 5, 72);
    curveVertex(210, 100);
    curveVertex(204, 120);
    curveVertex(220, 130);
    curveVertex(260, 120);
    curveVertex(240, 90);
    endShape();
    arc(width / 3, height / 3, 120, 120, -84, -11, OPEN);

    beginShape();
    curveVertex(width / 3, 72);
    curveVertex(width / 3 - 5, 72);
    curveVertex(190, 100);
    curveVertex(196, 120);
    curveVertex(180, 130);
    curveVertex(140, 120);
    curveVertex(160, 90);
    endShape();
    arc(width / 3, height / 3, 120, 120, 191, 264, OPEN);

    //ears
    fill("black");
    triangle(140, 60, 150, 110, 175, 80);
    triangle(260, 60, 255, 110, 225, 80);
    fill("pink");
    triangle(148, 70, 155, 95, 170, 85);
    triangle(252, 70, 250, 95, 230, 85);

    //eyes
    strokeWeight(0.25);
    stroke(0);
    fill(230, 230, 0);
    ellipse(180, 115, 25, 15);
    ellipse(220, 115, 25, 15);
    fill(0);
    ellipse(180, 115, 5, 10);
    ellipse(220, 115, 5, 10);

    //whiskers
    strokeWeight(1);
    stroke(180);
    line(190, 142, 150, 150);
    line(210, 142, 250, 150);
    line(190, 139, 150, 139);
    line(210, 139, 250, 139);
    line(190, 136, 150, 128);
    line(210, 136, 250, 128);

    //mouth
    stroke(0);
    fill(200, 0, 100);
    arc(width / 3, 145, 50, 60, 20, 160, CHORD);

    //stars
    noStroke();
    fill(255, 240);
    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 300));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 500));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(0.5));
    rotate(degrees(frameCount / 250.0));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 350));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 400));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 400));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * random(1), height * random(1));
    rotate(degrees(frameCount / 400));
    star(0, 0, 8, 20, 5);
    pop();

    textSize(80);
    fill(255 ,0, 0)
    text("ZOOM\nCAT", 400, 100);
  } else {
    background("navy");

    //head
    noStroke();
    ellipse(width / 3, height / 3, 120, 120);

    //nose
    noStroke();
    fill("pink");
    triangle(
      width / 3,
      height / 3,
      width / 3 - 10,
      height / 3 + 10,
      width / 3 + 10,
      height / 3 + 10
    );

    //black fur patches
    fill(0);
    beginShape();
    curveVertex(width / 3, 72);
    curveVertex(width / 3 + 5, 72);
    curveVertex(210, 100);
    curveVertex(204, 120);
    curveVertex(220, 130);
    curveVertex(260, 120);
    curveVertex(240, 90);
    endShape();
    arc(width / 3, height / 3, 120, 120, -84, -11, OPEN);

    beginShape();
    curveVertex(width / 3, 72);
    curveVertex(width / 3 - 5, 72);
    curveVertex(190, 100);
    curveVertex(196, 120);
    curveVertex(180, 130);
    curveVertex(140, 120);
    curveVertex(160, 90);
    endShape();
    arc(width / 3, height / 3, 120, 120, 191, 264, OPEN);

    //ears
    fill("black");
    triangle(140, 60, 150, 110, 175, 80);
    triangle(260, 60, 255, 110, 225, 80);
    fill("pink");
    triangle(148, 70, 155, 95, 170, 85);
    triangle(252, 70, 250, 95, 230, 85);

    //eyes
    strokeWeight(0.25);
    stroke(0);
    fill(230, 230, 0);
    ellipse(180, 115, 25, 15);
    ellipse(220, 115, 25, 15);
    fill(0);
    ellipse(180, 115, 5, 10);
    ellipse(220, 115, 5, 10);

    //whiskers
    strokeWeight(1);
    stroke(180);
    line(190, 142, 150, 150);
    line(210, 142, 250, 150);
    line(190, 139, 150, 139);
    line(210, 139, 250, 139);
    line(190, 136, 150, 128);
    line(210, 136, 250, 128);

    //mouth
    stroke(0);
    fill(0, 0);
    arc(width / 3, 140, 40, 40, 30, 150);

    //stars
    noStroke();
    fill(255, 255, 0);
    push();
    translate(width * 0.5, height * 0.1);
    rotate(degrees(frameCount / 300));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * 0.9, height * 0.1);
    rotate(degrees(frameCount / 500));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * 0.65, height * 0.35);
    rotate(degrees(frameCount / 250.0));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * 0.1, height * 0.3);
    rotate(degrees(frameCount / 350));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * 0.2, height * 0.05);
    rotate(degrees(frameCount / 400));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * 0.75, height * 0.15);
    rotate(degrees(frameCount / 400));
    star(0, 0, 8, 20, 5);
    pop();

    push();
    translate(width * 0.85, height * 0.4);
    rotate(degrees(frameCount / 400));
    star(0, 0, 8, 20, 5);
    pop();

    fill("white");
    textSize(20);
    text("Sorin is a good boy, who sits\nquietly at night.   That is, until\nsome unknown event triggers...", 440, 250)

    //coordinates
    textSize(15)
    fill("white");
    text(mouseX + "," + mouseY, 20, 20);
  }
}

//define stars
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
