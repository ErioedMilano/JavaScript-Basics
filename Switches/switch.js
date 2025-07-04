// SWITCH STATEMENTS

const myText1 = document.getElementById("myText1");
const mySubmit2 = document.getElementById("mySubmit2");

const p4 = document.getElementById("p4");


mySubmit2.onclick = function (){
    switch (myText1.value) {
        case "Sunday" :
            console.log("Today is Sunday!");
            p4.textContent = "Today is Sunday!";
            break
        case "Monday" :
            console.log("Today is Monday!");
            p4.textContent = "Today is Monday!";
            break
        case "Tuesday" :
            console.log("Today is Tuesday!");
            p4.textContent = "Today is Tuesday!";
            break
        case "Wednesday" :
            console.log("Today is Wednesday!");
            p4.textContent = "Today is Wednesday!";
            break
        case "Thursday" :
            console.log("Today is Thursday!");
            p4.textContent = "Today is Thursday!";
            break
        case "Friday" :
            console.log("Today is Friday!");
            p4.textContent = "Today is Friday!";
            break
        case "Saturday" :
            console.log("Today is Saturday!");
            p4.textContent = "Today is Saturday!";
            break
        default :
            console.log("Please enter a day of the week!");
            p4.textContent = "Please enter a day of the week!";
    }
}