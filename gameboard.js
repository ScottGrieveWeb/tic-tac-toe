export const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    const board = [];

    function emptyBoardArray(){
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(_Cell());
            }
        }
    }

    // initialises array on load
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(_Cell());
        }
    }


    function _Cell() {
        let value = '';
        return value;
    }

    function render() {
        console.table(board);
    }
    
    return {
        board,
        render,
        emptyBoardArray
     };
})();
