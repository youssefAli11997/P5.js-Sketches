function setup() {
	createCanvas(600,400);
}
var prevX = 300;
var prevY = 200;
var ball = {
    x : 300,
    y : 200,
    xSpeed : -7,
    ySpeed : 6
};

function draw() {
    background(0);
    fill(255);
    //line(ball.x,ball.y,prevX,prevY);
    ellipse(ball.x,ball.y,50,50);
    if(ball.x > width || ball.x < 0)
        ball.xSpeed *= -1;
    if(ball.y > height || ball.y < 0)
        ball.ySpeed *= -1;
    
    prevX = ball.x;
    prevY = ball.y;
    
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
}



