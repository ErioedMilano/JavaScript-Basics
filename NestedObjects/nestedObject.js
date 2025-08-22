// Een nested object is een object dat één of meerdere objecten binnenin bevat.
// Dit wordt vaak gebruikt om complexe data hiërarchisch op te slaan.

const person={
    fullName: "Cristiano Ronaldo",
    age: 40,
    isFootballer: true,
    skills:["dribbling","heading","passing","finishing","crossing"],
    address:{
        street: "al nasr street",
        city: "Riyadh",
        country: "saudi arabia"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isFootballer);
console.log(person.skills);
console.log(person.skills[0]);
console.log(person.address);
console.log(person.address.country);
console.log(" ");

for (const property in person.address){
    console.log(person.address[property]);
}