//Random number generator

const min = 50;
const max = 100;

let randomNum4 = Math.floor(Math.random() * 6) + 1;
let randomNum5 = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum4);
console.log(randomNum5);

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const minimum = 1;
const maximum = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function (){
    randomNum1 = Math.floor(Math.random() * maximum) + minimum;
    randomNum2 = Math.floor(Math.random() * maximum) + minimum;
    randomNum3 = Math.floor(Math.random() * maximum) + minimum;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}