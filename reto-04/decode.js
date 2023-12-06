// Escribir una función que tome una cadena de texto y revierta los caracteres dentro
// Eliminando los paréntesis en el mensaje final.
// Pueden existir paréntesis anidados (hasta 2)

function decode(message) {
  const regex = /\(([^()]*)\)/g;

  // Función auxiliar para invertir una cadena
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  while (regex.test(message)) {
    message = message.replace(regex, (_, content) => reverseString(content));
  }

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
