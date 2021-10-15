let grid = [];
let gridSize = 5;
let rows = 30;
let cols = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  makeAGrid();
}

function makeAGrid(rows,cols) {

  grid.push(rows,cols);
  rect(rows,cols,0);
}

function showGrid() {
  rect();
}
