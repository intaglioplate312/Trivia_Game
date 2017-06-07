
$(document).ready(function() {
//rethinking one day reprieve
//To start, hide then show
    $("#main-content").hide();
    // start button, start timer
    $(".start").click(function(){
        $(".start").hide();
        // show questions
        $("#main-content").show();
        $("#finish").hide();
    });
    // stop timer
    $("#submit").click(function(){
        // clear questions
        $("#main-content").hide();
        $("#finish").show();
    });
    
//Declaring variables 
var correctAnswer = 0;
var incorrectAnswer = 0;
var missedAnswer = 0;
var time = 45;
//Subtract 1 from the timer every second.
var timer = setInterval(countDown, 1000);

//The function that works with the timer on the game.  Once the time reaches 0, certain content will clear out, to allow for the scoring div to appear.
    function countDown(){
        time = time - 1;
        if (time <= 0){
            clear();
            stats();
            $("#main-content").hide();
            $("#finish").show();

        }
        //This replaces the element in the HTML of "countDown" to alert the user of how many seconds are remaining.
        document.getElementById("countDown").innerHTML = "The Clock is Ticking!! " + time + " seconds remaining";

    };


    //Submit button, to end game.
    $("#submit").click(function(){
        $("#main-content").hide();
        stats();
    });
// stop timer
// clear questions
//The function that will clear out the timer once the user is finished.
    function clear(){
        clearInterval(timer);
    };

// You'll create a trivia form with multiple choice or true/false options (your choice).
//The player will have a limited amount of time to finish the quiz. 
// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//Timer logic





//  Call timer
//  $(".test").click(function () {
//  var timer = 20;
//  display = document.querySelector('#time');
//  startTimer(timer, display);
//  });

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
                //missedAns++
                //}

            }
      console.log(correctAnswer);
      console.log(incorrectAnswer)
      console.log(missedAnswer)
          
// run function to add all on clicks matching true and return as "you matched"
// add all clicks matching false or none retun as "you missed"
// reset using different quesitons, if time allows

// You'll create a trivia form with multiple choice or true/false options (your choice).

//The player will have a limited amount of time to finish the quiz. 

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

//Don't let the player pick more than one answer per question.

//Don't forget to include a countdown timer.

 }); //ends (document).ready(function() frome line 1 


