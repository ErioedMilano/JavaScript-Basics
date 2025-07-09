// while loop = repeat some code while some condition is true

let loggedIN = false;
let username;
let password;

while (!loggedIN){
    username = window.prompt("Enter your username:");
    password = window.prompt("Enter your password:");

    if (username === "Javascript" && password === "12345678"){
        loggedIN = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Please try again");
    }
}