self.onmessage = (event) => {
  const { randomDelay, taskNumber } = event.data;
  setTimeout(() => {
    const message = `worker done in ${randomDelay}ms for task ${taskNumber}`;
    self.postMessage({ taskNumber, message });
  }, randomDelay);
};
