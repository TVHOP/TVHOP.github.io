// bubble demo



let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  background(220);
  bubbleUp();
  displayBubble();
}

function mousePressed() {
  for (let i=0; i<5; i++) {

    spawnBubble();
  }
}

function spawnBubble() {
  let bubble = {
    x: random(width),
    y: height,
    radius: random(20,50),
    dx: 0,
    dy:-3,
    theColor: color(random(255),random(255),random(255)),
  };
  theBubbles.push(bubble);
}

function bubbleUp () {
  for (let bubble of theBubbles) {
    bubble.y += bubble.dy;
    bubble.x += random(-5,5);

  }
}

function displayBubble() {
  for (let bubble of theBubbles) {
    noStroke();
  
    fill(bubble.theColor);
    circle(bubble.x,bubble.y,bubble.radius*2);
  }
}