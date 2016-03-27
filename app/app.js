// grabbing express
var express = require('express');
var app = express();
// route
app.get('/', function(req, res) {
  res.send("Hello world!");
});
// listen to server on a port
app.listen(8080, function(){
  console.log("Listening to server on port 8080");
});
