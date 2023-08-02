const isEqual = (obj1 = {}, obj2 = {}) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.join(" ") !== obj2Keys.join(" ")) {
    return "not same";
  }

  const obj1Val = [];
  const obj2Val = [];

  for (let key in obj1) {
    obj1Val.push(obj1[key]);
    obj2Val.push(obj2[key]);
  }

  if (obj1Val.join(" ") !== obj2Val.join(" ")) {
    return "not same";
  }

  return "same";
};

const getIntersect = (obj1, obj2) => {
  const intr = {};

  for (let key1 in obj1) {
    for (let key2 in obj2) {
      if (key1 === key2 && obj1[key1] === obj2[key2]) {
        intr[key1] = obj1[key1];
      }
    }
  }

  return intr;
};

const mergeArray = (arr1 = [], arr2 = []) => {
  let result = [...arr1, ...arr2];
  let count = 1;

  for (obj of result) {
    for (let i = count; i < result.length; i++) {
      if (isEqual(obj, result[i]) === "same") {
        result.splice(i, 1);
      }
    }
    count++;
  }
  return result;
};

const switchProperties = (objects = []) => {
  let final = [];
  for (obj of objects) {
    const object = {};
    keys = Object.keys(object);
    for (key in obj) {
      object[obj[key]] = key;
    }
    final.push(object);
  }
  return final;
};

const factorial = (n) => {
  if (n >= 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
};

//diff in key
console.log("Object Equality");
console.log(isEqual({ a: 0, b: "a" }, { a: 0, c: "a" }));
console.log();

//diff in values
console.log(isEqual({ a: 0, b: "a" }, { a: 0, b: "b" }));
console.log();

//same object
console.log(isEqual({ a: 0, b: "a" }, { a: 0, b: "a" }));
console.log();

//find intersect
console.log("Get Intersection");
console.log(getIntersect({ a: 0, b: "a", c: 9 }, { a: 0, b: "b", d: "a" }));
console.log();

console.log("Merge Array");
console.log(
  mergeArray(
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 2", email: "student2@mail.com" },
    ],
    [
      { name: "Student 1", email: "student1@mail.com" },
      { name: "Student 2", email: "student2@mail.com" },
      { name: "Student 3", email: "student2@mail.com" },
      { name: "Student 4", email: "student4@mail.com" },
    ]
  )
);
console.log();

console.log("Switch Property");
console.log(
  switchProperties([
    {
      name: "David",
      age: 20,
    },
    {
      bookName: "philips",
      year: 2024,
    },
  ])
);

console.log();
console.log("Factorial");
console.log(factorial(6));
