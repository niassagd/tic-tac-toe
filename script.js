const ticTacToe = (function () {
    let gameStatus = "Game in progress...";
    const gameBoard = {
        positions: [null, null, null, null, null, null, null, null, null],

        checkGame: function checkGameBoard() {
            if ((this.positions[0] === "X") && (this.positions[1] === "X") && (this.positions[2] === "X") ||
                (this.positions[3] === "X") && (this.positions[4] === "X") && (this.positions[5] === "X") ||
                (this.positions[6] === "X") && (this.positions[7] === "X") && (this.positions[8] === "X") ||
                (this.positions[0] === "X") && (this.positions[3] === "X") && (this.positions[6] === "X") ||
                (this.positions[1] === "X") && (this.positions[4] === "X") && (this.positions[7] === "X") ||
                (this.positions[2] === "X") && (this.positions[5] === "X") && (this.positions[8] === "X") ||
                (this.positions[0] === "X") && (this.positions[4] === "X") && (this.positions[8] === "X") ||
                (this.positions[2] === "X") && (this.positions[4] === "X") && (this.positions[6] === "X")
            ) {
                console.log("PlayerTwo Wins!");
                gameStatus = "Good Game";
            } else if (
                (this.positions[0] === "O") && (this.positions[1] === "O") && (this.positions[2] === "O") ||
                (this.positions[3] === "O") && (this.positions[4] === "O") && (this.positions[5] === "O") ||
                (this.positions[6] === "O") && (this.positions[7] === "O") && (this.positions[8] === "O") ||
                (this.positions[0] === "O") && (this.positions[3] === "O") && (this.positions[6] === "O") ||
                (this.positions[1] === "O") && (this.positions[4] === "O") && (this.positions[7] === "O") ||
                (this.positions[2] === "O") && (this.positions[5] === "O") && (this.positions[8] === "O") ||
                (this.positions[0] === "O") && (this.positions[4] === "O") && (this.positions[8] === "O") ||
                (this.positions[2] === "O") && (this.positions[4] === "O") && (this.positions[6] === "O")
            ) {
                console.log("PlayerOne Wins!");
                gameStatus = "Good Game";
            } else if (!this.positions.includes(null)) {
                console.log("Game Over. Players tied.")
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

    //player choose a position
    function move(num) {
        if (gameStatus === "Game Over") {
                console.log(gameStatus);
        } else if (gameBoard.positions[num] !== null) {
            gameStatus = "This position is taken, try another";
            console.log(gameStatus);
        } else {
            gameBoard.positions[num] = currentPlayerTurn.marker;
            console.log(gameBoard.positions);
            gameBoard.checkGame();
            if (gameStatus === "Game Over" || gameStatus === "Good Game") {
                console.log(gameStatus);
            } else {
                changePlayerTurn();
                console.log(playerTurnMessage);
            }
        }
    }

    function restart() {
        gameBoard.positions = [null, null, null, null, null, null, null, null, null];
        gameStatus = "New Game Started";
        console.log(gameStatus);
        console.log(playerTurnMessage);
    }

    console.log(playerTurnMessage);
  
        return {move, restart};
})();

// const container = document.querySelector(".container");
// const turnMessage = document.createElement("h2");
// container.appendChild(turnMessage);

// const board = document.querySelector(".gameboard");
// const table = document.createElement("table");
//     for (let i = 0; i < 3; i++) {
//         const row = document.createElement("tr");
//         table.appendChild(row);
//         for (let j = 0; j < 3; j++) {
//             const cell = document.createElement("td");
//             cell.classList.add("position");
//             row.appendChild(cell);
//         }
//     }

// board.appendChild(table);




