const buttons = document.querySelectorAll(".btn");
const resultEl = document.querySelector(".result");
const playerScoreEl = document.querySelector(".my-score");
const computerScoreEl = document.querySelector(".computer-score");

let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
        const choices = ["rock", "paper", "scissors"];
        const randomChoice = Math.floor(Math.random() * choices.length);
        return choices[randomChoice];
};

const playRound = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
                return "It's a tie!😅";
        } else if (playerChoice === "rock" && computerChoice === "scissors" ||
                playerChoice === "paper" && computerChoice === "rock" ||
                playerChoice === "scissors" && computerChoice === "paper") {
                playerScore++;
                return `You Win!🎆🎉 ${playerChoice} beats ${computerChoice}.`;
        } else {
                computerScore++;
                return `You Lose!😕💔 ${computerChoice} beats ${playerChoice}.`;
        }
}

buttons.forEach((button) => {
        button.addEventListener("click", () => {
                const result = playRound(button.id, computerPlay());
                resultEl.textContent = result;
                playerScoreEl.textContent = playerScore;
                computerScoreEl.textContent = computerScore;
        })
})