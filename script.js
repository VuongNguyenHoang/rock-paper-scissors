function getComputerChoice() {
    let randomNum= Math.floor(Math.random() * 3);
    let randomChoice;
    if (randomNum==0) {
        randomChoice="Rock";
    }
    else if (randomNum==1) {
        randomChoice="Paper";
    }
    else {
        randomChoice="Scissors";
    }
    return randomChoice;
}

function playRound(playerSelection, computerSelection ){
    let state;
    if (playerSelection.toLowerCase()==computerSelection.toLowerCase()){
        return 'You Tie! ' +computerSelection+ ' ties ' + computerSelection;
    }
    else{
        if (playerSelection.toLowerCase()=="rock"){
            if (computerSelection.toLowerCase()=="paper"){
                state = "lose";
            }
            else{
                state = "win";
            }
           }
        
        else if (playerSelection.toLowerCase()=="paper"){
            if (computerSelection.toLowerCase()=="scissors"){
                state = "lose";
            }
            else{
                state = "win";
            }
        
        }
        else if (playerSelection.toLowerCase()=="scissors"){
            if (computerSelection.toLowerCase()=="rock"){
                state = "lose";
            }
            else{
                state = "win";
            }
        }
        else{
            return "Not Valid!"
        }
    }      
    if (state=="win"){
        let playerText=playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
        return 'You Win! ' + playerText + ' beats ' + computerSelection
    }
    else {
        let playerText=playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
        return 'You Lose! ' + computerSelection + ' beats ' + playerText
    }
}

function playGame(){
    let playerSelection;
    playerSelection=prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playerSelection=prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playerSelection=prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playerSelection=prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playerSelection=prompt();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
        
playGame();
