# Service Workers feat JavaScript parallelism

Inspired by [Web Crawler With asyncio Coroutines](https://aosabook.org/en/500L/a-web-crawler-with-asyncio-coroutines.html) from 500 Lines or Less book.

> Classical computer science emphasizes efficient algorithms that complete computations as quickly as possible. But many networked programs spend their time not computing, but holding open many connections that are slow, or have infrequent events. These programs present a very different challenge: to wait for a huge number of network events efficiently. A contemporary approach to this problem is asynchronous I/O, or "async".

I've created a simple example to show how to use service workers to run long tasks in the background and avoid blocking the main thread.

From the [index.html](./index.html) file:

```js
const totalOfTasks = 1_000;
let workersRunning = navigator.serviceWorker.controller ? 1 : 0;
let missingTasks = totalOfTasks - workersRunning;
let taskNumber = 0;

const runLongTask = () => {
  const worker = new Worker('./worker.js');
  workersRunning++;
  taskNumber++;

  // As soon a worker is finished, it will call `runLongTask` again to
  // start a new one until the total of tasks is reached respecting
  // the amount of CPUs available to run the tasks in parallel.
  worker.onmessage = (event) => {
    workersRunning--;
    if (taskNumber < totalOfTasks && workersRunning < hardwareConcurrency) {
      runLongTask();
    }
  };
};

```

