// Een closure ontstaat wanneer een functie
// toegang blijft houden tot variabelen uit zijn buitenste scope,
// zelfs nadat die scope is afgesloten.

function outer() {
    let counter = 0; // Variabele van outer()

    function inner() {
        counter++;
        console.log(counter);
    }

    return inner;
}

const count = outer();
count();
count();
