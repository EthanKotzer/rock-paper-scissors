const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll("button[data-choice]").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    document.getElementById("playerChoice").textContent = capitalize(playerChoice);
    document.getElementById("computerChoice").textContent = capitalize(computerChoice);
    document.getElementById("outcome").textContent = result;

    if (result === "You win!") playerScore++;
    else if (result === "You lose!") computerScore++;

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
  });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  document.getElementById("playerChoice").textContent = "-";
  document.getElementById("computerChoice").textContent = "-";
  document.getElementById("outcome").textContent = "-";
  document.getElementById("playerScore").textContent = "0";
  document.getElementById("computerScore").textContent = "0";
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  }
  return "You lose!";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
