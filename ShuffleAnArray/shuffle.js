// Het shuffelen van een array betekent dat je de elementen in willekeurige volgorde zet.

const cards = ['A',2,3,4,5,6,7,8,9,10,'j','q','k'];

shuffle(cards);

console.log(cards);

// Fisher-Yates Shuffle
function shuffle(array){
    for (let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]]
    }
}