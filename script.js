// Computer Choice

function getComputerChoice(){
    let selection = Math.floor(Math.random()*3)+1
    let computerChoice = []
    
    if (selection === 1){
        computerChoice = "Rock"
    }
    else if (selection === 2){
        computerChoice = "Paper"
    }
    else{
        computerChoice = "Scissors"
    }

    return(computerChoice);
}




function playRound(playerChoice, computerSelection){   
    playerChoice = prompt("Choose Rock, Paper or Scissors!: ");
    playerInput = playerChoice.toLowerCase();
    computerSelection = getComputerChoice();

    if ((playerInput === "rock") && (computerSelection === "Scissors")){
        return("Computer choose: " + computerSelection + ". " + "Rock beats scissors, Player has won!")
    }

    else if ((playerInput === "rock") && (computerSelection === "Paper")) {
        return("Computer choose: " + computerSelection + ". " + "Paper beats rock, Computer has won!")
    }

    else if ((playerInput === "paper") && (computerSelection === "Scissors")){
        return("Computer choose: " + computerSelection + ". " + "Scissors beats paper, Computer has won!")
    }

    else if((playerInput === "paper") && (computerSelection === "Rock")) {
        return("Computer choose: " + computerSelection + ". " + "Paper beats rock, Play has won!")
    }

    else if ((playerInput === "scissors") && (computerSelection === "Rock")){
        return("Computer choose: " + computerSelection + ". " + "Rock beats scissors, Computer has won!")
    }

    else if ((playerInput === "scissors") && (computerSelection === "Paper")) {
        return("Computer choose: " + computerSelection + ". " + "Scissors beats paper, Player has won!")
    }
    
   
}
  
console.log(playRound())
