var stars = [];
var speed;

function setup() {
  createCanvas(600,600);
  for (var i = 0; i < 600; i++)
    stars.push(new star());
}

function draw() {
  background(0);
  speed = map(mouseX,0,width,1,20);
  translate(width/2,height/2);
  for (var i = 0; i < 600; i++){
    stars[i].update();
    stars[i].show();
  }
}