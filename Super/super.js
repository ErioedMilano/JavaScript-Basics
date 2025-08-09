// In JavaScript wordt super gebruikt binnen een class die extends gebruikt om:
//
// De constructor van de parent class aan te roepen
//
// Dit moet gebeuren voordat je this mag gebruiken in de constructor.
//
// Methodes van de parent class aan te roepen
//
// Handig als je de parent-methode wil uitbreiden of aanpassen.

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{

    constructor(name,age,runSpeed) {
        super(name,age);
        this.runSpeed = runSpeed;

    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {

    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly() {
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit",10,25);
const fish = new Fish("fish",5,30);
const hawk = new Hawk("hawk",20,60);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

rabbit.run();
fish.swim();
hawk.fly();
