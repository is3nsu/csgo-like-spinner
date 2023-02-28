const spinBoxes: HTMLUListElement = document.querySelector(".spin-list")!;
const spinBoxesId: HTMLElement = document.getElementById("spin-list")!;
const spinBtn: HTMLButtonElement = document.querySelector(".spin-btn")!;
const addBtn: HTMLButtonElement = document.querySelector(".add-btn")!;
const resetBtn: HTMLButtonElement = document.querySelector(".reset-btn")!;
const input: HTMLInputElement = document.querySelector(".add-player")!;
const clearBtn: HTMLButtonElement = document.querySelector(".clear-btn")!;

const audioOp: HTMLAudioElement = new Audio("./sounds/opening.mp3");
const audioWin: HTMLAudioElement = new Audio("./sounds/win.mp3");

const boxAmount: number = 155;
let boxes: string[] = [];
const mediaAudio: HTMLAudioElement[] = [audioOp, audioWin];

spinBtn?.addEventListener("click", spin);
addBtn?.addEventListener("click", addPlayer);
resetBtn?.addEventListener("click", reset);
clearBtn.addEventListener("click", clear);

// stop playing if reset
// function mediaStop() {
//   for (let i = 0; i < mediaAudio.length; i++) {
//     mediaAudio[i].pause();
//     mediaAudio[i].currentTime = 0;
//     setTimeout(() => {
//       mediaAudio[i].pause();
//       mediaAudio[i].currentTime = 0;
//     }, 9001);
//   }
// }

// website initialize boxes with random position
function init() {
  spinBoxes.innerHTML = "";
  const initBets: any[] = [];
  for (let i = 0; i < boxAmount; i++) {
    const randomPlayer = rand(0, initBets.length);
    const box: HTMLElement = document.createElement("li");
    const nickname: HTMLElement = document.createElement("span");
    nickname.innerHTML = initBets[randomPlayer];
    box.appendChild(nickname).classList.add("nickname");
    spinBoxes.appendChild(box).classList.add("spin-item");
  }
}

// random position
function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

init();

// spin button
function spin() {
  reset();
  audioOp.play();
  const offset: number = 1250;
  setTimeout(() => {
    spinBoxesId.style.left = -offset + "rem";
    spinBoxesId.style.transitionDuration = "9s";
  }, 0);
  setTimeout(() => {
    spinBoxesId.style.transitionDuration = "0s";
    audioWin.play();
  }, 9000);
}

// add player
function addPlayer() {
  boxes.push(input.value);
  const box: HTMLElement = document.createElement("li");
  box.innerHTML = input.value;
  const boxList: HTMLElement = document.querySelector(".players")!;
  boxList.appendChild(box).classList.add("player");
  input.value = "";
  reset();
}

// reset button
function reset() {
  // mediaStop();
  spinBoxes.innerHTML = "";
  spinBoxesId.style.left = "0rem";
  spinBoxesId.style.transitionDuration = "0s";
  for (let i = 0; i < boxAmount; i++) {
    const randomPlayer = rand(0, boxes.length);
    const box: HTMLElement = document.createElement("li");
    const nickname: HTMLElement = document.createElement("span");
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
