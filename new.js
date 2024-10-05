// Select all elements with the class 'box' and the reset button
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbtn");

// Variable to track the current player's turn (true for 'O', false for 'X')
let turno = true;

// Winning patterns for the game
const winpart = [
  [0, 1, 2], // Horizontal
  [3, 4, 5], // Horizontal
  [6, 7, 8], // Horizontal
  [0, 3, 6], // Vertical
  [1, 4, 7], // Vertical
  [2, 5, 8], // Vertical
  [0, 4, 8], // Diagonal
  [2, 4, 6], // Diagonal
];

// Add click event listeners to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("1"); // Log to console for debugging

    // Set the text based on the current player's turn
    if (turno) {
      box.innerText = "O"; // Player O's turn
      turno = false; // Switch to player X's turn
    } else {
      box.innerText = "X"; // Player X's turn
      turno = true; // Switch to player O's turn
    }

    // Disable the clicked box to prevent further clicks
    box.disabled = true;

    // Check if there's a winner after this move
    chechkwinner();
  });
});

// Function to check if there is a winner
const chechkwinner = () => {
  // Loop through all winning patterns
  for (pattern of winpart) {
    console.log(pattern[0], pattern[1], pattern[2]); // Log the current pattern for debugging
    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    ); // Log the current values of the boxes in the pattern

    // Get the text of the boxes involved in the current pattern
    let posi0 = boxes[pattern[0]].innerText;
    let posi1 = boxes[pattern[1]].innerText;
    let posi2 = boxes[pattern[2]].innerText;

    // Check if all three positions have the same value and are not empty
    if (posi0 != "" && posi1 != "" && posi2 != "") {
      if (posi0 === posi1 && posi1 === posi2) {
        // If there's a winner, alert the winner's symbol
        alert("Winner: " + posi0);
      }
    }
  }
};
