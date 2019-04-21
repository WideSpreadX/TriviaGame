//=========================== START BUTTON CLICKED
function startRound() {
    var nextRound = document.getElementById("start")


    timeLeft
};
console.log(startRound());
//=========================== TIMER

//=========================== SCORE

//=========================== THE QUESTIONS ARENA
var element = document.getElementById("question");
element.innerHTML = quiz.getQuestionIndex().text;

var choices = quiz.getQuestionIndex().choices;
for (var i = 0; i < choices.length; i++) {
    var element = document.getElementById("choice" + i);
    element.innerHTML = choices[i];
    guess("btn" + i, choices[i]);
}

console.log(choices)
var questions = [

    new Question("Where can a script tag be placed directly within an HTML document?",
        [
            "title",
            "body",
            "script",
            "table"
        ], "body"
    ),
    new Question("Where can a script tag be placed directly within an HTML document?",
        [
            "title",
            "body",
            "script",
            "table"
        ], "body"
    ),
    new Question("Where can a script tag be placed directly within an HTML document?", [
        "title",
        "body",
        "script",
        "table"
    ], "body"
    ),
];
/*{
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
},
{
    question: "What is the full form of http?",
        answers: {
        a: "The Hypertext Transfer Protect",
            b: "The Hypertext Translation Programming",
                c: "The Hypertext Tranfer Protocol",
                    d: "The Hypertext Markup Language"
    },
    correctAnswer: "c"
},
{
    question: "Which entity is used to add an ampersand (&) symbol in HTML?",
        answers: {
        a: "&amp;",
            b: "&&",
                c: "&ampersand;",
                    d: "%amp,"
    },
    correctAnswer: "a"
},
{
    question: "Which of the following attributes triggers an event when the audio/video has reached the end?",
        answers: {
        a: "ondrop",
            b: "onended",
                c: "ondurationchange",
                    d: "onemptied"
    },
    correctAnswer: "b"
},
{
    question: "Which one of these tags is most likely to be used to define an ordered list?",
        answers: {
        a: "<ul>",
            b: "<or>",
                c: "<ol>",
                    d: "<list>"
    },
    correctAnswer: "c"
},
{
    question: "Which one of these elements is mandatory for all valid HTML documents?",
        answers: {
        a: "<header>",
            b: "<script>",
                c: "<head>",
                    d: "<style>"
    },
    correctAnswer: "b"
},
{
    question: "What does the <title> define?",
        answers: {
        a: "Title for the paragraph",
            b: "Nothing",
                c: "Title for the object",
                    d: "Title for the document"
    },
    correctAnswer: "d"
},
{
    question: "Which tag is used to make the text italic?",
        answers: {
        a: "<i>...</i>",
            b: "</i>...",
                c: "<b>...</i>",
                    d: "<it>...</it>"
    },
    correctAnswer: "a"
},
{
    question: "What is the default character encoding in HTML5?",
        answers: {
        a: "ASCII",
            b: "UTF-8",
                c: "UTF-16",
                    d: "EBCDIC"
    },
    correctAnswer: "b"
},
{
    question: "Which HTML5 attribute allows an element to be moved around the webpage?",
        answers: {
        a: "ondrag ='true'",
            b: "draggable = 'true'",
                c: "movable = 'true'",
                    d: "onmove - 'true'"
    },
    correctAnswer: "b"
},
{
    question: "How many <tr> and <td> tags are needed for a 2 by 2 table?",
        answers: {
        a: "2 <tr> and 2 <td>",
            b: "4 <tr> and 2 <td>",
                c: "2 <tr> and 4 <td>",
                    d: "4 <tr> and 4 <td>"
    },
    correctAnswer: "c"
},
{
    question: "Which of the following attributes specifies that an input field must be filled out before submitting the form?",
        answers: {
        a: "required",
            b: "output",
                c: "autofocus",
                    d: "placeholder"
    },
    correctAnswer: "a"
},
{
    question: "The <li> tag is used to define a:",
        answers: {
        a: "There is no such thing as an <li> tag",
            b: "Line item",
                c: "List item",
                    d: "Large item"
    },
    correctAnswer: "c"
},
{
    question: "The <label> tag is more likely to be used with which of the following elements?",
        answers: {
        a: "<nav",
            b: "<p>",
                c: "<header>",
                    d: "<input>"
    },
    correctAnswer: "d"
}
];*/

//Timer

var timeLeft = 20;
var elem = document.getElementById("timer");

var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft <= 0) {
        clearTimeout(timerId);
        timerId++;
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
};


console.log(countdown());
console.log(timeLeft);
console.log(questions);


// Question

var newQuestion = getQuestion();


function getQuestion() {
    console.log(questions[i].question);
    var theQuestion = document.getElementById('quiz');
    theQuestion.innerHTML = questions[i].question;
    var optionA = document.getElementById('btn-1');
    optionA.innerHTML = questions[i].answers.a;
    var optionB = document.getElementById('btn-2');
    optionB.innerHTML = questions[i].answers.b;
    var optionC = document.getElementById('btn-3');
    optionC.innerHTML = questions[i].answers.c;
    var optionD = document.getElementById('btn-4');
    optionD.innerHTML = questions[i].answers.d;
};

console.log(newQuestion);

// Uses the usual "for" loop to iterate
for (var i = 0, i = questions.length; i < l; i++) {
    console.log(questions[i]);
}


//Uses forEach to iterate
questions.forEach(function (item, index) {
    console.log(item);
});
// Correct Answer

getAnswer();


function getAnswer() {
    var theAnswer = (correctAnswer === getElementById()
    )
};
console.log(getAnswer);

// Start Button

startRound();


