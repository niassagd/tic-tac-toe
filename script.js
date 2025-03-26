const ticTacToe = (function () {
    const gameBoard = {
        positions: [null, null, null, null, null, null, null, null, null],

        gameStatus: "In progress",

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
                this.gameStatus = "over";
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
                this.gameStatus = "over";
            } else if (!this.positions.includes(null)) {
                console.log("Game Over. Players tied.")
                this.gameStatus = "over";
            }
        },
    }

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
    let message = `Player One's turn.`;

    const changePlayerTurn = function changeTurn () {
            if (currentPlayerTurn === playerOne) {
                currentPlayerTurn = playerTwo;
            } else if (currentPlayerTurn === playerTwo) {
                currentPlayerTurn = playerOne;
            } message = `${currentPlayerTurn.name}'s turn.`;
        }    

    //player choose a position
    function move(num) {
        if (gameBoard.gameStatus === "over") {
                console.log("Good Game.");
        } else if (gameBoard.positions[num] !== null) {
            console.log("This position is taken, try another");
        } else {
            gameBoard.positions[num] = currentPlayerTurn.marker;
            console.log(gameBoard.positions);
            gameBoard.checkGame();
            if (gameBoard.gameStatus === "over") {
                console.log("Good Game.");
            } else {
                changePlayerTurn();
                console.log(message);
            }
            
        }
    }

    console.log(message);
  
        return {move};
})();