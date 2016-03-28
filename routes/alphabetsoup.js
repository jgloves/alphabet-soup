// Dependencies
var express = require("express");
var router = express.Router();

// Routes
router.get('/', function(req, res) {
    res.send("API is working");
});

// Send our Router as a module
module.exports = router;
