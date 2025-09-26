// element selectors = Methods used to target and manipulate HTML elements
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()                    // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "Red";
myHeading.style.color = "white";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "yellow"

console.log(fruits);

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "green";
h4Elements[0].style.color = "white";

for (let liElement of liElements){
    liElement.style.backgroundColor = "lightblue";
}

console.log(h4Elements);

const element = document.querySelector(".fruits");

element.style.backgroundColor = "brown";