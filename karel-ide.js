/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   chessBoard();
}

// Moves
function moveFourTimes() {
   move();
   move();
   move();
   move();
}

function moveDiagonalRight() {
   move();
   turnLeft();
   move();
}

function moveTwo() {
   move();
   move();
}

// Turn
function turnNormal() {
   turnLeft();
   turnLeft();
   turnLeft();
}

function turnDown() {
   turnLeft();
   turnLeft();
   turnLeft();
}

// Drawing
function drawDiagonalLine() {
   putBeeper();
   moveDiagonalRight();
   turnNormal();
   putBeeper();
   moveDiagonalRight();
   turnNormal();
   putBeeper();
   moveDiagonalRight();
   turnNormal();
   putBeeper();
   moveDiagonalRight();
   turnNormal();
   putBeeper();
   turnDown();
   moveFourTimes();
}

function chessBoard() {
   //3 Beeper Line
   putBeeper();
   moveTwo();
   putBeeper();
   moveTwo();
   putBeeper();
   
   // move top from right
   turnLeft();
   move();
   turnLeft();
   
   //2 Beeper Line
   move();
   putBeeper();
   moveTwo();
   putBeeper();
   move();
   
   // move top from left
   turnRight();
   move();
   turnRight();
   
   //3 Beeper Line
   putBeeper();
   moveTwo();
   putBeeper();
   moveTwo();
   putBeeper();
   
   // move top from right
   turnLeft();
   move();
   turnLeft();
   
   //2 Beeper Line
   move();
   putBeeper();
   moveTwo();
   putBeeper();
   move();
   
   // move top from left
   turnRight();
   move();
   turnRight();
   
   //3 Beeper Line
   putBeeper();
   moveTwo();
   putBeeper();
   moveTwo();
   putBeeper();
   
}