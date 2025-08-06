// this verwijst naar het "huidige object"
// waar de code op dat moment naar kijkt of waarbinnen het wordt uitgevoerd.
// werkt niet met arrow function
person = {
    name: "spongebob",
    favFood: "Hamburger",
    sayHello: function(){
        console.log(`Hello i am ${this.name}`);
    },
    eat: function(){
        console.log(`${person.name} is eating`);
    }
}

person.sayHello();
person.eat();