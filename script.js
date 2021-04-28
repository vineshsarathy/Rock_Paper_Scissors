const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const win = document.querySelector('.winner')
var PlayerScore = 0;
var CpuScore = 0;

//add event listeners to buttons
for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}

function playGame(e){
 
    let playerSelection = e.target.innerText;
    console.log(playerSelection)
    let computerSelection = Math.random();
    if (computerSelection < .34){
        computerSelection = '🗿';
    } else if (computerSelection <= .67){
        computerSelection = '📄';
    } else {
        computerSelection = '✂';
    }
    let result = checkWinner(playerSelection, computerSelection);
    if (result === 'You'){
        result += ' wins!';
        PlayerScore++;
    }

    if (result === 'Computer'){
        result += ' wins!';
        CpuScore++;
    }

    if (result === 'Draw'){
        result += '. It\'s a tie!'
    }

    //output score into Score DIV
    score.innerHTML = '<h1>Player:  ' + PlayerScore+ '  Computer:  ' + CpuScore + ' </h1>';

    //output player and computer's selections
    messenger(`<div class="selection">
            <div class="select">You Selected ${playerSelection}</div>
            <div class="select">Computer Selected ${computerSelection}</div> <br>
            <div class="select"> ${result}</div>
            </div>`);
    gameover(PlayerScore,CpuScore);
}

function gameover(PlayerScore,CpuScore){
    if(PlayerScore == 10 ){
        return(
            win.innerHTML ="You win" ,
            setTimeout(function(){ location.reload(); }, 3000)
        );
    }
    else if (CpuScore == 10) {
        return(
            win.innerHTML ="Computer win! better luck Next time" ,
            setTimeout(function(){ location.reload(); }, 3000)
        );
        
    } 
    
}
function messenger(selectionMessage){
    message.innerHTML = selectionMessage  ;
}

function checkWinner(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === '🗿'){
        if(computer === '📄'){
            return 'Computer';
        } else {
            return 'You';
        }
    }

    if (player === '📄'){
        if (computer === '✂'){
            return 'Computer';
        } else {
            return 'You';
        }
    }

    if (player === '✂'){
        if (computer === '🗿'){
            return 'Computer';
        } else {
            return 'You';
        }
    }
}