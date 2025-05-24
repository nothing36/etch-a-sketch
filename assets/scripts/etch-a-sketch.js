const boardLen = 100
const squareSize = "calc(100vh - 40px)";
let isSquare = false;
let itemSize = 100 / boardLen
let fillColor = "red"
let rainbow = false
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

// create random colors for rainbow effect
function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`
}

// hover functionality
container.addEventListener("mouseover", function(event) {
    const hoverElement = event.target

    // if rainbow effect is on, change color
    if (rainbow) {
      fillColor = getRandomColor()
    }
    
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
        rainbow = true
        break
      case "btnRed":
        fillColor = "red"
        rainbow = false
        break
      case "btnGreen":
        fillColor = "green"
        rainbow = false
        break
      case "btnBlue":
        fillColor = "blue"
        rainbow = false
        break
    }
  }
})