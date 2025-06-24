// How to create user-input

let username;

// 1. The easy way = window prompt
username = window.prompt("Enter your username");
document.getElementById("p1").textContent = username;

// 2. The professional way = HTML text-box
document.getElementById("submit-button").onclick = function (){
    username = document.getElementById("my-text").value;
    console.log(username);
    document.getElementById("h1").textContent = `Welcome ${username}`;

}