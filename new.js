let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetbtn");

let turno = true;

const winpart = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("1");
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;

    chechkwinner();
  });
});

const chechkwinner = () => {
  for (pattern of winpart) {
    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    );
    let posi0 = boxes[pattern[0]].innerText;
    let posi1 = boxes[pattern[1]].innerText;
    let posi2 = boxes[pattern[2]].innerText;

    if (posi0 != "" && posi1 != "" && posi2 != "") {
      if (posi0 === posi1 && posi1 === posi2) {
        alert("winner", posi0);
      }
    }
  }
};
