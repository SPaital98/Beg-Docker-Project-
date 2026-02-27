const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from Docker Beginner Project 🚀");
  res.end();
}).listen(3000);
