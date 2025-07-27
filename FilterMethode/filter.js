// .filter() = creates a new array by filtering out elements

let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

const ages = [12,18,21,24,30,8,56,16,13,8,60];
const adult = ages.filter(anAdult);
const minor = ages.filter(aMinor);

const words = ["apple","orange","banana","kiwi","pomegranate","coconut"]
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(evenNums);
console.log(oddNums);
console.log(adult);
console.log(minor);
console.log(shortWords);
console.log(longWords);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

function anAdult(element){
    return element >= 18;
}

function aMinor(element){
    return element < 18;
}

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}