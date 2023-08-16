const isWeekend = (date = new Date()) => {
  const day = date.getDay();
  if (day === 0 || day === 6) {
    return `${date.toDateString()} is weekend`;
  } else {
    return `${date.toDateString()} is not weekend`;
  }
};

console.log(isWeekend(new Date("2023-8-1")));
console.log(isWeekend(new Date("2023-8-5")));
console.log(isWeekend(new Date("2023-4-1")));
console.log(isWeekend(new Date("2023-1-1")));
