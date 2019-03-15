


var wins = 0;
var losses = 0;
var score = 0;

var purple = 0;
var green = 0;
var red = 0;
var blue = 0;
var maxScore = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min +1)) + min;
}

$(document).ready(function() {

    maxScore = getRandomInt(17, 77);
    console.log("Max score");
})