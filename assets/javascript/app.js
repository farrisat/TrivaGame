var questionBank = [

        {Q: "The painting La Gioconda is better known by what name?", 
        A: "Mona Lisa",
        F1: "F1A",
        F2: "F1B",
        F3: "F1C"
        },
        {Q: "Si vous pouvez lire cette question, que'est-ce que le couleur de ma voiture?",
        A: "argent",
        F1: "rouge",
        F2: "vert",
        F3: "marron"
    },
        {Q: "Q3",
        A: "A3",
        F1: "F3A",
        F2: "F3B",
        F3: "F3C"
    },     
        {Q: "Q4",
        A: "A4",
        F1: "F4A",
        F2: "F4B",
        F3: "F4C"

    }]




//  <div id = "counterSpace" >
// </div>

// <div id = "questionSpace">

// setTimeout(timeUp, 1000*60);
// function timeUp(){
//  $("#counterSpace") .append("<h2>Time's Up!</h2>")  
// }
var numRight = 0

function grader() 
{
        console.log("Grading")
        var value= $("input[type='radio']")
        console.log(value[0])
        for(var i = 0; i < value.length; i++) {
            if (value[i].value === questionBank[value[i].name].A && value[i].checked===true) {
                console.log("Right!")
                numRight = numRight + 1
            }
        }
       $("#questionSpace").empty()
       $("#questionSpace").append("You got " + numRight + "  correct! And " +(questionBank.length-numRight)+ " wrong. :(")
}

function callQuestion () {
   //$("#questionSpace").append('<form action="" onsubmit="return grader()">')

    for (let i = 0; i < questionBank.length; i++) {
        var cq = questionBank[i]
     $("#questionSpace").append(cq.Q)
     var answers = [cq.A, cq.F1, cq.F2, cq.F3]
     //shuffle(answers)
     for (var j = answers.length-1; j >=0; j--) {
     
        var randomIndex = Math.floor(Math.random()*(j+1)); 
        var itemAtIndex = answers[randomIndex]; 
         
        answers[randomIndex] = answers[i]; 
        answers[i] = itemAtIndex;
    }
     answers.forEach(element => {
        $("#questionSpace").append('<input type = "radio" name="' + i + '" value=' + element + '>')
        $("#questionSpace").append('<label for=' + element+ '>'+element+"</label><br><br>")
     });

    }
    //$("#questionSpace").click
    //$("#questionSpace").append('<input type = "submit" value="Submit"></form>')
    $("#questionSpace").append('<button type="button" id="grademe" onclick=>Submit</button>')
   var buttonGrade = $("#grademe").click(grader)



}
var timer 
var counter = 0
function timerCountdown (){
    var remaining = (60 -counter)
    if (remaining ===0) {
        clearInterval(timer);
        grader();
    }
    $("#counterSpace").empty();
    $("#counterSpace").append("Countdown: " + remaining + " seconds");
    counter++;
    
   }

function startQuiz () {
    $("#startGame").empty();
   // counter = 0
   // setInterval w/ render function, every 1 sec
   // render function:
   // output max_time - counter
   // increment counter
  timer = setInterval(timerCountdown, 1000)
   

    callQuestion()

}

function startButton() {
    $("#startGame").append('<button type="button" id="start">Start</button>' )
    $("#start").click(startQuiz)
    
}

startButton();
// Print Questions to Screen
// var divQuestionContent = $("#questionSpace").text(questionBank.Q1);
// console.log(divQuestionContent + "")






// Timer to countdown question


// Change w.timer pause screen  for next question

//Final screen scoredboard and option to restart without reloading page






