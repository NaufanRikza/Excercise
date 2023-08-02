const getHighest = (arrData = [], isSortFunctionUsed = false) => {
  if (!isSortFunctionUsed) {
    let highest = arrData[0];
    for (let i = 1; i < arrData.length; i++) {
      highest = Math.max(highest, arrData[i]);
    }
    return highest;
  } else {
    arrData.sort((a, b) => {
      return b - a;
    });
    return arrData[0];
  }
};

const getLowest = (arrData = [], isSortFunctionUsed = false) => {
  if (!isSortFunctionUsed) {
    let lowest = arrData[0];
    for (let i = 1; i < arrData.length; i++) {
      lowest = Math.min(lowest, arrData[i]);
    }
    return lowest;
  } else {
    arrData.sort((a, b) => {
      return a - b;
    });
    return arrData[0];
  }
};

const getAverage = (arrData = []) => {
  let total = 0;
  for (let i of arrData) {
    total += i;
  }
  return total / arrData.length;
};

const concateWords = (arrData = []) => {
  let finalOutput = "";
  for (let i = 0; i < arrData.length; i++) {
    finalOutput += arrData[i];
    if (arrData.length - 1 - i > 1) {
      finalOutput += ", ";
    } else if (arrData.length - 1 - i === 1) {
      finalOutput += ", and ";
    }
  }
  return finalOutput;
};

const splitWord = (word = "") => {
  if (word.indexOf(" ") === -1) {
    return [word];
  }

  let arr = [];
  let str = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      arr.push(str);
      str = "";
    } else if (i === word.length - 1) {
      str += word[i];
      arr.push(str);
      str = "";
    } else {
      str += word[i];
    }
  }
  return arr;
};

const sumArray = (arr1 = [], arr2 = []) => {
  if (arr1.length !== arr2.length) {
    diff = Math.abs(arr1.length - arr2.length);
    if (arr1.length > arr2.length) {
      for (let i = arr1.length; i < arr1.length + diff; i++) {
        arr2.push(0);
      }
    } else {
      for (let i = arr2.length; i < arr2.length + diff; i++) {
        arr1.push(0);
      }
    }
  }

  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i] + arr2[i]);
  }

  return newArray;
};

const addElement = (arr = [], element) => {
  isAlready = false;
  for (i of arr) {
    if (i === element) {
      isAlready = true;
      break;
    }
  }

  if (isAlready) {
    return "element already exist";
  } else {
    arr.push(element);
    return arr;
  }
};

const getArrayinEven = (arr = []) => {
  let newArr = [];
  for (i of arr) {
    if (i % 2 === 0) {
      newArr.push(i);
    }
  }
  return newArr;
};

console.log("Find Highest");
console.log("not using sort function => ", getHighest([10, 3, 67, 34])); //67
console.log("using sort function => ", getHighest([10, 3, 67, 34], true)); //67

console.log();

console.log("Find Lowest");
console.log("not using sort function => ", getLowest([10, 3, 67, 34])); //3
console.log("using sort function => ", getLowest([10, 3, 67, 34], true)); //3

console.log();

console.log("Find Average");
console.log("Average => ", getAverage([10, 3, 67, 34])); //28.5

console.log();

console.log("Concate Words");
console.log("Output => ", concateWords(["hello", "World", "my", "friends"])); //hello, World, my, and friends

console.log();

console.log("Split Words");
console.log("Output => ", splitWord("my name")); //[ 'my', 'name', 'is', 'ivan' ]

console.log();

console.log("Sum Array");
console.log("Sum => ", sumArray([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4])); //[2, 4, 6, 8, 5, 6, 7, 8]

console.log();

console.log("Add Element");
console.log("Output => ", addElement([1, 2, 3, 4], 4)); //element already exist
console.log("Output => ", addElement([1, 2, 3, 4], 10)); //[ 1, 2, 3, 4, 10]

console.log();

console.log("Get Even Element");
console.log("Output => ", getArrayinEven([13, 23, 14, 16, 8, 10])); //[ 14, 16, 8, 10 ]
