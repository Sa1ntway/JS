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




// PRESENTATION PRACTICUM EASY
// task 2
// function check() {
//     let a = +prompt('Введите целое число');
//     if (a > 0) {
//         return true;
//     }
//     return false;

// }
// console.log(check())





// // task3
// function check(word) {
//     let reversedWord = word.split('').reverse().join('');
//     if (reversedWord == word) {
//         return true;
//     }
//     return false;


// }
// console.log(check('привет'))





// task4
// function count(num) {
//     if (num > 0) {
//         let changeNum = num * -1;
//         for (let i = changeNum; i <= num; i += 2) {
//             console.log(i)
//         }

//     }
//     else {
//         let changeNum = num * -1;
//         for (let i = changeNum; num <= i; i -= 2) {
//             console.log(i)
//         }
//     }

// }

// count(-5)





// task 5
// function field(circle, rectangle, right_triangle) {
//     let a = +prompt('Введите a');
//     let b = +prompt('Введите b');
//     let R = +prompt('Введите R');
//     let right_triangleFormula = a * b / 2;
//     let rectangleFormula = a * b;
//     let circleFormula = 3.14 * R * R;
//     rectangle = rectangleFormula;
//     circle = circleFormula;
//     right_triangle = right_triangleFormula;
//     console.log('Площадь прямоугольника: ' + rectangle, 'Площадь круга: ' + circle, 'Площадь прямоугольного треугольника: ' + right_triangle);

// }
// field()





// task 6
// function calc(num1, num2, operation) {
//     let add = num1 + num2;
//     let substract = num1 - num2;
//     let division = num1 / num2;
//     let mult = num1 * num2;
//     if (operation == '+') {
//         return add;
//     }
//     else if (operation == '-') {
//         return substract;
//     }
//     else if (operation == '/') {
//         return division;
//     }
//     else if (operation == '*') {
//         return mult;
//     }

// }
// console.log(calc(2, 5, '*'));








// task 6 my
// function calc(num1, num2) {
//     let add = num1 + num2;
//     let substract = num1 - num2;
//     let division = num1 / num2;
//     let mult = num1 * num2;
//     let ask = +prompt(`Введите какую операцию вы бы хотели сделать
//     1. add
//     2. substract
//     3. division
//     4. mult`)

//     if (ask == 1) {
//         console.log(add);
//     }
//     else if (ask == 2) {
//         console.log(substract);
//     }
//     else if (ask == 3) {
//         console.log(division);
//     }
//     else if (ask == 4) {
//         console.log(mult)
//     }

// }
// calc(2, 5)






// task 7
// function check(num1, num2) {
//     if (num1 > num2) {
//         return num1
//     }
//     return num2;
// }
// console.log(check(-10, -5));



// task 9
// function check(num1) {
//     if (num1.toString().length == 2) {
//         for (let i = 0; i <= num1; i++) {
//             if (num1 % i === 0) {
//                 console.log(i)
//             }
//         }
//     }
//     else {
//         console.log('ERROR! Check ur number!')
//     }
// }

// check(24)





// New presentation medium level
// task1
// array = [1, 2, 3, 4]
// function average(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i];
//         result += num;
//     }

//     return result / array.length;
// }
// console.log(average([1, -2, 4, 6, -10]));
// console.log(average([-3, 5, 10]));



// task2
// array = [1,4,3,2]
// return array.sort().reverse();
// function sort(array) {
// for(let i = 0; i)
// }
// console.log(sort([1, 4, 3, 2]))


// task3
// function sections(num1) {
//     let numStr = num1.toString();
//     let i = 0;
//     return numStr.length;
// }
// console.log(sections(123));




// TASK2
// array = [6, 3, 5, 1]
// function sort(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let b = i + 1; b < array.length; b++) {
//             if (array[i] < array[b]) {
//                 let c = array[i];
//                 array[i] = array[b];
//                 array[b] = c;
//             }
//         }
//     }
//     return array
// }
// console.log(sort([6, 3, 5, 1]));




// task4
// function reverse(string) {
//     let splited = string.split(' ').reverse().join(" ");
//     console.log(splited);
// }

// console.log(reverse('я учусь в Айтигенио'))


// task5
function mult(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            document.write('<ins>' + array[i] + '</ins>')
        }
        else {
            document.write(array[i])
        }
    }
}
mult([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);














