var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var pixel = { x: 400, y: 200, size: 10, color: "pink" };

//var square = { x: 600, y: 150, size: 10, color: "red" };
var square = { x: Math.floor(Math.random() * (canvas.width - 10)), y: Math.floor(Math.random() * (canvas.height - 10)), size: 10, color: "pink", }; 

var gameover = false;

function drawPixel() {
ctx.fillStyle = pixel.color;
ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
}

function drawSquare() {
ctx.fillStyle = square.color;
ctx.fillRect(square.x, square.y, square.size, square.size);
}

function clearCanvas() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function movePixel(e) {
var speed = 5;
switch (e.keyCode) {
case 87:
if (pixel.y > 0) {
pixel.y -= speed;
}
break;
case 83:
if (pixel.y < canvas.height - pixel.size) {
pixel.y += speed;
}
break;
case 65:
if (pixel.x > 0) {
pixel.x -= speed;
}
break;
case 68:
if (pixel.x < canvas.width - pixel.size) {
pixel.x += speed;
}
break;
default:
break;
}
}

function checkCollision() {
if (
pixel.x + pixel.size > square.x &&
pixel.x < square.x + square.size &&
pixel.y + pixel.size > square.y &&
pixel.y < square.y + square.size
) {
return true;
} else {
return false;
}
}

function openBing() {
if (!gameover) {
window.open("https://www.bing.com");
gameover = true;
}
}

function update() {
clearCanvas();
drawSquare();
drawPixel();

if (checkCollision()) {
openBing();
}

requestAnimationFrame(update);
}

update();

window.addEventListener("keydown", movePixel);