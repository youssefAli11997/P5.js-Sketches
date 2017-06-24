function setup() {
	createCanvas(windowWidth-50,windowHeight-50);
	background(250,250,200);   
}



function draw() {
    noStroke();
    var col1 = random(255);
    var col2 = random(255);
    var col3 = random(255);
    fill(col1,col2,col3,50);
    var w = random(100);
    ellipse(mouseX,mouseY,w,w);
}


