// Met .sort() kun je een array van objecten sorteren op basis van een bepaalde eigenschap.
// De sort() methode gebruikt een vergelijkingsfunctie die bepaalt hoe twee elementen vergeleken worden.

let fruits = ["banana","grapes","peer","apple","coconut","strawberries","blueberries","orange"];
fruits.sort();
console.log(fruits);

let numbers = [1,10,2,9,3,8,4,7,5,6];
numbers.sort((a,b) => a - b);
console.log(numbers);

const cars = [
    { make: "Ford", model: "Mustang", year: 2024 },
    { make: "Chevrolet", model: "Camaro", year: 2025 },
    { make: "Dodge", model: "Charger", year: 2026 }
];

// Alfabetisch sorteren op 'make'
cars.sort((a, b) => a.make.localeCompare(b.make));

console.log(cars);

console.log(" ");
// Oplopend sorteren (oud naar nieuw)
cars.sort((a, b) => a.year - b.year);
console.log(cars);

// Aflopend sorteren (nieuw naar oud)
cars.sort((a, b) => b.year - a.year);
console.log(cars);

console.log(" ");
cars.sort((a, b) => {
    if (a.year === b.year) {
        return a.make.localeCompare(b.make);
    }
    return a.year - b.year;
});

console.log(cars);

