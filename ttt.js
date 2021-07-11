const x_mark = "X"
const o_mark = "O"
const boardCell = document.querySelectorAll('[data-cell]')
let circleTurn = false;

boardCell.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})

function handleClick(event){
    const cell = event.target
    const currentTurn = circleTurn ? o_mark : x_mark
    cell.innerHTML = currentTurn
}