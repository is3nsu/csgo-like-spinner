"use strict";
const spinBoxes = document.querySelector(".spin-list");
const spinBoxesId = document.getElementById("spin-list");
const spinBtn = document.querySelector(".spin-btn");
const addBtn = document.querySelector(".add-btn");
const resetBtn = document.querySelector(".reset-btn");
const input = document.querySelector(".add-player");
const clearBtn = document.querySelector(".clear-btn");
const audioOp = new Audio("./sounds/opening.mp3");
const audioWin = new Audio("./sounds/win.mp3");
const boxAmount = 55;
let boxes = [];
const mediaAudio = [audioOp, audioWin];
spinBtn === null || spinBtn === void 0 ? void 0 : spinBtn.addEventListener("click", spin);
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", addPlayer);
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", reset);
clearBtn.addEventListener("click", clear);
function init() {
    spinBoxes.innerHTML = "";
    const initBets = [];
    for (let i = 0; i < boxAmount; i++) {
        const randomPlayer = rand(0, initBets.length);
        const box = document.createElement("li");
        const nickname = document.createElement("span");
        nickname.innerHTML = initBets[randomPlayer];
        box.appendChild(nickname).classList.add("nickname");
        spinBoxes.appendChild(box).classList.add("spin-item");
    }
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
init();
function spin() {
    reset();
    audioOp.play();
    const offset = 1250;
    setTimeout(() => {
        spinBoxesId.style.left = -offset + "rem";
        spinBoxesId.style.transitionDuration = "9s";
    }, 0);
    setTimeout(() => {
        spinBoxesId.style.transitionDuration = "0s";
        audioWin.play();
    }, 9000);
}
function addPlayer() {
    boxes.push(input.value);
    const box = document.createElement("li");
    box.innerHTML = input.value;
    const boxList = document.querySelector(".players");
    boxList.appendChild(box).classList.add("player");
    input.value = "";
    reset();
}
function reset() {
    spinBoxes.innerHTML = "";
    spinBoxesId.style.left = "0rem";
    spinBoxesId.style.transitionDuration = "0s";
    for (let i = 0; i < boxAmount; i++) {
        const randomPlayer = rand(0, boxes.length);
        const box = document.createElement("li");
        const nickname = document.createElement("span");
        nickname.innerHTML = boxes[randomPlayer];
        box.appendChild(nickname).classList.add("nickname");
        spinBoxes.appendChild(box).classList.add("spin-item");
    }
}
function clear() {
    document.querySelector(".players").innerHTML = "";
    boxes = [];
}
