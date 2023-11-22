var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
    var randomNumber = math.floor(Math.random() * 4);
    var randomChosenColours = buttonColours[randomNumber];
    gamePattern.push(randomChosenColours);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
      audio.play();
      
}

