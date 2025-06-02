let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Add animation class to moves
    document.getElementById('player-move').textContent = playerChoice;
    document.getElementById('computer-move').textContent = computerChoice;
    
    const result = getWinner(playerChoice, computerChoice);
    updateScore(result);
    
    // Add bounce animation to result
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('updated');
    void resultElement.offsetWidth; // Trigger reflow
    resultElement.classList.add('updated');
    
    displayResult(result, playerChoice, computerChoice);
    
    // Add animation to buttons
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
}

function getWinner(player, computer) {
    if (player === computer) return 'tie';
    
    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'win';
    }
    
    return 'lose';
}

function updateScore(result) {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    
    if (result === 'win') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
        playerScoreElement.parentElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            playerScoreElement.parentElement.style.transform = 'scale(1)';
        }, 200);
    } else if (result === 'lose') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        computerScoreElement.parentElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            computerScoreElement.parentElement.style.transform = 'scale(1)';
        }, 200);
    }
}

function displayResult(result, playerChoice, computerChoice) {
    const resultDisplay = document.getElementById('result');
    
    if (result === 'tie') {
        resultDisplay.textContent = "It's a tie!";
        resultDisplay.style.color = '#4a5568';
    } else if (result === 'win') {
        resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        resultDisplay.style.color = '#48bb78';
    } else {
        resultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        resultDisplay.style.color = '#f56565';
    }
}