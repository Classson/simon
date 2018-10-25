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
            setTimeout(function(){ playRed() }, 800);
            //resetBoard(100);
        }
        if(color === 'blue'){
            setTimeout(function(){ playBlue() }, 800);
            //resetBoard(100);
        }
        if(color === 'green'){
            setTimeout(function(){ playGreen() }, 800);
            //resetBoard(100);
        }
        if(color === 'yellow'){
            setTimeout(function(){ playYellow() }, 800);
            //resetBoard(100);
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

const Player(color, sound) {
    this.color: color,
    this.playFunc: (){
        let snd = new Audio(sound);
        snd.currentTime=0;
        snd.play;
        document.getElementById(color).style.backgroundColor = "black";
        setTimeout(function(){ document.getElementById('red').style.backgroundColor = "red"; }, 800);
    }
}


//functions that play each color
function playRed(){
   let redSnd = new Audio('http://www.pacdv.com/sounds/domestic_sound_effects/keys-catch-1.wav');

    function sndRed(){
        redSnd.currentTime=0;
        redSnd.play();
    }

    document.getElementById('red').style.transform = "scale(1.1, 1.1)";

    
    function flashRed(){
        document.getElementById('red').style.backgroundColor = "black"; 
        //"#ff4032"
        setTimeout(function(){ document.getElementById('red').style.backgroundColor = "red"; }, 800);
        setTimeout(function(){ document.getElementById('red').style.transform = "scale(1, 1)"; }, 800);
    }
    
    sndRed();
    flashRed();
}

function playGreen(){
   let greenSnd = new Audio('http://www.pacdv.com/sounds/domestic_sound_effects/can-to-table-1.wav');

    function sndGreen(){
        greenSnd.currentTime=0;
        greenSnd.play();
    }

    document.getElementById('green').style.transform = "scale(1.1, 1.1)";
    
    function flashGreen(){
        document.getElementById('green').style.backgroundColor = "black"; //"#39d658";
        setTimeout(function(){ document.getElementById('green').style.backgroundColor = "green"; }, 800);
        setTimeout(function(){ document.getElementById('green').style.transform = "scale(1, 1)"; }, 800);
    }
    
    sndGreen();
    flashGreen();
}

function playYellow(){
   let yellowSnd = new Audio('http://www.pacdv.com/sounds/interface_sound_effects/sound81.wav');

    function sndYellow(){
        yellowSnd.currentTime=0;
        yellowSnd.play();
    }

    document.getElementById('yellow').style.transform = "scale(1.1, 1.1)";
    
    function flashYellow(){
        document.getElementById('yellow').style.backgroundColor = "black"; //"#f4ff84";
        setTimeout(function(){ document.getElementById('yellow').style.backgroundColor = "yellow"; }, 800);
        setTimeout(function(){ document.getElementById('yellow').style.transform = "scale(1, 1)"; }, 800);
    }
    
    sndYellow();
    flashYellow();
}

function playBlue(){
   let blueSnd = new Audio('http://www.pacdv.com/sounds/miscellaneous_sounds/striking-a-match-1.wav');
    console.log(gameArr);

    function sndBlue(){
        blueSnd.currentTime=0;
        blueSnd.play();
    }
    
    document.getElementById('blue').style.transform = "scale(1.1, 1.1)";

    function flashBlue(){
        document.getElementById('blue').style.backgroundColor = "black"; //"#83c5ff";
        setTimeout(function(){ document.getElementById('blue').style.backgroundColor = "blue"; }, 800);
        setTimeout(function(){ document.getElementById('blue').style.transform = "scale(1, 1)"; }, 800);
    }
    
    sndBlue();
    flashBlue();
}



// resets board between plays
function resetBoard(timeout) {
    setTimeout(function(){
    document.getElementById('blue').style.backgroundColor = "blue";
    document.getElementById('yellow').style.backgroundColor = "yellow";
    document.getElementById('green').style.backgroundColor = "green";
    document.getElementById('red').style.backgroundColor = "red";
    }, timeout);
}