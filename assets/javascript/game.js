
$(document).ready(function() {
//rethinking one day reprieve
// start 
// start button 
// clear

// start timer
// show questions
// stop timer
// clear questions

var correctAnswer = 0;
var incorrectAnswer = 0;
var missedAnswer = 0;
var time = 30;
//Setting a variable to equal an interval, which will essentially subtract 1 from the timer every second.
var timer = setInterval(counter, 1000);

    //The function that works with the timer on the game.  Once the time reaches 0, certain content will clear out, to allow for the scoring div to appear.
    function counter(){
        time = time - 1;
        if (time <= 0){
            clear();
            stats();
            $("#main-content").hide();
            $("#finish").show();

        }
        //This replaces the element in the HTML of "counter" to alert the user of how many seconds are remaining.
        document.getElementById("counter").innerHTML = "The Clock is Ticking!! " + time + " seconds remaining";

    };


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


// at end of timer 
//MDN sample to try if time allows
//$( "input[type=value].tags" ).val(function( index, value ) {
//return value.trim();
//});



var correctAnswer = 0;
// should work but too simple??
var incorrectAnswer = 6 - correctAnswer;

//Correct answer function
function correct(){
    var correctAnswer = 0;
    $(".calc:checked").each(function(){
        correctAnswer+=parseInt($(this).val(),10);
    });
    $("input[name=sum]").val(correctAnswer) 
}
$().ready(function(){
    $(".calc").change(function(){
        correct()
    });
});

          
// run function to add all on clicks matching true and return as "you matched"
// add all clicks matching false or none retun as "you missed"
// reset using different quesitons, if time allows

// You'll create a trivia form with multiple choice or true/false options (your choice).

//The player will have a limited amount of time to finish the quiz. 

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

//Don't let the player pick more than one answer per question.

//Don't forget to include a countdown timer.

 }); //ends (document).ready(function() frome line 1 


