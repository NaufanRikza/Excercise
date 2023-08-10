class Queue {
  #tasks = [];

  addTask(task) {
    const time = Math.floor(Math.random() * 10000);
    const taskObj = {
      name: task,
      task: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(`${task} done in ${time / 1000} second`);
          }, time);
        });
      },
      time: time,
    };

    this.#tasks.push(taskObj);
    console.log("LOG : ", "Tasks => ", this.#tasks);
  }

  start() {
    console.log("Running all processes ...");
    for (let taskProcess of this.#tasks) {
      taskProcess.task().then((res) => {
        if (res) {
          console.log(res);
        }
      });
    }
  }
}

module.exports = Queue;
