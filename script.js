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
        playerWin++;
        return 'You Win! ' + playerText + ' beats ' + computerSelection
        
    }
    else {
        let playerText=playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
        computerWin++;
        return 'You Lose! ' + computerSelection + ' beats ' + playerText
    }
}

function playGame(){
    let playerSelection;
    // playerSelection=prompt();
    // computerSelection = getComputerChoice();
    // console.log(playRound(playerSelection, computerSelection));
    
}
function createLine(textContent){
    let result= playRound(textContent, getComputerChoice());
    let p = document.createElement('p');
    p.textContent= result + ' ' + `${playerWin} - ${computerWin}`;
    results.appendChild(p);
}
function winnerText(){
    if (playerWin == 5 && computerWin <5 && (!finished)){
        let pWin= document.createElement('p');
        pWin.textContent= "Player has won!";
        results.appendChild(pWin);
        finished=1;
    }
    else if (computerWin == 5 && playerWin <5 && (!finished)){
        let cWin= document.createElement('p');
        cWin.textContent= "Computer has won!";
        results.appendChild(cWin);
        finished=1;
    }
}
let body = document.querySelector('body');
let playerWin=0;
let computerWin=0;
let gamesPlayed=0;
let finished=0;
let button1 = document.createElement("button");
button1.textContent="Rock";
button1.addEventListener('click', () => {
    createLine(button1.textContent);
    winnerText();
});
body.appendChild(button1);

let button2 = document.createElement("button");
button2.textContent="Paper";
button2.addEventListener('click', () => {
    createLine(button2.textContent);
    winnerText();
});
body.appendChild(button2);

let button3 = document.createElement("button");
button3.textContent="Scissors";
button3.addEventListener('click', () => {
    createLine(button3.textContent);
    winnerText();
});
body.appendChild(button3);



let results =  document.createElement("div");
body.appendChild(results);

