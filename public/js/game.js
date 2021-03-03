const config = {
  width: 1280,
  height: 720,
  type: Phaser.AUTO,
  audio: {
    disableWebAudio: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      fps: 60,
      gravity: {y : 0},
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

var pieces = [
  'bispo-branco',
  'bispo-preto',
  'cavalo-branco',
  'cavalo-preto',
  'peao-branco',
  'peao-preto',
  'rainha-branco',
  'rainha-preto',
  'rei-branco',
  'rei-preto',
  'torre-branco',
  'torre-preto'
]

/*
  bispo branco 0
  bispo preto 1
  cavalo branco 2
  cavalo preto 3
  peao branco 4
  peao preto 5
  rainha branco 6
  rainha preto 7
  rei branco 8
  rei preto 9
  torre branco 10
  torre preto 11
  casa vazia 12
*/

var initialPositions = [
  [11, 3, 1, 7, 9, 1, 3, 11],
  [5, 5, 5, 5, 5, 5, 5, 5],
  [12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12],
  [12, 12, 12, 12, 12, 12, 12, 12],
  [4, 4, 4, 4, 4, 4, 4, 4],
  [10, 2, 0, 6, 8, 0, 2, 10]
]

function preload () {
  pieces.forEach((piece, index) => {
    this.load.image(piece, `sprites/pieces/${piece}.png`)
  })
  this.load.audio('movendo', 'sons/mexendo.mp3')
}

function create () {
  var squareSize = 80
  var movendo = this.sound.add('movendo')
  var whitehouses = this.add.graphics({ fillStyle: { color: 0xFFFFFF } })
  var blackhouses = this.add.graphics({ fillStyle: { color: 22222222 } })
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      var rect = new Phaser.Geom.Rectangle(squareSize * j, squareSize * i, squareSize, squareSize)
      if((i + j) % 2 != 0) {
        blackhouses.fillRectShape(rect)
      } else {
        whitehouses.fillRectShape(rect)
      }
      if(initialPositions[i][j] != 12) {
        spawn(this, initialPositions[i][j], squareSize, i, j)
      }
    }
  }
  this.input.on('dragend', () => {
    movendo.play()
  })
}

function handle() {
  console.log('shape')
}