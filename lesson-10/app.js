var app = require('express')(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    MongoClient = require('mongodb').MongoClient,
    mongoUrl = 'mongodb://localhost:27017/expressdemo',
    _db;

app.use(morgan('dev'));

app.use(bodyParser.json());

MongoClient.connect(mongoUrl, function(err, db) {
  if (err) {
    console.error(err);
  } else {
    console.log('connected to mongo');
    _db = db;
    app.listen(port, function() {
      console.log('listening for requests on localhost:%s', port);
    });
  }
});

app.get('/users', function(req, res) {
  var collection = _db.collection('data');
  collection.find({}).toArray(function(err, result) {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.send({ success: true, users: result });
    }
  });
});


app.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var collection = _db.collection('data');

  collection.findOne({ name: name }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      var result = user
          ? { success: true, user: user }
          : { success: false, reason: 'user not found: ' + name };
      res.send(result);
    }
  });
});


app.post('/users', function(req, res) {
  var user = req.body;
  var collection = _db.collection('data');

  // validate user, make sure doesn't already exist, etc.

  collection.insert(user, function(err, users) {
    if (err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.send({ success: true, user: user })
    }
  });
});


