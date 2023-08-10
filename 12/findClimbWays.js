const findClimbWays = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let numBefore = 0;
  let numNow = 1;
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    sum = numNow + numBefore;
    numBefore = numNow;
    numNow = sum;
  }

  return sum;
};

console.log(findClimbWays(7));
