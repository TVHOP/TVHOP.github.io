

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(150,150,75);
  recursiveCircle(width/2, height/2, height, 0);
}

function recursiveCircle(x, y, diameter) {
  fill(diameter);
  circle(x, height/2, diameter);
  

  if (diameter > 5) {
    recursiveCircle(x-mouseX/2/width*diameter, y - mouseY/height/2, diameter/2);
    recursiveCircle(x+mouseX/2/width*diameter, y + mouseY/height/2, diameter/2);
  }
}
