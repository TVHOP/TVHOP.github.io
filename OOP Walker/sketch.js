
let boom, bewm, buum;

function setup() {
  createCanvas(windowWidth, windowHeight);
  boom = new Walker(width/2, height/2, "yellow");
  bewm = new Walker(100, height/2, "blue");
  buum = new Walker(400,500,"black");


}

function draw() {
  boom.move();
  boom.display();
  bewm.move();
  bewm.display();
  buum.move();
  buum.display();
}

class Walker {
  constructor(x,y,theColor) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.color = theColor;
    this.speed = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, 3);  

  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x -= this.speed;
    }
    else {
      this.x += this.speed;
    }
  }
}