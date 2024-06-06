const rock = "rock";
const paper = "paper";
const scissors = "scissiors";
let playerChoice = "";
let humanScore = 0;
let computerScore = 0;


//get computer choice
//select a random number between 1 - 3
//if 0 = rock, if 1 = paper if 2 = scissiors

function getComputerChoice (){

    let choice = "";

    //get a random number between 0 - 2 (0,1,2)
    randomNumber = Math.floor(Math.random() * 3);
    

    //switch statement to return 0 rock, 1 paper 2 scissors

    switch(randomNumber) {
        case 0:
                randomNumber == 0;
                choice = rock;       
            break;
        case 1:
                randomNumber == 1;
                choice = paper;
            break;
        case 2:
                randomNumber == 2;
                choice = scissors;
            
    }

    return (choice);
}

//console.log("Computer Choice : " + getComputerChoice());

function getHumanChoice () {

    playerChoice = window.prompt("What are you playing? Rock, Paper or Scissors?");

    return (playerChoice.toLowerCase());
}


//game logic

//get rock paper and scissors



function playRound (humanChoice, computerChoice) {

    if(humanChoice === "rock" && computerChoice == "rock") {
        console.log("Draw");
    }

    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("Computer wins");
        computerScore++;
        
    }

    else if (humanChoice === "rock" && computerChoice === "scissiors") {
        console.log("Human Wins!");
        humanScore++;
        
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Human Wins");
        humanScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "scissiors") {
        console.log("Computer Wins");
        computerScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Draw");
    }

    else if (humanChoice === "scissiors" && computerChoice === "scissiors") {
        console.log("draw");
    }

    else if (humanChoice === "scissiors" && computerChoice === "rock") {
        console.log("computer wins!")
        computerScore++;
    }

    else if (humanChoice == "scissiors" && computerChoice === "paper") {
        console.log("Human Wins!");
        humanScore++;
    }

    console.log("computer score : " + computerScore);
    console.log("your score : " + humanScore);

}

//loop to play 5 rounds
let i = 0;
while (i < 5){ 
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log("Human Choice  1 : " + humanSelection);
    console.log("Computer Choice  2 : " + computerSelection);
    playRound(humanSelection, computerSelection);
    setTimeout(10000);

    i++;
}

//final scoring

console.log("final computer score : " + computerScore);
console.log("your final score : " + humanScore);

if (humanScore > computerScore) {
    console.log("Human wins game!");
}
else if (humanScore == computerScore){
    console.log("Game is a draw!");

}

else {
    console.log("Computer wins game");
}
    

