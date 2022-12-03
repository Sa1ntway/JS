// for (let x = 0; x < 100; x = x + 10) {
//     console.log(x)
// }

// task2
// let a = Number(prompt('Введите любое первое целое число(должно быть меньше второго)'));
// let b = Number(prompt('Введите любое второе целое число(должно быть больше первого'));
// let variable = 0;
// while (a < b) {
//     a++;
//     console.log(a)
// }








// let x = 0;
// while (x < 100) {
//     x++;
//     console.log(x)
// }



// let x = 10;
// while (x < 30) {
//     x++;
//     console.log(x)
// }



let n = Number(prompt('Введите число num'));
let it_num = 0;
while (n < 1000) {
    n = n * 3;
    console.log(n)
    it_num++;
    if (n > 1000) {
        break;
    }


}
console.log('Цикл выполнен ' + it_num + ' раз');








