//Variables for rectangle
let recY = 10, recMoveDown = false;

//Variables for circle
let circY = 150, circMoveUp = false;

// These variables represent the canvas size
let canvasX = 440, canvasY = 200;

// This function is where we setup the dimension of our canvas
function setup() {
  var myCanvas = createCanvas(canvasX,canvasY);
      myCanvas.parent("mainDiv");
}

// This function is where we put the elements we want to be drawn in the canvas
function draw() {
	clear();
	callRectangle();
	callCircle();
}

function callRectangle(){
	fill('#228B22');
	noStroke();
	rect(30, recY, 120, 80);
	
	//This will make rectangle move down
	if (recMoveDown == false){
		recY++;
	}
	
	//This will make the rectangle to move up
	if (recMoveDown == true){
		recY--;
	}
	
	//Checks if rectangle touches the bottom canvas
	if (recY == 120){
		recMoveDown = true;
	}
	
	//Checks if rectangle touches the upper canvas
	if (recY == 0){
		recMoveDown = false;
	}
}

function callCircle(){
	fill('#ff8C00');
	circle(330, circY, 80);	
	
	//This will make circle move up
	if (circMoveUp == false){
		circY--;
	}
	
	//This will make the circle to move down
	if (circMoveUp == true){
		circY++;
	}
	
	//Checks if rectangle touches the bottom canvas
	if (circY + 40 == 200){
		circMoveUp = false;
	}
	
	if (circY  == 40){
		circMoveUp = true;
	}
}
