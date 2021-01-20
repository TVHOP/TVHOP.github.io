// Perlin Noise
// A M
// 1/20/21

let rectHeights;
let bikeLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeights = generateHeights();
  console.log(rectHeights);
}

function draw() {
  background('black');
  fill('red')
  let howMany = 950;
  for (let i=bikeLocation; i<bikeLocation+howMany; i++) {
    let rectWidth = width / howMany;
    rect(rectWidth*(i-bikeLocation), height-rectHeights[i], rectWidth, rectHeights[i])
  }
  if (keyIsPressed) {
    if (key === "d") {
      bikeLocation += 3
    }
  }
}

function generateHeights() {
  let theHeights = [];
  for (let i=0; i<5000; i++) {
    let rectHeight = noise(i*0.01) * height;
    theHeights.push(rectHeight);
  }
  return theHeights;
}