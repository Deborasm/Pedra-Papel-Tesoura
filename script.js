const options = ["pedra", "papel", "tesoura"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "É um empate!";
    } else if (
        (playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "tesoura" && computerSelection === "papel") ||
        (playerSelection === "papel" && computerSelection === "pedra")
    ) {
        return `Você venceu! ${playerSelection} vence ${computerSelection}.`;
    } else {
        return `Você perdeu! ${computerSelection} vence ${playerSelection}.`;
    }
}

function game(playerChoice) {
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    const resultElement = document.querySelector(".result p");
    resultElement.textContent = result;
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        game(button.id);
    });
});
