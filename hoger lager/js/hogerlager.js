console.log('Main loaded');



let rollBttn = document.querySelector("button.dice-button");
let higherBttn = document.querySelector("button.higher-button");
let lowerBttn = document.querySelector("button.lower-button");
let goBttn = document.querySelector("button.go-button");



let computerDice = document.querySelector("div.dice-text-center-computer-dice-one")
let computerDice2 = document.querySelector("div.dice-text-center-computer-dice-two")



let playerDice = document.querySelector("div.dice-text-center-player-dice-one")
let playerDice2 = document.querySelector("div.dice-text-center-player-dice-two")



let playerNmbr1 = Math.round(Math.random() * (6 - 1) + 1);
let playerNmbr2 = Math.round(Math.random() * (6 - 1) + 1);
let playerNmbrWorth = (playerNmbr1 + playerNmbr2);



let computerNmbr1 = Math.round(Math.random() * (6 - 1) + 1);
let computerNmbr2 = Math.round(Math.random() * (6 - 1) + 1);
let computerNmbrWorth = (computerNmbr1 + computerNmbr2);



let playerCredit = document.querySelector("span.player-credits")
let playerScore = 0;



rollBttn.addEventListener("click", function () {
    computerNmbr1 = Math.round(Math.random() * (6 - 1) + 1);
    computerNmbr2 = Math.round(Math.random() * (6 - 1) + 1);



    if (computerNmbr1 === 1) {
        computerDice.innerHTML = `<div>&#9856;</div>`;
    } else if (computerNmbr1 === 2) {
        computerDice.innerHTML = `<div>&#9857;</div>`;
    } else if (computerNmbr1 === 3) {
        computerDice.innerHTML = `<div>&#9858;</div>`;
    } else if (computerNmbr1 === 4) {
        computerDice.innerHTML = `<div>&#9859;</div>`;
    } else if (computerNmbr1 === 5) {
        computerDice.innerHTML = `<div>&#9860;</div>`;
    } else {
        computerDice.innerHTML = `<div>&#9861;</div>`;
    };



    if (computerNmbr2 === 1) {
        computerDice2.innerHTML = `<div>&#9856;</div>`;
    } else if (computerNmbr2 === 2) {
        computerDice2.innerHTML = `<div>&#9857;</div>`;
    } else if (computerNmbr2 === 3) {
        computerDice2.innerHTML = `<div>&#9858;</div>`;
    } else if (computerNmbr2 === 4) {
        computerDice2.innerHTML = `<div>&#9859;</div>`;
    } else if (computerNmbr2 === 5) {
        computerDice2.innerHTML = `<div>&#9860;</div>`;
    } else {
        computerDice2.innerHTML = `<div>&#9861;</div>`;
    };
});



higherBttn.addEventListener("click", function () {
    playerNmbr1 = Math.round(Math.random() * (6 - 1) + 1);
    playerNmbr2 = Math.round(Math.random() * (6 - 1) + 1);
    playerNmbrWorth = (playerNmbr1 + playerNmbr2);



    if (playerNmbr1 === 1) {
        playerDice.innerHTML = `<div>&#9856;</div>`;
    } else if (playerNmbr1 === 2) {
        playerDice.innerHTML = `<div>&#9857;</div>`;
    } else if (playerNmbr1 === 3) {
        playerDice.innerHTML = `<div>&#9858;</div>`;
    } else if (playerNmbr1 === 4) {
        playerDice.innerHTML = `<div>&#9859;</div>`;
    } else if (playerNmbr1 === 5) {
        playerDice.innerHTML = `<div>&#9860;</div>`;
    } else {
        playerDice.innerHTML = `<div>&#9861;</div>`;
    };



    if (playerNmbr2 === 1) {
        playerDice2.innerHTML = `<div>&#9856;</div>`;
    } else if (playerNmbr2 === 2) {
        playerDice2.innerHTML = `<div>&#9857;</div>`;
    } else if (playerNmbr2 === 3) {
        playerDice2.innerHTML = `<div>&#9858;</div>`;
    } else if (playerNmbr2 === 4) {
        playerDice2.innerHTML = `<div>&#9859;</div>`;
    } else if (playerNmbr2 === 5) {
        playerDice2.innerHTML = `<div>&#9860;</div>`;
    } else {
        playerDice2.innerHTML = `<div>&#9861;</div>`;
    };



    if (playerNmbrWorth <= computerNmbrWorth) {
        playerCredit.textContent = parseInt(playerCredit.textContent) + 1;
    } else {
        alert("You Lost");
    };
});



lowerBttn.addEventListener("click", function () {
    playerNmbr1 = Math.round(Math.random() * (6 - 1) + 1);
    playerNmbr2 = Math.round(Math.random() * (6 - 1) + 1);
    playerNmbrWorth = (playerNmbr1 + playerNmbr2);



    if (playerNmbr1 === 1) {
        playerDice.innerHTML = `<div>&#9856;</div>`;
    } else if (playerNmbr1 === 2) {
        playerDice.innerHTML = `<div>&#9857;</div>`;
    } else if (playerNmbr1 === 3) {
        playerDice.innerHTML = `<div>&#9858;</div>`;
    } else if (playerNmbr1 === 4) {
        playerDice.innerHTML = `<div>&#9859;</div>`;
    } else if (playerNmbr1 === 5) {
        playerDice.innerHTML = `<div>&#9860;</div>`;
    } else {
        playerDice.innerHTML = `<div>&#9861;</div>`;
    };



    if (playerNmbr2 === 1) {
        playerDice2.innerHTML = `<div>&#9856;</div>`;
    } else if (playerNmbr2 === 2) {
        playerDice2.innerHTML = `<div>&#9857;</div>`;
    } else if (playerNmbr2 === 3) {
        playerDice2.innerHTML = `<div>&#9858;</div>`;
    } else if (playerNmbr2 === 4) {
        playerDice2.innerHTML = `<div>&#9859;</div>`;
    } else if (playerNmbr2 === 5) {
        playerDice2.innerHTML = `<div>&#9860;</div>`;
    } else {
        playerDice2.innerHTML = `<div>&#9861;</div>`;
    };



    if (playerNmbrWorth <= computerNmbrWorth) {
        playerCredit.textContent = parseInt(playerCredit.textContent) + 1;
    } else {
        alert("You Lost");
    };
});