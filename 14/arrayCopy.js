const copyArray = (arr = []) => {
  index = arr.length % 2 === 0 ? arr.length / 2 : (arr.length + 1) / 2;
  return arr.slice(0, index);
};

console.log(copyArray([1,2,3,4,5]))