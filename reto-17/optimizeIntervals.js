function optimizeIntervals(intervals) {
  let response = [...intervals.sort((a, b) => a[0] - b[0])];

  for (let n = 0; n < response.length - 1; n++) {
    if (response[n][1] >= response[n + 1][0]) {
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

  return response;
}
