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
    function userInput(id){
        let index = idChecker(id);
        rowIndex = index[0];
        columnIndex = index[1];

        if (currentPlayer == 'X'){
            if (availableChecker(rowIndex, columnIndex) == true){
                updateBoard(rowIndex, columnIndex, 'X');
                addMarker('X', id);
                currentPlayer = 'O';
            } else {
                alert("taken, try again");
                userInput();
            }
            
        } else {
            if (availableChecker(rowIndex, columnIndex) == true){
                updateBoard(rowIndex, columnIndex, 'O');
                addMarker('O', id);
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


    for (let i = 1; i < 10; i++) {
        const file = document.getElementById(i);

        file.addEventListener("click", () => {

            userInput(i);
        });
    }

    function addMarker(player, id){
        const currentFile = document.getElementById(id);
        let node = document.createTextNode(`${player}`);
        currentFile.appendChild(node);
    }
    
    function idChecker(id) {
        let row;
        let column;
        switch (id) {
            case 1:
                row = 0;
                column = 0;
                break;
            case 2:
                row = 0;
                column = 1;
                break;
            case 3:
                row = 0;
                column = 2;
                break;
            case 4:
                row = 1;
                column = 0;
                break;
            case 5:
                row = 1;
                column = 1;
                break;
            case 6:
                row = 1;
                column = 2;
                break;
            case 7:
                row = 2;
                column = 0;
                break;
            case 8:
                row = 2;
                column = 1;
                break;
            case 9:
                row = 2;
                column = 2;
                break;
        }
        let index = [row, column];

        return index;
    }

    const startBtn = document.getElementById('start-btn');
    const boardDialog = document.getElementById('gameDialog');
    const gameDiv = document.getElementById('game-container');
    gameDiv.style.visibility = "hidden";

    startBtn.addEventListener("click", () => {
        gameDiv.style.visibility = "visible";

    });

    return {
        currentPlayer,
        userInput
    }
})();


    
