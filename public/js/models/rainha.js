class Rainha extends Peca {
  constructor (scene, x, y, color, squareSize) {
    super(scene, x, y, 'rainha', color, squareSize)

    this.on('drag', (gameObject, dragX, dragY) => {
      console.log('rainha ' + color)
      this.x = dragX
      this.y = dragY
    })
  }
}