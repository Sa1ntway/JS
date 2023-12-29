let canvas;
let context;

window.onload = function () {
  canvas = document.getElementById("drawingCanvas");
  context = canvas.getContext("2d");

  canvas.onclick = canvasClick;

  canvas.onmousedown = canvasClick;
  canvas.onmouseup = stopDragging;
  canvas.onmouseout = stopDragging;
  canvas.onmousemove = dragCircle;
};

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.isSelected = false;
}
let myCircle = new Circle(0, 0, 20, "red");

let circles = [];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function drawCircles() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];

    context.globalAlpha = 0.85;
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    context.fillStyle = circle.color;
    context.strokeStyle = "black";

    if (circle.isSelected) {
      context.lineWidth = 5;
    } else {
      context.lineWidth = 1;
    }
    context.fill();
    context.stroke();
  }
}

function addRandomCircles() {
  let radius = randomFromTo(10, 60);
  let x = randomFromTo(0, canvas.width);
  let y = randomFromTo(0, canvas.height);

  let colors = [
    "green",
    "blue",
    "red",
    "yellow",
    "magenta",
    "orange",
    "brown",
    "purple",
    "pink",
  ];

  let color = colors[randomFromTo(0, 8)];

  let circle = new Circle(x, y, radius, color);

  circles.push(circle);

  drawCircles();
}

let previousSelectedCircle;

function canvasClick(e) {
  let clickX = e.pageX - canvas.offsetLeft;
  let clickY = e.pageY - canvas.offsetTop;

  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    let distanceFromCenter = Math.sqrt(
      Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2)
    );
    if (distanceFromCenter <= circle.radius) {
      if (previousSelectedCircle != null) {
        previousSelectedCircle.isSelected = false;
      }
      previousSelectedCircle = circle;

      circle.isSelected = true;
      drawCircles();

      isDragging = true;
      return;
    }
  }
}

let isDragging = false;

function stopDragging() {
  isDragging = false;
}

function dragCircle(e) {
  if (isDragging == true) {
    if (previousSelectedCircle != null) {
      let x = e.pageX - canvas.offsetLeft;
      let y = e.pageY - canvas.offsetTop;

      previousSelectedCircle.x = x;
      previousSelectedCircle.y = y;

      drawCircles();
    }
  }
}

function clearCanvas() {
  circles = [];
  drawCircles();
}
