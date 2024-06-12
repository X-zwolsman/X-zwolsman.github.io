

let currMoleTile;
let score = 0;
let boardSize = 3; // standaard board size

window.onload = function () {
    setGame();
}

function myFunction() {
    let person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("playerName").innerHTML = person;
    }
}

function setGame() {
    for (let i = 0; i < boardSize * boardSize; i++) {
        let title = document.createElement("div");
        title.id = i.toString();
        title.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(title);
    }
    setInterval(setMole, 2800);
}

function getRandomTile() {
    let number = Math.floor(Math.random() * (boardSize * boardSize));
    return number.toString();
}

function setMole() {
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "/img/monty-mole.png";

    let number = getRandomTile();
    currMoleTile = document.getElementById(number);
    currMoleTile.appendChild(mole);

    if (boardSize === 4) {
        mole.classList.add("mole-4x4"); //  class voor de 4x4 board image
    }

    if (boardSize === 5) {
        mole.classList.add("mole-5x5"); //  class voor de 5x5 board image
    }

    if (boardSize === 6) {
        mole.classList.add("mole-6x6"); //  class voor de 5x5 board image
     
    }
}

function selectTile() {
    if (this == currMoleTile) {
        score += 1;
        document.getElementById('score').innerText = score.toString(); 
    }else{
        score -= 1;
        document.getElementById('score').innerText = score.toString(); 
    }
        
    if (score >= 15) {
        alert("Je hebt gewonnen!");
        window.location.href = "home.html";
        return;
    }
    
    
        if (score === 5 && boardSize === 3) {
            document.getElementById("board").innerHTML = ""; // leegmaken board
            boardSize = 4; // Update de board size  4x4
            document.getElementById("board").classList.add("board-4x4"); // class 4x4
            setGame(); //game met nieuwe board size
        }
    

    if (score === 8 && boardSize === 4) {
        document.getElementById("board").innerHTML = ""; // leegmaken board
        boardSize = 5; // Update de board size  5x5
        document.getElementById("board").classList.add("board-5x5"); // class 5x5
        setGame(); //game met nieuwe board size
    }

    if (score === 10 && boardSize === 5) {
        document.getElementById("board").innerHTML = ""; // leegmaken board
        boardSize = 6; // Update de board size  6x6
        document.getElementById("board").classList.add("board-6x6"); // class 6x6
        setGame(); //game met nieuwe board size
    }
}
    






