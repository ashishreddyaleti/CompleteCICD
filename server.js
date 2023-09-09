var express = require('express')
var app = express();

app.get('/', function(req,res) {
  res.send('{ "response": "Hello Arya reddy I LOVE YOU"}')
});

app.get('/will', function(req,res) {
    res.send('{ "response": "Hello Arya this is your will"}')
});
app.get('/ready', function(req,res) {
    res.send('{ "response": "Hello Arya YOU ARE READY"}')
});
app.listen(process.env.PORT || 3000);
module.exports = app;
  