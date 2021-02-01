// Project Title

let atheon;
let sanct;


function setup() {
  createCanvas(windowWidth, windowHeight);
  atheon = new Walker(width/2, height/2, "white");
  sanct = new Walker(100, 100, "limegreen");
  background("black");
}

function draw() {
  atheon.move();
  atheon.display();
  sanct.move();
  sanct.display();
}

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.color = "theColor";
    this.speed = 5;

  }

  display () {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 2, 2);
  }

  move() {
    let choice = random(100);
    if(choice < 25) {
      this.x += this.speed;
    }
    else if (choice < 50) {
      this.x -= this.speed;
    }
    else if (choice < 75) {
      this.y += this.speed;
    }
    else {
      this.y -= this.speed;
    }
    
  }
}
