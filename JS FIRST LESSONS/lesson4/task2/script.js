// let name = 'Pavel';
// if (name == 'Vlad') {
//     document.write('You are Vlad')
// }
// else if (name == 'Danik') {
//     document.write('You are Danik')
// }
// else {
//     document.write('You are not Vlad')
// }

let number = prompt('Введите любое однозначное, двухзначное или трехзначное число')
if (number < 10) {
    document.write('Однозначное')
}

else if (number > 10 && number < 99) {
    document.write('Двухзначное')
}

else if (number > 100 && number < 1000) {
    document.write('Трехзначное')
}

else {
    document.write('Вы ввели не правильное число')
}