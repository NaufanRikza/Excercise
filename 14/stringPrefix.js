const findPrefix = (arr = []) => {
  let prefix = arr[0];
  let length = arr.length;
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, length - 1);
      length--;

      if (prefix === "") {
        return "No common prefix";
      }
    }
  }
  return `'${prefix}' is the common prefix`;
};

console.log(findPrefix(["sport", "spin", "spring"]));
console.log(findPrefix(["prime", "odd", "even"]));
