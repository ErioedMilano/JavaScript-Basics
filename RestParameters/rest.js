/*
    Verzamelt meerdere argumenten in één array-achtig object.
    Gebruikt in functiedefinities om oneindig veel argumenten op te vangen

    Gebruik:
    In de parameterlijst van een functie
    Om onbekend aantal argumenten te verzamelen
 */

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "friedchicken";
const food5 = "pasta";

function openFridge(...foods){
    console.log(foods);
    console.log("-------------");
    console.log(...foods); // spread array
}
function getFood(...foods){
    return foods;
}

openFridge(food1,food2,food3,food4,food5);

const foods = getFood(food1,food2,food3,food4,food5);
console.log(foods);

function sum(...numbers){

    let resultaat = 0;

    for (let num = 0; num <= numbers.length; num++){
        resultaat += num;
    }
    return resultaat;
}

let resultaat = sum(1,2,3,4);
console.log(resultaat)
