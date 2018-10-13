let colors = ['red', 'blue', 'green', 'yellow'];

let gameArr = ['green', 'blue', 'blue', 'red'];

let userArr = [];

//function to generate random color
const randomColor = () => {
        let ind = Math.floor(Math.random() * 4);
    
        return colors[ind];
    }

//function that "plays" the current array
function playArr(){
    for(let i = 0; i < gameArr.length; i++){
        if(gameArr[i] === 'red'){
            setTimeout(function(){ playRed() }, (i*800));
            resetBoard(i*200);
        }
        if(gameArr[i] === 'blue'){
            setTimeout(function(){ playBlue() }, (i*800));
            resetBoard(i*200);
        }
        if(gameArr[i] === 'green'){
            setTimeout(function(){ playGreen() }, (i*800));
            resetBoard(i*200);
        }
        if(gameArr[i] === 'yellow'){
            setTimeout(function(){ playYellow() }, (i*800));
            resetBoard(i*200);
        }
    }
}

//function that checks user input array against current array

//function that adds new random color to the array
const addColor = () => gameArr.push(randomColor());



function playRed(){
   let redSnd = new Audio('http://www.pacdv.com/sounds/domestic_sound_effects/keys-catch-1.wav');

    function sndRed(){
        redSnd.currentTime=0;
        redSnd.play();
    }

    function flashRed(){
        document.getElementById('red').style.backgroundColor = "black"; 
        //"#ff4032"
        setTimeout(function(){ document.getElementById('red').style.backgroundColor = "red"; }, 800);
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

    function flashGreen(){
        document.getElementById('green').style.backgroundColor = "black"; //"#39d658";
        setTimeout(function(){ document.getElementById('green').style.backgroundColor = "green"; }, 800);
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

    function flashYellow(){
        document.getElementById('yellow').style.backgroundColor = "black"; //"#f4ff84";
        setTimeout(function(){ document.getElementById('yellow').style.backgroundColor = "yellow"; }, 800);
    }
    
    sndYellow();
    flashYellow();
}

function playBlue(){
   let blueSnd = new Audio('http://www.pacdv.com/sounds/miscellaneous_sounds/striking-a-match-1.wav');

    function sndBlue(){
        blueSnd.currentTime=0;
        blueSnd.play();
    }

    function flashBlue(){
        document.getElementById('blue').style.backgroundColor = "black"; //"#83c5ff";
        setTimeout(function(){ document.getElementById('blue').style.backgroundColor = "blue"; }, 800);
    }
    
    sndBlue();
    flashBlue();
}


function resetBoard(timeout) {
    setTimeout(function(){
        console.log("running");
    document.getElementById('blue').style.backgroundColor = "blue";
    document.getElementById('yellow').style.backgroundColor = "yellow";
    document.getElementById('green').style.backgroundColor = "green";
    document.getElementById('red').style.backgroundColor = "red";
    }, timeout);
}