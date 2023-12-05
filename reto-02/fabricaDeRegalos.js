// Los regalos son cadenas de texto y los materiales son caracteres.
// Dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {
  return gifts
    .map((gift) => gift.split(""))
    .reduce((res, gift, index) => {
      gift.every((char) => materials.split("").includes(char))
        ? res.push(gift)
        : null;
      return res;
    }, [])
    .map((gift) => gift.join(""));
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

console.log(manufacture(gifts, materials)); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";
console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ["libro", "ps5"];
const materials3 = "psli";
console.log(manufacture(gifts3, materials3)); // []
