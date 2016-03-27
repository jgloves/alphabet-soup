// load google font == Gloria Hallelujah
WebFontConfig = {
    google:{ families: ['Gloria Hallelujah'] },
    loading: function(){start(0);},
};

(function(){
    var wf = document.createElement("script");
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.10/webfont.js';
    wf.async = 'true';
    document.head.appendChild(wf);
})();

var screen = document.getElementById("screen").getContext("2d");

//draw the circle
var c = document.getElementById("screen");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(636,300,290,0,2*Math.PI);
ctx.lineWidth = 20;

// line color
ctx.strokeStyle = 'lightblue';
ctx.stroke();
//fill color
ctx.fillStyle = "darkred";
ctx.fill();
//font stuff
ctx.font = '70px Gloria Hallelujah';
ctx.textAlign = 'center';
ctx.fillStyle = 'wheat';

var x = c.width / 2;
var y = c.height / 2;

var guessInput = document.getElementById("guess-input");
var guessForm = document.getElementById("guess-form");

var level1 = {
                 "words": ["and", "like", "can", "for", "have", "here", "his", "her", "one", "with"],
                               "message": "You rock!"
             };

var level2 = {
                 "words": ["come", "look", "said", "have", "down", "from", "little", "there", "they", "came"],
                 "message": "Awesome!"
             };

var level3 = {
                  "words": ["after", "again", "because", "father", "mother", "funny", "under", "please", "soon", "pretty"],
                  "message": "Fantastic job!"
             };

var colors = {
                "words": ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "white", "black" ],
                "message": "You did it!"
             };

var animals = {
                 "words": ["spider", "tiger", "goldfish", "parrot", "kitten", "puppy", "shark", "turtle", "horse", "monkey"],
                 "message": "Great job!"

              };

var levels =   [ level1, level2, level3];

//counter for the list of words
var counter = 0;
//counter for the level
var levelCounter = 0;

//words in current level
wordsInCurrentLevel = levels[levelCounter]["words"];

//Event listener for submit button
guessForm.addEventListener("submit", function (e) {
    //wordsInCurrentLevel = levels[levelCounter]["words"];
    e = e || event; //workaround for IE
    e.preventDefault();
    var guess = guessInput.value;
    if (guess != wordsInCurrentLevel[counter]) {
        alert("That wasn't the word I was thinking of. Please enter another guess.");
        guessForm.reset();
    } else {
        alert("You got it!"); //TODO - have more messages
        guessForm.reset();
        counter++;
        if (counter < wordsInCurrentLevel.length) {
            ctx.fillStyle = "darkred";
            ctx.fill();
            start(counter);
        } else {
            alert("Congratulations! You've guessed all the words! " + levels[levelCounter]["message"]);
            levelCounter++;
            if (levelCounter < levels.length && confirm("Want to play again?")) {
                counter = 0;
                wordsInCurrentLevel = levels[levelCounter]["words"];
                ctx.fillStyle = "darkred";
                ctx.fill();
                start(counter);
            }

        }
    }
});

function start(n){
  var text = scramble(wordsInCurrentLevel[n]);
  while (text === wordsInCurrentLevel[n].toUpperCase())
  {
    text = scramble(wordsInCurrentLevel[n]);
  }
  ctx.fillStyle = "wheat";
  ctx.fillText(text, x, y);

}

function scramble(word) {
    var upperWord = word.toUpperCase(); //TODO - I am getting a strange error here : Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
    var letters = upperWord.split("");
    var scrambledLetters = "";
    for (var i = letters.length; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i));
        scrambledLetters += letters[randomIndex]; //add a random letter to "scrambledLetters"
        letters.splice(randomIndex, 1); //remove that letter from "letters"
    }
    return scrambledLetters;
}



