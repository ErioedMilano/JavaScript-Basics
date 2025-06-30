//Random number generator

const min = 50;
const max = 100;

let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum1);
console.log(randomNum2);