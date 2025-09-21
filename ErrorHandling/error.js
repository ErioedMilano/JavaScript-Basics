/*
try...catch → vangt fouten op in sync & async/await.

.catch() → voor fouten in Promises.

finally → draait altijd, fout of niet.

throw new Error() → handmatig fouten gooien.

async/await + try/catch → modernste en meest leesbare manier.
 */

try{
    console.log(x)
}

catch (error){
    console.error(error);
}

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}

console.log("You have reached the end!");