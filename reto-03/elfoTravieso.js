// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada
// La modificada puede incluir un paso extra o faltar un paso.
// Escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación.
// Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

function findNaughtyStep(original, modified) {
  if (original.length > modified.length) {
    for (let n = 0; n < modified.length; n++) {
      if (original[n] !== modified[n]) {
        return original[n];
      }
    }
  }
  if (original.length < modified.length) {
    for (let n = 0; n < modified.length; n++) {
      if (original[n] !== modified[n]) {
        return modified[n];
      }
    }
  }
  return "";
}

const original = "abcd";
const modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'

const original2 = "stepfor";
const modified2 = "stepor";
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = "abcde";
const modified3 = "abcde";
console.log(findNaughtyStep(original3, modified3)); // ''
