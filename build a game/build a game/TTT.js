console.log('Main.js is working...');

let rulesButton = document.querySelector(".rules-button");
const blocks = document.querySelectorAll('.block');
console.log(blocks);

let player = prompt("Enter player 1 name:");
let playerTwo = prompt("Enter player 2 name:");


let playerOne = document.querySelector(".playerOne");
playerOne.textContent = player;


let playerSecond = document.querySelector(".playerTwo");
playerSecond.textContent = playerTwo;

let homeBtn = document.querySelector(".home-button")
homeBtn.addEventListener("click", function(){
    window.location.href = "home.html";
});





const tiles = document.querySelectorAll(".tile");
const restart = document.querySelector(".retry-button");
const scoreX = document.querySelector(".score-x");
const scoreO = document.querySelector(".score-o");
console.log(tiles)

rulesButton.addEventListener("click", function () {
	let x = document.querySelector(".rules");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}

})


let toggle = true;
const winRows = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

let winner = false;

tiles.forEach((elm) => {
	elm.addEventListener("click", (e) => {
		console.log("addeventlistener", elm);

		
		if (elm.textContent.trim() != "" || winner) return;

		
		if (toggle) {
			elm.textContent = "X";
		} else {
			elm.textContent = "O";
		}

		
		toggle = !toggle;

		
		if (!checkForWin()) {
			
			console.log()
		} else {
			setTimeout(function () {
				const player = elm.textContent;
				alert(`${player} has won`);
			}, 100);

			
			
		}
	});


});

function checkForWin() {
	let winner = false;
	for (let i = 0; i < winRows.length; i++) {
		
		const row = winRows[i];

		
		const x = [tiles[row[0]], tiles[row[1]], tiles[row[2]]];

	
		if (x[0].textContent == "" || x[1].textContent == "" || x[2].textContent == "") continue;

		
		if (x[0].textContent === x[1].textContent && x[1].textContent === x[2].textContent) {
			console.log("We have a winner!");
			winner = true;

			if (x[0].textContent === "X") updateScore(scoreX);
			else updateScore(scoreO);


			
			break;
		}
		console.log("No winner yet.");
	}

	if (winner) {
		console.log("Yes we have a winner");
		
	}
	return winner;
}

restart.addEventListener("click", (e) => {
	
	tiles.forEach((tile) => {
		tile.textContent = "";
	});

	winner = false;
});

function updateScore(element) {
	let score = Number(element.textContent);
	element.textContent = score + 1;
}
