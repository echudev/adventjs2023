function createChristmasTree(ornaments, height) {
  let cantidad_de_adornos = 0;
  const tira_de_adornos = [];
  let tree = "";

  // calculo la cantidad de adornos que voy a necesitar
  for (let adorno = 0; adorno <= height; adorno++) {
    cantidad_de_adornos += adorno;
  }

  //armo un array con todos los adornos que voy a usar
  for (let i = 0; i < cantidad_de_adornos; i++) {
    let indice_adorno = i % ornaments.length;
    tira_de_adornos.push(ornaments[indice_adorno]);
  }

  //armo el arbolito
  for (let n = 1; n <= height; n++) {
    tree = tree.concat(" ".repeat(height - n));
    tree = tree.concat(tira_de_adornos.splice(0, n).join(" "));
    tree = tree.concat("\n");
    if (n === height) {
      tree = tree.concat(" ".repeat(height - 1));
      tree = tree.concat("|");
      tree = tree.concat("\n");
    }
  }

  return tree;
}

console.log(createChristmasTree("x", 3));
