/* foreach() = methode used to iterate over the elements
               of an array and apply a specified function (callback)

               array.forEach(callback);
 */

let numbers = [1,2,3,4,5];

numbers.forEach(display);

function display(element){
    console.log(element);
}

let fruits = ["apple", "banana", "cherry", "Coconut"];

fruits.forEach(capitalise);
fruits.forEach(display1);

function display1(fruit){
    console.log(fruit);
}

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}
function capitalise(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
