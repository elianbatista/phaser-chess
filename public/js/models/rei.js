class Rei extends Peca {
  constructor (scene, x, y, color, squareSize) {
    super(scene, x, y, 'rei', color, squareSize)

    this.on('drag', (gameObject, dragX, dragY) => {
      console.log('rei ' + color)
      this.x = dragX
      this.y = dragY
    })
  }
}