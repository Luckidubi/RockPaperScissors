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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
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

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 1; i < 6; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt("Enter your play (Rock, Paper or Scissors)");
    playRound(playerSelection, computerSelection);
    if (checkError(playerSelection)) {
      return "wrong Selection, try again";
    } else {
      display(playerSelection, computerSelection, playerScore, computerScore);
    }
  }
  compare(playerScore, computerScore);
}

//checking for errors in the user input
function checkError(val) {
  if (val == null || val == "") {
    return "No value Selected, Try again";
  }
  if (val !== "rock" && val !== "scissors" && val !== "paper") {
    return "Wrong selection, Try Again!";
  }
}

//for displaying the score on the console
function display(
  playerSelection,
  computerSelection,
  playerScore,
  computerScore
) {
  console.log("You chose: " + playerSelection);
  console.log("Score: " + playerScore);
  console.log("The computer chose: " + computerSelection);
  console.log("Score: " + computerScore);
}

// for comparing both scores to decide who wins
function compare(playerScore, computerScore) {
  if (playerScore == computerScore) {
    console.log("The game is a tie");
  } else if (computerScore > playerScore || playerScore == 0) {
    console.log("You lose");
  } else if (playerScore > computerScore) {
    console.log("You win");
  }
}
