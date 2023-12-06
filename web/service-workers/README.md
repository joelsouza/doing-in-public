# Service Workers feat JavaScript parallelism

I've created a simple example to show how to use service workers to run long tasks in the background and avoid blocking the main thread.

From the code:

```js
const totalOfTasks = 1_000;
let workersRunning = navigator.serviceWorker.controller ? 1 : 0;
let missingTasks = totalOfTasks - workersRunning;
let taskNumber = 0;

if (taskNumber < totalOfTasks && workersRunning < hardwareConcurrency) {
  runLongTask();
}
// once
```
