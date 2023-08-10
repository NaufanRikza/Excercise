const findSingleNumber = (arr = []) => {
  if (arr.length === 1) {
    return arr.join("");
  }

  const max = Math.max(...arr);
  let singleNumber = [];
  for (let num = 0; num <= max; num++) {
    if (arr.findIndex((number) => number === num) === -1) {
      continue;
    }
    let find = arr.filter((number) => number === num);
    if (find.length === 1) {
      singleNumber.push(find[0]);
    }
  }
  return singleNumber.join("");
};

console.log("Single Number => ", findSingleNumber([5, 1, 2, 1, 2, 6, 7]));
console.log("Single Number => ", findSingleNumber([2, 2, 1]));
console.log("Single Number => ", findSingleNumber([1]));
