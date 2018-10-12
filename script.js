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