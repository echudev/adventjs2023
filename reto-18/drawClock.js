function drawClock(time) {
  const response = [];
  const el = time.split("");
  const dic = {
    1: [
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
    ],
    2: [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
    ],
    3: [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
    ],
    4: [
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
    ],
    5: [
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
    ],
    6: [
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ],
    7: [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
    ],
    8: [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ],
    9: [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
    ],
    0: [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
    ],
    s: [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", "*", " "],
      [" ", " ", " "],
      [" ", "*", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    e: [[" "], [" "], [" "], [" "], [" "], [" "], [" "]],
  };

  for (let row = 0; row < 7; row++) {
    let newRow = dic[el[0]][row]
      .concat(dic["e"][row])
      .concat(dic[el[1]][row])
      .concat(dic["s"][row])
      .concat(dic[el[3]][row])
      .concat(dic["e"][row])
      .concat(dic[el[4]][row]);
    response.push(newRow);
  }

  return response;
}

console.log(drawClock("01:30"));
