var angle = angle2 = 0;

//Variables for circle
let circY = 165, circMoveUp = false;

//Variables for pentagon
let pentY13 = 95, pentY2 = 75, pentY45 = 125, pentMoveDown = false;

//Variables for triangle
let triY13 = 65, triY2 = 10, triMoveDown = false;

// This function is where we setup the dimension of our canvas
function setup() {
  var myCanvas = createCanvas(440,200);
      myCanvas.parent("mainDiv");
	 
	angleMode(DEGREES);
}

// This function is where we put the elements we want to be drawn in the canvas
function draw() {
	clear();
	callSquare();
	callPentagon();
	callCircle();
	callTriangle();
	callRectangle();
}

function callSquare(){
	push();
	translate(47.5,152.5);
	rotate(angle2);
	rectMode(CENTER);
	fill('#800080');
	noStroke();
	rect(0,0,55,55);
	angle2--;
	pop();
}

function callRectangle(){
	
	push();
	translate(140,67.5);
	rotate(angle);
	rectMode(CENTER);
	
	fill('#228B22');
	noStroke();
	rect(0, 0, 120, 55);
	angle++;
	pop();
}

function callPentagon(){
	fill('#008b8b');
	noStroke();
	beginShape();
	vertex(280, pentY13);
	vertex(320, pentY2);
	vertex(360, pentY13);
	vertex(340, pentY45);
	vertex(300, pentY45);
	endShape(CLOSE);
	
	//This will make pentagon move down
	if (pentMoveDown == false){
		pentY13 = pentY13 + 2.5;
		pentY2 = pentY2 + 2.5;
		pentY45 = pentY45 + 2.5;
	}
	
	//This will make the pentagon to move up
	if (pentMoveDown == true){
		pentY13 = pentY13 - 2.5;
		pentY2 = pentY2 - 2.5;
		pentY45 = pentY45 - 2.5;
	}

	//Checks if pentagon touches the bottom canvas
	if (pentY45 == 200){
		pentMoveDown = true;
	}
	
	//Checks if rectangle touches the upper canvas
	if (pentY2 == 0){
		pentMoveDown = false;
	}
}

function callCircle(){
	fill('#ff8C00');
	circle(240, circY, 55);	
	
	//This will make the circle to move down
	if (circMoveUp == true){
		circY = circY + 5;
	}
	
	//This will make circle move up
	if (circMoveUp == false){
		circY = circY - 5;
	}
	
	//Checks if rectangle touches the bottom canvas
	if (circY + 30 == 200){
		circMoveUp = false;
	}
	
	if (circY  == 30){
		circMoveUp = true;
	}
}

function callTriangle(){
	fill('#ff0000');
	triangle(370, triY13, 398, triY2, 426, triY13);
	
	//This will make triangle move down
	if (triMoveDown == false){
		triY13 = triY13 + 1.25;
		triY2 = triY2 + 1.25;
	}
	
	//This will make the triangle to move up
	if (triMoveDown == true){
		triY13 = triY13 - 1.25;
		triY2 = triY2 - 1.25;
	}
	
	//Checks if triangle touches the bottom canvas
	if (triY13 == 200){
		triMoveDown = true;
	}
	
	//Checks if triangle touches the upper canvas
	if (triY2 == 0){
		triMoveDown = false;
	}
}