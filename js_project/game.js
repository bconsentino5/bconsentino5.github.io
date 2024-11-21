// mouse pressed
// document.addEventListener('mousedown', (e) => {
//     console.log('Mouse button pressed down!'); 
//     const x = e.clientX;
//     const y = e.clientY;
//     console.log(`Mouse X: ${x}, Mouse Y: ${y}`);

// });

const buttons = document.querySelectorAll('.ex');
// button.addEventListener("click", (e) => {
//   console.log("Button clicked!");
// });
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        // if (!button.textContent) {
        //     button.textContent = currentPlayer;
        //     if (checkWin()) {
        //         alert(`${currentPlayer} wins!`);
        //         resetGame();
        //     } else if ([...buttons].every(btn => btn.textContent)) {
        //         alert("It's a draw!");
        //         resetGame();
        //     } else {
        //         currentPlayer = currentPlayer === "X" ? "O" : "X";
        //     }
        // }
        console.log("Button clicked!");
        button.innerHTML = "X";
    });
});