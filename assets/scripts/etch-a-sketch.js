const boardLen = 100
const squareSize = "calc(100vh - 40px)";
let isSquare = false;
let itemSize = 100 / boardLen
let fillColor = "red"
const container = document.querySelector(".container")
const toolbar = document.querySelector(".toolbar");

// fill window with boxes on load
window.onload = (event) => {
  buildGrid()
};

// build grid function
function buildGrid() {
  container.innerHTML = '';   // empty the grid container

  // fill the grid
  for (i = 0; i < (boardLen * boardLen); i++) {
    let etchBox = document.createElement("div")
    etchBox.style.cssText = `box-sizing: border-box; background-color: white; border: 1px solid black; flex: 0 0 calc(${itemSize}%);`

    container.appendChild(etchBox)
  }
}

// toggle square or fill sketch board
function toggleShape() {
    if (!isSquare) {
        container.style.height = squareSize
        container.style.width = squareSize
        isSquare = true;
    } else {
        container.style.height = "calc(100vh - 40px)"
        container.style.width = "100vw"
        isSquare = false;
    }
}

// hover functionality
container.addEventListener("mouseover", function(event) {
    const hoverElement = event.target
    hoverElement.style.backgroundColor = fillColor;
})

// toolbar functionality
toolbar.addEventListener('click', function(event) {
  const btnClicked = event.target;

  if (btnClicked) {
    switch (btnClicked.id) {
      case "btnNewGrid":
        buildGrid()
        break
      case "btnShape":
        toggleShape()
        break
      case "btnRainbow":
        break
      case "btnRed":
        fillColor = "red"
        break
      case "btnGreen":
        fillColor = "green"
        break
      case "btnBlue":
        fillColor = "blue"
        break
    }
  }
})