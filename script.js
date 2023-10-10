const options = ["Pedra", "Papel", "Tesoura"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate, os dois jogaram igual!";
    } else if (
        (playerSelection === "Pedra" && computerSelection === "Tesoura") ||
        (playerSelection === "Tesoura" && computerSelection === "Papel") ||
        (playerSelection === "Papel" && computerSelection === "Pedra")
    ) {
        return `Você ganhou! ${playerSelection} vence ${computerSelection}.`;
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
