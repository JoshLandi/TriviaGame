//Variables

var questions = [{

    question: "What is maize?",
    answers: ["Corn", "A New Drug", "Fruit", "Something you get lost in"],
    correctAns: "Corn",
    img: "assets/images/maize1.jpg"
}, {
    question: "What color is maize?",
    answers: ["Black", "Blue", "Many Colors!", "Neon Green"],
    correctAns: "Many Colors!",
    img: "assets/images/maize2.jpg"
}, {
    question: "What kind of plant is maize?",
    answers: ["Mushroom", "Cereal Grain", "Breakfast Cereal", "Legume"],
    correctAns: "Cereal Grain",
    img: "assets/images/CerealGrain.jpg"
}, {
    question: "Where was maize domesticated?",
    answers: ["The Nile Delta", "The Steppe of Mongolia", "Reno, Nevada", "The Tehuacan Valley of Mexico"],
    correctAns: "The Tehuacan Valley of Mexico",
    img: "assets/images/TehuacanValley.jpeg"
}, {
    question: "How fast do the leaves on maize grow?",
    answers: ["3 millimeters a day", "3 millimeters a year", "3 millimeters an hour", "3 millimeters a parsec"],
    correctAns: "3 millimeters a day",
    img: "assets/images/maize3.jpg"

}];

var triviaGame = {
    questions:questions,
    currentQuestion: 0,
    counter: 10,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    countdown: function(){

        triviaGame.counter--;

        $("#counter").html(triviaGame.counter);
        
        if (triviaGame.counter<=0){
            console.log("Time's Up!");
            triviaGame.timeUp();
        }

    },

    loadQuestion: function(){

        timer = setInterval(triviaGame.countdown, 1000);

        $("#wrapper2").html("<h2>Maize Remaining: <span id='counter'>10</span> seconds</h2>");
        $("#wrapper2").append("<h2>" + questions[triviaGame.currentQuestion].question + "</h2>");

        for (var i = 0; i < questions[triviaGame.currentQuestion].answers.length; i++) {
            $("#wrapper2").append("<button class='answer-button' id='button- " + i + "' data-name='" + questions[triviaGame.currentQuestion].answers[i] + "'>" + questions[triviaGame.currentQuestion].answers[i]+"</button>");
            
        }
        
    },

    nextQuestion: function(){

        triviaGame.counter = 10;

        $("#counter").html(triviaGame.counter);

        triviaGame.currentQuestion++;

        triviaGame.loadQuestion();

    },

    timeUp: function(){

        clearInterval(timer);
        triviaGame.unanswered++;
        $("#wrapper2").html("<h2>OUT OF MAIZE</h2>");
        $("#wrapper2").append("<h3>The Correct Answer Was: " + questions[triviaGame.currentQuestion].correctAns + "</h3>");

        if (triviaGame.currentQuestion == questions.length -1){
            
            setTimeout(triviaGame.results, 3*1000);

        } else {

            setTimeout(triviaGame.nextQuestion, 3*1000);
        }

    },

    results: function(){

        clearInterval(timer);
        $("#wrapper2").html("<h1>Maize Navigated</h1>");
        $("#wrapper2").append("<h1>Correct: " + triviaGame.correct + "</h1>");
        $("#wrapper2").append("<h1>Incorrect: " + triviaGame.incorrect + "</h1>");
        $("#wrapper2").append("<h1>Unanswered: " + triviaGame.unanswered + "</h1>")

        $("#wrapper2").append("<button id='reset'>CANT GET ENOUGH</button>")
    },

    clicked: function(event){

        clearInterval(timer);

        if($(event.target).data("name") == questions[triviaGame.currentQuestion].correctAns){
            
            triviaGame.answeredCorrect();
            
           
        } else {

            triviaGame.answeredIncorrect();
            
        }

    },

    answeredCorrect: function(){
        
        console.log("Correct");
        clearInterval(timer);

        triviaGame.correct++;
        $("#wrapper2").html("<h2>YOU'RE A MAIZE MASTER!</h2>");

        if (triviaGame.currentQuestion == questions.length -1){
            
            setTimeout(triviaGame.results, 3*1000);

        } else {

            setTimeout(triviaGame.nextQuestion, 3*1000);
        }
    },

    answeredIncorrect: function(){
        
        console.log("Incorrect");
        clearInterval(timer);

        triviaGame.incorrect++;
        $("#wrapper2").html("<h2>It's aMAIZEing how dumb you are (about maize).</h2>");
        $("#wrapper2").append("<h3>The Correct Answer Was: " + questions[triviaGame.currentQuestion].correctAns + "</h3>");

        if (triviaGame.currentQuestion == questions.length -1){
            
            setTimeout(triviaGame.results, 3*1000);

        } else {

            setTimeout(triviaGame.nextQuestion, 3*1000);
        }
    },

    reset: function(){

        triviaGame.currentQuestion = 0;
        triviaGame.counter = 0;
        triviaGame.correct = 0;
        triviaGame.incorrect = 0;
        triviaGame.unanswered = 0;
        triviaGame.loadQuestion();
    },


}

//Click Events

$("#Begin").on("click", function(){

    $("#Begin").remove();
    triviaGame.loadQuestion();

});

$(document).on("click", ".answer-button", function(event){

    triviaGame.clicked(event);

});

$(document).on("click", "#reset", function(){

    triviaGame.reset();

});