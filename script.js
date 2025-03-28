const ticTacToe = (function () {
    let gameStatus = "Game in progress...";
    let movesPlayed = 0;
    const boardPositions = [];
    const gameBoard = {
        createGameBoard: function() {
            const rows = 3;
            const cols = 3;
                for (let i = 0; i < rows; i++) {
                    boardPositions[i] = [];
                    for (let j = 0; j < cols; j++) {
                        boardPositions[i].push(" ");
                    }
                }
            },

        //need to be able to check if the board is full for when no winner
            
        checkGame: function checkGameBoard() {
            if ((boardPositions[0][0] === "X") && (boardPositions[1][1] === "X") && (boardPositions[2][2] === "X") ||
                (boardPositions[0][0] === "X") && (boardPositions[1][0] === "X") && (boardPositions[2][0] === "X") ||
                (boardPositions[0][0] === "X") && (boardPositions[0][1] === "X") && (boardPositions[0][2] === "X") ||
                (boardPositions[0][1] === "X") && (boardPositions[1][1] === "X") && (boardPositions[2][1] === "X") ||
                (boardPositions[0][2] === "X") && (boardPositions[1][2] === "X") && (boardPositions[2][2] === "X") ||
                (boardPositions[1][0] === "X") && (boardPositions[1][1] === "X") && (boardPositions[1][2] === "X") ||
                (boardPositions[2][0] === "X") && (boardPositions[2][1] === "X") && (boardPositions[2][2] === "X") ||
                (boardPositions[2][0] === "X") && (boardPositions[1][1] === "X") && (boardPositions[0][2] === "X")
            ) {
                console.log("PlayerTwo Wins!");
                playerTurnMessage = "Player Two Wins!";
                gameStatus = "Good Game";
            } else if (
                (boardPositions[0][0] === "O") && (boardPositions[1][1] === "O") && (boardPositions[2][2] === "O") ||
                (boardPositions[0][0] === "O") && (boardPositions[1][0] === "O") && (boardPositions[2][0] === "O") ||
                (boardPositions[0][0] === "O") && (boardPositions[0][1] === "O") && (boardPositions[0][2] === "O") ||
                (boardPositions[0][1] === "O") && (boardPositions[1][1] === "O") && (boardPositions[2][1] === "O") ||
                (boardPositions[0][2] === "O") && (boardPositions[1][2] === "O") && (boardPositions[2][2] === "O") ||
                (boardPositions[1][0] === "O") && (boardPositions[1][1] === "O") && (boardPositions[1][2] === "O") ||
                (boardPositions[2][0] === "O") && (boardPositions[2][1] === "O") && (boardPositions[2][2] === "O") ||
                (boardPositions[2][0] === "O") && (boardPositions[1][1] === "O") && (boardPositions[0][2] === "O")
            ) {
                console.log("PlayerOne Wins!");
                playerTurnMessage ="Player One Wins!";
                gameStatus = "Good Game";

                //need to check if all available spots are taken.
            } else if (movesPlayed === 9) {
                console.log("Game Over. Players tied.");
                playerTurnMessage = "Players Tied.";
                gameStatus = "Game Over";
            }
        },
    }
    //game status

    //create players

    function createPlayer (name, marker) {
        return {
            name: name,
            marker: marker,
        }
    }

    const playerOne = createPlayer("Player One", "O");
    const playerTwo = createPlayer("Player Two", "X");

    //alternate players turns
    let currentPlayerTurn = playerOne;
    let playerTurnMessage = `Player One's turn.`;

    const changePlayerTurn = function changeTurn () {
            if (currentPlayerTurn === playerOne) {
                currentPlayerTurn = playerTwo;
            } else if (currentPlayerTurn === playerTwo) {
                currentPlayerTurn = playerOne;
            } playerTurnMessage = `${currentPlayerTurn.name}'s turn.`;
        }    

    //check if position open

    function isAvail(value) {
        return value === " ";
    }

    //player choose a position
    function move(col, row) {
        if (gameStatus === "Game Over" || gameStatus === "Good Game") {
                console.log(gameStatus);
        } else if (!isAvail(boardPositions[col][row])) {
            playerTurnMessage = "This position is taken, try another";
            console.log(playerTurnMessage);
        } else {
            boardPositions[col][row] = currentPlayerTurn.marker;
            console.log(boardPositions);
            movesPlayed++;
            console.log(movesPlayed);
            gameBoard.checkGame();
            
            if (gameStatus === "Game Over" || gameStatus === "Good Game") {
                console.log(gameStatus);
            } else {
                changePlayerTurn();
                console.log(playerTurnMessage);
            }
        }
        updateScreen();
    }

    function restart() {
        gameBoard.createGameBoard();
        renderBoard();
        gameStatus = "New Game Started";
        console.log(gameStatus);
        console.log(playerTurnMessage);
        movesPlayed = 0;
    }

    //console.log to start

    console.log(gameStatus);
    console.log(playerTurnMessage);
    gameBoard.createGameBoard();
    console.log(boardPositions);


        //game UI
        const container = document.querySelector(".container");
        const board = document.querySelector(".gameboard");
    
        const gameStatusMessage = document.createElement("h1");
        gameStatusMessage.textContent = gameStatus;
        container.insertBefore(gameStatusMessage, board);
    
        const playTurnMessage = document.createElement("h2");
        playTurnMessage.textContent = playerTurnMessage;
        container.insertBefore(playTurnMessage, board);
    
        function renderBoard() {
            const existingTable = document.querySelector("table");
            if (existingTable) {
                existingTable.remove();
            }
            //create table UI
            const table = document.createElement("table");
                for (let i = 0; i < 3; i++) {
                    const row = document.createElement("tr");
                    table.appendChild(row);
                    for (let j = 0; j < 3; j++) {
                        const cell = document.createElement("td");
                        const innerArray = boardPositions[i];
                        cell.classList.add("empty");
                        cell.classList.add("position");

                        cell.addEventListener("click", () => {
                            move(i,j);
                            cell.classList.remove("empty");
                            cell.textContent = innerArray[j];
                        })
                        row.appendChild(cell);
                    }
                }
                board.appendChild(table);
            }
        
        

        

    //updateScreen Button for UI to updateScreen 
            function updateScreen () {
                gameStatusMessage.textContent = gameStatus;
                playTurnMessage.textContent = playerTurnMessage;
            };

        //UI restart button 

        const restartBtn = document.createElement("button");
        restartBtn.classList.add("restartBtn");
        restartBtn.textContent = "Start New Game";
        restartBtn.addEventListener("click", () => {
            gameBoard.createGameBoard();
            changePlayerTurn();
            restart();
            updateScreen();
        
        })

        container.appendChild(restartBtn);
        renderBoard();
  
        return {move, restart};
})();






