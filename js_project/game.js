const grid = document.getElementById("grid");
const btn = document.getElementsByTagName("button");
let boardState = [];
let player = "X";
let level = 1;

function draw1() {
  document.getElementById("grid").innerHTML = "";
  document.getElementById("play_again").innerHTML = "";
  document.getElementById("player").innerHTML = "current player: X";
  document.getElementById("level").innerHTML = "level: 1";
  document.getElementById("instructions").innerHTML =
    "*click on the square to place your mark*<br>get 3 in a row to win!";
  grid.style.width = "60vh";
  grid.style.gridTemplateRows = "repeat(3, 20vh)";
  grid.style.gridTemplateColumns = "repeat(3, 20vh)";
  for (let i = 0; i < 9; i++) {
    document.getElementById("grid").innerHTML +=
      "<button type='button' class='ex'></button>";
  }
  boardState = Array(9).fill("");
}

function draw2() {
  document.getElementById("grid").innerHTML = "";
  let inst = document.getElementById("instructions");
  inst.innerHTML = inst.innerHTML.replace("3", "4");
  grid.style.width = "60vh";
  grid.style.gridTemplateRows = "repeat(4, 15vh)";
  grid.style.gridTemplateColumns = "repeat(4, 15vh)";
  for (let i = 0; i < 16; i++) {
    document.getElementById("grid").innerHTML +=
      "<button type='button' class='ex'></button>";
  }
  boardState = Array(16).fill("");
}

function draw3() {
  document.getElementById("grid").innerHTML = "";
  let inst = document.getElementById("instructions");
  inst.innerHTML = inst.innerHTML.replace("4", "5");
  grid.style.width = "60vh";
  grid.style.gridTemplateRows = "repeat(5, 12vh)";
  grid.style.gridTemplateColumns = "repeat(5, 12vh)";
  for (let i = 0; i < 25; i++) {
    document.getElementById("grid").innerHTML +=
      "<button type='button' class='ex'></button>";
    btn[i].style.fontSize = "50px";
  }
  boardState = Array(25).fill("");
}

function play1() {
  const buttons = document.querySelectorAll("#grid button");
  let player = "X";
  let tie = false;
  buttons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      if (boardState[index] !== "") return;
      button.textContent = player;
      boardState[index] = player;
      if (win1(boardState, player)) {
        level = 2;
        document.getElementById("level1").innerHTML = player;
      } else if (!boardState.includes("")) {
        tie = true;
      } else {
        // Switch players
        if (player === "X") {
          player = "O";
          document.getElementById("player").innerHTML = "current player: O";
        } else if (player === "O") {
          player = "X";
          document.getElementById("player").innerHTML = "current player: X";
        }
      }
      setTimeout(function () {
        if (level === 2) {
          alert(`${player} wins!`);
          draw2();
          play2();
        } else if (tie === true) {
          alert("It's a tie! Play again.");
          draw1();
          play1();
        }
      }, 50);
    });
  });
}

function play2() {
  const buttons = document.querySelectorAll("#grid button");
  let player = "X";
  let tie = false;
  document.getElementById("player").innerHTML = "current player: X";
  document.getElementById("level").innerHTML = "level: 2";
  buttons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      if (boardState[index] !== "") return;
      button.textContent = player;
      boardState[index] = player;
      if (win2(boardState, player)) {
        level = 3;
        document.getElementById("level2").innerHTML = player;
      } else if (!boardState.includes("")) {
        tie = true;
      } else {
        // Switch players
        if (player === "X") {
          player = "O";
          document.getElementById("player").innerHTML = "current player: O";
        } else if (player === "O") {
          player = "X";
          document.getElementById("player").innerHTML = "current player: X";
        }
      }
      setTimeout(function () {
        if (level === 3) {
          alert(`${player} wins!`);
          draw3();
          play3();
        } else if (tie === true) {
          alert("It's a tie! Play again.");
          draw2();
          play2();
        }
      }, 50);
    });
  });
}

