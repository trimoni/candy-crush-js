let candies = ['Blue', 'Orange', 'Green', 'Yellow', 'Red', 'Purple']
let board = []
let row = 9
let columns = 9
let score = 0

window.onload = function() {
  startGame()
}



function startGame() {
  for (let r = 0; r < rows; r++){
    let row = []
    for (let c = 0; c < columns; c++){
      let tile = document.createElement('img')
      tile.id = r.toString() + '-' + c.toString()
      tile.src = './images/' + randomCandy() + '.png'
    }
  }
}