function checkIsValidCopy(original, copy) {
  const checkChar = (originalChar, copyChar) => {
    if (originalChar !== copyChar) {
      if (copyChar?.toUpperCase() === originalChar) {
        return true;
      }
      let degIndex =
        ["#", "+", ":", ".", " "].indexOf(originalChar) !== -1
          ? ["#", "+", ":", ".", " "].indexOf(originalChar)
          : 0;
      return ["#", "+", ":", ".", " "]
        .slice(degIndex, 5)
        .some((degChar) => degChar === copyChar);
    }
    return true;
  };

  return original.split("").every((_, i) => checkChar(original[i], copy[i]));
}

console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#")); // true
console.log(checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#")); // false (por la p inicial)
console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s")); // true
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s")); // false (hay un # donde no debería)
console.log(checkIsValidCopy("s+#:.#c:. s", "s#+:.#c:. s")); // false
