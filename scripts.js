const btnStart = document.getElementById('btn-start')
const sky_blue = document.getElementById('sky-blue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')

class Game{
  constructor() {
    this.initialize()
  }
  ininitialize() {
    btnStart.classList.add('hide')
  }
}

function startGame() {
  let game = new Game()
}