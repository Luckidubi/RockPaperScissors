function computerPlay() {
  let play = Math.floor(Math.random() * 3);
  if (play == 0) {
    return "rock";
  } else if (play == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore += 1;
    return "You lose, Paper wins Rock";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore += 1;
    return "You win, Paper wins Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore += 1;
    return "You win, Rock wins Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore += 1;
    return "You lose, Rock wins Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore += 1;
    return "You lose, scissors wins Paper";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore += 1;
    return "You win, scissors wins paper";
  } else if (playerSelection === computerSelection) {
    return "The Game is a tie!!!";
  }
}

// //checking for errors in the user input
// function checkError(val) {
//   if (val == null || val == "") {
//     return "No value Selected, Try again";
//   }
//   if (val !== "rock" && val !== "scissors" && val !== "paper") {
//     return "Wrong selection, Try Again!";
//   }
// }

// for comparing both scores to decide who wins
function compare(playerScore, computerScore) {
  if (playerScore == computerScore) {
    return "The game is a tie";
  } else if (computerScore > playerScore || playerScore == 0) {
    return "You lose";
  } else if (playerScore > computerScore) {
    return "You win";
  }
}

const buttons = document.querySelectorAll("button.btn");

const show = document.getElementById("display");
const display1 = document.getElementById("playerSelection");
const display2 = document.getElementById("playerScore");
const display3 = document.getElementById("computerSelection");
const display4 = document.getElementById("computerScore");

// for resetting the game
function resetGame() {
  const reset = document.getElementById("reset");
  reset.addEventListener("click", function () {
    playerScore = 0;
    computerScore = 0;
    show.textContent = "";
    display1.textContent = "";
    display2.textContent = "Player Score: " + 0;
    display3.textContent = "PLAY AGAIN";
    display4.textContent = "Computer Score: " + 0;
  });
}

function game() {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (playerScore == 5 || computerScore == 5) {
        const result = compare(playerScore, computerScore);
        show.textContent = "";
        display2.textContent = "Player Score: " + playerScore;
        display4.textContent = "Computer Score: " + computerScore;
        display1.textContent = "";
        display3.textContent = "Game Over! " + result;

        return;
      } else {
        const playerSelection = button.value;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        show.textContent = result;
        display1.textContent = "You chose: " + playerSelection;
        display2.textContent = "Player Score: " + playerScore;
        display3.textContent = "The computer chose: " + computerSelection;
        display4.textContent = "Computer Score: " + computerScore;
      }
    });
  });
}

resetGame();
game();
