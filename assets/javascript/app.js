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

        $("#wrapper2").html("<h2>" + questions[triviaGame.currentQuestion].question + "</h2>");

        for (var i = 0; i < questions[triviaGame.currentQuestion].answers.length; i++) {
            $("#wrapper2").append("<button class='answer-button' id='button- " + i + " data-name='" + questions[triviaGame.currentQuestion].answers[i] + "'>" + questions[triviaGame.currentQuestion].answers[i]+"</button>");
            
        }
        
    },

    nextQuestion: function(){

    },

    timeUp: function(){

    },

    results: function(){

    },

    clicked: function(){

    },

    answeredCorrect: function(){

    },

    answeredIncorrect: function(){

    },

    reset: function(){

    },


}

//Functions

$("#Begin").on("click", function(){
    $("#Begin").remove();
    triviaGame.loadQuestion();
})