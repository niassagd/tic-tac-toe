const ticTacToe = (function () {
    const gameBoard = {
        positions: [0, 1, 2, 3, 4, 5, 6, 7, 8],

        checkGame: function checkGameBoard() {
            if ((this.positions[0] === this.positions[1]) && (this.positions[1] === this.positions[2]) ||
                (this.positions[3] === this.positions[4]) && (this.positions[4] === this.positions[5]) ||
                (this.positions[6] === this.positions[7]) && (this.positions[7] === this.positions[8]) ||
                (this.positions[0] === this.positions[3]) && (this.positions[3] === this.positions[6]) ||
                (this.positions[1] === this.positions[4]) && (this.positions[4] === this.positions[7]) ||
                (this.positions[2] === this.positions[5]) && (this.positions[5] === this.positions[8]) ||
                (this.positions[0] === this.positions[4]) && (this.positions[4] === this.positions[8]) ||
                (this.positions[2] === this.positions[4]) && (this.positions[4] === this.positions[6])
            ) {
                console.log("Game Over");
            }
        },
    }

    const playerOne = {
            marker: "O",

            move: function move(num) {
                gameBoard.positions[num] = this.marker;
                gameBoard.checkGame();
                },
        }

    const playerTwo = {
            marker: "X",

            move: function move(num) {
                gameBoard.positions[num] = this.marker;
                gameBoard.checkGame();
                },
        }

            
        return {playerOne, playerTwo, gameBoard};
})();