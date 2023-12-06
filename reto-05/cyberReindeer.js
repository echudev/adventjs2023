function cyberReindeer(road, time) {
  let newRoad = road;
  let position = road.search("S");
  let resultado = [];
  for (let n = 1; n <= time; n++) {
    resultado.push(newRoad);
    if (n == 5) {
      newRoad = newRoad.replace(/\|/g, "*");
    }
    let isOpen = newRoad[position + 1] == "*";
    let isEmpty = newRoad[position + 1] == ".";
    if (isEmpty || isOpen) {
      if (newRoad[position + 1] == ".") {
        newRoad =
          newRoad.substring(0, position) +
          ".S" +
          newRoad.substring(position + 2, newRoad.length);
        if (road[position] == "|") {
          newRoad =
            newRoad.substring(0, position) +
            "*S" +
            newRoad.substring(position + 2, newRoad.length);
        }
      }
      if (isOpen) {
        newRoad =
          newRoad.substring(0, position) +
          ".S" +
          newRoad.substring(position + 2, newRoad.length);
        if (road[position] == "|") {
          newRoad =
            newRoad.substring(0, position) +
            "*S" +
            newRoad.substring(position + 2, newRoad.length);
        }
      }
      position + 1 < newRoad.length ? (position = position + 1) : null;
    }
  }
  return resultado;
}

const road = "S..|...||..";
const time = 14; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);
