// Destructuring is:
// een manier om waarden uit arrays of objecten makkelijk in losse variabelen te halen,
// zonder steeds punt- of indexnotatie te gebruiken.

// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

let fruit = "Dog";
let animal = "apple";

const nums = [a,b] = [b,a];
const strings = [fruit,animal] = [animal,fruit];

const colors = ["Red","Green","Blue","Black","White"];
[colors[0],colors[4]] = [colors[4],colors[0]];

console.log(colors);

console.log(a);
console.log(b);

console.log(fruit);
console.log(animal);


// Array Destructuring


