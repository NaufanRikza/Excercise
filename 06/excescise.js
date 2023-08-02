class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = {
      productsData: [],
      quantity: 0,
    };
  }

  addChart(product) {
    this.products.productsData.push(product);
    this.total += 1;
    this.products.quantity += product.price;
  }

  showTotal() {
    console.log("current transaction => ", this.total);
  }

  checkOut() {
    const checkoutObj = {
      total: this.total,
      product: this.products,
    };

    console.log(checkoutObj);
  }
}

const createTransaction = () => {
  const prod1 = new Product("Lemari", 100000);
  const prod2 = new Product("Karpet", 50000);
  const prod3 = new Product("Kursi", 250000);

  const transaction = new Transaction();
  transaction.addChart(prod1);
  transaction.addChart(prod2);
  transaction.addChart(prod3);

  transaction.showTotal();
  transaction.checkOut();
};

const calculateObject = (object1 = {}, object2 = {}) => {
  //find highest score
  let highestScore = 0;
  let lowestScore = 0;

  if (object1.score > object2.score) {
    highestScore = object1.score;
    lowestScore = object2.score;
  } else {
    highestScore = object2.score;
    lowestScore = object1.score;
  }

  //calculate average
  const scoreAverage = (object1.score + object2.score) / 2;

  //find olderAge
  const date = new Date();
  const ageInYear1 = Math.round(
    (date - object1.age) / 1000 / (3600 * 24 * 365)
  );
  const ageInYear2 = Math.round(
    (date - object2.age) / 1000 / (3600 * 24 * 365)
  );

  //   console.log(ageInYear1);
  //   console.log(ageInYear2);

  let olderAge = 0;
  let youngerAge = 0;

  if (ageInYear1 - ageInYear2 < 0) {
    youngerAge = ageInYear1;
    olderAge = ageInYear2;
  } else {
    youngerAge = ageInYear2;
    olderAge = ageInYear1;
  }

  //find averag of Age

  const ageAverage = (ageInYear1 + ageInYear2) / 2;

  return {
    score: {
      highest: highestScore,
      lowest: lowestScore,
      average: scoreAverage,
    },
    age: {
      highest: olderAge,
      lowest: youngerAge,
      average: ageAverage,
    },
  };
};

console.log("Calculate Object");

const res = calculateObject(
  {
    name: "Ivan",
    email: "bababa@gmail.com",
    age: new Date("1999-09-06"),
    score: 50,
  },
  {
    name: "Budi",
    email: "babababa@gmail.com",
    age: new Date("1998-09-06"),
    score: 70,
  }
);

console.log(res);

console.log();

console.log("Create Transaction");
createTransaction();
