// Getters: Methoden die de waarde van een objecteigenschap ophalen.
//
// Setters: Methoden die de waarde van een objecteigenschap instellen of aanpassen.
//
// Het belangrijkste nut:
//
// Encapsulatie: je kunt controleren hoe en welke waarden worden gelezen of gezet.
//
// Je kunt extra logica toevoegen bij het lezen of wijzigen van een waarde (bijv. validatie, automatisch berekenen).

class Person{

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstname){
        if (typeof newFirstname === "string" && newFirstname.length > 0){
            this._firstName = newFirstname;
        }
        else{
            console.error("Firstname must be a none empty string");
        }
    }
    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("lastname must be a none empty string");
        }
    }
    set age(newAge){
        if (typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("number must be a none negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}

const person = new Person("Bro","Code",30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);
