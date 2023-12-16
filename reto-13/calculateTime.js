function calculateTime(deliveries) {
  //Tiempo limite calculado en segundos
  const timeLimit = 25200;

  //Calculo el tiempo que lleva hacer todas las entregas en segundos
  let deliveryTime = deliveries.reduce((totalSeconds, delivery) => {
    delivery.split(":").map((time, i) => {
      i === 0
        ? (totalSeconds += parseInt(time) * 60 * 60)
        : i === 1
        ? (totalSeconds += parseInt(time) * 60)
        : i === 2
        ? (totalSeconds += parseInt(time))
        : null;
    });
    return totalSeconds;
  }, 0);

  let result = deliveryTime - timeLimit;
  let absResult = Math.abs(result);

  //Doy formato de salida
  let horas = Math.floor(absResult / 3600);
  let minutos = Math.floor((absResult % 3600) / 60);
  let segundos = absResult % 60;

  let response = [horas, minutos, segundos]
    .map((time) => time.toString().padStart(2, 0))
    .join(":");

  return result < 0
    ? (response = response.padStart(response.length + 1, "-"))
    : response;
}

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]));
// '-02:20:00'

console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"]));
// '00:30:00'

console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]));
// '-05:29:00'

console.log(calculateTime(["01:01:01", "03:59:59", "01:01:01", "00:57:58"]));
//"-00:00:01"
