


var wins = 0;
var losses = 0;
var score = 0;

var blue = 0;
var red = 0;
var purple = 0;
var green = 0;
var maxScore = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min +1)) + min;
}

$(document).ready(function() {

    maxScore = getRandomInt(17, 77);
    console.log("Max Score", maxScore);
    $("#scoreToMatch").text("Score cannot exceed: " + maxScore);

    function resetGame() {
        score = 0;
        $("#score").text("Score so far:" + score);
        maxScore = getRandomInt(19,120);
        console.log("Max Score", maxScore);
        $("#scoreToMatch").text("Your total score cannot exceed: " + maxScore);
        blue = 0;
        red = 0;
        purple = 0;
        green = 0;
     
    }

    function checkWin() {
        if (score === maxScore) {
        wins++;
        $("#wins").text("Wins: " + wins);
        resetGame();
    } else if (score > maxScore) {
        losses++;
        $("#losses").text("Losses: " + losses);
        resetGame();
    }
})

$("#crys0").on("click", function() {
    if (blue === 0) {
      purple = getRandomInt(1, 12);
      console.log(blue);
    }

    score += blue;
    $("#score").text("Score So Far: " + score);
    checkWin();
});

    $("#gem1").on("click", function() {
        if (red=== 0) {
          red = getRandomInt(1, 12);
          console.log(red);
        }
        score += red;
        $("#score").text("Score So Far: " + score);
        checkWin();
 });

    $("#gem2").on("click", function() {
        if (purple=== 0) {
      red = getRandomInt(1, 12);
      console.log(purple);
        }
        score += purple;
        $("#score").text("Score So Far: " + score);
    checkWin();
 });

     $("#gem3").on("click", function() {
        if (green=== 0) {
      red = getRandomInt(1, 12);
      console.log(green);
        }
         score += green;
         $("#score").text("Score So Far: " + score);
    checkWin();
});


