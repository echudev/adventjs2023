function getStaircasePaths(steps, maxJump) {
  if (steps === 0) return [[]];
  if (steps < 0) return null;

  let allPaths = [];

  for (let n = 1; n <= maxJump; n++) {
    let reminder = steps - n;
    let reminderPaths = getStaircasePaths(reminder, maxJump);

    if (reminderPaths !== null) {
      allPaths = allPaths.concat(reminderPaths.map((path) => [n, ...path]));
    }
  }

  return allPaths.length > 0 ? allPaths : null;
}

console.log(getStaircasePaths(2, 1)); //[ [ 1, 1 ] ]
console.log(getStaircasePaths(3, 3)); // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)); // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2));
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
