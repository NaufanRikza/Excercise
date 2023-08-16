const getMinimumDate = (dates = []) => {
  let min = dates[0];
  for (let i = 1; i < dates.length; i++) {
    if (new Date(dates[i]) < new Date(min)) {
      min = dates[i];
    }
  }
  return `minimun date is ${min}`;
};

console.log(
  getMinimumDate(["2020-7-14", "2023-7-14", "1997-7-14", "1990-7-14"])
);
