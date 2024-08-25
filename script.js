function getComputerChoice() {
    switch(Math.floor(Math.random() * 3 + 1)){
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
    };
}

function getUserChoice() {
   let humanChoice = prompt("ROCK, PAPER or SCISSORS?");
   humanChoice = humanChoice.toUpperCase();
   
   if(humanChoice == "ROCK"||"PAPER"||"SCISSORS") {
    return humanChoice;
   } else {
    alert("Invalid answer.")
   }
}

function playRound () {
    cpu = getComputerChoice();
    player = getUserChoice();

    if ((cpu == "ROCK" && player == "SCISSORS")||
        (cpu == "SCISSORS" && player == "PAPER") || 
        (cpu == "PAPER" && player == "ROCK")) {
        
        console.log(`Computer: ${cpu}\nHuman: ${player}\nCOMPUTER +1`)
        return "computer";
    } else if (
        (player == "ROCK" && cpu == "SCISSORS")||
        (player == "SCISSORS" && cpu == "PAPER") || 
        (player == "PAPER" && cpu == "ROCK")) {
        
        console.log(`Computer: ${cpu}\nHuman: ${player}\nHUMAN +1`)
        return "human";
    } else {
        console.log(`Computer: ${cpu}\nHuman: ${player}\nDRAW`)
    }
}

function playGame() {
    let humanScore = 0, computerScore = 0; totalRounds = 0;
    
    
    while(totalRounds < 5) {
        let roundWinner = playRound();
        

        if (roundWinner == "human") {
            humanScore++;
            totalRounds++;
        } else if (roundWinner == "computer") {
            computerScore++;
            totalRounds++
        } else {
            totalRounds++;
        }

        console.log(`ROUND ${totalRounds}
            CPU: ${computerScore}
            PLAYER: ${humanScore}`)
    }

    if (computerScore > humanScore) {
        alert("Computer Wins!")
    } else {
        alert("Human Wins!")
    }
    
   
}

playGame()