function play3() {
  const buttons = document.querySelectorAll("#grid button");
  let player = "X";
  let tie = false;
  document.getElementById("player").innerHTML = "current player: X";
  document.getElementById("level").innerHTML = "level: 3";
  buttons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      if (boardState[index] !== "") return;
      button.textContent = player;
      boardState[index] = player;
      if (win3(boardState, player)) {
        level = 4;
        document.getElementById("level3").innerHTML = player;
      } else if (!boardState.includes("")) {
        tie = true;
      } else {
        // Switch players
        if (player === "X") {
          player = "O";
          document.getElementById("player").innerHTML = "current player: O";
        } else if (player === "O") {
          player = "X";
          document.getElementById("player").innerHTML = "current player: X";
        }
      }
      setTimeout(function () {
        if (level === 4) {
          alert(`${player} wins!`);
          gameOver();
        } else if (tie === true) {
          alert("It's a tie! Play again.");
          draw3();
          play3();
        }
      }, 50);
    });
  });
}

function win1(board, player) {
  // Winning combinations
  const possibilities = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
  ];

  // Check if any winning combination is satisfied
  return possibilities.some((combo) =>
    combo.every((index) => board[index] === player)
  );
}

function win2(board, player) {
  // Winning combinations
  const possibilities = [
    // Rows
    [0, 1, 2, 3], // Top row
    [4, 5, 6, 7], // Second row
    [8, 9, 10, 11], // Third row
    [12, 13, 14, 15], // Bottom row

    // Columns
    [0, 4, 8, 12], // Left column
    [1, 5, 9, 13], // Second column
    [2, 6, 10, 14], // Third column
    [3, 7, 11, 15], // Right column

    // Diagonals
    [0, 5, 10, 15], // Diagonal top-left to bottom-right
    [3, 6, 9, 12], // Diagonal top-right to bottom-left
  ];

  // Check if any winning combination is satisfied
  return possibilities.some((combo) =>
    combo.every((index) => board[index] === player)
  );
}

function win3(board, player) {
  // Winning combinations
  const possibilities = [
    // Rows
    [0, 1, 2, 3, 4], // Top row
    [5, 6, 7, 8, 9], // Second row
    [10, 11, 12, 13, 14], // Third row
    [15, 16, 17, 18, 19], // Fourth row
    [20, 21, 22, 23, 24], // Bottom row

    // Columns
    [0, 5, 10, 15, 20], // Left column
    [1, 6, 11, 16, 21], // Second column
    [2, 7, 12, 17, 22], // Third column
    [3, 8, 13, 18, 23], // Fourth column
    [4, 9, 14, 19, 24], // Right column

    // Diagonals
    [0, 6, 12, 18, 24], // Diagonal top-left to bottom-right
    [4, 8, 12, 16, 20], // Diagonal top-right to bottom-left
  ];

  // Check if any winning combination is satisfied
  return possibilities.some((combo) =>
    combo.every((index) => board[index] === player)
  );
}

function gameOver() {
  document.getElementById("level").innerHTML = "";
  document.getElementById("player").innerHTML = "";
  document.getElementById("grid").innerHTML = "";
  document.getElementById("instructions").innerHTML = "";
  document.getElementById("play_again").innerHTML += "<p>game over</p>";
  document.getElementById("play_again").innerHTML +=
    "<button type='button' style='font-size: 15px;'>play again?</button>";
  const buttons = document.querySelectorAll("#top button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      document.getElementById("level1").innerHTML = "";
      document.getElementById("level2").innerHTML = "";
      document.getElementById("level3").innerHTML = "";
      draw1();
      play1();
    });
  });
}

if (level === 1) {
  draw1();
  play1();
} else if (level === 2) {
  draw2();
  play2();
} else if (level === 3) {
  draw3();
  play3();
}
