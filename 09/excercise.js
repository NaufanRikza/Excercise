class Employee {
  workingHour = 0;
  basedSalary = 0;
}

class FulltimeEmployee extends Employee {
  constructor() {
    super();
  }

  calculateSalary() {
    let salary = this.basedSalary * this.workingHour;
    console.log(`the salary is IDR ${salary.toLocaleString()}`);
  }

  addWorkingHour(workingHour) {
    this.workingHour += workingHour;
    this.basedSalary = this.workingHour > 6 ? 75000 : 100000;
  }
}

class ParttimeEmployee extends Employee {
  constructor() {
    super();
  }

  calculateSalary() {
    let salary = this.basedSalary * this.workingHour;
    console.log(`the salary is IDR ${salary.toLocaleString()}`);
  }

  addWorkingHour(workingHour) {
    this.workingHour += workingHour;
    this.basedSalary = this.workingHour > 6 ? 30000 : 50000;
  }
}

const fullTime = new FulltimeEmployee();
fullTime.addWorkingHour(10);
fullTime.calculateSalary();

const partTime = new ParttimeEmployee();
partTime.addWorkingHour(10);
partTime.calculateSalary();
