let score = JSON.parse(localStorage.getItem('message')) || { wins: 0, loses: 0, ties: 0 };

updateScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = '&#128553;';
    } else if (computerMove === 'Paper') {
      result = '&#128513;';
    } else if (computerMove === 'Scissors') {
      result = '&#128530;';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = '&#128513;';
    } else if (computerMove === 'Paper') {
      result = '&#128530;';
    } else if (computerMove === 'Scissors') {
      result = '&#128553;';
    }
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = '&#128530;';
    } else if (computerMove === 'Paper') {
      result = '&#128553;';
    } else if (computerMove === 'Scissors') {
      result = '&#128513;';
    }
  }

  if (result === '&#128513;') {
    score.wins += 1;
  } else if (result === '&#128553;') {
    score.loses += 1;
  } else if (result === '&#128530;') {
    score.ties += 1;
  }

  localStorage.setItem('message', JSON.stringify(score));
  updateScore();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `<img class="img-size"src="img/${playerMove}-emoji.png">`;
  document.querySelector('.js-Compmoves').innerHTML = `<img class="img-size" src="img/${computerMove}-emoji.png">`;
}

function updateScore() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const variable = Math.random();
  let computerMove = '';
  if (variable >= 0 && variable < 1 / 3) {
    computerMove = 'Rock';
  } else if (variable >= 1 / 3 && variable < 2 / 3) {
    computerMove = 'Paper';
  } else if (variable < 1) {
    computerMove = 'Scissors';
  }

  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('message');
  updateScore();
}
