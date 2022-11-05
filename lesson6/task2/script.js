// let date = new Date();
// let hour = date.getHours();
// if (hour > 9 && hour < 12) {
//     console.log('Доброе утро!');
// }
// else if (hour >= 12 && hour < 17) {
//     console.log('Добрый день!')
// }

// else if (hour >= 16 && hour < 22) {
//     console.log('Добрый вечер!')
// }


// let username = prompt('Введите ваше имя');
// let password = prompt('Введите пароль(Должен состоять цифры, не иметь в себе символов #?,.)');
// let surname = prompt('Введите вашу фамилию');
// let age = prompt('Введите ваш возраст')
// if (!username && password && age && surname) {
//     alert('Пожалуйста, введите своё имя')
// }
// else if (username && !password && age && surname) {
//     alert('Пожалуйста, введите пароль')
// }
// else if (username && password && !age && surname) {
//     alert('Пожалуйста, введите ваш возраст')
// }
// else if (username && password && age && !surname) {
//     alert('Пожалуйста, введите вашу фамилию')
// }
// else if (!(password.length > 8 && password.length < 20) || password.includes('пароль')) {
//     alert('Пароль не соответсвует требованиям. Проверьте длину пароля и не содержит ли он слово "пароль "')
// }
// else if (!(password.includes('1'))      ) {
//     alert('Пароль не соответсвует требованиям. Проверьте, пароль должен содержать цифры ')
// }
// else if (!(password.includes('#?*,.'))) {
//     alert('Пароль не соответсвует требованиям. Проверьте не содержит ли он символы #?,.')
// }

// else if (surname && age && username && password) {
//     alert('Добро пожаловать на сайт Айтигенио!')
// }





// let isActive = prompt('Ты был активным на занятии?');
// let homeTaskDone = prompt('Ты сделал домашнее задание?');
// if (isActive == 'да' && homeTaskDone == 'да') {
//     alert('Молодец хорошо поработал!')
// }
// else if (isActive == 'нет' && homeTaskDone == 'да') {
//     alert('Будь чуть внимательнее в следущий раз!')
// }
// else if (isActive == 'нет' && homeTaskDone == 'нет') {
//     alert('Тебе не нравятся наши занятия?')
// }
// else if (isActive == 'да' && homeTaskDone == 'нет') {
//     alert('Попробуй находить врямя на домашку!')
// }


let isActive = true;
let homeTaskDone = false;
if (isActive == true && homeTaskDone == true) {
    alert('Молодец, хорошо пороботал!')
}
else {
    alert('Сегодня ты не очень активно работал, пожалуйста будь внимательнее в следущий раз!')
}
