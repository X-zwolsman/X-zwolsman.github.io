document.addEventListener("DOMContentLoaded", function () {
    const playerBoard = document.getElementById("playerBoard");
    const aiBoard = document.getElementById("aiBoard");

    let playerScore = 0;
    let aiScore = 0;
    const totalShips = 5;

    const playerShips = [];
    const aiShips = [];

    createGrid(playerBoard);
    createGrid(aiBoard, true);
    createShips(playerBoard, playerShips, false);
    createShips(aiBoard, aiShips, true);

    function createGrid(board, isAI) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement("div");
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.textContent = isAI ? "" : "";
                cell.classList.add("cell");
                board.appendChild(cell);

                if (!isAI) {
                    cell.addEventListener("click", function (event) {
                        handlePlayerClick(event);
                    });
                }
            }
        }
    }

    function createShips(board, shipsArray, isAI) {
        for (let i = 0; i < totalShips; i++) {
            let shipRow, shipCol;
            do {
                shipRow = Math.floor(Math.random() * 10);
                shipCol = Math.floor(Math.random() * 10);
            } while (
                shipsArray.some(
                    ship => ship.row === shipRow && ship.col === shipCol
                )
            );

            shipsArray.push({ row: shipRow, col: shipCol });

            const shipCell = board.querySelector(
                `[data-row="${shipRow}"][data-col="${shipCol}"]`
            );
            shipCell.textContent = isAI ? "S" : "s";
        }
    }

    function handlePlayerClick(event) {
        const clickedCell = event.target;
        if (!clickedCell.classList.contains("cell")) return;
    
        const clickedRow = parseInt(clickedCell.dataset.row);
        const clickedCol = parseInt(clickedCell.dataset.col);
    
        const isShip = aiShips.some(
            ship => ship.row === clickedRow && ship.col === clickedCol
        );
    
        if (isShip) {
            clickedCell.style.backgroundColor = "green"; //Geraakt//
            clickedCell.textContent = "";
            playerScore++;
            checkWinner();
            showMessage("Je hebt een schip geraakt!");
        } else {
            clickedCell.textContent = "X";
            showMessage("Mis!");
            aiMove();
        }
        updatePlayerScore();
    }
    

    function updatePlayerScore() {
        const scoreDisplay = document.getElementById("playerScore");
        scoreDisplay.textContent = `Score: ${playerScore}`;
    }

    function checkWinner() {
        if (playerScore === totalShips) {
            showMessage("Gefeliciteerd! Je hebt gewonnen!");
        } else if (aiScore === totalShips) {
            showMessage("AI heeft gewonnen. Spel voorbij!");
        }
    }

    function showMessage(message) {
        alert(message);
    }

    function aiMove() {
        let aiRow, aiCol;
        do {
            aiRow = Math.floor(Math.random() * 10);
            aiCol = Math.floor(Math.random() * 10);
        } while (playerShips.some(ship => ship.row === aiRow && ship.col === aiCol));

        const aiTargetCell = aiBoard.querySelector(`[data-row="${aiRow}"][data-col="${aiCol}"]`);
        const isShip = playerShips.some(ship => ship.row === aiRow && ship.col === aiCol);

        if (isShip) {
            aiTargetCell.textContent = "S";
            aiScore++;
            checkWinner();
            showMessage("AI heeft een schip geraakt!");
            aiMove(); // Als de AI een schip raakt, mag hij opnieuw zetten
        } else {
            aiTargetCell.textContent = "X";
        }
    }
});










document.addEventListener("DOMContentLoaded", function () {


    function showMessage(message) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");

        const messageBox = document.createElement("div");
        messageBox.classList.add("message-box");
        messageBox.textContent = message;

        const closeButton = document.createElement("button");
        closeButton.textContent = "Sluiten";
        closeButton.addEventListener("click", function () {
            messageContainer.style.display = "none";
        });

        messageContainer.appendChild(messageBox);
        messageContainer.appendChild(closeButton);

        document.body.appendChild(messageContainer);
    }


    function checkWinner() {
        if (playerScore === totalShips) {
            showMessage("Gefeliciteerd! Je hebt gewonnen!");
        } else if (aiScore === totalShips) {
            showMessage("AI heeft gewonnen. Spel voorbij!");
        }
    }
});



















document.addEventListener("DOMContentLoaded", function () {
    const playerBoard = document.getElementById("playerBoard");
    const aiBoard = document.getElementById("aiBoard");


    // vlakken tonen
    function logCells(board) {
        const cells = board.querySelectorAll(".cell");
        cells.forEach(cell => {
            console.log(`Row: ${cell.dataset.row}, Column: ${cell.dataset.col}`);
        });
    }

    // vlakken board
    console.log("Spelerbord cellen:");
    logCells(playerBoard);

    console.log("AI-bord cellen:");
    logCells(aiBoard);
});










//naam controleren op scheldwoorden//
let playerName = "";
let playerPoints = 0;

const invalidWords = ["scheldwoord1", "scheldwoord2", "scheldwoord3"];

function startGame() {
    let inputName = prompt("Voer je naam in om te beginnen:");

    while (!isValidName(inputName)) {
        inputName = prompt("Ongeldige naam. Voer je naam in om te beginnen:");
        if (inputName === null) break;
    }

    if (inputName !== null) {
        playerName = inputName.trim();
        updatePlayerNameDisplay();
        updatePlayerPointsDisplay();
    }
}

function isValidName(name) {
    if (name === null || name.trim() === "") {
        return false;
    }

    //controleren op rare tekens//
    const hasInvalidCharacters = /[!\@\#\$\%\^\*\(\)\_\-\=\+]/.test(name);
    if (hasInvalidCharacters) {
        return false;
    }

    const containsInvalidWords = invalidWords.some(word => name.toLowerCase().includes(word.toLowerCase()));
    if (containsInvalidWords) {
        return false;
    }

    return true;
}

function updatePlayerNameDisplay() {
    playerNameDisplay.textContent = `Naam: ${playerName}`;
}

function updatePlayerPointsDisplay() {
    playerPointsDisplay.textContent = `Punten: ${playerPoints}`;
}

document.addEventListener("DOMContentLoaded", startGame);












