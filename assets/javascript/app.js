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

    },

    loadQuestion: function(){

    },
}

//Functions

$("#Begin").on("click", function(){
    $("#Begin").remove();
    $("<div>").append("<img src='../images/maize1.jpg'>")
})