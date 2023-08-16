const getDays = (month = 0, year = 0) => {
  let strDate = `${year}-${month}-1`;
  let strDate2 = "";
  if (month + 1 > 12) {
    strDate2 = `${year + 1}-1-1`;
  } else {
    strDate2 = `${year}-${month + 1}-1`;
  }

  const date = new Date(strDate);
  const date2 = new Date(strDate2);

  const days = Math.abs(date2 - date) / (3600 * 1000 * 24);
  return days;
};

console.log(getDays(1, 2022));
console.log(getDays(2, 2012));
console.log(getDays(12, 2022));
