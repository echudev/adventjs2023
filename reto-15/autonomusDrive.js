function autonomousDrive(store, movements) {
  let x = -1;
  let y = -1;

  //busco la posición inicial
  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] === "!") {
        y = i;
        x = j;
      }
    }
  }

  //Reemplazo la posición inicial por un espacio vacío
  store[y] = store[y].replace("!", ".");

  //Función que valida los movimientos del robot
  function isValidMove(store, moveX, moveY) {
    return moveX === 0
      ? store[y + moveY] !== undefined && store[y + moveY][x] !== "*"
      : store[y][x + moveX] !== undefined && store[y][x + moveX] !== "*";
  }

  //Empiezo a mover el robot
  for (let movement of movements) {
    switch (movement) {
      case "R":
        if (isValidMove(store, 1, 0)) {
          x += 1;
        }
        break;
      case "L":
        if (isValidMove(store, -1, 0)) {
          x += -1;
        }
        break;
      case "U":
        if (isValidMove(store, 0, -1)) {
          y += -1;
        }
        break;
      case "D":
        if (isValidMove(store, 0, 1)) {
          y += 1;
        }
        break;
    }
  }

  //Reemplazo la posición final del robot en el store
  store[y] =
    store[y].substring(0, x) + "!" + store[y].substring(x + 1, store[y].length);

  return store;
}
