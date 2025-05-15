const container = document.querySelector("#container");
const board = document.querySelector("#board");

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createBoard(gridSize) {
    let boxWidth = 20;
    let boardWidth = gridSize * boxWidth;
    let totalBoxes = gridSize * gridSize; // creates 3 x 3 template based on input from user
    board.style.width = boardWidth + "px";

    for (i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        box.style.width = "20px";
        box.style.height = "20px";
        //box.style.border = "solid red 1px"
        box.style.backgroundColor = "white";
        box.style.boxSizing = "border-box";
        board.appendChild(box);
        box.addEventListener("mouseover", function () {
            box.style.backgroundColor = getRandomRGBColor();
        })
    }

}

let gridSize = 16;
createBoard(gridSize);
//sets the initial size of the board

const setGridSize = document.querySelector('#setGridSize')
setGridSize.addEventListener("click", function () {
    board.innerHTML = "";
    gridSize = prompt("Please enter the desired grid size");

    while (gridSize <= 0 || gridSize > 100 || isNaN(gridSize)) {
        gridSize = prompt("Invalid. Please enter a number between 1-100.")
    }
    createBoard(gridSize);

}); //accepts grid size input









