const validChoices = ["rock", "paper", "scissors"];
const winners = [];

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
    console.log("Computer Move: " + computerMove);
    return computerMove;
    
}


function getUserMove(){
    let userMove = prompt('Choose Rock, Paper, or Scissors');
    while (userMove == null){
        userMove = prompt('Choose Rock, Paper, or Scissors');
    }
    userMove = userMove.toUpperCase();
    console.log("Player Move: " + userMove);
    return userMove;
}



function compareResults(storedAIMove, userChoice){
   // let tie = 0;
   // let playerWin = 1;
   // let AIWin = 2;
    if (userChoice === storedAIMove){
        return "Tie";
    }
    else if(userChoice === 'ROCK' && storedAIMove === 'SCISSORS'){
        return "Player";
    }
    else if (userChoice === 'PAPER' && storedAIMove === 'ROCK'){
       return "Player";
    }
    else if(userChoice === 'SCISSORS' && storedAIMove === 'PAPER'){
        return "Player";
    }
    else if(userChoice === 'ROCK' && storedAIMove === 'PAPER'){
        return "Computer";
    }
    else{
        return "Computer";
    }   
}

function announceWinner(winner){
    if(winner === "Tie"){
        console.log('TIE GAME!');
    }
    else if(winner === "Player"){
        console.log('YOU WIN');
    }
    else if(winner === "Computer"){
        console.log('YOU LOSE');
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log('Results: ');
    console.log('Player wins: ', playerWins);
    console.log('Computer wins: ', computerWins);
    console.log('Ties: ', ties);
}

function game(){
    for (let i = 0; i < 5; i++){
        let randomInt = getRandomInt();
        let storedAIMove = getComputerMove(randomInt);  //storedAIMove used outside getComputerMove function
        let userChoice = getUserMove();
        let winner = compareResults(storedAIMove, userChoice);
        announceWinner(winner);
    }
    document.querySelector('button').textContent = "Click To Play New Game!"
   // logWins();
}
// game();
