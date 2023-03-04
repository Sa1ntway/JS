// function mult(n, m) {
//     return n * m;
// }
// alert(mult(3, 5))




// task 3
// function func(age) {
//     if (age > 12) {
//         return 'Доступ разрешён.';
//     }
//     else {
//         return 'Доступ запрещён!';

//     }
// }

// alert(func(11))




// task 4.1
// function func(massive) {
//     let sum = 0;
//     for (let i = 0; i < massive.length; i++) {
//         count = massive[i] * massive[i]
//         sum += count
//     }
//     return sum;
// }
// console.log(func([1, 2, 3, 4]))




// task 4.2
// function getDigitsSum(num) {
//     let count = 0;
//     numString = String(num);
//     for (let i = 0; i < numString.length; i++) {
//         count += Number(numString[i])
//     }
//     return count;

// }
// alert(getDigitsSum(321));




// task 5
// function check(massive) {
//     let flag = true;
//     for (let i = 0; i < massive.length; i++) {
//         if (massive[i] < 0) {
//             flag = false
//         }
//     }
//     return flag
// }
// console.log(check([1, 2, 3, 4, 5]))