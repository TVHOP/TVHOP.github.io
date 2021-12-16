
let clownimg;
let octopusimg;
let theCreatures = [];


function preload() {
  clownimg = loadImage("assets/clown.png");
  octopusimg = loadImage("assets/octoman.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<50; i++) {
    if (random(100) < 30) {
      let octopus = new Octopus(100,200,150, octopusimg);
      theCreatures.push(octopus);
    }
    else {
      let fish = new Clownfish(random(50),random(20),650,clownimg);
      theCreatures.push(fish);
    }
  }
}

function draw() {
  background("#B1DEFB");
  for (let someCreature of theCreatures) {
    someCreature.update();
    someCreature.display();

  }
}

class Creature {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  update() {
    this.x += 2;
    this.y += sin(this.x / 100);

    if (this.x > width) {
      this.x = 15;
    }

  }
  display() {
    fill("limegreen");
    circle(this.x,this.y,this.size);
  }

}

class Clownfish extends Creature {
  constructor(x,y,size,theImage) {
    super(x,y,size);
    this.myImage = theImage;
  }
  display() {
    image(this.myImage,this.x,this.y,this.size);

  }
}

class Octopus extends Creature {
  constructor(x,y,size,someImage) {
    super(x,y,size);
    this.image = someImage;
  }
  display() {
    image(this.image,this.x,this.y,this.size,this.size);
  }
}

