var words = ["cat","dog","bird","elephant"];
var randomWord = words[Math.floor[Math.random()*words.length]]
var guessesRight = [];
var guessesWrong = [];
var answerArray = [];
var count = 0;

function setup(){
  createCanvas(1000,1000)
}

function drawBlanks(){
  for (var i = 0; i < randomWord.length; i++){
    answerArray[i]= "_"
}

function draw(){
  background(255);
  guess();
  drawGuesses();
  drawBlanks();
  drawHangman();
}

function guess(){
  if (count == 0){
    text("Enter a letter.",450,30)
  }
  else if (count == 1){
    text()
  }
}

function keyTyped(){
  if (count == 0){
    guessesRight.push(key);
    putGuessesInArray(key);
    console.log(key);
    screen ++;
  }
}

function drawGuesses(){
  for(var i =0; i<guessesRight.length; i++){
  var num = word.indexOf(guess[i]);
    text(guessesRight[i],100,100)
  }
}

function drawHangman(){
rect(100,50,150,1);
rect(100,50,1,350);
rect(35,400,150,1);
rect(250,50,1,50);
if (count == 1){
  ellipse(250,120,60);
}
if(count == 2){
  rect(250,150,1,150);
}
if(count == 3){
  line(250, 200, 175, 175);
}
if(count == 4){
  line(250, 200, 325, 180);
}
if(count == 5){
  line(250, 300, 200, 340);
}
if(count == 6){
  line(250, 300, 300, 345);
}
if(count = 7){
  text("You lose!!!!!!!!")
}
}
