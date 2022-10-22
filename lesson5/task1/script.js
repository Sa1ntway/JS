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



// let one = prompt('Введите 1 любое число от 0 до 999');
// let two = prompt('Введите 2 любое число от 0 до 999');
// let three = prompt('Введите 3 любое число от 0 до 999');
// let four = prompt('Введите 4 любое число от 0 до 999');
// let five = prompt('Введите 5 любое число от 0 до 999');

// let oneDigitCounter = 0;
// let twoDigitCounter = 0;
// let threeDigitCounter = 0;

// if (one.length === 1) {
//     oneDigitCounter = oneDigitCounter + 1;
// }
// if (two.length === 1) {
//     oneDigitCounter = oneDigitCounter + 1;
// }
// if (three.length === 1) {
//     oneDigitCounter = oneDigitCounter + 1;
// }
// if (four.length === 1) {
//     oneDigitCounter = oneDigitCounter + 1;
// }
// if (five.length === 1) {
//     oneDigitCounter = oneDigitCounter + 1;
// }


// if (one.length === 2) {
//     twoDigitCounter = twoDigitCounter + 1;
// }
// if (two.length === 2) {
//     twoDigitCounter = twoDigitCounter + 1;
// }
// if (three.length === 2) {
//     twoDigitCounter = twoDigitCounter + 1;
// }
// if (four.length === 2) {
//     twoDigitCounter = twoDigitCounter + 1;
// }
// if (five.length === 2) {
//     twoDigitCounter = twoDigitCounter + 1;
// }


// if (one.length === 3) {
//     threeDigitCounter = threeDigitCounter + 1;
// }
// if (two.length === 3) {
//     threeDigitCounter = threeDigitCounter + 1;
// }
// if (three.length === 3) {
//     threeDigitCounter = threeDigitCounter + 1;
// }
// if (four.length === 3) {
//     threeDigitCounter = threeDigitCounter + 1;
// }
// if (five.length === 3) {
//     threeDigitCounter = threeDigitCounter + 1;
// }


// alert(`однозначные: ${oneDigitCounter}, двузначные: ${twoDigitCounter}, трёхзначные: ${threeDigitCounter}`)





// let random = Math.floor(Math.random() * 60);
// if (random >= 0 && random < 15) {
//     console.log(random, '1st quarter')
// }

// else if (random >= 15 && random < 30) {
//     console.log(random, '2nd quarter')
// }

// else if (random >= 30 && random < 45) {
//     console.log(random, '3rd quarter')
// }

// else {
//     console.log(random, '4th quarter')
// }



let random = Math.floor(Math.random() * 5) || 1;
if (random === 1) {
    console.log(random, 'Winter');
}

else if (random === 2) {
    console.log(random, 'Spring')
}

else if (random === 3) {
    console.log(random, 'Summer')
}

else {
    console.log(random, 'Autumn')
}









