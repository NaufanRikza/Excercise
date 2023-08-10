class Queue {
  #tasks = [];

  addTask(task) {
    this.#tasks.push(task);
    console.log("LOG : ", "Tasks => ", this.#tasks);
  }

  process() {
    const time = Math.floor(Math.random() * 10000);
    return new Promise((resolve) => {
      let task = this.#tasks.shift();
      setTimeout(() => {
        resolve(`${task} done in ${time / 1000} second`);
      }, time);
    });
  }

  async start() {
    console.log("Running all processes ...");
    while (this.#tasks.length > 0) {
      let res = await this.process();
      console.log(res);
    }
  }
}

module.exports = Queue;
