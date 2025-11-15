function playGame(){

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    result = Math.floor(Math.random() * 3);

    if(result == 0) {
        return "rock";
    } 
    
    else if(result == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
    
};

function getHumanChoice() {
    let selection = prompt("Make your Choice","");
    return selection;
};

function playRound(humanChoice, computerChoice) {

        if(humanChoice == "paper" && computerChoice == "rock"||
            humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win this round!");
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors"||
            humanChoice == "rock" && computerChoice == "paper" ||
            humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose this round!");
            computerScore++;
            }
        else {
            console.log("It's a tie!");
        }
    }

    for (let i=1; i <= 5; i++) {
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        console.log(`Your score is ${humanScore}`);
        console.log(`The Computer score is ${computerScore}`);

    }

    function declareWinner() {
    
    if (humanScore > computerScore) {
        console.log("You won the game!");        
    }
    else if (computerScore > humanScore) {
        console.log("You lost the game!");
    }
    else {
        console.log("Nobody wins!");
    };
};

  declareWinner();

};

playGame();


