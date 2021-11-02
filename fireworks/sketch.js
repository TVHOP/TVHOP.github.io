let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (let i=fireworks.length-1; i>=0; i--) {
    if (fireworks[i].isDead()) {
      fireworks.splice(i,1);
    }
    else{
      fireworks[i].move();
      fireworks[i].display();
    }
  }
}

function mousePressed() {
  for (let i=0; i<100; i++) {
    let myParticle = new Particle(mouseX,mouseY);
    fireworks.push(myParticle);
  }
}

class Particle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = random(3,5);
    this.alpha = 255;
    this.theColor = color(random(255), random(255), random(255), this.alpha);
    this.dx = random(-5,5);
    this.dy = random(-5,5);
  }
  display() {
    noStroke();
    fill(this.theColor);
    circle(this.x, this.y, this.size);
  }
  move (){
    this.alpha--;
    this.theColor = color(random(255), random(255), random(255), this.alpha);

    this.x += this.dx;
    this.y += this.dy;
  }
  isDead() {
    return this.alpha < 0;
  }
}