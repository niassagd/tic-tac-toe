

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
        checkGame: function checkGameBoard(marker) {
            if ((boardPositions[0][0] === currentPlayerTurn.marker) && (boardPositions[1][1] === currentPlayerTurn.marker) && (boardPositions[2][2] === currentPlayerTurn.marker) ||
                (boardPositions[0][0] === currentPlayerTurn.marker) && (boardPositions[1][0] === currentPlayerTurn.marker) && (boardPositions[2][0] === currentPlayerTurn.marker) ||
                (boardPositions[0][0] === currentPlayerTurn.marker) && (boardPositions[0][1] === currentPlayerTurn.marker) && (boardPositions[0][2] === currentPlayerTurn.marker) ||
                (boardPositions[0][1] === currentPlayerTurn.marker) && (boardPositions[1][1] === currentPlayerTurn.marker) && (boardPositions[2][1] === currentPlayerTurn.marker) ||
                (boardPositions[0][2] === currentPlayerTurn.marker) && (boardPositions[1][2] === currentPlayerTurn.marker) && (boardPositions[2][2] === currentPlayerTurn.marker) ||
                (boardPositions[1][0] === currentPlayerTurn.marker) && (boardPositions[1][1] === currentPlayerTurn.marker) && (boardPositions[1][2] === currentPlayerTurn.marker) ||
                (boardPositions[2][0] === currentPlayerTurn.marker) && (boardPositions[2][1] === currentPlayerTurn.marker) && (boardPositions[2][2] === currentPlayerTurn.marker) ||
                (boardPositions[2][0] === currentPlayerTurn.marker) && (boardPositions[1][1] === currentPlayerTurn.marker) && (boardPositions[0][2] === currentPlayerTurn.marker)
            ) {
                console.log(`${currentPlayerTurn.name} Wins!`);
                playerTurnMessage = `${currentPlayerTurn.name} Wins!`;
                gameStatus = "Good Game";

                //need to check if all available spots are taken.
            } else if (movesPlayed === 9) {
                console.log("Game Over. Players tied.");
                playerTurnMessage = "Players Tied.";
                gameStatus = "Game Over";
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
    let playerTurnMessage = `${playerOne.name}'s turn.`;

    const changePlayerTurn = () => {
            currentPlayerTurn === playerOne ? currentPlayerTurn = playerTwo : currentPlayerTurn = playerOne;
            playerTurnMessage = `${currentPlayerTurn.name}'s turn.`;
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
            gameBoard.checkGame(currentPlayerTurn.marker);
            
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

               //form to retrieve player names 

    // <form class="names">
            
    // <h1>Let's Play Tic Tac Toe!</h1>
    // <h2>Please enter your names</h2>
    
    // <label for="name1">Player 1 Name:
    // <input type="text" id="name1" name="name1" required/></label>
    // <label for="name2">Player 2 Name:
    // <input type="text" id="name2" name="name2"required/></label>
    // <input name="enterNames" type="submit"/>

    // </form>
    const container = document.querySelector(".container");

    const form = document.createElement("form");
    form.classList.add("names");
    container.appendChild(form);

    const welcome = document.createElement("h1");
    welcome.textContent = "Let's Play Tic Tac Toe!";
    form.appendChild(welcome);
    
    const prompt = document.createElement("h3");
    prompt.textContent = "Please enter your names.";
    form.appendChild(prompt);

    const player1Label = document.createElement("label");
    player1Label.for = "name1";
    player1Label.textContent = "Player 1 Name:";
    form.appendChild(player1Label);

    const player1Name = document.createElement("input");
    player1Name.required = true;
    player1Name.type = "text";
    player1Name.id = "name1";
    player1Name.name = "name1";
    player1Label.appendChild(player1Name);

    const player2Label = document.createElement("label");
    
    player2Label.for = "name2";
    player2Label.textContent = "Player 2 Name:";
    form.appendChild(player2Label);

    const player2Name = document.createElement("input");
    player2Name.required = true;
    player2Name.type = "text";
    player2Name.id = "name2";
    player2Name.name = "name2";
    player2Label.appendChild(player2Name);

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.name = "submitNames";
    form.appendChild(submit);

    //end of form

    const nameOfPlayer1 = document.getElementById("name1");
    const nameOfPlayer2 = document.getElementById("name2");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        playerOne.name = nameOfPlayer1.value;
        playerTwo.name = nameOfPlayer2.value;
        playerTurnMessage = `${playerOne.name}'s turn.`;
        updateScreen();
        form.remove();
    })

    //

     //gameboard UI
     
     const board = document.querySelector(".gameboard");
 
     const gameStatusMessage = document.createElement("h1");
     gameStatusMessage.textContent = gameStatus;
     container.insertBefore(gameStatusMessage, board);
 
     const playTurnMessage = document.createElement("h2");
     playTurnMessage.textContent = playerTurnMessage;
     container.insertBefore(playTurnMessage, board);
 

     //create gameboard UI
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

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("closeBtn");
    closeBtn.textContent = "X";
    form.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
        form.remove();
    })



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
  
        
})();


//darkmode toggle 

const input = document.querySelector("input[type=checkbox]");

input.addEventListener("change", (event) => {
    const body = document.querySelector("body");
    const cells = document.getElementsByClassName("position");
    const button = document.querySelector("button");
    if (event.target.checked) {
        body.classList.add("darkMode");
        for (let cell of cells) {
            cell.classList.add("darkMode");
        }
        button.classList.add("darkMode");
    } else {
        body.classList.remove("darkMode");
        for (let cell of cells) {
            cell.classList.remove("darkMode");
        }
        button.classList.remove("darkMode");
    }
})

//
