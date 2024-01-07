function compile(code) {
  let count = 0;
  let pointer = null;
  let simbols = code.split("");

  const calculator = (simbol) => {
    switch (simbol) {
      case "+":
        count += 1;
        break;
      case "*":
        count *= 2;
        break;
      case "-":
        count -= 1;
        break;
    }
  };

  for (let i = 0; i < simbols.length; i++) {
    calculator(simbols[i]);
    if (simbols[i] === "%") {
      pointer = i;
    }
    if (simbols[i] === "<" && pointer !== null) {
      simbols.splice(i, 1);
      i = pointer;
    }
    if (simbols[i] === "¿" && count <= 0) {
      i = simbols.indexOf("?");
    }
  }

  return count;
}

console.log(compile("++*-")); // 3
// (1 + 1) * 2 - 1 = 3

console.log(compile("++%++<")); // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

console.log(compile("++<--")); // 0
// 1 + 1 - 1 - 1 = 0

console.log(compile("++¿+?")); // 3
// 1 + 1 + 1 = 3

console.log(compile("--¿+++?")); // -2
// - 1 - 1 = -2
