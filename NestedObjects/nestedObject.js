// Een nested object is een object dat één of meerdere objecten binnenin bevat.
// Dit wordt vaak gebruikt om complexe data hiërarchisch op te slaan.


// ----------example1----------

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


// ----------example2----------

class Person{
    constructor(name,age,...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street,city,country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Cristiano Ronaldo",40,"al nasr street","Riyadh","saudi arabia");
const person2 = new Person("Lionel Messi",38,"1350 NW 55th St. Fort Lauderdale","Maimi","United States Of America");

console.log(" ");
console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(" ");
console.log(person2.name);
console.log(person2.age);
console.log(person2.address);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2 .address.country);
