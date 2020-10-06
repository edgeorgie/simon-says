const btnStart = document.getElementById('btnStart')
const sky_blue = document.getElementById('sky-blue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')

class Game{
  constructor() {
    this.initialize()
    this.generateSecuence()
    this.nextLevel()
  }

  initialize() {
    btnStart.classList.add('hide')
    this.level = 1
    this.colors = {
      sky_blue,
      violet,
      orange,
      green
    }
  }

  generateSecuence() {
    this.secuence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  nextLevel() {
    this.glowSecuence()
  }

  castingNumToColor(num) {
    switch (num) {
      case 0:
        return 'sky_blue'
      case 1:
        return 'violet'
      case 2:
        return 'orange'
      case 3:
        return 'green'
    }
  }

  glowSecuence() {
    for (let i = 0; i < this.level; i++){
      let color = this.castingNumToColor(this.secuence[i])
      setTimeout(() => this.glowColor(color), 1000 * i)
    }
  }

  glowColor(color) {
    this.colors[color].classList.add('light')
    setTimeout(() => this.offColor(color), 350)
  }

  offColor(color) {
    this.colors[color].classList.remove('light')
  }
}

function startGame() {
  window.game = new Game()
}