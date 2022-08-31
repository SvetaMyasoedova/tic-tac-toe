//initialization
let restartButtton = document.querySelector("#restart-game");
let board = document.querySelector(".board");
let allBoardSquare = document.querySelectorAll(".board-square");
let resultText = document.querySelector(".result");
let count = 0;
let gameover = false;

//add Event Listener
board.addEventListener("click", addMark);
restartButtton.addEventListener("click", newGame);

//add X or O on board
let step = 0;
function addMark(event) {
  if (gameover) {
    return;
  }

  if (
    event.target.className == "board-square" &&
    event.target.textContent == ""
  ) {
    if (step % 2 == 0) {
      event.target.innerHTML = "O";
      event.target.classList.add("green");
      resultText.innerHTML = "x's turn";
      resultText.classList.add("yellow-txt");
      count++;
    } else {
      event.target.innerHTML = "X";
      resultText.innerHTML = "o's turn";
      resultText.classList.remove("yellow-txt");
      count++;
    }

    step++;

    checkWinner();
  }
}
//check
function checkWinner() {
  let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCombinations.length; i++) {
    if (
      allBoardSquare[winCombinations[i][0]].innerHTML == "X" &&
      allBoardSquare[winCombinations[i][1]].innerHTML == "X" &&
      allBoardSquare[winCombinations[i][2]].innerHTML == "X"
    ) {
      allBoardSquare[winCombinations[i][0]].classList.add("active-x");
      allBoardSquare[winCombinations[i][1]].classList.add("active-x");
      allBoardSquare[winCombinations[i][2]].classList.add("active-x");
      resultText.classList.toggle("yellow-txt");
      resultText.innerHTML = "X wins the game";
      gameover = true;
    } else if (
      allBoardSquare[winCombinations[i][0]].innerHTML == "O" &&
      allBoardSquare[winCombinations[i][1]].innerHTML == "O" &&
      allBoardSquare[winCombinations[i][2]].innerHTML == "O"
    ) {
      allBoardSquare[winCombinations[i][0]].classList.add("active-o");
      allBoardSquare[winCombinations[i][1]].classList.add("active-o");
      allBoardSquare[winCombinations[i][2]].classList.add("active-o");
      resultText.classList.toggle("yellow-txt");
      resultText.innerHTML = "O wins the game";
      gameover = true;
    } else if (count == 9) {
      resultText.innerHTML = "It's a tie!";
      board.classList.add("active-tie");
      gameover = true;
    }
  }
}

//restart game
function newGame() {
  step = 0;
  count = 0;
  resultText.innerHTML = "o's turn";
  board.classList.remove("active-tie");
  gameover = false;
  //board.addEventListener("click", addMark);
  allBoardSquare.forEach((elem) => {
    elem.innerHTML = "";
    elem.classList.remove("active-x");
    elem.classList.remove("green");
    elem.classList.remove("active-o");
  });
}
