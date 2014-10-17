var http = require('http');

function onListenEvent(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>hello world</h1>');
}

var app = http.createServer(onListenEvent);

app.listen(3000, 'localhost');

console.log('server app running at localhost:3000');

