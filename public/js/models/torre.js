class Torre extends Peca {
  constructor (scene, x, y, color, squareSize) {
    super(scene, x, y, 'torre', color, squareSize)

    this.on('drag', (gameObject, dragX, dragY) => {
      console.log('torre ' + color)
      this.x = dragX
      this.y = dragY
    })
  }
}