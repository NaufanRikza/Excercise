// alphabet A = 1 , Z = 26
//apphabet is 26 letter

const convertToNumber = (column = "") => {
  const dataList = column.toUpperCase().split("");
  console.log(dataList);
  let number = 0;
  for (let i = 0; i < dataList.length; i++) {
    console.log(dataList[i]);
    const numberRep =
      (dataList[i].charCodeAt(0) - 64) * Math.pow(26, dataList.length - 1 - i);
    number += numberRep;
  }
  return number;
};

console.log(convertToNumber("AZ"));
