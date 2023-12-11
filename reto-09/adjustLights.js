function adjustLights(lights) {
  return lights.reverse().reduce((cont, light, i, arr) => {
    if (arr[i + 1]) {
      if (light === arr[i + 1]) {
        arr[i + 1] == "🟢" ? (arr[i + 1] = "🔴") : (arr[i + 1] = "🟢");
        return cont + 1;
      }
    }
    return cont;
  }, 0);
}
