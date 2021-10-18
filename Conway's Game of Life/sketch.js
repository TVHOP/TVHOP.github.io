let grid = [];
let gridSize = 60;
let cellWidth, cellHeight;
let autoPlay = false;
let gun;

function preload() {
  let gun = loadJSON("assets/GosperGun.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmpty2DArray(gridSize,gridSize);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
}

function draw() {
  background(220);
  if (autoPlay && frameCount % 1 === 0) {
    nextTurn();
  }
  displayGrid();
}

function createRandom2DArray(rows,cols) {
  let board =  [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        board[y].push(0);
      }
      else {
        board[y].push(1);
      }
    }
  }
  return board;
}

function keyPressed() {
  if (key === "e") {
    grid = createEmpty2DArray(gridSize,gridSize);
  }
  if (key === "r") {
    grid=createRandom2DArray(gridSize,gridSize);
  }
  if (key === " ") {
    nextTurn();
  }
  if (key === "p") {
    autoPlay = !autoPlay;
  }
  if (key === "g") {
    grid = gun;
  }
}

function nextTurn() {
  let newBoard = createEmpty2DArray(gridSize,gridSize);
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      let neighbours = 0;

      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          if (y+i>=0 && x+j>=0 &&y+i<gridSize && x+j<gridSize) {
            neighbours += grid[y+i][x+j];
          }
          
        }
      }
      neighbours -= grid[y][x];

      if (grid[y][x] === 1) {
        if (neighbours === 2 || neighbours === 3) {
          newBoard[y][x] = 1;
        }
        else {
          newBoard[y][x] = 0;
        }
      }
      if (grid[y][x] === 0) {
        if (neighbours === 3) {
          newBoard[y][x] = 1;
        }
        else {
          newBoard[y][x] = 0;
        }
      }
    }
  }
  grid = newBoard;
}

function mousePressed()  {
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
  else if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
  }
}

function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");      
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows,cols) {
  let board =  [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      board[y].push(0);
    }
  }
  return board;
}