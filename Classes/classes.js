// Een class is een sjabloon (blueprint) om objecten te maken.
// Het kan eigenschappen (properties) en methoden bevatten

class product{

    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const fruit = new product("Lemon",1.50);
const drink = new product("Milk",0.99);

fruit.displayProduct();
drink.displayProduct();

const totalFruit = fruit.calculateTotal(salesTax);
console.log(`Total price (with tax): $${totalFruit.toFixed(2)}`)

const totalDrink = drink.calculateTotal(salesTax);
console.log(`Total price (with tax): $${totalDrink.toFixed(2)}`);