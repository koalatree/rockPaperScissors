// player clicks 'rock'

document.getElementById("rock").addEventListener('click', function(){
    playRound('rock');
    document.getElementById('pc').textContent = 'Rock';
});

// player clicks 'paper'

document.getElementById("paper").addEventListener('click', function(){
    playRound('paper');
    document.getElementById('pc').textContent = 'Paper';
});

// player clicks 'scissors'

document.getElementById("scissors").addEventListener('click', function(){
    playRound('scissors');
    document.getElementById('pc').textContent = 'Scissors';
});

//player score

let defaultPlayerScore = 0;
document.getElementById('playerScore').textContent = defaultPlayerScore;

//computer score

let defaultComputerScore = 0;
document.getElementById('computerScore').textContent = defaultComputerScore;

//game

function playRound(x) {

    // player's selection
    
    const playerSelection = x;
    
    // computer's selection
    
    function computerPlay(){
        result=Math.floor(Math.random()*3);
        if (result===0){
            document.getElementById('cc').textContent = 'Rock';
            return "rock";
        } else if (result===1){
            document.getElementById('cc').textContent = 'Paper';
            return "paper";
        } else {
            document.getElementById('cc').textContent = 'Scissors';
            return "scissors";
        }
    }
    const computerSelection = computerPlay();
    
    // case player wins	
    
    if ((playerSelection==="rock" && computerSelection==="scissors") || (playerSelection==="paper" && computerSelection==="rock") || (playerSelection==="scissors" && computerSelection==="paper")){
        document.getElementById('r').textContent = 'Player Wins!';
        defaultPlayerScore++;
        document.getElementById('playerScore').textContent = defaultPlayerScore;
    } 
    
    // case computer wins
    
    else if ((playerSelection==="scissors" && computerSelection=== "rock") || (playerSelection==="rock" && computerSelection==="paper") || (playerSelection==="paper" && computerSelection==="scissors")){
        document.getElementById('r').textContent = 'Computer Wins!';
        defaultComputerScore++;
        document.getElementById('computerScore').textContent = defaultComputerScore;
    } 
    
    // case tie
    
    else {
        document.getElementById('r').textContent = 'Tie!';
    } 
}

// reload / start over

document.getElementById('reload').addEventListener('click', function() {
    location.reload()
});