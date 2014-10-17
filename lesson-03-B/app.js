// create an express app
var express = require('express'),
    morgan = require('morgan'),
    app = express(),
    port = process.env.PORT || 3000,
    testMode = false;

// add logging middleware to log each request
// see: https://www.npmjs.org/package/morgan
app.use(morgan('dev'));

// add middleware to always send a 'hello world' response
app.use(function(req, res, next) {
  if (req.url == '/test') {
    console.log('enabling test mode');
    testMode = true;
  }

  next();
});

// add middleware to always send a 'hello world' response
app.use(function(req, res) {
  var data = testMode
      ? JSON.stringify(req.headers)
      : '<h1>hello world</h1>';

  var contentType = testMode ? 'text/plain' : 'text/html';

  res.writeHead(200, {'Content-Type': contentType });
  res.end(data);
});

app.listen(port);

console.log('server started on port %s', port);

