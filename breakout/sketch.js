// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Aidan M
//bouncy Orb "Breakout" game


let xOrb = 50;
let yOrb = 50;
let horizontalSpeed = (2, 7);
let verticalSpeed = (-7, -2);
let score = 0;
let hit;
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {

  background("black"); //makes background with colour
  fill("black");
  rect(mouseX, windowHeight-30, 90, 15); //creates the bumper at the bottom of the screen. It follows the X-coord of the mouse.
  stroke("white");

  move();
  orbCreation();
  bounce();

  bumperCreation();

  fill("black");
  textSize(24);
  textFont("fantasy");
  text("points" + score, 10, 30); //makes text on the left
}

function move() {
  xOrb += horizontalSpeed;
  yOrb += verticalSpeed;
}


function bounce() { //creates border physics that change to match the size of the window. Width and height respectively.

  if (xOrb < 10 || xOrb > windowWidth - 10) {
    horizontalSpeed *= -1;
  }
  if (yOrb < 10 || yOrb > windowHeight - 10) {
    verticalSpeed *= -1;
  }
}



function orbCreation() { //creates Orb and colour
  fill("black");
  circle(xOrb, yOrb, 20);
}

function bumperCreation() { 
  hit = collideRectCircle(mouseX, windowHeight-30, 90, 15, xOrb, yOrb, 20); //sets conditions for a 'hit' to occur.
  if (hit) {
    yOrb + 10 >= 375;
    horizontalSpeed *= 1;      //creates a bounce when contact with bumper is made
    verticalSpeed *= -1;       //same thing.
    score++;

  }
}
