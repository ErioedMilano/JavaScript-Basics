// Rock Paper Scissors

const choices =["rock","paper","scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if (playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else {
        switch (playerChoice){
            case "rock": if (computerChoice === "scissors"){
                result = "YOU WIN!";
            }
            else {
                result = "YOU LOSE!";
            }
            break;
            case "paper": if (computerChoice === "rock"){
                result = "YOU WIN!";
            }
            else {
                result = "YOU LOSE!";
            }
                break;
            case "scissors": if (computerChoice === "paper"){
                result = "YOU WIN!";
            }
            else {
                result = "YOU LOSE!";
            }
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");

    switch (result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}