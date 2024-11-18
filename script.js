const domManipulation = (function () {
    // game board
    const gameDiv = document.getElementById("game-container");
    const squareWrapper = document.createElement("div");
    squareWrapper.classList.add("wrapper");
    let squareTxt = document.createTextNode('');
    squareWrapper.appendChild(squareTxt);
   
    return {
        squareWrapper,
        gameDiv
    }

})();

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
        let value = '';
        // let value = domManipulation.squareWrapper;
        return value;
    }

    function render() {
        console.table(board);
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
            
            if (availableChecker(rowIndex, columnIndex) == true){
                updateBoard(rowIndex, columnIndex, 'X');
                currentPlayer = 'O';
            } else {
                alert("taken, try again");
                userInput();
            }
            
        } else {
            rowIndex = prompt("Player O, enter a row:");
            columnIndex = prompt("Player O, enter a column:");
            rowIndex = parseInt(rowIndex);
            columnIndex = parseInt(columnIndex);

            if (availableChecker(rowIndex, columnIndex) == true){
                updateBoard(rowIndex, columnIndex, 'O');
                currentPlayer = 'X';
            } else {
                alert("taken, try again");
                userInput();
            }
        }
    }

    function availableChecker(row, column) {
        if (gameBoard.board[row][column] == ''){
            return true;
        } else if (gameBoard.board[row][column] == 'X' || 'O'){
            return false;
        }
    }

    function winCondition(){
        if (rowChecker() == 'X'){
            alert(`Player X wins!`);
        } else if (rowChecker() == 'O'){
            alert(`Player O wins!`);
        } else if (columnChecker() == 'X'){
            alert(`Player X wins!`);
        } else if (columnChecker() == 'O'){
            alert(`Player O wins!`);
        } else if (diagnolChecker() == 'X'){
            alert(`Player X wins!`);
        } else if (diagnolChecker() == 'O'){
            alert(`Player O wins!`);
        } else if (drawChecker() == false){
            alert(`It's a draw!`);
        }
    }

    function rowChecker(){
        if (gameBoard.board[0][0] == 'X' && gameBoard.board[0][1] == 'X' && gameBoard.board[0][2] == 'X'){
            return 'X';
        } else if (gameBoard.board[1][0] == 'X' && gameBoard.board[1][1] == 'X' && gameBoard.board[1][2] == 'X'){
            return 'X';
        } else if (gameBoard.board[2][0] == 'X' && gameBoard.board[2][1] == 'X' && gameBoard.board[2][2] == 'X'){
            return 'X';
        } else if (gameBoard.board[0][0] == 'O' && gameBoard.board[0][1] == 'O' && gameBoard.board[0][2] == 'O'){
            return 'O';
        } else if (gameBoard.board[1][0] == 'O' && gameBoard.board[1][1] == 'O' && gameBoard.board[1][2] == 'O'){
            return 'O';
        } else if (gameBoard.board[2][0] == 'O' && gameBoard.board[2][1] == 'O' && gameBoard.board[2][2] == 'O'){
            return 'O';
        }
    }

    function columnChecker(){
        if (gameBoard.board[0][0] == 'X' && gameBoard.board[1][0] == 'X' && gameBoard.board[2][0] == 'X'){
            return 'X';
        } else if (gameBoard.board[0][1] == 'X' && gameBoard.board[1][1] == 'X' && gameBoard.board[2][1] == 'X'){
            return 'X';
        } else if (gameBoard.board[0][2] == 'X' && gameBoard.board[1][2] == 'X' && gameBoard.board[2][2] == 'X'){
            return 'X';
        } else if (gameBoard.board[0][0] == 'O' && gameBoard.board[2][0] == 'O' && gameBoard.board[2][0] == 'O'){
            return 'O';
        } else if (gameBoard.board[0][1] == 'O' && gameBoard.board[1][1] == 'O' && gameBoard.board[2][1] == 'O'){
            return 'O';
        } else if (gameBoard.board[0][2] == 'O' && gameBoard.board[1][2] == 'O' && gameBoard.board[2][2] == 'O'){
            return 'O';
        }
    }

    function diagnolChecker(){
        if (gameBoard.board[0][0] == 'X' && gameBoard.board[1][1] == 'X' && gameBoard.board[2][2] == 'X'){
            return 'X';
        } else if (gameBoard.board[2][0] == 'X' && gameBoard.board[1][1] == 'X' && gameBoard.board[0][2] == 'X'){
            return 'X';
        } else if (gameBoard.board[0][0] == 'O' && gameBoard.board[1][1] == 'O' && gameBoard.board[2][2] == 'O'){
            return 'O';
        } else if (gameBoard.board[2][0] == 'O' && gameBoard.board[1][1] == 'O' && gameBoard.board[0][2] == 'O'){
            return 'O';
        } 
    }

    function drawChecker(){
        for (let i = 0; i < gameBoard.board.length; i++) {
            for (let j = 0; j < gameBoard.board[i].length; j++) {
              if (gameBoard.board[i][j] === '') {
                return true;
              }
            }
          }
          return false;
    }
    function updateBoard(row, column, marker){
        gameBoard.board[row][column] = marker;
        gameBoard.render();
        winCondition();
    }
    return {
        currentPlayer,
        userInput
    }
})();

gameBoard.render();


