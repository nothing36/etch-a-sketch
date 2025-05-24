const boardLen = 100
const squareSize = "800px";
let isSquare = false;
let itemSize = 100 / boardLen
const container = document.querySelector(".container")

// fill window with boxes on load
window.onload = (event) => {
  for (i = 0; i < (boardLen * boardLen); i++) {
    let etchBox = document.createElement("div")
    etchBox.style.cssText = `box-sizing: border-box; background-color: white; border: 1px solid black; flex: 0 0 calc(${itemSize}%);`

    container.appendChild(etchBox)
  }
};

// toggle square or fill sketch board
function toggleShape() {
    if (!isSquare) {
        container.style.height = squareSize
        container.style.width = squareSize
        isSquare = true;
    } else {
        container.style.height = "100vh"
        container.style.width = "100vw"
        isSquare = false;
    }
}

// hover functionality
container.addEventListener("mouseover", function(event) {
    const hoverElement = event.target
    hoverElement.style.backgroundColor = "black";
})