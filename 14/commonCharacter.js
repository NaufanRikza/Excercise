const findCommonCaharcter = (str = "") => {
  let max = 1;
  let count = 0;
  let charMin = 1;
  let character = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === character) {
      continue;
    }
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    console.log(count);
    if (count > max) {
      max = count;
      character = str[i];
      count = 0;
    } else if (count === max) {
      charMin = max;
      max = count;
      count = 0;
    } else {
      count = 0;
    }
  }

  console.log(charMin, max);
  if (max === charMin) {
    return "No common character";
  } else {
    return `${character} is the most common charcter`;
  }
};

console.log(findCommonCaharcter("peuo"));
