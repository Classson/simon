let colors = ['red', 'blue', 'green', 'yellow'];

let gameArr = [];

let userArr = [];

const addRed = () => userArr.push("red");
const addBlue = () => userArr.push("blue");
const addGreen = () => userArr.push("green");
const addYellow = () => userArr.push("yellow");

const checkArrs = () => {
    if(userArr.length === gameArr.length){
        for(let i = 0; i < gameArr.length; i++){
            if(gameArr[i] !== userArr[i]){
                console.log("nope!");
                document.getElementById('game').style.backgroundColor = "#ff3f2d";
                return "no dice";
            }
        }
        console.log("all good");
        document.getElementById('game').style.backgroundColor = "#59c600"; 
        addColor();
        play();
        userArr = [];
    }
}

//function to generate random color
const randomColor = () => {
        let ind = Math.floor(Math.random() * 4);
        return colors[ind];
    }

//clears gameArr, adds first color and plays the result
const startGame = () => {
    console.log("running");
    gameArr = [];
    addColor();
    play();
 document.getElementById('game').style.backgroundColor = "#e5e5e5"; 
}

//function that "plays" the current array
function playColor(color){
        if(color === 'red'){
            setTimeout(function(){ playRed.playFunc() }, 800);
        }
        if(color === 'blue'){
            setTimeout(function(){ playBlue.playFunc() }, 800);
        }
        if(color === 'green'){
            setTimeout(function(){ playGreen.playFunc() }, 800);
        }
        if(color === 'yellow'){
            setTimeout(function(){ playYellow.playFunc() }, 800);
        }
}

// plays each element in order
function play() {
    let i = 0;
    let interval = setInterval(function() {
        playColor(gameArr[i]);
        i++;
        if (i >= gameArr.length) {
            clearInterval(interval);
        }
   }, 800);
}


//function that adds new random color to the array
const addColor = () => gameArr.push(randomColor());

//player constructor
function Player(color, sound) {
    this.color = color,
    this.playFunc = function(){
        console.log("running");
        let snd = new Audio(sound);
        console.log(snd);
        snd.currentTime=0;
        snd.play();
        document.getElementById(color).style.backgroundColor = "black";
        setTimeout(function(){ document.getElementById(color).style.backgroundColor = color; }, 800);
    }
}

//make play objects for each color with play functions
let playRed = new Player('red', 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');

let playBlue = new Player('blue', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');

let playGreen = new Player('green', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');

let playYellow = new Player('yellow','https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');


// resets board between plays
function resetBoard(timeout) {
    setTimeout(function(){
    document.getElementById('blue').style.backgroundColor = "blue";
    document.getElementById('yellow').style.backgroundColor = "yellow";
    document.getElementById('green').style.backgroundColor = "green";
    document.getElementById('red').style.backgroundColor = "red";
    }, timeout);
}