const btnStart = document.getElementById('btnStart')
const sky_blue = document.getElementById('sky_blue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const LAST_LEVEL = 10

class Game{
  constructor() {
    this.initialize()
    this.generateSecuence()
    setTimeout(this.nextLevel, 500)
  }

  initialize() {
    this.nextLevel = this.nextLevel.bind(this)
    this.chooseColor = this.chooseColor.bind(this)
    btnStart.classList.add('hide')
    this.level = 1
    this.colors = {
      sky_blue,
      violet,
      orange,
      green
    }
  }

  generateSecuence(nextLevel) {
    this.secuence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  nextLevel() {
    this.sublevel = 0
    this.glowSecuence()
    this.addClickEvents()
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

  castingColorToNum(color) {
    switch (color) {
      case 'sky_blue':
        return 0
      case 'violet':
        return 1
      case 'orange':
        return 2
      case 'green':
        return 3
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

  addClickEvents() {
    this.colors.sky_blue.addEventListener('click', this.chooseColor)
    this.colors.violet.addEventListener('click', this.chooseColor)
    this.colors.orange.addEventListener('click', this.chooseColor)
    this.colors.green.addEventListener('click', this.chooseColor)
  }

  removeClickEvents() {
    this.colors.sky_blue.removeEventListener('click', this.chooseColor)
    this.colors.violet.removeEventListener('click', this.chooseColor)
    this.colors.orange.removeEventListener('click', this.chooseColor)
    this.colors.green.removeEventListener('click', this.chooseColor)

  }

  chooseColor(ev) {
    const nameColor = ev.target.dataset.color
    const numColor = this.castingColorToNum(nameColor)
    this.glowColor(nameColor)

    if (numColor === this.secuence[this.sublevel]) {
      this.sublevel++

      if (this.sublevel === this.level) {
        this.level++
        this.removeClickEvents()

        if (this.level === (LAST_LEVEL + 1)){
          // HE WON
        } else {
          setTimeout(this.nextLevel, 700)
        }
      } else {
        // HE LOST
      }
    }
  }
}

function startGame() {
  window.game = new Game()
}