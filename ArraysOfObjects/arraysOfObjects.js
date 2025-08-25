// Een array of objects is een lijst (array) waarin meerdere objecten zijn opgeslagen.
// Dit is ideaal om meerdere entiteiten van hetzelfde type te beheren,
// (bijv. auto's, studenten, producten).

const fruits = [
    {name: "apple",color: "red", calories: 95},
    {name: "orange",color: "orange", calories: 45},
    {name: "banana",color: "yellow", calories: 105},
    {name: "coconut",color: "white", calories: 159},
    {name: "pineapple",color: "yellow", calories: 37}];

console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

fruits.push({name: "grapes",color: "purple",calories: 62});
console.log(fruits[5].name);
console.log(fruits[5].color);
console.log(fruits[5].calories);
console.log(fruits);

fruits.pop();
console.log(fruits)

fruits.forEach(fruits => console.log(fruits.name));