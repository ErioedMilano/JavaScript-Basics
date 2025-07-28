// .reduce() = reduce the element of an array to a single value

const prices = [5,60,30,10,90,8,100];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`)

function sum(previousElement,nextElement){
    return previousElement + nextElement;
}