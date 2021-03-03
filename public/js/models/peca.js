class Peca extends Phaser.GameObjects.Sprite {
  constructor (scene, positionX, positionY, name, squareSize) {
    super(scene, positionX, positionY, name)
    scene.add.existing(this)
    this.displayWidth = squareSize
    this.scaleY = this.scaleX
    this.setInteractive({ cursor: 'pointer' })
    scene.input.setDraggable(this)
  }
}