var questions = [
    {
        question: "Where can a script tag be placed directly within an HTML document?",
        answers: {
            a: "title",
            b: "body",
            c: "script",
            d: "table"
        },
        correctAnswer: "b"
    },
    {
        question: "Which element is used to specify a header for a document or section in HTML?",
        answers: {
            a: "div",
            b: "section",
            c: "title",
            d: "header"
        },
        correctAnswer: "d"
    },
    {
        question: "Which entity character creates a 'minus' symbol in HTML?",
        answers: {
            a: "%subtraction",
            b: "-",
            c: "&minus;",
            d: "'-'"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of this is a valid script attribute?",
        answers: {
            a: "link",
            b: "src",
            c: "href",
            d: "i"
        },
        correctAnswer: "b"
    },
    {
        question: "The noscript tag defines:",
        answers: {
            a: "Alternate content for users not supporting server-side scripts",
            b: "Changing client's browser settings",
            c: "Turns functionality off",
            d: "JavaScript Code"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following represents the color white?",
        answers: {
            a: "#000000",
            b: "111111",
            c: "ffffff",
            d: "aaaaaa"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you know what you are doing?",
        answers: {
            a: "Because I do.",
            b: "I don't.",
            c: "Luck",
            d: "What is doing?"
        },
        correctAnswer: "a"
    }
];

//Timer

var timeLeft = 30;
var elem = document.getElementById("timer");

var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
    } else {
        document.innerHTML = timeLeft;
        timeLeft--;
    }
};

console.log(timeLeft)
console.log(questions) 