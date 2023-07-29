// localStorage.setItem('first', '1');
// localStorage.setItem('second', '4');
// localStorage.setItem('third', '8');


// let data1 = localStorage.getItem('first');
// let data2 = localStorage.getItem('second');
// let data3 = localStorage.getItem('third');
// console.log(Number(data1) + Number(data2) + Number(data3))


// let time = localStorage.getItem('time');
// if (time === null) {
//     let now = Date.now();
//     localStorage.setItem('item', now);
//     console.log(localStorage.getItem('item'))
// }



// localStorage.setItem('Имя', 'АйтиГеник')
// localStorage.setItem('Имя', 'Айтигеник');
// let name = localStorage.getItem('key');
// console.log(name);


// let count = localStorage.getItem('count', 1);
// if (count == 1) {
//     let now1 = Date.now();
//     localStorage.setItem('item1', now1);
// }
// else if (count == 2) {
//     let now2 = Date.now();
//     localStorage.setItem('item2', now2);
// }

// window.onload = function () {
//     let addCount = Number(count) + 1;
//     localStorage.setItem('count', addCount);
// }


// function hey() {
//     let item1 = localStorage.getItem('item1');
//     let item2 = localStorage.getItem('item2')
//     let result = Number(item2) - Number(item1);
//     console.log(result);
// }

// hey()




// let a = 0;
// let count = localStorage.getItem('count', 0);
// window.onload = function () {
//     let addCount = Number(count) + 1;
//     localStorage.setItem('count', addCount);
//     console.log(localStorage.getItem('count'));
//     // if (a == 0) {
//     //     console.log('Hello');
//     // }
//     let num = localStorage.getItem('count', 10);
//     if (num == 10) {
//         localStorage.clear();
//     }
// }




// let name = localStorage.setItem('name', 'Влад');
// let age = localStorage.setItem('age', 14);
// let country = localStorage.setItem('country', 'Belarus');
// let birthDate = localStorage.setItem('birthDate', '18.05.2009');
// let hobby = localStorage.setItem('hobby', 'dancing');
// let goToSchool = localStorage.setItem('goToSchool', 'yes');
// let typeOfHome = localStorage.setItem('typeOfHome', 'flat');
// let progLanguage = localStorage.setItem('progLanguage', 'JavaScript');
// let favGenre = localStorage.setItem('favMusicGenre', 'dnb');
// let favPcGame = localStorage.setItem('favPcGame', 'DotA2');

// if (localStorage.length >= 10) {
//     console.log('Слишком много информации!')
// }

// let key = localStorage.key(0);
// let value = localStorage.getItem(key);

// for (let key in localStorage) {
//     let value = localStorage.getItem(key);
//     console.log(`Ключ: ${key}`, `Значение: ${value}`);
// }









window.onload = function () {
    let name = prompt('Введите свое имя', localStorage.getItem());
    let age = prompt('Введите свой возраст',);
    let arr = {
        name: 'Vlad',
        age: '14'
    };

    localStorage.setItem('User1', JSON.stringify(arr));
}





