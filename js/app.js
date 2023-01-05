let candies = ['Blue', 'Orange', 'Green', 'Yellow', 'Red', 'Purple']
let board = []
let row = 9
let columns = 9
let score = 0

window.onload = function() {
  startGame()
}

function randomCandy() {
  return candies[Math.floor(Math.random() * candies.length)]
}

function startGame() {
  for (let r = 0; r < rows; r++){
    let row = []
    for (let c = 0; c < columns; c++){
      let tile = document.createElement('img')
      tile.id = r.toString() + '-' + c.toString()
      tile.src = './images/' + randomCandy() + '.png'

      document.getElementById('board').append(tile)
      row.push(tile)
    }
    board.push(row)
  }
  console.log(board)
}