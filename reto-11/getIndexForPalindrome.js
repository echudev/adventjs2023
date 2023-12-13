function getIndexsForPalindrome(word) {
  if (word === word.split("").reverse().join("")) {
    return [];
  }

  for (let i = 0; i < word.length - 1; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const newArr = word.split("");
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      const straigth = newArr.join("");
      const reversed = newArr.reverse().join("");
      if (straigth === reversed) {
        return [i, j];
      }
    }
  }
  return null;
}

console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("abac")); // null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
