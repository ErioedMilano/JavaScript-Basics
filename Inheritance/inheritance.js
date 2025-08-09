// Inheritance (erfelijkheid) in programmeren betekent dat een class eigenschappen (fields/variables) en gedrag (methods/functies) kan overerven van een andere class.
//
// Je hebt dan:
//
// Parent class (superclass / base class) → de class waar de eigenschappen vandaan komen.
//
// Child class (subclass / derived class) → de class die deze eigenschappen erft.
//
// Doel:
//
// Herbruikbaarheid: Je hoeft code niet opnieuw te schrijven.
//
// Logische structuur: "Is-een" relatie (bv. Hond is een Dier).

class Animal{

    alive = true;

    eat(){
        console.log(`${this.name} is eating`);
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`this ${this.name} is running.`);
    }
}

class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`this ${this.name} can swim.`);
    }
}

class Hawk extends Animal{

    name = "hawk";

    fly(){
        console.log(`this ${this.name} is flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();


rabbit.sleep();
console.log(fish.alive);
hawk.eat();
rabbit.run();
fish.swim();
hawk.fly();
