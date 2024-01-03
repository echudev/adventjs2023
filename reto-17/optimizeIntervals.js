function optimizeIntervals(intervals) {
  let response = [...intervals.sort((a, b) => a[0] - b[0])];

  for (let n = 0; n < response.length - 1; n++) {
    if (response[n][1] > response[n + 1][0]) {
      if (response[n][1] > response[n + 1][1]) {
        response.splice(n + 1, 1);
        n--;
      } else {
        response.splice(n + 2, 0, [response[n][0], response[n + 1][1]]);
        response.splice(n, 2);
        n--;
      }
    }
  }

  console.log(response);
  return response;
}

optimizeIntervals([
  [1, 1],
  [3, 5],
  [3, 4],
  [1, 2],
  [5, 6],
  [5, 5],
]); // [[1, 2], [3, 4], [5, 6]]

optimizeIntervals([
  [1, 15],
  [8, 12],
  [4, 7],
]); //[[1,15]]

optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]); // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
]); // [[1, 6], [8, 10]]
