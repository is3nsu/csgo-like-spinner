"use strict";
let spinBoxes = document.querySelector(".spin-list");
const spinBtn = document.querySelector(".spin-btn");
const addBtn = document.querySelector(".add-btn");
const resetBtn = document.querySelector(".reset-btn");
const input = document.querySelector(".add-player");
const clearBtn = document.querySelector(".clear-btn");
let boxAmount = 100;
let boxes = [];
spinBtn === null || spinBtn === void 0 ? void 0 : spinBtn.addEventListener("click", spin);
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener("click", addPlayer);
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", reset);
clearBtn.addEventListener("click", clear);
function init() {
    spinBoxes.innerHTML = "";
    let initBets = ["player1", "player2"];
    for (let i = 0; i < boxAmount; i++) {
        let randomPlayer = rand(0, initBets.length);
        let box = document.createElement("li");
        let nickname = document.createElement("span");
        nickname.innerHTML = initBets[randomPlayer];
        box.appendChild(nickname).classList.add("nickname");
        spinBoxes.appendChild(box).classList.add("spin-item");
    }
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function spin() {
    const audioOp = new Audio("/sounds/opening.mp3");
    const audioWin = new Audio("/sounds/win.mp3");
    audioOp.play();
    let offset = 1250;
    document.getElementById("spin-list").style.left = -offset + "rem";
    document.getElementById("spin-list").style.transitionDuration = "9s";
    setTimeout(() => {
        document.getElementById("spin-list").style.transitionDuration = "0s";
        setTimeout(() => {
            document.getElementById("spin-list").style.transitionDuration = "9s";
        }, 90);
        audioWin.play();
    }, 9000);
}
init();
function addPlayer() {
    boxes.push(input.value);
    let box = document.createElement("li");
    box.innerHTML = input.value;
    let boxList = document.querySelector(".players");
    boxList.appendChild(box).classList.add("player");
    input.value = "";
}
function reset() {
    spinBoxes.innerHTML = "";
    document.getElementById("spin-list").style.left = "0rem";
    document.getElementById("spin-list").style.transitionDuration = "0s";
    for (let i = 0; i < boxAmount; i++) {
        let randomPlayer = rand(0, boxes.length);
        let box = document.createElement("li");
        let nickname = document.createElement("span");
        nickname.innerHTML = boxes[randomPlayer];
        box.appendChild(nickname).classList.add("nickname");
        spinBoxes.appendChild(box).classList.add("spin-item");
    }
}
function clear() {
    document.querySelector(".players").innerHTML = "";
    boxes = [];
}
