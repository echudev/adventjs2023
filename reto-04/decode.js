// Escribir una función que tome una cadena de texto y revierta los caracteres dentro
// Eliminando los paréntesis en el mensaje final.
// Pueden existir paréntesis anidados (hasta 2)

function decode(message) {
  // el regex busca coincidencias de patrones que comienzan con "("
  // seguido de cualquier cantidad de caracteres que no sean paréntesis,
  // y luego termina con ")"
  const regex = /\(([^()]*)\)/g;

  // Función auxiliar para invertir una cadena
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  //el método .test devuelve true si encuentra coincidencias o false si no las hay
  while (regex.test(message)) {
    message = message.replace(regex, (_, content) => reverseString(content));
  }
  // El método .replace recibe 2 parámetros, el patrón a reemplazar y el reemplazo
  // el patrón puede ser una cadena o un objeto con un método (generalmente una expresión regular).
  // el reemplazo puede ser una cadena o una función que será invocada para cada coincidencia y su retorno será usado como texto de reemplazo.

  return message;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

const d = decode("no hay parentesis");
console.log(d); // no hay parentesis
