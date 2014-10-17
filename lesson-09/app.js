var app = require('express')(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    _ = require('underscore'),
    users = [
      { id: 1, name: 'tony' }
    ];

app.use(morgan('dev'));

app.use(bodyParser.json());

app.get('/users', function(req, res) {
  res.send({ success: true, users: users });
});


app.get('/users/:name', function(req, res) {
  var name = req.params.name;

  var user = _.find(users, function(u) {
    return u.name == name;
  });

  var result = user
    ? { success: true, user: user }
    : { success: false, reason: 'user not found: ' + name };

  res.send(result);
});


app.post('/users', function(req, res) {
  var user = req.body;

  console.log(user);

  if (!user || !user.name) {
    res.send({ success: false, reason: 'cannot create user (missing user name)' });
    return;
  }

  var existing = _.findWhere(users, { name: user.name });

  if (existing) {
    res.send({ success: false, reason: 'user already exists: ' + existing.name  });
    return;
  }

  users.push(user);
  user.id = users.length;

  res.send({ success: true, user: user })

});

app.put('/users/:name', function(req, res) {
  var name = req.params.name,
      newName = req.body.name;

  var user = _.find(users, function(u) {
    return u.name == name;
  });

  if (user) {
    user.name = newName;
  }

  var result = user
      ? { success: true, user: user }
      : { success: false, reason: 'user not found: ' + name };

  res.send(result);
});


app.delete('/users/:name', function(req, res) {
  var name = req.params.name;

  var user = _.find(users, function(u) {
    return u.name == name;
  });

  var result = user
      ? { success: true, user: user }
      : { success: false, reason: 'user not found: ' + name };


  users = _.reject(users, function(u) {
    return u.name == name;
  });

  res.send(result);
});


app.listen(port);


