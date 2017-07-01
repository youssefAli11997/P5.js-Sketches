function setup() {
	createCanvas(600,400);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(4);

	if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250)
		fill(255,10,10);
	else
		noFill();

    rect(250,150,100,100);
}



