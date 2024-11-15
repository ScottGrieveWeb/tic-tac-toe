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
        board,
        render
     };
})();

const gameFlow = (function () {
    let currentPlayer = 'X';
    function userInput(){
        gameBoard.render();
        
        let rowIndex = prompt("Enter row:");
        let columnIndex = prompt("Enter column:");
        rowIndex = parseInt(rowIndex);
        columnIndex = parseInt(columnIndex);

        updateBoard(rowIndex, columnIndex);
    }

    function updateBoard(row, column){
        gameBoard.board[row][column] = 'X';
        gameBoard.render();
    }
    return {
        playerTracker: currentPlayer,
        userInput
    }
})();

gameFlow.userInput();