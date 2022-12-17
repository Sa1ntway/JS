// let b = Number(prompt('Введите цело число'))
// for (let a = -1; a < b; a++) {
//     a++;
//     a++;
//     console.log(a)

// }






// let b = Number(prompt('Введите целое число'))

// for (let a = 0; a < b; a++) {
//     if (b % a == 0) {
//         document.write(a + ', ')

//     }
// }






// let a = prompt('Введите фразу')
// let b = Number(prompt('Введите число раз'))
// let h = 0;
// while (h < b) {
//     a.concat(a);
//     h++;
//     console.log(a);
// }








// task4
// let a = Number(prompt('Введите число'))
// if (a === 0) {
//     a = 1;
// }
// let b = Number(prompt('Введите число'))
// if (b === 0) {
//     b = 1;
// }
// let c = Number(prompt('Введите число'))
// if (c === 0) {
//     c = 1;
// }
// let d = Number(prompt('Введите число'))
// if (d === 0) {
//     d = 1;
// }
// let e = Number(prompt('Введите число'))
// if (e === 0) {
//     e = 1;
// }
// let h = a * b * c * d * e;
// console.log(h);






// let c;
// let h = 1;
// for (let a = 0; a < 5; a++) {
//     c = Number(prompt('Введите число'))
//     if (c != 0) {
//         h = c * h;
//     }
// }
// console.log(h)





let a = Number(prompt('Введите число (меньше следуещего)'));
let b = Number(prompt('Введите число (больше предыдущего)'))
for (c = 0; a <= b; a++) {
    if (a % 3 == 0 && a % 5 == 0) {
        console.log(a + ' FizzBuzz')
    }
    else if (a % 3 == 0) {
        console.log(a + ' Fizz')
    }
    else if (a % 5 == 0) {
        console.log(a + ' Buzz')
    }

}


