// Dependencies
var express = require("express");
var router = express.Router();
var path = require("path");

// Routes
router.get('/', function(req, res) {
    res.sendFile("/../public/index.html");
});

// 'level/1'
router.get('/level/:id/', function(req, res) {
    var level = req.params.id;
    // hopefully level == '1'
    if (levelData.hasOwnProperty(level)) {
        var wordList = levelData[level];
        // render the game
        // there are two ways if using plain JS
        // jade to write worldlist onto HTML
        res.sendFile();
    } else {
        // Error page
        console.log("error");
    }
});

var levelData = {
    1: {
        "words": ["and", "like", "can", "for", "have", "here", "his", "her", "one", "with"],
        "message": "You rock!"
    },

    2: {
        "words": ["come", "look", "said", "have", "down", "from", "little", "there", "they", "came"],
        "message": "Awesome!"
    },

    3: {
        "words": ["after", "again", "because", "father", "mother", "funny", "under", "please", "soon", "pretty"],
        "message": "Fantastic job!"
    },
    colors: {
        "words": ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "white", "black" ],
        "message": "You did it!"
    },
    animals: {
        "words": ["spider", "tiger", "goldfish", "parrot", "kitten", "puppy", "shark", "turtle", "horse", "monkey"],
        "message": "Great job!"
    }
};

// Send our Router as a module
module.exports = router;
