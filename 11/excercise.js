const Queue = require("./queue");

const queue = new Queue();

queue.addTask("Task 1");
queue.addTask("Task 2");
queue.addTask("Task 3");

queue.start();
