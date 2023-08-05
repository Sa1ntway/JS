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


let date1 = new Date(1988, 3, 1);
let date2 = new Date(2000, 2, 10);
let diff = date1.getTime() - date2.getTime();
console.log(diff / (1000 * 60 * 60 * 24 * 12));









