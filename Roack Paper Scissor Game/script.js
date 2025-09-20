// score object to keep track of the score

let score = {
    computer: 0,
    user: 0,
    ties: 0,
    updateScore: function() {
        this.saveScore();
        document.querySelector('#score').innerHTML = `
        Score :: Computer : ${this.computer}, User : ${this.user}, Ties : ${this.ties}`;
    },
    saveScore: function() {
        let scoreStr = JSON.stringify(this);
        localStorage.setItem('score', scoreStr);
        console.log(`Score Saved : ${scoreStr}`);
    }
};

// ****************************************************

function recoverGame() {
    let scoreStr = localStorage.getItem('score');
    if(scoreStr) {
        console.log(`Score Recovered : ${scoreStr}`);
        let scoreVal = JSON.parse(scoreStr);
        score.computer = scoreVal.computer;
        score.user = scoreVal.user;
        score.ties = scoreVal.ties;
    }
    score.updateScore();
}

recoverGame();

// *****************************************************

function resetScore() {
    console.log('Reseting Score...  :)');
    score.computer = 0;
    score.user = 0;
    score.ties = 0;
    score.updateScore();
}

// *****************************************************

function getRandomChoice() {
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    return randomChoice;
}

// *****************************************************

function getComputerChoice() {
    let randomChoice = getRandomChoice();
    let computerChoice;
    if(randomChoice === 1) {
        computerChoice = '✊ Rock';
    }
    else if(randomChoice === 2) {
        computerChoice = '✋ Paper';
    }
    else { // randomChoice === 3
        computerChoice = '✌️ Scissor';
    }
    return computerChoice;
}

// *****************************************************

function computeResult(userChoice, computerChoice) {
    let result;
    if(userChoice === computerChoice) {
        result = `It's a Tie!`;
        score.ties++;
    }
    // computing all possible ways for user to win
    else if((computerChoice === '✊ Rock' && userChoice === '✋ Paper') || 
    (computerChoice === '✌️ Scissor' && userChoice === '✊ Rock') || 
    (computerChoice === '✋ Paper' && userChoice === '✌️ Scissor')) {
        result = `You Won`;
        score.user++;
    }

    else { // All ways for computer to win
        result = `Computer Won`;
        score.computer++;
    }
    score.updateScore();
    return result;
}

// *****************************************************

function updateResult(userChoice, computerChoice, result) {

    document.querySelector('#result').innerHTML = 
    `You chose ${userChoice}.
    <br>
    Computer chose ${computerChoice}.
    <br> <br>
    The result is : ${result}.`;
}

// ******************************************************

function clickRock() {
    console.log('Rock clicked');
    let userChoice = '✊ Rock';
    let computerChoice = getComputerChoice();
    let result = computeResult(userChoice, computerChoice);
    updateResult(userChoice, computerChoice, result);
}

// *******************************************************

function clickPaper() {
    console.log('Paper clicked');
    let userChoice = '✋ Paper';
    let computerChoice = getComputerChoice();
    let result = computeResult(userChoice, computerChoice);
    updateResult(userChoice, computerChoice, result);
}

// *******************************************************

function clickScissor() {
    console.log('Scissors clicked');
    let userChoice = '✌️ Scissor';
    let computerChoice = getComputerChoice();
    let result = computeResult(userChoice, computerChoice);
    updateResult(userChoice, computerChoice, result);
}

