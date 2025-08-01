// Dice Roller Program

function rollDice() {

    const numOfDice = document.getElementById("diceInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice${value}.png" alt="dice:${value}" >`);
    }
    diceResult.textContent = `dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join("");
}