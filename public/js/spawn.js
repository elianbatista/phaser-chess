function spawn(scene, piece, squareSize, i, j) {
  switch (piece) {
    case 0:
      new Bispo(
        scene,
        j,
        i,
        'branco', 
        squareSize
      )
      break
    case 1:
      new Bispo(
        scene,
        j,
        i,
        'preto', 
        squareSize
      )
      break
    case 2:
      new Cavalo(
        scene,
        j,
        i,
        'branco', 
        squareSize
      )
      break
    case 3:
      new Cavalo(
        scene,
        j,
        i,
        'preto', 
        squareSize
      )
      break
    case 4:
      new Peao(
        scene,
        j,
        i,
        'branco', 
        squareSize
      )
      break
    case 5:
      new Peao(
        scene,
        j,
        i,
        'preto', 
        squareSize
      )
      break
    case 6:
      new Rainha(
        scene,
        j,
        i,
        'branco', 
        squareSize
      )
      break
    case 7:
      new Rainha(
        scene,
        j,
        i,
        'preto', 
        squareSize
      )
      break
    case 8:
      new Rei(
        scene,
        j,
        i,
        'branco', 
        squareSize
      )
      break
    case 9:
      new Rei(
        scene,
        j,
        i,
        'preto', 
        squareSize
      )
      break
    case 10: 
      new Torre(
        scene,
        j,
        i,
        'branco', 
        squareSize
      )
      break
    case 11:
      new Torre(
        scene,
        j,
        i,
        'preto', 
        squareSize
      )
      break
  }
}