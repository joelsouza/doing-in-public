const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const response = {
    message: 'Hello World',
  };
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
