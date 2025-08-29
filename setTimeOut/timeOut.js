// setTimeout is een ingebouwde JavaScript-functie
// waarmee je een stuk code na een bepaalde vertraging (in milliseconden) laat uitvoeren.

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);
setTimeout(function(){window.alert("World")},5000);
setTimeout(() => window.alert("Welcome"),8000);

let timeOutId;

function startTimer(){
    timeOutId = setTimeout(()=> window.alert("Hello Bro"),3000);
    console.log("STARTER");
}

function clearTimer(){
    clearTimeout(timeOutId);
    console.log("CLEARED");
}