function getRandomInt() {
    return Math.floor(Math.random()* 3);
}

function getComputerMove(randomInt){
    let computerMove;
    if(randomInt===0){
        computerMove = 'ROCK';
    }
    else if(randomInt===1){
        computerMove='PAPER';
    }
    else if(randomInt===2){
        computerMove='SCISSORS'
    }
    console.log(computerMove);
    return computerMove;
    
}

function getUserMove(){
    let userMove = prompt('Choose Rock, Paper, or Scissors');
    userMove = userMove.toUpperCase();
    console.log(userMove);
    return userMove;
}

function compareResults(storedAIMove, userChoice){
    let tie = 0;
    let playerWin = 1;
    let AIWin = 2;
    if (userChoice === storedAIMove){
        return win = tie;
    }
    else if(userChoice === 'ROCK' && storedAIMove === 'SCISSORS'){
        return win = playerWin;
    }
    else if (userChoice === 'PAPER' && storedAIMove === 'ROCK'){
        win = playerWin;
    }
    else if(userChoice === 'SCISSORS' && storedAIMove === 'PAPER'){
        return win = playerWin;
    }
    else{
        return win = AIWin;
    }   
}

function announceWinner(winner){
    if(winner === 0){
        console.log('TIE GAME!');
    }
    else if(winner === 1){
        console.log('YOU WIN');
    }
    else if(winner ===2){
        console.log('YOU LOSE');
    }
}

function game(){
   let randomInt = getRandomInt();
   let storedAIMove = getComputerMove(randomInt);  //storedAIMove used outside getComputerMove function
   let userChoice = getUserMove();
   let winner = compareResults(storedAIMove, userChoice);
   announceWinner(winner);
}
game();
