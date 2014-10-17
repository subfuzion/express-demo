// create an express app
var app = require('express')(),
    port = process.env.PORT || 3000;

// route handler for GET /
app.get('/', function(req, res) {
  var data = '<h1>hello world</h1>';
  res.send(data);
});

// can specify port and address/hostname
// see: http://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback
var server = app.listen(port, '127.0.0.1', function() {
  var host = server.address();
  console.log('server started on %s:%s', host.address, host.port);
});


