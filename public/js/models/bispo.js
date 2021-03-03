class Bispo extends Peca {
  constructor (scene, x, y, color, squareSize) {
    super(scene, x, y, 'bispo', color, squareSize)

    this.on('drag', (gameObject, dragX, dragY) => {
      console.log('bispo ' + color)
      this.x = dragX
      this.y = dragY
    })
  }
}