var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var stars = [];
var speed = 2;
var int = 0;
var xM = 0
c.addEventListener("mousemove", function(event) {
  xM = event.clientX
})

function star(x, y, size, v) {
  this.speed = v;
  this.x = x;
  this.y = y;
  this.size = Math.floor(v) + 1;
  this.update = function() {
    this.x += v * (xM - c.width / 2) / 500;
    ctx.fillStyle = "white";
    //ctx.fillText('☆', this.x,this.y);
    ctx.fillRect(this.x, this.y, this.size, this.size);
  };
}
console.log('hey')

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(function() {

for(var i = 1; i<3; i++){

c.width = window.innerWidth
c.height = window.innerHeight

  ctx.clearRect(0, 0, c.width, c.height) //clear canvas
  stars.push(new star(rand(0, c.width), rand(0, c.height), rand(1, 4), rand(1, 12) / 4)); // make a new star off the screen

  //update stars
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    if (stars[i].x > c.width || stars[i].x < 0) {
      stars.shift();
    }
  }
}
}, 1)
