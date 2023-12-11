


let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = getResult(playerChoice, computerChoice);

  displayResult(result, playerChoice, computerChoice);
}

function getResult(player, computer) {
  if (player === computer) {
    return 'It\'s a tie!\n';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    return 'You win!\n';
  } else {
    computerScore++;
    return 'Computer wins!\n';
  }
}

function displayResult(result, playerChoice, computerChoice) {
  document.getElementById('result').innerText = `${result} You chose ${playerChoice}, computer chose ${computerChoice}.`;

  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;
}





