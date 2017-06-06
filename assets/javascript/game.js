
$(document).ready(function() {
//rethinking one day reprieve
// start 
// strt button 
// clear
// start timer
// show questions
// stop timer
// clear questions
// push results


// You'll create a trivia form with multiple choice or true/false options (your choice).
//The player will have a limited amount of time to finish the quiz. 
// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//Timer logic

var count=25;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer(){
    count=count-1;
    if (count <= -1){
     clearInterval(counter);
     return;
    }

document.getElementById("time").innerHTML= "you have " + count + " seconds to complete game."; // watch for spelling
};



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


