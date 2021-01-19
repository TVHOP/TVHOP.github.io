// Bouncy Ball
// A M
// 1/19/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBouncingBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('black');
  moveBall();
  displayBall();
}

function mousePressed() {
  let ball = {
    x: mouseX,
    y: mouseY,
    diameter: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
    theColour: color(random(255), random(255), random(255), random(255)),
  };
  theBouncingBalls.push(ball);
}

function moveBall() {
  for (let ball of theBouncingBalls) {
    ball.x += ball.dx;
    ball.y += ball.dy;
  
    if (ball.x + ball.diameter/2 >= width || ball.x - ball.diameter/2 <= 0) {
      ball.dx *= -1;
    }
  
    if (ball.y + ball.diameter/2 >= height || ball.y - ball.diameter/2 <= 0) {
      ball.dy *= -1;
  }

  }
}
function displayBall() {
  for (let ball of theBouncingBalls) {
    noStroke();
    fill(ball.theColour)
    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
  }
}
