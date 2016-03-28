// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// Express
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/x-www-form-urlencoded

// Routes
app.use('/alphabetsoup', require("./../routes/alphabetsoup"));

// Start Server
app.listen(8080, function() {
    console.log("Listening to server on port 8080");
});
