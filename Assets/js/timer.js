var time = localStorage.getItem("time");

var myfunc = setInterval(function() {
    var secondsLeft = time --
    var timer = document.getElementById("timer")
    timer.innerHTML = secondsLeft
    localStorage.setItem("time", secondsLeft)
    if (secondsLeft == 0){
        clearTimeout(secondsLeft)
    }
    function wrongAnswer(){
        secondsLeft = secondsLeft - 10;
    }
    }, 1000)


// GIVEN I am taking a code quiz
// WHEN I click the Start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score