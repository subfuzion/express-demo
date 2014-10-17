// create an express app
var express = require('express'),
    app = express(),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    publicDir = require('path').join(__dirname, '/public');


// add logging middleware
app.use(morgan('dev'));

// add the express.static middleware to the app to
// serve files in the specified path
// This middleware will only call the next middleware if
// path doesn't match the static directory
app.use(express.static(publicDir));


// express middleware that handles remaining requests for non-static files
app.use(function(req, res) {
  var data = '<h1>Nothing here for you...</h1>';

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(data);
});

app.listen(port);

console.log('server started on port %s', port);

