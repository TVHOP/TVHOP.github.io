// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let lastSwitched = 0;
let isRed = false;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (isRed) {
    background("red");
  }
  else {
    background("black");
  }
  if (millis() > lastSwitched + 2000) {
    isRed = !isRed;
    lastSwitched = millis();
  }
  console.log(millis());
}