let candies = ['Blue', 'Orange', 'Green', 'Yellow', 'Red', 'Purple']
let board = []
let rows = 9
let columns = 9
let score = 0

let currTile
let otherTile

window.onload = function() {
  startGame()
}

function randomCandy() {
  return candies[Math.floor(Math.random() * candies.length)]; //0 - 5.99
}

function startGame() {
  for (let r = 0; r < rows; r++) {
      let row = [];
      for (let c = 0; c < columns; c++) {
          // <img id="0-0" src="./images/Red.png">
          let tile = document.createElement("img");
          tile.id = r.toString() + "-" + c.toString();
          tile.src = './images/' + randomCandy() + ".png";

          tile.addEventListener('dragstart', dragStart)
          tile.addEventListener('dragover', dragOver)
          tile.addEventListener('dragenter', dragEnter)
          tile.addEventListener('dragleave', dragLeave)
          tile.addEventListener('dragend', dragEnd)
          tile.addEventListener('drop', dragDrop)

      document.getElementById('board').append(tile)
      row.push(tile)
    }
    board.push(row)
  }
  console.log(board)
}

function dragStart() {

}