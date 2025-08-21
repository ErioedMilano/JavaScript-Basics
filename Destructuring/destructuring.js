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


// ---------- EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["Red","Green","Blue","Black","White"];
[colors[0],colors[4]] = [colors[4],colors[0]];


// ---------- EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor,secondColor,thirdColor,... extraColors] = colors;

// ---------- EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    age: 40,
    job: "Footballer"
}

const person2 = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 38,

}

//const {firstName,lastName,age,job} = person1;
const {firstName,lastName,age,job = "Unemployed"} = person2;

// ---------- EXAMPLE 5 ----------
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayPerson({firstName,lastName,age,job}){
    console.log(`name: ${firstName}, ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}


console.log(a);
console.log(b);

console.log(fruit);
console.log(animal);

console.log(colors);

console.log(firstColor); // Swap With Red
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

displayPerson(person1);



