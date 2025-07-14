// Array = a variable like structure that can hold more than one value

let fruits = ["apple","orange","banana"];
fruits[3] = "Coconut";

fruits.unshift("Mango");// add a element to the beginning of the array
fruits.pop(); // remove the last element

console.log(fruits);
console.log(fruits[0]);

console.log("----------------");

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

console.log("-----------------------------");

for (let fruit of fruits){
    console.log(fruit);
}

fruits.push("grape"); // to push a element ad end.
fruits.shift(); // to remove a element from the beginning
let numOfFruits = fruits.length; // length method
console.log(numOfFruits);
let index = fruits.indexOf("orange");
console.log(index);

fruits.sort(); // set array in alphabetic order
console.log(fruits);

console.log("------------");

fruits.sort().reverse(); // set array in alphabetic order in reverse
console.log(fruits);





