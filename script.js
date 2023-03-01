let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight * 0.8;
let context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);
let stroke_color = 'red';
let stroke_width = "2";
let is_drawing = false;

function change_color(element) {
  stroke_color = element.style.background;
}

function change_width(element) {
  stroke_width = element.innerHTML
}

function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(getX(event), getY(event));
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    context.lineTo(getX(event), getY(event));
    context.strokeStyle = stroke_color;
    context.lineWidth = stroke_width;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }
  event.preventDefault();
}

function stop(event) {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();
}

function getX(event) {
  if (event.pageX == undefined) {return event.targetTouches[0].pageX - canvas.offsetLeft}
  else {return event.pageX - canvas.offsetLeft}
  }


function getY(event) {
  if (event.pageY == undefined) {return event.targetTouches[0].pageY - canvas.offsetTop}
  else {return event.pageY - canvas.offsetTop}
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function Clear() {
    context.fillStyle = "black";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);
}
Footer
