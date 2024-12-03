// mouse pressed
// document.addEventListener('mousedown', (e) => {
//     console.log('Mouse button pressed down!'); 
//     const x = e.clientX;
//     const y = e.clientY;
//     console.log(`Mouse X: ${x}, Mouse Y: ${y}`);

// });


const grid = document.getElementById("grid");
let boardState = [];
let player = "X";
let gameState = 1;

function draw1() {
    for (let i=0; i<9; i++) {
        document.getElementById("grid").innerHTML += "<button type='button' class='ex'></button>";
    }
    boardState = Array(9).fill("");
}

function draw2() {
    document.getElementById("grid").innerHTML = "";
    grid.style.width = "70vh";
    grid.style.gridTemplateRows = "repeat(6, 10vh)";
    grid.style.gridTemplateColumns = "repeat(7, 10vh)";
    for (let row=0; row<6; row++) {
        for (let col=0; col<7; col++) {
            document.getElementById("grid").innerHTML += "<button type='button' class='ex'></button>";
        }
    }
    boardState = Array(42).fill("");
}

draw1();

const buttons = document.querySelectorAll("#grid button");

if (gameState === 1) {
    buttons.forEach((button, index) => {
        button.addEventListener("click", (e) => {
            if (boardState[index] !== "") return;
    
            button.textContent = player;
            boardState[index] = player;
            console.log(boardState[index]);
            if (win1(boardState, player)) {
                console.log(`${player} wins!`);
                gameState = 2;
                draw2();
                } else if (!boardState.includes("")) {
                alert("It's a draw!");
                playAgain();
                } else {
                // Switch players
                if (player === "X") {
                    player = "O";
                }
                else if (player === "O") {
                    player = "X";
                }
                }
        });
    });
}

if (gameState === 2) {
    buttons.forEach((button, index) => {
        button.addEventListener("click", (e) => {
            if (boardState[index] !== "") return;
    
            button.textContent = player;
            boardState[index] = player;
            console.log(boardState[index]);
            if (win2(boardState, player)) {
                console.log(`${player} wins!`);
                gameState = 3;
                } else if (!boardState.includes("")) {
                alert("It's a draw!");
                playAgain();
                } else {
                // Switch players
                if (player === "X") {
                    player = "O";
                }
                else if (player === "O") {
                    player = "X";
                }
                }
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
      [2, 4, 6]  // Diagonal top-right to bottom-left
    ];
  
    // Check if any winning combination is satisfied
    return possibilities.some(combo => 
      combo.every(index => board[index] === player)
    );
  }

function win2(board, player) {
    const rows = 6;
    const cols = 7;
  
    // horizontal
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c <= cols - 4; c++) {
        if (board[r][c] === player && 
            board[r][c+1] === player && 
            board[r][c+2] === player && 
            board[r][c+3] === player) {
          console.log("win");
          return true;
        }
      }
    }
    // vertical
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r <= rows - 4; r++) {
        if (board[r][c] === player && 
            board[r+1][c] === player && 
            board[r+2][c] === player && 
            board[r+3][c] === player) {
          return true;
        }
      }
    }
    // downward diagonal
    for (let r = 0; r <= rows - 4; r++) {
      for (let c = 0; c <= cols - 4; c++) {
        if (board[r][c] === player && 
            board[r+1][c+1] === player && 
            board[r+2][c+2] === player && 
            board[r+3][c+3] === player) {
          return true;
        }
      }
    }
    // upward diagonal
    for (let r = 3; r < rows; r++) {
      for (let c = 0; c <= cols - 4; c++) {
        if (board[r][c] === player && 
            board[r-1][c+1] === player && 
            board[r-2][c+2] === player && 
            board[r-3][c+3] === player) {
          return true;
        }
      }
    }
  
    // No winner found
    return false;
  }

