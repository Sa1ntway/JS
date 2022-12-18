let attempts = 1;
let ask;
let end_number = +prompt(`Цель игры - отгадать целое число, которое 'загадал'
компьютер. Диапазон секретных чисел начинается с 0.
 Максимальное возможное число определяется игроком.
 После очередной попытке угадать число компьютер должен
 указать больше ли или меньше загаданное число, чем то, 
 которое ввёл игрок. Используя эту инофрмацию, игрок должен 
 угадать число за минимальное кол-во ходов. Ниже
 введите число, до которого можно загать секретное число и 
 приступй к игре
 `)
let number = Math.ceil(Math.random() * end_number);
let answer;
while (number != answer) {
    answer = +prompt(`Введите число от 1 до ${end_number}`)
    if (answer > number) {
        alert('Загаданное число меньше!');
        attempts++;
    }
    else if (answer < number) {
        alert('Загаданное число больше!');
        attempts++;
    }
    else if (answer == number) {
        alert('Вы угадали! ' + ' попыток: ' + attempts);
        ask = prompt('Хотите ли вы еще раз сыграть вы игру?');
        if (ask == 'да') {
            document.location.reload();
        }
        break;
    }
    if (attempts == 6) {
        alert('Ты проиграл! Ну, ничего, повезёт в следующий раз!')
        ask = prompt('Хотите ли вы еще раз сыграть вы игру?');
        if (ask == 'да') {
            document.location.reload();
        }
    }
    console.log(1);
}

