const sumTwoDimensionalArray = (arr = "") => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }

  return `sum of two dimensional array is ${sum}`;
};

console.log(
  sumTwoDimensionalArray([
    [1, 2, 6, 7],
    [5, 6],
    [10, 40],
  ])
);
