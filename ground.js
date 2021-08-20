class makeRect {
	constructor(x,y,rotation) {
		this.rotation = rotation;
		this.width = 350;
		this.height = 50;
		this.body = Bodies.rectangle(x,y,this.width,this.height,{isStatic:true});
		Body.setAngle(this.body, this.rotation);
		World.add(world, this.body);
	}

	show() {
		push();
		rectMode(CENTER);
		fill(128);
		stroke(0);
		translate(this.body.position.x, this.body.position.y);
		rotate(this.rotation);
		rect(0, 0, this.width, this.height);
		pop();
	}
}