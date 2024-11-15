const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(_Cell());
        }
    }

    function _Cell() {
        let value = 0;

        return value;
    }

    function render() {
        console.log(board);
    }
    
    return {
        render
     };
})();


gameBoard.render();

const gameFlow = (function () {
    let currentPlayer = 'X';
    function userInput(){
        let rowIndex = prompt("Enter row:");
        let columnIndex = prompt("Enter column:");

        if (currentPlayer = 'X'){
            console.log(`[${rowIndex}][${columnIndex}] = X`);
        }
    }
    return {
        playerTracker: currentPlayer,
        userInput
    }
})();

gameFlow.userInput();