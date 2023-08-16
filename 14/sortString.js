const sortString = (str = []) => {
  for (let step = 0; step < str.length; step++) {
    for (let j = 0; j < str.length - step - 1; j++) {
      let charNow = str[j][0];
      charNow = charNow.toLowerCase();

      let charAfter = str[j + 1][0];
      charAfter = charAfter.toLowerCase();

      console.log(charNow);
      console.log(charAfter);
      if (charNow > charAfter) {
        temp = str[j];
        str[j] = str[j + 1];
        str[j + 1] = temp;
      }
    }
  }
  return str;
};

console.log(sortString(["Yui", "Lalih", "juan", "zenin"]));
