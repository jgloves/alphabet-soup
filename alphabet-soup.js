var screen = document.getElementById("screen").getContext("2d");

var words = ["dinosaur", "train"];

scramble(words[1]);

function scramble(word) {

    var letters = word.split("");
    console.log(letters)

    var scrambledLetters = [];
    for (i = letters.length; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i));
        scrambledLetters.push(letters[randomIndex]); //add a random letter to "scrambledLetters"
        letters.splice(randomIndex, 1)//remove that letter from "letters"
    }

    var c = document.getElementById("screen");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(636,300,290,0,2*Math.PI);
    ctx.stroke();

    return scrambledLetters;

}