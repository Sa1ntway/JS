let answer_form = document.querySelector('.answer-form');
let input = document.querySelector('input');
let okbutton = document.querySelector('.ok');
let startButton = document.querySelector('.start');
let restartButton = document.querySelector('.restart')
let text = document.querySelector('.text');
let number = 0;
let attempts = 3;
startButton.addEventListener('click', function () {
    startButton.style.display = 'none';
    restartButton.style.display = 'block';
    answer_form.style.display = 'flex';
    text.innerHTML = 'Введи любое число от 1 до 10';
    number = Math.floor(Math.random() * 10)
})


okbutton.addEventListener('click', function () {
    attempts--
    answer = input.value;
    if (answer < number) {
        text.innerHTML = `Моё число больше! Осталось попыток: ${attempts}`;
    }
    else if (answer > number) {
        text.innerHTML = `Моё число меньше! Осталось попыток: ${attempts}`;
    }
    else if (answer == number) {
        answer_form.style.display = 'none';
        text.innerHTML = 'Поздравляю, ты угадал число!';
    }
    if (attempts == 0) {
        answer_form.style.display = 'none';
        text.innerHTML = 'Ты проиграл :('
    }
    input.value = '';

})

restartButton.addEventListener('click', function () {
    answer_form.style.display = 'flex';
    number = Math.floor(Math.random() * 10)
    text.innerHTML = 'Введи любое число от 1 до 10'
    input.value = '';
    attempts = 3;

})