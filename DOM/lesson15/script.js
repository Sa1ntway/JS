// let date = new Date();

// let hours = date.getHours();
// if (hours < 10) {
//     hours = '0' + hours;
// }

// let min = date.getMinutes();
// if (min < 10) {
//     min = '0' + min;
// }
// let sec = date.getSeconds();
// if (sec < 10) {
//     sec = '0' + sec;
// }

// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDay()

// console.log(day + "/" + month + "/" + year);
// console.log(hours + ':' + min + ':' + sec)





// let date = new Date();
// let today = date.getDay();
// let today = 4;
// console.log(today)
// if (today == 6) {
//     console.log('Сегодня выходной');
// }
// else if (today != 6 || 7) {
//     console.log('Сегодня работаем');
//     let HowMuchToSaturday = 7 - Number(today);
//     console.log('Осталось ' + HowMuchToSaturday + ' дней до воскресенья')
// }







// let date = new Date();
// let month = date.getMonth();
// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// console.log(months[month]);


// let date = new Date(2023, 5, 18);
// let day = date.getDay();
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday', 'Sunday'];
// console.log(days[day]);


// let date1 = new Date(2000, 8, 1);
// let date2 = new Date(2010, 1, 15);
// let diff = date2.getTime() - date1.getTime();
// console.log(diff / (1000 * 60 * 60 * 24));
// console.log(diff / (1000 * 60 * 60 * 24 * 30));
// console.log(diff / (1000 * 60 * 60 * 24 * 30 * 12));



// let date = new Date(2025, 4)
// console.log(date) // четверг



// let date = new Date(2020, 2, 0);
// console.log(date.getDate()); // выведет 29, тк 2020 год - високосный
// if (date.getDate() == 29) {
//     console.log('Високосный')
// }
// else {
//     console.log('обычный')
// }



// let day = new Date(2023, 7, 12)
// let now = new Date();
// let diff = now.getTime() - day.getTime()
// console.log(diff / (1000))


// let now = new Date()
// let birthday = new Date(2024, 4, 18);
// let diff = birthday.getTime() - now.getTime()
// console.log(diff / (1000 * 60 * 60 * 24))


// let now = new Date()
// let NewYear = new Date(2024, 0, 1);
// let diff = NewYear.getTime() - now.getTime()
// console.log(diff / (1000 * 60 * 60 * 24));





// let now = new Date()
// if (now.getMonth() > 9) {
//     console.log(2024)
// }
// else {
//     console.log(2023)
// }




// let month = 7;
// let d = new Date(2023, month + 1, 0);
// console.log(d.toString());



// let date = new Date(2023, 2, 0)
// if (date.getDate() == 29) {
//     console.log('Текущий год вескосный')
// }
// else {
//     console.log('Текущий год не весокосный')
// }



// let date = new Date(2024, 2, 0)
// if (date.getDate() == 29) {
//     console.log('Текущий год вескосный')
//     let pastLeapDay = date.getFullYear() - 4;
//     console.log('Прошлый весокосный год был ' + pastLeapDay);
//     let pastLeapDay2 = date.getFullYear() + 4;
//     console.log('Следущий весокосный год будет ' + pastLeapDay2);
// }
// else {
//     console.log('Текущий год не весокосный')
// }





let date = '05-18';
if (date >= '03-21' && date <= '04-19') {
    console.log('Вы овен');
}
else if (date >= '04-20' && date <= '05-20') {
    console.log('Вы телец');
}
else if (date >= '05-21' && date <= '06-20') {
    console.log('Вы близнецы');
}
else if (date >= '06-21' && date <= '07-22') {
    console.log('Вы рак')
}
else if (date >= '07-23' && date <= '08-22') {
    console.log('Вы лев');
}
else if (date >= '08-23' && date <= '09-22') {
    console.log('Вы дева')
}
else if (date >= '09-23' && date <= '10-22') {
    console.log('Вы весы');
}
else if (date >= '10-23' && date <= '11-21') {
    console.log('Вы скорпион');
}
else if (date >= '11-22' && date <= '12-21') {
    console.log('Вы стрелец');
}
else if (date >= '12-22' && date <= '01-19') {
    console.log('Вы козерог');
}
else if (date >= '01-20' && date <= '02-18') {
    console.log('Вы водолей');
}
else if (date >= '02-19' && date <= '03-20') {
    console.log('Вы рыбы')
}











