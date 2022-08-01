playerScore = 0;
computerScore = 0;


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
    capitalizedPlayer = (playerInput.charAt(0).toUpperCase() + playerInput.slice(1,(playerInput.length)))

 

   


    if (capitalizedPlayer === computerSelection){
        winner = "None"
        return("Its a tie!")
    }

    else if ((playerInput === "rock") && (computerSelection === "Scissors")){        
        winner = "Player"
        return("Player has won! Player: " + capitalizedPlayer + " - Computer: " + computerSelection + ".")
    }

    else if ((playerInput === "rock") && (computerSelection === "Paper")) {
        winner = "Computer"
        return("Computer has won! Player: " + capitalizedPlayer + " - Computer: " + computerSelection + ".")
    }

    else if ((playerInput === "paper") && (computerSelection === "Scissors")){
        winner = "Computer"
        return("Computer has won! Player: " + capitalizedPlayer + " - Computer: " + computerSelection + ".")
    }

    else if((playerInput === "paper") && (computerSelection === "Rock")) {        
        winner = "Player"
        return("Player has won! Player: " + capitalizedPlayer + " - Computer: " + computerSelection + ".")
    }

    else if ((playerInput === "scissors") && (computerSelection === "Rock")){
        winner = "Computer"
        return("Computer has won! Player: " + capitalizedPlayer + " - Computer: " + computerSelection + ".")
    }

    else if ((playerInput === "scissors") && (computerSelection === "Paper")) {        
        winner = "Player"
        return("Player has won! Player: " + capitalizedPlayer + " - Computer: " + computerSelection + ".")
    }
    
   
}


function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound())
        if(winner === "Player"){
            playerScore = ++playerScore
            
        }
        else if (winner === "Computer"){
            computerScore = ++computerScore
            
        } 
        console.log("Player score is: " + playerScore)
        console.log("Computer score is: " + computerScore)
    }

  
}


function declareWinner(){
    if (playerScore > computerScore){
        return("Player wins! Yess!!")
    }

    else if (computerScore > playerScore) {
        return("Sin tu marido no podes.")}
    
    else{
        return("Tira cola de nuevo, te voy a sacar la camille.")
    }
}


game()
console.log(declareWinner())