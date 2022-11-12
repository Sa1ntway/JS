// let num = prompt('Введите любое число');
// num = num.length;
// alert(num);




// let str = prompt('Напишите цитату или предложение либо какое-нибудь слово');
// if (str.length > 10) {
//     alert(str.toUpperCase());

// }
// else {
//     alert(str.toLowerCase());

// }






// let str = prompt('Введите строку(маленькими буквами)');
// let posOfA = str.indexOf('а');
// let posOfB = str.indexOf('б');
// if (posOfA < posOfB) {
//     alert('А');
// }
// else if (posOfB < posOfA) {
//     alert('Б');
// }
// else {
//     alert('Ошибка');
// }




// let str = prompt('Введите строку не менее 50 символов');
// if (str.length > 50) {
//     let x = str.replaceAll('а', 'а_');
//     x = x.replaceAll('о', 'о!');
//     console.log(x);
// }
// else {
//     console.log('Error')
// }


let answer = prompt('Как прошёл твой день?');
let trimmedAnswer = answer.trim();
let isGood = trimmedAnswer.indexOf('хорошо');
let isBad = trimmedAnswer.indexOf('плохо');
let splitedWords = trimmedAnswer.split(' ');
let countWords = splitedWords.length;

if (countWords > 1) {
    if (isGood >= 0) {
        alert('сегодня твой день')
    }
    else if (isBad >= 0) {
        alert('Улбынись и всё получится');
    }
    else {
        alert('Хорошего дня')
    }

}
else {
    alert('Ответ должен состоять из нескольких слов!')
}
