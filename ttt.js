const x_mark = "X"
const o_mark = "O"
const currentPlayer = [x_mark, o_mark]
const boardCell = document.querySelectorAll('[data-cell-index]')
let movesMade_X = ['','','','','','','','','']
let circleTurn = false;
let statusDisplay = document.getElementById('status')
const chickenDinner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boardCell.forEach(cell => {
    cell.addEventListener('click', handleClick)
})

function handleClick(event){
    const cell = event.target
    if (cell.innerHTML === ''){
        const currentTurn = circleTurn ? o_mark : x_mark
        cell.innerHTML = currentTurn
        clickedCellIndex = cell.getAttribute('data-cell-index')
        clickedCellIndexNum = parseInt(clickedCellIndex)
        movesMade_X[clickedCellIndexNum] = currentTurn

        
        checkWinner()   
        changeTurn()
    }
}

function checkWinner(){
    const winningPlayer = circleTurn ? o_mark : x_mark
    for (i = 0; i < 1; i++){
        const winnerWinner = chickenDinner[i]
        if (movesMade_X[0] === movesMade_X[1] && movesMade_X[1] === movesMade_X[2]){
            
            if(movesMade_X[0] !== '' && movesMade_X[1] !== '' && movesMade_X[2] !== ''){
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
};

function changeTurn(){
    circleTurn = !circleTurn
}