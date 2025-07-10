// Functions = a section of reusable code.
// Declare code once, use it whenever you want.
// Call the function to execute that code.

function happyBirthday(username,age){
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
    console.log(`Happy birthday dear ${username}!`)
    console.log("Happy birthday to you!")
    console.log(`You are ${age} years old`)
}

happyBirthday("Superman",25);

function add(x,y) {
    let som;
    som = x + y;
    return som;
}

let answer;
answer = add(5,5);
console.log(`The som is ${answer}`)

function isEven(number){

    if (number % 2 === 0){
        return true
    }
    else {
        return false
    }
}

console.log(isEven(3));