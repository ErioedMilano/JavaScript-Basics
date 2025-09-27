// DOM Navigation = The process of navigating through the structure
//                                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild

firstChild.style.backgroundColor = "yellow";

console.log(firstChild);

// ---------- .lastElementChild ----------

const element1 = document.getElementById("fruits");
const lastChild = element1.lastElementChild

lastChild.style.backgroundColor = "green";

console.log(lastChild);

// ---------- .nextElementSibling ----------

const element2 = document.getElementById("vegetables");
const nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// ---------- .previousElementSibling ----------

const element3 = document.getElementById("desserts");
const prevSibling = element3.previousElementSibling;
prevSibling.style.backgroundColor = "yellow";

// ---------- .parentElement ----------

const element4 = document.getElementById("ice cream");
const parent = element4.parentElement;
parent.style.backgroundColor = "yellow";

// ---------- .children ----------

const element5 = document.getElementById("fruits");
const children = element5.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});