const isAnagram = (str1 = "", str2 = "") => {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  return str1 === str2 ? true : false;
};

const run = (str1, str2) => {
  if (isAnagram(str1, str2)) {
    console.log(`${str1} & ${str2} are anagram`);
  } else {
    console.log(`${str1} & ${str2} aren't anagram`);
  }
};

run("rat", "tar");
