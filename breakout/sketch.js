// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Aidan M
//bouncy ball "Breakout" game


let xBall = Math.floor(Math.random() * 300) + 50;
let yBall = 50;
let horizontalSpeed = (2, 7);
let verticalSpeed = (-7, -2);
let score = 0;
let state;

function setup() { //makes playing field
  createCanvas(400, 400);
}


function draw() {


  background("black"); //makes background with colour
  fill("#1789FC");
  rect(mouseX, 375, 90, 15); //creates the bouncer and controls

  move();
  display();
  bounce();

  paddle();

  fill("#1789FC");
  textSize(24);
  text("points " + score, 10, 25); //makes text on the left
}

function move() {
  xBall += horizontalSpeed;
  yBall += verticalSpeed;
}


function bounce() { //makes the bounce

  if (xBall < 10 ||
    xBall > 400 - 10) {
    horizontalSpeed *= -1;
  }
  if (yBall < 10 ||
    yBall > 400 - 10) {
    verticalSpeed *= -1;
  }
}



function display() { //creates ball and colour
  fill("#EC0909");
  ellipse(xBall, yBall, 20, 20);
}

function paddle() { //allows ball to bounce on the bouncer
  if (xBall > mouseX &&
      xBall < mouseX + 90) &&
      (yBall + 10 >= 375);
    horizontalSpeed *= -1;
    verticalSpeed *= -1;
    score++;

  }
}
