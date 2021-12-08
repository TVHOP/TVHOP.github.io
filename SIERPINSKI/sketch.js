let triangleVertices = [
  {x:400, y:100},
  {x:100,y:700},
  {x:700,y:700},
];

let theDegree = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices,theDegree);
}

function mousePressed() {
  theDegree += 1;
}

function sierpinski(points, degree) {
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (degree > 0) {
    sierpinski(points[0], getMidPoint(points[0], points[1]), getMidPoint(points[0], points[2]), degree -= 1);
  }
  if (degree > 0) {
    sierpinski(points[1], getMidPoint(points[0], points[1]), getMidPoint(points[1], points[2]), degree -= 1);
  }
  if (degree > 0) {
    sierpinski(points[2], getMidPoint(points[0], points[2]), getMidPoint(points[0], points[2]), degree -= 1);
  }
}

function getMidPoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let midpoint = {x: xDiff/2, y : yDiff/2};
  return midpoint;
}
