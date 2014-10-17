var app = require('express')();
    port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Welcome to Express');
});

app.get('/about', function(req, res) {
  res.send('This is just a simple Express routing demo');
});

app.get('/hello', function(req, res) {
  res.send('Well, hello there!');
});

app.listen(port);

