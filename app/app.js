// grabbing express
var express = require('express');
var app = express();
// route
app.get('/', function(req, res) {
  res.send({"words": ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "white", "black" ],
           "message": "You did it!"}
);
});

// listen to server on a port
app.listen(8080, function(){
  console.log("Listening to server on port 8080");
});
