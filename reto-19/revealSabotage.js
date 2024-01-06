function revealSabotage(store) {
  for (let l = 0; l < store.length; l++) {
    for (let i = 0; i < store[l].length; i++) {
      if (store[l][i] !== "*") {
        let count = 0;
        store[l - 1] && store[l - 1][i - 1] === "*" && count++;
        store[l - 1] && store[l - 1][i] === "*" && count++;
        store[l - 1] && store[l - 1][i + 1] === "*" && count++;
        store[l] && store[l][i - 1] === "*" && count++;
        store[l] && store[l][i + 1] === "*" && count++;
        store[l + 1] && store[l + 1][i - 1] === "*" && count++;
        store[l + 1] && store[l + 1][i] === "*" && count++;
        store[l + 1] && store[l + 1][i + 1] === "*" && count++;
        store[l][i] = count === 0 ? " " : String(count);
      }
    }
  }
  return store;
}

const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(store));
/* Debería mostrar:
  [
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' ']
  ]
  */
