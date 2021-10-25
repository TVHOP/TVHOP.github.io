


let gridSize = 10;
let grid;
let gjallarhorn;
let pigman;
let soundEffect;

function preload() {
  gjallarhorn = loadImage("assets/gjally.png");
  pigman = loadImage("assets/pyg.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize,gridSize);
  soundEffect = loadSound("assets/bruhMoment.mp3");
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed () {
  if (key === "e") {
    grid = createEmpty2DArray(gridSize,gridSize, 0);
  }
  if (key === "f") {
    grid = createEmpty2DArray(gridSize,gridSize, 1);
  }
  if (key === "r") {
    grid = createRandom2DArray(gridSize,gridSize);
  }
}

function mousePressed() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  swap(cellX, cellY);
  // swap(cellX+1, cellY);
  // swap(cellX-1, cellY);
  // swap(cellX,cellY+1);
  // swap(cellX,cellY-1);
}

function swap(x,y) {


  
  if(grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else if(grid[y][x] === 0) {
    grid[y][x] = 1;
  }
  soundEffect.play();
}

function displayGrid() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        image(pigman,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
      else if (grid[y][x] === 1) {
        image(gjallarhorn,x*cellWidth,y*cellHeight,cellWidth,cellHeight);
      }
    }
  }
}

function createEmpty2DArray(rows, cols, numToFill = 0) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      grid[y].push(numToFill);
    }
  }
  return grid;

}
function createFull2DArray(rows, cols) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      grid[y].push(1);
    }
  }
  return grid;

}

function createRandom2DArray(rows, cols) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        grid[y].push(0);
      }
      else {
        grid[y].push(1);   
      }   
    }
  }
  return grid;
}

// function keyPressed() {
//   if (keyCode === 82) {
//     setup();
//   }
// }

// function mousePressed() {
//   setup();
// }