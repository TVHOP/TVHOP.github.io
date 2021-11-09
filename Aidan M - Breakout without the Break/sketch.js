// breakout without the break
// Aidan
// October 4th, 2021
//
// Extra for Experts:
// Music linked to mouse trigger (line 76-78)


let xOrb = 50;
let yOrb = 50;
let horizontalSpeed = (10, 10);
let verticalSpeed = (-10, -10);
let score = 0;
let hit;

let bumperWidth = 90;
let bumperHeight = 15;

let epicMusic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  epicMusic = loadSound("assets/crashTheme.mp3");
}


function draw() {

  background("#473F8D"); //makes background with colour
  fill("#FFC71F");
  rect(mouseX, windowHeight-30, bumperWidth, bumperHeight); //creates the bumper at the bottom of the screen. It follows the X-coord of the mouse.
  noStroke();

  move();
  orbCreation();
  bounce();
  bumperCreation();

  fill("#FFF70A");
  textSize(30);
  textFont("fantasy");
  text("score:   " + score, windowWidth/2, 30); //makes text on the left
}

function move() { //allows movement for the orb
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
  fill("#D61F22");
  circle(xOrb, yOrb, 20);
}

function bumperCreation() { 
  hit = collideRectCircle(mouseX, windowHeight-30, bumperWidth, bumperHeight, xOrb, yOrb, 20); //sets conditions for a "hit" to occur.
  if (hit) {
    yOrb + 10 >= 375;
    horizontalSpeed *= 1;      //creates a bounce when contact with bumper is made
    verticalSpeed *= -1;       //same thing.
    score++;

  }
}

function keyPressed(){       //extends the bumper to pretty much fullscreen. a cheat button.
  bumperWidth = windowWidth - 75;
}
                           

function mousePressed() {    //plays epic music.
  epicMusic.play(); 
}

