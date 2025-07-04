
let age = 2;
let message;

if (age >= 18){
    message= "Yor a adult"
}
else {
    message = "Your a minor"
}

let leeftijd = 21;
let bericht = leeftijd >= 18 ? "Your a adult" : "Your a minor";

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";

let isStudent = true;
let message1 = isStudent ? "Your a student" : "Your not a student";

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(message)
console.log(bericht)
console.log(greeting)
console.log(message1)
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)

