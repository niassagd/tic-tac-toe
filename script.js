const ticTacToe = (function () {
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
            }
        },
    }

    // function declareWinner() {
    //     console.log(`${player} wins!`);
    // }

    const playerOne = {
            marker: "O",

            move: function move(num) {
                if (gameBoard.positions[num] !== null) {
                    console.log("This position is taken, try another");
                } else {
                    gameBoard.positions[num] = this.marker;
                    gameBoard.checkGame();
                }
            },
        }

    const playerTwo = {
            marker: "X",

            move: function move(num) {
                if (gameBoard.positions[num] !== null) {
                    console.log("This position is taken, try another");
                } else {
                    gameBoard.positions[num] = this.marker;
                    gameBoard.checkGame();
                }
            },
        }

            
        return {playerOne, playerTwo, gameBoard};
})();