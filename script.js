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
    
    return {
        board: board
     };
})();



console.log(gameBoard.board);
gameBoard.board[1][0] = 1;
console.log(gameBoard.board);