function builQuiz() {

    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                <input type='radio' name='question${questionNumber}' value="${letter}'>
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class='question'> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
};


function showResults() {
    const answerContainer = quizContainer.querySelector('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainer[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainer[questionNumber].style.color = 'lightgreen';
        }
        else {
            answerContainer[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

}


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
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
];

builQuiz();

submitButton.addEventListener('click', showResults);




