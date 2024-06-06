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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

//console.log("Human Choice  1 : " + humanSelection);
//console.log("Player Choice  2 : " + computerSelection);


    //if human rock and computer rock = draw

    //if human rock and computer paper = computer wins

    //if hguman rock and computer scissors = human wins

    //if human paper and computer rock = human winswins
 
    //if human paper and computer scissors = computer wins

    //if human paper aqnd computer paper = draw

    //if human scissors and computer rock = computer wins

    //if human scinssors and computer = paper = human wins

    //if human scissors and computer scissors = draw

   

    

