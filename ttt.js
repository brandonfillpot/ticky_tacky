const x_mark = "X"
const o_mark = "O"
let currentPlayer = [x_mark, o_mark]
const boardCell = document.querySelectorAll('[data-cell-index]')
let movesMade_X = ['','','','','','','','','']
let circleTurn = true;
let statusDisplay = document.getElementById('status')
let playerTurnElem = document.getElementById('playerTurn')
let isOnePlayer = true

function renderPlayer(whoseTurn){
    if(whoseTurn && !isOnePlayer){
        let text = "It is O's turn."
        playerTurnElem.innerHTML = text;
        return 
    } else {
        let text = "It is X's turn"
        playerTurnElem.innerHTML = text;
        return
    }
}

boardCell.forEach(cell => {
    cell.addEventListener('click', handleClick)
})


function handleClick(event){
    const cell = event.target
    if (cell.innerHTML === ''){
        if(isOnePlayer){
            cell.innerHTML = 'X'
            clickedCellIndex = cell.getAttribute('data-cell-index')
            clickedCellIndexNum = parseInt(clickedCellIndex)
            movesMade_X[clickedCellIndexNum] = 'X'
        } else {
            const currentTurn = circleTurn ? o_mark : x_mark
            cell.innerHTML = currentTurn
            clickedCellIndex = cell.getAttribute('data-cell-index')
            clickedCellIndexNum = parseInt(clickedCellIndex)
            movesMade_X[clickedCellIndexNum] = currentTurn
        }
        computerMove()
        checkWinner()   
        changeTurn()
    }
}

function checkWinner(){
    const winningPlayer = circleTurn ? o_mark : x_mark
    for (i = 0; i < 1; i++){
        if (movesMade_X[0] === movesMade_X[1] && movesMade_X[1] === movesMade_X[2]){
            if(movesMade_X[0] !== '' && movesMade_X[1] !== '' && movesMade_X[2] !== '') {
            statusDisplay.innerHTML = winningPlayer + ' is the winner'
            
            }
        } 
        if (movesMade_X[3] === movesMade_X[4] && movesMade_X[4] === movesMade_X[5]){
            if(movesMade_X[3] !== '' && movesMade_X[4] !== '' && movesMade_X[5] !== ''){
            statusDisplay.innerHTML = winningPlayer + ' is the winner'
            }
        } 
        if (movesMade_X[6] === movesMade_X[7] && movesMade_X[7] === movesMade_X[8]){
            if(movesMade_X[6] !== '' && movesMade_X[7] !== '' && movesMade_X[8] !== ''){
            statusDisplay.innerHTML = winningPlayer + ' is the winner'
            }
        } 
        if (movesMade_X[0] === movesMade_X[3] && movesMade_X[3] === movesMade_X[6]){
            if(movesMade_X[0] !== '' && movesMade_X[3] !== '' && movesMade_X[6] !== ''){
            statusDisplay.innerHTML = winningPlayer + ' is the winner'
            }
        }
        if (movesMade_X[1] === movesMade_X[4] && movesMade_X[4] === movesMade_X[7]){
            if(movesMade_X[1] !== '' && movesMade_X[4] !== '' && movesMade_X[7] !== ''){
            statusDisplay.innerHTML = winningPlayer + ' is the winner'
            }
        }
        if (movesMade_X[2] === movesMade_X[5] && movesMade_X[5] === movesMade_X[8]){
            if(movesMade_X[2] !== '' && movesMade_X[5] !== '' && movesMade_X[8] !== ''){
            statusDisplay.innerHTML = winningPlayer + ' is the winner'
            }
        }
        if (movesMade_X[0] === movesMade_X[4] && movesMade_X[4] === movesMade_X[8]){
            if(movesMade_X[0] !== '' && movesMade_X[4] !== '' && movesMade_X[8] !== ''){
            statusDisplay.innerHTML = winningPlayer + ' is the winner'
            }
        }
        if (movesMade_X[2] === movesMade_X[4] && movesMade_X[4] === movesMade_X[6]){
            if(movesMade_X[2] !== '' && movesMade_X[4] !== '' && movesMade_X[6] !== ''){
            statusDisplay.innerHTML = winningPlayer + ' is the winner'
            }
        }     
    }
}

function reset() {
    boardCell.forEach(cell => cell.innerHTML = '')
    statusDisplay.innerHTML = ''
    movesMade_X = ['','','','','','','','','']
    circleTurn = false
    document.getElementById('playerTurn').innerHTML = `<input type="text" id="player1" placeholder="Player 1">
    <input type="text" id="player2" placeholder="Player 2">
    <button class="start">Sumbit</button>`
    document.getElementById('playerOneName').innerHTML = ''
    document.getElementById('playerTwoName').innerHTML = ''
};

function changeTurn(){
    circleTurn = !circleTurn
    renderPlayer(circleTurn)
}

playerTurnElem.addEventListener('click', function(event){
    if (event.target.className !== 'start') return

    const playerOneInput = document.getElementById('player1').value
    const playerTwoInput = document.getElementById('player2')

    if (playerTwoInput.value === ''){
        document.getElementById('playerOneName').innerHTML = playerOneInput + ' is X '
        playerTwoName.innerHTML = 'Computer is O'
        isOnePlayer = true
    } else{
        document.getElementById('playerOneName').innerHTML = playerOneInput + ' is X '
        document.getElementById('playerTwoName').innerHTML = playerTwoInput.value + ' is O'
        isOnePlayer = false
    }
    changeTurn()
})
function computerMove (){
    if (playerTurnElem.innerHTML === "It is X's turn" && playerTwoName.innerHTML === 'Computer is O'){
        for (i = 0; i < 9; i++){
            let currentCell = document.getElementById(i.toString())
            if (currentCell.innerHTML === ''){
                currentCell.innerHTML = 'O'; 
                movesMade_X[i] = 'O'
                return
            }
        }
    }
}
