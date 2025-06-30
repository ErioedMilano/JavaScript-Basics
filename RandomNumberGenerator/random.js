//Random number generator

const min = 50;
const max = 100;

let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum1);
console.log(randomNum2);

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

const minimum = 1;
const maximum = 6;
let randomNum;

myButton.onclick = function (){
    randomNum = Math.floor(Math.random() * maximum) + minimum;
    myLabel.textContent = randomNum;
}