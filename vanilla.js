const POSSIBLE_TURNS = [
    'O',
    'X'
];

const BOARD_SIZE = 9;

const buttons = document.querySelectorAll('.grid-cell');

state = {turn: 0, board: []}

for (let i = 0; i < BOARD_SIZE; i++) {
    state.board.push([]);
}

const swapPlayerTurn = () => {
    state.turn = state.turn === 1 ? 0 : 1;
}

const handleMove = (event) => {
    const buttonId = parseInt(event.currentTarget.id);
    if (state.board[buttonId].length !== 0) {
        return;
    }

    const currentTurn = POSSIBLE_TURNS[state.turn];
    event.currentTarget.innerHTML = currentTurn;
    state.board[buttonId] = currentTurn;
    console.log(state.board);
    swapPlayerTurn();
}

buttons.forEach(
    (button, index) => {
        button.id = index
        button.addEventListener('click', handleMove);
    }

);