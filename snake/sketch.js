let serpent;
let sanct = 20;
let food;
let munch;

function preload() {
  munch = loadSound("assets/munch.mp3");                   //tried adding a sound effect, but it ended up just screwing the game up. No idea why it didn't want to work.
}

function setup(){
  createCanvas(600,600);
  serpent = new Snake();
  //framerate adds a bit of an old arcade style effect
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width/sanct);
  let rows = floor(height/sanct);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(sanct);
}


function draw() {
  background(0);
  serpent.death();
  serpent.update();
  serpent.show();
  
  if (serpent.eat(food)) {
    munch.play();
    pickLocation();
  }
  
  // food:
  fill(242,242,242);
  rect(food.x, food.y, sanct, sanct);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    serpent.direction(0, -1);
  }
  else if (keyCode === DOWN_ARROW){
    serpent.direction(0, 1);
  }
  else if (keyCode === RIGHT_ARROW){
    serpent.direction(1, 0);
  }
  else if (keyCode === LEFT_ARROW){
    serpent.direction(-1, 0);
  }
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.direction = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
    
  };
  
  this.eat = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 4) {
      this.total++;
      return true;
    }
    else {
      return false;
    }
  };
  
  this.death = function() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
      }
    }
  };
  
  this.update = function () {
    for (let i = 0; i < this.tail.length-1; i++) {
      this.tail[i] = this.tail[i+1];
    }
    this.tail[this.total-1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed*sanct;
    this.y = this.y + this.yspeed*sanct;
    //avoid snake to go out of canvas
    this.x = constrain(this.x, 0, width-sanct);
    this.y = constrain(this.y, 0, height-sanct);
  };
  
  this.show = function() {
    fill(1,254,0);
    for (let i = 0; i < this.total; i++){
      rect(this.tail[i].x,this.tail[i].y, sanct, sanct);
    } 
    rect(this.x, this.y, sanct, sanct);
  };
}



