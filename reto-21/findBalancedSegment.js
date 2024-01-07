function findBalancedSegment(message) {
  let response = [0, 0];
  const mess = message.map((el) => (el === 0 ? -1 : 1));
  for (let i = 0; i < mess.length - 1; i++) {
    let acum = mess[i];
    for (let j = i + 1; j < mess.length; j++) {
      acum += mess[j];
      if (acum === 0) {
        if (j - i > response[1] - response[0]) {
          response[0] = i;
          response[1] = j;
        }
      }
    }
  }
  return response[1] - response[0] === 0 ? [] : response;
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
//                                     |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

console.log(findBalancedSegment([1, 1, 0]));
//                                  |__|
//                                 [1, 2]

console.log(findBalancedSegment([1, 1, 1]));
// no hay segmentos equilibrados: []
