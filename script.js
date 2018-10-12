let colors = ['red', 'blue', 'green', 'yellow'];

let gameArr = [];

let userArr = [];

//function to generate random color
const randomColor = () => {
        let ind = Math.floor(Math.random() * 4);
    
        return colors[ind];
    }

//function that "plays" the current array


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
        document.getElementById('red').style.backgroundColor = "#ff4032";
        setTimeout(function(){ document.getElementById('red').style.backgroundColor = "red"; }, 1000);
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
        document.getElementById('green').style.backgroundColor = "#39d658";
        setTimeout(function(){ document.getElementById('green').style.backgroundColor = "green"; }, 1000);
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
        document.getElementById('yellow').style.backgroundColor = "#f4ff84";
        setTimeout(function(){ document.getElementById('yellow').style.backgroundColor = "yellow"; }, 1000);
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
        document.getElementById('blue').style.backgroundColor = "#83c5ff";
        setTimeout(function(){ document.getElementById('blue').style.backgroundColor = "blue"; }, 1000);
    }
    
    sndBlue();
    flashBlue();
}