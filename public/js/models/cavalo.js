class Cavalo extends Peca {
  constructor (scene, x, y, color, squareSize) {
    var metadeSquareSize = squareSize / 2
    var positionX = (squareSize / 2) + (squareSize * x)
    var positionY = (squareSize / 2) + (squareSize * y)

    super(scene, positionX, positionY, `cavalo-${color}`, squareSize)

    this.on('drag', (gameObject, dragX, dragY) => {
      console.log('cavalo ' + color)
      this.x = dragX
      this.y = dragY
    })

    this.on('dragend', () => {
      this.x = (Math.floor(this.x / squareSize) * squareSize) + metadeSquareSize
      this.y = (Math.floor(this.y / squareSize) * squareSize) + metadeSquareSize
    })
  }
}