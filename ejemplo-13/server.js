const path = require('path');
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
// app.use(bodyParser.json()); // parse application/json

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './views/index.html')); // without template engine.
});

app.listen((process.env.PORT || 3000), function () {
  console.log('App listening on port ' + (process.env.PORT || 3000));
});
