
// Задача 1
// let a = +prompt('Введите первое число');
// let b = +prompt('Введите второе число');
// let operation = prompt('Введите операцию')
// switch (operation) {
//     case "+":
//         alert(a + b);
//         break;
//     case "-":
//         alert(a - b);
//         break;
//     case "*":
//         alert(a * b);
//         break;
//     case "/":
//         alert(a / b);
//         break;
//     default:
//         alert('Not found');
//         break;
// }


// Задача 2
// let dayNumber = new Date().getDay();
// switch (dayNumber) {
//     case 0:
//         alert(day = 'Воскресенье');
//         break;
//     case 1:
//         alert(day = 'Понедельник');
//         break;
//     case 2:
//         alert(day = 'Вторник');
//         break;
//     case 3:
//         alert(day = 'Среда');
//         break;
//     case 4:
//         alert(day = 'четверг');
//         break;
//     case 5:
//         alert(day = 'Пятница');
//         break;
//     case 6:
//         alert(day = 'Суббота');
//         break;
//     default:
//         alert(day = 'Неизвестный день недели')
//         break;

// }
// console.log('Сгодня ' + day.toLowerCase() + '.')





// задача 3
let age = Number(prompt('Сколько вам лет?'));
let baby = 'Вы ребёнок';
let teenager = 'Вы подросток';
let adult = 'Вы взорслый';
let old = 'Вы пожилой'
switch (true) {
    case age >= 1 && age <= 12:
        alert(baby);
        break;
    case age >= 13 && age <= 18:
        alert(teenager);
        break;
    case age >= 19 && age <= 40:
        alert(adult);
        break;
    case age >= 39 && age <= 100:
        break;
}




