var r = 150;
var yoff = 0;
function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0);
  translate(300,300);
  fill(255);
  beginShape();
  var xoff = 0;
  for(var i=0; i<TWO_PI; i+=0.1){
    var offset = map(noise(xoff , yoff),0,1,-25,25);
    r = 150 + offset;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x,y);
    xoff += 0.1;
  }
  endShape();
  yoff += 0.03;
}