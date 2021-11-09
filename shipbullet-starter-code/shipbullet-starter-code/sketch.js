// OOP Pair Programming Starter Code
// Aidan, Quinten
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
}

function draw() {
  background(0);
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.image = shipImage;
  }

  update() {
    if (this.x > windowWidth) {
      this.x *= -1;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    }
  }

  display() {
    imageMode(CENTER);
    image(this.image,this.x,this.y);
  }

  handleKeyPress() {
    if (keyPressed === " ") {
      this.Bullet;
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x2 = x;
    this.y2 = y;
    this.dx = dx;
    this.dy = dy;
    this.image2 = bulletImage;
  }

  update() {
    this.y -= this.dy;
    if (keyIsDown === "36"){
      this.y2 -= 5;
    }
  
  }

  display() {
    imageMode(CENTER);
    image(this.image2,this.x2,this.y2);
  }

  //   isOnScreen() {
  //     if (this.x > width || this.y > height || this.x < 0 || this.y < 0) {

//     }
//   }
}