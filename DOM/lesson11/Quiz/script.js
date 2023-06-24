const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
function builQuiz();
submitButton.addEventListener('click', showResults);
const myQuestions = [
    {
        question: "Какая компания сделала игру DotA 2?",
        answers: {
            a: 'Valve',
            b: 'Epic Games',
            c: 'Riot Games',
        },
        correctAnswer: 'a'
    },
    {
        question: "Зачем нужен компрессор?",
        answers: {
            a: 'Для красоты',
            b: 'Красит звук',
            c: 'Уменьшает разницу самого тихого и самого громкого звука в миксе',
        },
        correctAnswer: 'c'
    },
    {
        question: "Что такое HTML?",
        answers: {
            a: 'Язык програмирования',
            b: 'Язык разметки страницы',
            c: 'Аббревиатура непонятная',
        },
        correctAnswer: 'b'
    },
]

myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
        answers.push(
            `<label>
            <input type='radio' name='question${questionNumber}' value = "${letter}'
            ${letter} :
            ${currentQuestion.asnwer[letter]}
            </label>`
        );
    }


    output.push(
        `<div class='question'>`
    )
});