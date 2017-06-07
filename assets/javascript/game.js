$(document).ready(function(){
    //The hiding and showing of different content, so as to create a cleaner user interface.
    $("#main-content").hide();
    $("#finish").hide();
    $(".start").click(function(){
        $(".start").hide();
        $("#main-content").show();
        $("#finish").hide();
    });
    $("#submit").click(function(){
        $("#main-content").hide();
        $("#finish").show();
    });

//Global variables to be used throughout the rest of the jQuery code.
var correctAnswer = 0;
var incorrectAnswer = 0;
var missedAnswer = 0;
var time = 45;
//Setting a variable to equal an interval, which will essentially subtract 1 from the timer every second.
var timer = setInterval(countDown, 1000);

    //Timer function and ends function then show and tell for tally
    function countDown(){
        time = time - 1;
        if (time <= 0){
            clear();
            stats();
            $("#main-content").hide();
            $("#finish").show();

        }
        //id=countDown" required by homework timer.
        document.getElementById("countDown").innerHTML = " Tick Tock !! <br> " + time + " seconds remaining";

    };

    //Submit button, to end game.
    $("#submit").click(function(){
        $("#main-content").hide();
        stats();
    });

    //The function that will clear out the timer if timer runs out.
    function clear(){
        clearInterval(timer);
    };
    //MDN sample to try if time allows
    //$( "input[type=radio].tags" ).val(function( index, value ) {
    //return value.trim();
    //});
    //The function for loop for results.
    function stats(){
        correctAnswer = 0;
        incorrectAnswer = 0;
        missedAnswer =0;
        //Creating a for-loop, that will loop through each of the radio.  It will then check to see if the button is both, clicked, and whether it has a label of "right" or "incorrect."
        for (var i = 0; i < 10; i++) {
            var radios = document.getElementsByName('q'+i);
            for (var n = 0; n < radios.length; n++) {
                var radio = radios[n];
                //If the input is clicked, and correct, it will add 1 to the users correct answer count.
                if (radio.value === "correct" && radio.checked){
                    correctAnswer++
                //However, if the input is clicked, and incorrect, it will add 1 to the users incorrect answer count.
                }else if (radio.value === "incorrect" && radio.checked){
                    incorrectAnswer++
                } // else if radio.value === ("incorrect" || "correct") && radio.checked){
                //missedAnswers++
                //}

            }
        }

        //Adding text to the HTML, to indicate to the user the amount of correct and incorrect answers he or she has.
        $("#correct").html( correctAnswer + " correct answers<br>Grab a drink on the 95th.");
        $("#incorrect").html( incorrectAnswer + " missed answers<br>The CAF has a great walking tours. ");
        //unable to make for loop do calculations,out of time!!
        $("#missed").html((9 - (correctAnswer + incorrectAnswer)) + " unchecked answers<br>Usually best to avoid potholes.");
        $("#end").html("justofflsd.com");
    }
});