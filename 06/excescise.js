class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addChart(product) {
    if (this.products.length === 0) {
      this.products.push({
        name: product.name,
        price: product.price,
        qty: 1,
      });
    } else {
      let isSame = false;
      for (let prod of this.products) {
        if (product.name === prod.name) {
          prod.qty = prod.qty + 1;
          isSame = true;
          break;
        }
      }
      if (!isSame) {
        this.products.push({
          name: product.name,
          price: product.price,
          qty: 1,
        });
      }
    }
  }

  showTotal() {
    for (let prod of this.products) {
      this.total += prod.price * prod.qty;
    }
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
  transaction.addChart(prod3);
  transaction.addChart(prod3);

  transaction.showTotal();
  transaction.checkOut();
};

const calculateObject = (students = []) => {
  //find highest score
  let highestScore = students[0].score;
  let lowestScore = students[0].score;
  let scoreAverage = 0;
  let ageAverage = 0;
  const toSecond = 0.001;
  const toYear = 3600 * 24 * 365;
  const date = new Date();
  let oldestAge = Math.round(((date - students[0].age) * toSecond) / toYear);
  let youngestAge = Math.round(((date - students[0].age) * toSecond) / toYear);

  for (let student of students) {
    highestScore = Math.max(highestScore, student.score);
    lowestScore = Math.min(lowestScore, student.score);
    youngestAge = Math.min(
      youngestAge,
      Math.round(((date - student.age) * toSecond) / toYear)
    );
    oldestAge = Math.max(
      oldestAge,
      Math.round(((date - student.age) * toSecond) / toYear)
    );
    scoreAverage += student.score;
    ageAverage += ((date - student.age) * toSecond) / toYear;
  }

  //calculate average
  scoreAverage /= students.length;
  ageAverage /= students.length;

  return {
    score: {
      highest: highestScore,
      lowest: lowestScore,
      average: scoreAverage,
    },
    age: {
      highest: oldestAge,
      lowest: youngestAge,
      average: ageAverage,
    },
  };
};

console.log("Calculate Object");

const res = calculateObject([
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
  },
]);

console.log(res);

console.log();

console.log("Create Transaction");
createTransaction();
