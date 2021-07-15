const x_mark = "X"
const o_mark = "O"
const currentPlayer = [x_mark, o_mark]
const boardCell = document.querySelectorAll('[data-cell-index]')
let movesMade_X = ['','','','','','','','','']
let circleTurn = false;
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
        // console.log(movesMade_X)
        // console.log(event.target.innerHTML)
        // console.log(cell)
        // console.log(typeof clickedCellIndexNum)
        checkWinner()   
        changeTurn()
    }
}

function checkWinner(){
    for (i = 0; i < 2; i++){
        const winnerWinner = chickenDinner[i]
        if (movesMade_X[0] === movesMade_X[1] && movesMade_X[1] === movesMade_X[2]){
            console.log('win please')
            if(movesMade_X[0] !== '' && movesMade_X[1] !== '' && movesMade_X[2] !== ''){
            
            console.log('winner')
            }
        } 
    }
}

function reset() {
    boardCell.forEach(cell => cell.innerHTML = '')
};

function changeTurn(){
    circleTurn = !circleTurn
}