function distributeGifts(weights) {
  const response = [];
  weights.map((row, i) => (response[i] = [...row]));
  for (let row = 0; row < weights.length; row++) {
    for (let col = 0; col < weights[row].length; col++) {
      let top = weights[row - 1] ? weights[row - 1][col] : null;
      let bottom = weights[row + 1] ? weights[row + 1][col] : null;
      let left = weights[row][col - 1] || null;
      let right = weights[row][col + 1] || null;
      let val = weights[row][col];
      let div = [top, bottom, left, right, val].filter(
        (el) => el !== null
      ).length;

      response[row][col] = Math.round(
        (top + bottom + right + left + val) / div
      );
    }
  }
  return response;
}
