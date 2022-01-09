const grid = document.querySelector(".grid");
//creates a grid in the .grid div
function createGrid(cellsBySide) {
  let widthAndHeight = 500 / cellsBySide;
  for (let i = 0; i < cellsBySide * cellsBySide; i++) {
    const cell = document.createElement("div");
    grid.appendChild(cell);
    cell.classList.add("gridCell");
    cell.style.width = `${widthAndHeight}px`;
    cell.style.height = `${widthAndHeight}px`;
  }
  addColoring();
}
createGrid(16);
//makes drawing efect
function addColoring() {
  const cells = document.querySelectorAll(".gridCell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.classList.add("hovered");
    });
  });
}
//clears the grid and creates new with the prompted size
function resetAndCreateNewGrid() {
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", function removeGrid() {
    const userInput = prompt("How many cells per side?");
    if (userInput > 100) {
      alert("Max. 100 cells by side!");
    } else {
      const cellsBySide = userInput;
      const cells = document.querySelectorAll(".gridCell");
      cells.forEach((cell) => {
        cell.remove();
      });
      createGrid(cellsBySide);
    }
  });
}
resetAndCreateNewGrid();
