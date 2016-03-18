
//TODO - ask Khalid if there is another way, and why this works
// load google font == Gloria Hallelujah
WebFontConfig = {
  google:{ families: ['Gloria Hallelujah'] },
  active: function(){start();},
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

var x = c.width / 2;
var y = c.height / 2;


function start(){
  //words
  var words = ["dinosaur", "train"];
  ctx.font = '70px Gloria Hallelujah';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'wheat';
  ctx.fillText(scramble(words[0]), x, y);
}

function scramble(word) {

    var letters = word.toUpperCase().split("");
    console.log(letters);

    var scrambledLetters = "";
    for (i = letters.length; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i));
        scrambledLetters += letters[randomIndex]; //add a random letter to "scrambledLetters"
        letters.splice(randomIndex, 1)//remove that letter from "letters"
        console.log(letters);
    }

    return scrambledLetters;

}
