const findGCD = (number1 = 0, number2 = 0) => {
  const max = Math.max(number1, number2);
  let factor = max;
  let gcd;

  while (factor > 0) {
    // console.log(factor);
    if (number1 % factor === 0 && number2 % factor === 0) {
      gcd = factor;
      return `GCD of ${number1} and ${number2} is ${gcd}`;
    }
    factor--;
  }
};

console.log(findGCD(5, 6));
