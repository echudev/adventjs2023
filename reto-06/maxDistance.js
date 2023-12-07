function maxDistance(movements) {
  let ni = movements.match(/[*]+/g)?.join("").length || 0;
  let right = movements.match(/[>]+/g)?.join("").length || 0;
  let left = movements.match(/[<]+/g)?.join("").length || 0;

  return right > left ? right + ni - left : left + ni - right;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
