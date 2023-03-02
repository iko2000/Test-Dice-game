"use strict";

const btnRoll = document.querySelector("#btn-roll");
const backPic = document.querySelector(".player-1photobox");
const dicePic = document.querySelector("#dice-pic");
const dicePic2 = document.querySelector("#dice-pic-2");
const btnPlayAgain = document.querySelector("#btn-playagain");
const player1Div = document.querySelector(".player1");
const player2Div = document.querySelector(".player2");
const winnerDisplay = document.querySelector(".winner");

let randomNum = Math.trunc(Math.random() * 6) + 1;

const player1Score = document.querySelector(".score1");
const player2Score = document.querySelector(".score2");

let player1roll = 0;
let player2roll = 0;
let activePlayer = 0;

let switchPlayer = function () {};

btnRoll.addEventListener("click", function () {
  if (activePlayer === 0) {
    randomNum = Math.trunc(Math.random() * 6) + 1;
    dicePic.src = "./static/images/dice-" + randomNum + ".png";
    dicePic.style.display = "block";
    player1roll = randomNum;
    player1Score.textContent = "You Rolled: " + randomNum;
    console.log(dicePic);
    console.log(dicePic.src);
    activePlayer++;
  } else if (activePlayer === 1) {
    randomNum = Math.trunc(Math.random() * 6) + 1;
    dicePic2.src = "./static/images/dice-" + randomNum + ".png";
    dicePic2.style.display = "block";
    player2Score.textContent = "You Rolled: " + randomNum;
    player2roll = randomNum;
    activePlayer++;
    if (player1roll > player2roll) {
      console.log("Player 1 WON !");
      player1Div.style.backgroundColor = "green";
      player2Div.style.backgroundColor = "red";

      winnerDisplay.textContent = "Player 1 won !";
      winnerDisplay.style.display = "block";
      btnPlayAgain.style.scale = '1.5';
    } else if (player1roll < player2roll) {
      console.log("Player 2 WON !");
      player2Div.style.backgroundColor = "green";
      player1Div.style.backgroundColor = "red";

      winnerDisplay.textContent = "Player 2 won !";
      winnerDisplay.style.display = "block";
      btnPlayAgain.style.scale = '1.5';

    } else {
      console.log("Tie!");
      player1Div.style.backgroundColor = "yellow";
      player2Div.style.backgroundColor = "yellow";
      winnerDisplay.textContent = "Tie";
      winnerDisplay.style.display = "block";
      btnPlayAgain.style.scale = '1.5';
 
    }
  }
});

btnPlayAgain.addEventListener("click", function () {
  dicePic.style.display = "none";
  dicePic2.style.display = "none";
  player2Score.textContent = " ";
  player1Score.textContent = " ";
  activePlayer = 0;
  player1Div.style.backgroundColor = "transparent";
  player2Div.style.backgroundColor = "transparent";
  winnerDisplay.style.display = "none";
  btnPlayAgain.style.scale = '1.0';

});

console.log(randomNum);
