//Een arrow function is een kortere en modernere manier om functies te schrijven.
//Ze zijn handig, vooral bij callbacks en array-methoden zoals map, filter, reduce, enz.

const greeting = (name) => {
    console.log(`Hello ${name}`)
}

setTimeout(() => {console.log("Hello")},3000);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((element) => Math.pow(element,3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator,element) => accumulator + element);

greeting("Bro");
console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);

