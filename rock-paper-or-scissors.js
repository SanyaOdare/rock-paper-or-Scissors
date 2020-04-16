const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || 'scissors') {
    return userInput;
  } else {
    console.log('Error!');    
  }
};

const getComputerChoice = () => {
  Math.floor(Math.random() * 3);
  switch (getComputerChoice) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}
  console.log(getComputerChoice());
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
}
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
  if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
}

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
};

playGame();