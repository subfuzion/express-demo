var app = require('express')(),
    port = process.env.PORT || 3000;

app.get('/hello1', function(req, res) {
  res.send('<h1>hello world</h1>');             // automatic -> text/html
});

app.get('/hello2', function(req, res) {
  res.header('Content-Type', 'text/plain');
  res.send('hello world\n');                    // explicit -> text/plain
});

app.get('/hello3', function(req, res) {
  res.send(new Buffer('hello world\n'));        // automatic -> application/octet-stream
});

app.get('/hello4', function(req, res) {
  res.send({message: 'hello world'});         // automatic -> application/json
});

app.get('/hello5', function(req, res) {
  res.send(['hello world']);                  // automatic -> application/json
});

app.get('/hello6', function(req, res) {
  res.header('Content-Type', 'text/xml');
  res.send('<message>hello world</message>')    // explicit -> text/xml;
});

app.listen(port);
