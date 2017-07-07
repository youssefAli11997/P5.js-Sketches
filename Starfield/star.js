function star(){
	this.x = random(-width, width),
	this.y = random(-height, height),
	this.z = random(width);

	this.update = function(){
		this.z -= speed;
		if(this.z < 1){
			this.x = random(-width, width),
			this.y = random(-height, height),
			this.z = random(width);
		}
	}

	this.show = function(){
		fill(255);
		noStroke();

		var sx = map(this.x/this.z,0,1,0,width),
			sy = map(this.y/this.z,0,1,0,height),
			r = map(this.z,0,width,18,0);

		ellipse(sx,sy,r,r);
	}
}