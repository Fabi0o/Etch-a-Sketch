const grid = document.querySelector(".grid");
function createGrid(cellsBySide) {
  let widthAndHeight = 500 / cellsBySide;
  for (let i = 0; i < cellsBySide * cellsBySide; i++) {
    const cell = document.createElement("div");
    grid.appendChild(cell);
    cell.classList.add("gridCell");
    cell.style.width = `${widthAndHeight}px`;
    cell.style.height = `${widthAndHeight}px`;
  }
}
createGrid(10);
