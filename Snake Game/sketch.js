var ourSnake;
var scl = 20;
var food;
var prevKey = 0;

function setup() {
	createCanvas(600,600);
	ourSnake = new Snake();
	frameRate(10); // speed of the game. if easy mode it's 10, medium 20, hard 30.
	pickLocation(); // for the food
}

function pickLocation(){
	var cols = width/scl;
	var rows = height/scl;
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);
}

function draw() {
	background(51);
	ourSnake.death();
	if(ourSnake.eat(food)) // get new food
		pickLocation();
	ourSnake.update();
	ourSnake.show();

	fill(255,0,100);
	rect(food.x,food.y,scl,scl);
}

function keyPressed(){
	if(keyCode === UP_ARROW && prevKey != DOWN_ARROW)
		ourSnake.dir(0,-1);
	else if(keyCode === DOWN_ARROW && prevKey != UP_ARROW)
		ourSnake.dir(0,1);
	else if(keyCode === LEFT_ARROW && prevKey != RIGHT_ARROW)
		ourSnake.dir(-1,0);
	else if(keyCode === RIGHT_ARROW && prevKey != LEFT_ARROW)
		ourSnake.dir(1,0);	
	else return;

	prevKey = keyCode;
}



