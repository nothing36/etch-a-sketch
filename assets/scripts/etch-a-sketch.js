const boardLen = 16
const container = document.querySelector(".container")

// fill window with boxes on load
window.onload = (event) => {
  for (i = 0; i < (boardLen * boardLen); i++) {
    let etchBox = document.createElement("div")
    etchBox.style.cssText = "background-color: white; border: 1px solid black; width: 50px; height: 50px;"

    container.appendChild(etchBox)
  }
};