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

//TODO- load words from file into list, randomize order
var words = ["dinosaur", "train", "bicycle", "music"];
var guessInput = document.getElementById("guess-input");
var guessForm = document.getElementById("guess-form");

//counter for the list of words
var counter = 0;
//start(0);

//Event listener for submit button
guessForm.addEventListener("submit", function (e) {
    e = e || event; //workaround for IE
    e.preventDefault();
    var guess = guessInput.value;
    if (guess != words[counter]) {
        alert("That wasn't the word I was thinking of. Please enter another guess.");
        guessForm.reset();
    } else {
        alert("You got it!");
        guessForm.reset();
        counter++;
        if (counter < words.length) {
            ctx.fillStyle = "darkred";
            ctx.fill();
            start(counter);
        } else {
            alert("Congratulations! You've guessed all the words!");
        }
    }
});

function start() {
    console.log("starting");
}

function start(n){

  var text = scramble(words[n]);
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
