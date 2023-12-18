function maxGifts(houses) {
  if (houses.length === 0) {
    return 0;
  }

  if (houses.length === 1) {
    return houses[0];
  }

  let incl = houses[0];
  let excl = 0;

  for (let i = 1; i < houses.length; i++) {
    // Guardar el valor anterior de incl
    let temp = incl;

    // La nueva incl es el máximo entre la suma excluyendo el elemento anterior y sumando el elemento actual
    incl = Math.max(excl + houses[i], incl);

    // La nueva excl es el valor anterior de incl
    excl = temp;
  }

  console.log(Math.max(incl, excl));

  return Math.max(incl, excl);
}

maxGifts([2, 4, 2]); // 4 (4)
maxGifts([5, 1, 1, 5]); // 10(5 + 5);
maxGifts([4, 1, 1, 4, 2, 1]); // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]); // 103 (3 + 100)
