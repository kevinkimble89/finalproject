//Variables for square
let sqY = 10, sqMoveDown = false;

//Variables for triangle
let triY1 = 65, triY2 = 10, triY3 = triY1, triMoveDown = false;

//Variables for pentagon
let pentY13 = 30, pentY2 = 10, pentY45 = 60, pentMoveDown = false;

// This function is where we setup the dimension of our canvas
function setup() {
  var myCanvas = createCanvas(440,200);
      myCanvas.parent("mainDiv");
}

// This function is where we put the elements we want to be drawn in the canvas
function draw() {
	clear();
	callTriangle();
	callSquare();
	callPentagon();
}

function callTriangle(){
	fill('#ff0000');
	triangle(370, triY1, 398, triY2, 426, triY3);
	
	//This will make triangle move down
	if (triMoveDown == false){
		triY1 = triY1 + 5;
		triY2 = triY2 + 5;
		triY3 = triY1;
	}
	
	//This will make the triangle to move up
	if (triMoveDown == true){
		triY1 = triY1 - 5;
		triY2 = triY2 - 5;
		triY3 = triY1;
	}
	
	//Checks if triangle touches the bottom canvas
	if (triY1 == 200){
		triMoveDown = true;
	}
	
	//Checks if triangle touches the upper canvas
	if (triY2 == 0){
		triMoveDown = false;
	}
}

function callSquare(){
	fill('#800080');
	noStroke();
	square(10, sqY, 55);
	
	//This will make rectangle move down
	if (sqMoveDown == false){
		sqY++;
	}
	
	//This will make the rectangle to move up
	if (sqMoveDown == true){
		sqY--;
	}
	
	//Checks if rectangle touches the bottom canvas
	if (sqY == 145){
		sqMoveDown = true;
	}
	
	//Checks if rectangle touches the upper canvas
	if (sqY == 0){
		sqMoveDown = false;
	}
}

function callPentagon(){
	fill('#008b8b');
	noStroke();
	beginShape();
	vertex(180, pentY13);
	vertex(220, pentY2);
	vertex(260, pentY13);
	vertex(240, pentY45);
	vertex(200, pentY45);
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
