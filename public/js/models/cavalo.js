class Cavalo extends Peca {
  constructor (scene, x, y, color, squareSize) {
    super(scene, x, y, 'cavalo', color, squareSize)

    this.on('drag', (gameObject, dragX, dragY) => {
      console.log('cavalo ' + color)
      this.x = dragX
      this.y = dragY
    })
  }
}