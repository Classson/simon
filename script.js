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

