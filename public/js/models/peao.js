class Peao extends Peca {
  constructor (scene, x, y, color, squareSize) {
    super(scene, x, y, 'peao', color, squareSize)

    this.on('drag', (gameObject, dragX, dragY) => {
      console.log('peao ' + color)
      this.x = dragX
      this.y = dragY
    })
  }
}