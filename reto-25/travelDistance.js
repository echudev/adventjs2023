function travelDistance(map) {
  let road = ["S", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let road_positions = [];
  let distance = [0, 0];

  // creo una matriz a partir del parámetro map
  let matrix = map
    .split("\n")
    .map((lvl) => [...lvl.split("").filter((char) => char !== " ")]);

  // recorro la matriz buscando ubicaciones de santa y los niños para crear el reocorrido
  road.map((stops) => {
    for (let n = 0; n <= matrix.length - 1; n++) {
      if (matrix[n].indexOf(stops) !== -1) {
        road_positions.push([n, matrix[n].indexOf(stops)]);
      }
    }
  });

  // con el recorrido creado en orden (primero santa y luego niños del 1 al 9) calculo distancia entre cada punto
  for (let n = 0; n < road_positions.length - 1; n++) {
    distance[0] += Math.abs(road_positions[n + 1][0] - road_positions[n][0]);
    distance[1] += Math.abs(road_positions[n + 1][1] - road_positions[n][1]);
  }

  return distance[0] + distance[1];
}

// console.log(
//   travelDistance(
//     `.....1....
//         ..S.......
//         ..........
//         ....3.....
//         ......2...`
//   )
// ); // 12

// console.log(
//   travelDistance(
//     `.....1....
//         ..S.......
//         ..........
//         ....3.....
//         ......2...`
//   )
// ); // 12

// console.log(
//   travelDistance(
//     `.....2....
//         ..S.......
//         ..........
//         ....1.....
//         ......3...`
//   )
// ); // 13

// const map = `.....1....
//  ..S.......
//  ..........
//  ....3.....
//  ......2...`;

// const result = travelDistance(map);
// console.log(result); // -> 12 km

// const result2 = travelDistance(`..S.1...`);
// console.log(result2); // -> 2
