const findLCM = (number1, number2) => {
  const max = Math.max(number1, number2);
  const min = Math.min(number1, number2);
  let lcm = 0;
  let factor = 0;
  const multiples = [];
  do {
    factor++;
    let multiple1 = max * factor;
    multiples.push(multiple1);
    // if (multiples.length <= 10) {
    //   multiples.push(multiple1);
    // } else {
    //   multiples.push(multiple1);
    //   multiples.shift();
    // }

    let multiple2 = min * factor;
    if (multiples.find((value) => value === multiple2)) {
      lcm = multiple2;
      return `LCM of ${number1} and ${number2} is ${lcm}`;
    }
  } while (true);
};

console.log(findLCM(20, 1000));
