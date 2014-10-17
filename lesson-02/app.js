var http = require('http'),
    fs = require('fs'),
    path = require('path');

var app = http.createServer(function(req, res) {
  var index = path.join(__dirname, 'index.html');

  if (req.url == '/' || req.url == '/index.html') {

    fs.readFile(index, function(err, data) {
      if (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('500 server error');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    })

  } else {
    // resource not found
    console.log('resource not found: ' + req.url);
    res.writeHead(404, {'Content-Type': 'text/html'} );
    res.end('<html><body>404 not found</body>')
  }

});

app.listen(3000, 'localhost');

console.log('server app running at localhost:3000');

