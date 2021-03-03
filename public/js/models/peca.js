class Peca extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y, tipo, color, squareSize) {
    var metadeSquareSize = squareSize / 2
    var positionX = metadeSquareSize + (squareSize * x)
    var positionY = metadeSquareSize + (squareSize * y)

    super(scene, positionX, positionY, `${tipo}-${color}`)

    this.squareSize = squareSize
    this.metadeSquareSize = metadeSquareSize
    this.tipo = tipo
    this.color = color
    this.casaX = x
    this.casaY = y

    scene.add.existing(this)
    this.displayWidth = squareSize
    this.scaleY = this.scaleX
    this.setInteractive({ cursor: 'pointer' })
    scene.input.setDraggable(this)

    this.on('dragend', () => {
      var casaNovaX = Math.floor(this.x / squareSize)
      var casaNovaY = Math.floor(this.y / squareSize)
      if (initialPositions[casaNovaY][casaNovaX] == 12) {
        this.updatePosition(casaNovaX, casaNovaY)
      } else {
        if (color == 'preto') {
          if (
            initialPositions[casaNovaY][casaNovaX] == 1 ||
            initialPositions[casaNovaY][casaNovaX] == 3 ||
            initialPositions[casaNovaY][casaNovaX] == 5 ||
            initialPositions[casaNovaY][casaNovaX] == 7 ||
            initialPositions[casaNovaY][casaNovaX] == 9 ||
            initialPositions[casaNovaY][casaNovaX] == 11
          ) {
            this.resetPosition()
          } else {
            //TODO comer a peça
            this.updatePosition(casaNovaX, casaNovaY)
          }
        } else if (color == 'branco') {
          if (
            initialPositions[casaNovaY][casaNovaX] == 0 ||
            initialPositions[casaNovaY][casaNovaX] == 2 ||
            initialPositions[casaNovaY][casaNovaX] == 4 ||
            initialPositions[casaNovaY][casaNovaX] == 6 ||
            initialPositions[casaNovaY][casaNovaX] == 8 ||
            initialPositions[casaNovaY][casaNovaX] == 10
          ) {
            this.resetPosition()
          } else {
            //TODO comer a peça
            this.updatePosition(casaNovaX, casaNovaY)
          }
        }
      }
    })
  }

  resetPosition() {
    this.x = (this.casaX * this.squareSize) + this.metadeSquareSize
    this.y = (this.casaY * this.squareSize) + this.metadeSquareSize
  }

  updatePosition(casaNovaX, casaNovaY) {
    initialPositions[casaNovaY][casaNovaX] = initialPositions[this.casaY][this.casaX]
    initialPositions[this.casaY][this.casaX] = 12
    this.casaX = casaNovaX
    this.casaY = casaNovaY
    this.x = (this.casaX * this.squareSize) + this.metadeSquareSize
    this.y = (this.casaY * this.squareSize) + this.metadeSquareSize
  }
}