
let playerScore = 0;
let computerScore = 0;
let playerScore2=0;

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

function playGame2(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const playe2Choice = choices[Math.floor(Math.random() * choices.length)];
  const result = getResult2(playerChoice, playe2Choice);
  displayResult2(result, playerChoice, playe2Choice);
}



function getResult2(player, player2) {
  if (player === player2) {
    return 'It\'s a tie!\n';
  } else if (
    (player === 'rock' && player2 === 'scissors') ||
    (player === 'paper' && player2 === 'rock') ||
    (player === 'scissors' && player2 === 'paper')
  ) {
    playerScore++;
    return 'You win!\n';
  } else {
    playerScore2++;
    return 'Player 2 wins!\n';
  }
}

function displayResult2(result, playerChoice, playe2Choice) {
  document.getElementById('result').innerText = `${result} You chose ${playerChoice}, Player 2 chose ${playe2Choice}.`;
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = playerScore2;
}



