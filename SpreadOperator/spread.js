/* Gebruik:
Bij het uitpakken van elementen uit arrays of objecten

Meestal in functie-aanroepen of array/object-creatie
 */

//Voorbeeld: Array kopiëren of samenvoegen

const fruits = ["apple", "banana"];
const moreFruits = ["kiwi", ...fruits, "mango"];

console.log(moreFruits);
// ➜ ["kiwi", "apple", "banana", "mango"]

// Voorbeeld: String splitsen

const word = "Hello";
const letters = [...word];

console.log(letters);
// ➜ ["H", "e", "l", "l", "o"]

// Voorbeeld: Functie-aanroep met array

const nums = [3, 4, 5];
console.log(Math.max(...nums));
// ➜ 5

