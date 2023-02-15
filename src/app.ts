// *****************************
// *********SELECTORS
// *****************************

let spinBoxes = document.querySelector(".spin-list")!;
const spinBtn = document.querySelector(".spin-btn");
const addBtn = document.querySelector(".add-btn");
const resetBtn = document.querySelector(".reset-btn");
const input = <HTMLInputElement>document.querySelector(".add-player")!;
const clearBtn = document.querySelector(".clear-btn")!;

let boxAmount: number = 100;
let boxes: string[] = [];

// *****************************
// *********EVENT LISTENERS
// *****************************

spinBtn?.addEventListener("click", spin);
addBtn?.addEventListener("click", addPlayer);
resetBtn?.addEventListener("click", reset);
clearBtn.addEventListener("click", clear);

// *****************************
// *********FUNCTIONS
// *****************************

// website initialize boxes with random position
function init() {
  spinBoxes.innerHTML = "";
  let initBets = ["player1", "player2"];
  for (let i = 0; i < boxAmount; i++) {
    let randomPlayer = rand(0, initBets.length);
    let box = document.createElement("li");
    let nickname = document.createElement("span");
    nickname.innerHTML = initBets[randomPlayer];
    // box.style.backgroundColor = initBets[randomPlayer][1];
    box.appendChild(nickname).classList.add("nickname");
    spinBoxes.appendChild(box).classList.add("spin-item");
  }
}

// random position
function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// spin button
function spin() {
  const audioOp = new Audio("./sounds/opening.mp3");
  const audioWin = new Audio("./sounds/win.mp3");
  audioOp.play();
  let offset = 1250;
  //   console.log(offset);
  document.getElementById("spin-list")!.style.left = -offset + "rem";
  document.getElementById("spin-list")!.style.transitionDuration = "9s";

  setTimeout(() => {
    document.getElementById("spin-list")!.style.transitionDuration = "0s";
    // document.getElementById("spin-list")!.style.left = "0px";
    setTimeout(() => {
      document.getElementById("spin-list")!.style.transitionDuration = "9s";
    }, 90);
    audioWin.play();
  }, 9000);
}

init();

// add player
function addPlayer() {
  boxes.push(input.value);

  let box = document.createElement("li");
  box.innerHTML = input.value;
  let boxList = document.querySelector(".players")!;
  boxList.appendChild(box).classList.add("player");

  input.value = "";
}

// reset button
function reset() {
  spinBoxes.innerHTML = "";
  document.getElementById("spin-list")!.style.left = "0rem";
  document.getElementById("spin-list")!.style.transitionDuration = "0s";

  for (let i = 0; i < boxAmount; i++) {
    let randomPlayer = rand(0, boxes.length);
    let box = document.createElement("li");
    let nickname = document.createElement("span");
    nickname.innerHTML = boxes[randomPlayer];
    box.appendChild(nickname).classList.add("nickname");
    spinBoxes.appendChild(box).classList.add("spin-item");
  }
}

// list clear button
function clear() {
  document.querySelector(".players")!.innerHTML = "";
  boxes = [];
}
