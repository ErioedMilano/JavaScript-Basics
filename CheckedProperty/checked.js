//checked property

const myCheckbox = document.getElementById("myCheckbox");
const visBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit1 = document.getElementById("mySubmit1");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit1.onclick = function (){
    if (myCheckbox.checked){
        console.log("You are Subscribed!");
        subResult.textContent = "You are Subscribed!";
    }
    else {
        console.log("You are not Subscribed!");
        subResult.textContent = "You are not Subscribed!";
    }
    if (visBtn.checked){
        console.log("You are paying with visa");
        paymentResult.textContent = "You are paying with visa";
    }
    else if (masterCardBtn.checked){
        console.log("You are paying with a Mastercard");
        paymentResult.textContent = "You are paying with a Mastercard";
    }
    else if (paypalBtn.checked){
        console.log("You are paying with Paypal");
        paymentResult.textContent = "You are paying with Paypal";
    }
    else {
        console.log("Please choose a payment methode.");
        paymentResult.textContent = "Please choose a payment methode.";
    }
}