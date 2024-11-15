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
        let value = '-';

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
    let rowIndex;
    let columnIndex;
    function userInput(){
        if (currentPlayer == 'X'){
            rowIndex = prompt("Player X, enter a row:");
            columnIndex = prompt("Player X, enter a column:");
            rowIndex = parseInt(rowIndex);
            columnIndex = parseInt(columnIndex);

            updateBoard(rowIndex, columnIndex, 'X');
            currentPlayer = 'O';
        } else {
            rowIndex = prompt("Player O, enter a row:");
            columnIndex = prompt("Player O, enter a column:");
            rowIndex = parseInt(rowIndex);
            columnIndex = parseInt(columnIndex);

            updateBoard(rowIndex, columnIndex, 'O');
            currentPlayer = 'X';
        }

        // let rowIndex = prompt("Enter row:");
        // let columnIndex = prompt("Enter column:");
        // rowIndex = parseInt(rowIndex);
        // columnIndex = parseInt(columnIndex);

        // updateBoard(rowIndex, columnIndex);
    }

    function updateBoard(row, column, marker){
        gameBoard.board[row][column] = marker;
        gameBoard.render();

    }
    return {
        currentPlayer,
        userInput
    }
})();

gameBoard.render();

gameFlow.userInput();
gameFlow.userInput();
