// let x = prompt('Введите строку');
// (x == 'JS') ? alert('Привет, JS') : alert('Вы ввели какую-то строку')


// let num = prompt('Введите число');
// if (num > 0) {
//     document.write('Положительное')
// }

// else if (num == 0) {
//     document.write('Ноль')
// }

// else {
//     document.write('Отрицательное')
// }




// let number = prompt('Введите двухзначное число');
// let action = `${number}` % 10;
// if (action > 5) {
//     alert('>')
// }

// else {
//     alert('<')
// }



// let a;
// let b;
// let c;
// a = prompt('Введите число а')
// b = prompt('Введите число b')
// c = prompt('Введите число c')
// if (a > b && a > c) {
//     alert(`Большее из всех чиcло ${a}`)
// }

// else if (b > a && b > c) {
//     alert(`Большее из всех чиcло ${b}`)
// }

// else {
//     alert(`Большее из всех чиcло ${c}`)
// }



let one = prompt('Введите 1 любое число от 0 до 999');
let two = prompt('Введите 2 любое число от 0 до 999');
let three = prompt('Введите 3 любое число от 0 до 999');
let x = one || two || three;
let onenumber = `${x}` > 0 && `${x}` < 10;
let twonumber = `${x}` > 10 && `${x}` < 100;
let threenumber = `{x}` > 100 && `{x}` < 1000;




