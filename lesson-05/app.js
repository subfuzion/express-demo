// create an express app
var app = require('express')(),
    port = process.env.PORT || 3000;

// route handler for GET /
app.get('/', function(req, res) {
  var data = '<h1>hello world</h1>';
  res.send(data);
});

var server = app.listen(port, function() {
  // the callback is added as a listener for the server's 'listen' event
  // see: http://nodejs.org/api/net.html#net_server_listen_path_callback

  // server is an http.Server, which is a net.Server
  // http://nodejs.org/api/http.html#http_class_http_server
  // http://nodejs.org/api/net.html#net_class_net_server
  // http://nodejs.org/api/net.html#net_server_address
  console.log('server started on port %s', server.address().port);
});



