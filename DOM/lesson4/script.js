// 1,2
// let num = document.querySelectorAll('#text')
// let button = addEventListener('click', function () {
//     console.log(Number(num[0].innerHTML) + Number(num[1].innerHTML))
// })


// let text1 = document.querySelector('.text1');
// let text2 = document.querySelector('.text2');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', function () {
//     console.log(text1.innerHTML);
// });
// button2.addEventListener('click', function () {
//     console.log(text2.innerHTML);
// });





// ===================================================
// 3,4,5
// let text = document.querySelector('#text');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', function () {
//     text.innerHTML = 'Привет';
// })
// button2.addEventListener('click', function () {
//     text.innerHTML = 'Пока';
// })

// --------------------------------------------------

// 4

// let text1 = document.querySelector('#text1');
// let text2 = document.querySelector('#text2');
// let text3 = document.querySelector('#text3');

// text1.addEventListener('click', function () {
//     text1.innerHTML = '1';
// })
// text2.addEventListener('click', function () {
//     text2.innerHTML = '2';
// })
// text3.addEventListener('click', function () {
//     text3.innerHTML = '3';
// })


// --------------------------------------------------
// 5


// let text = document.querySelector('#text');
// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function () {
//     let a = Math.pow(text.innerHTML, 2);
//     text.innerHTML = a;
// })


// =========================================
// 6,7,8


// let text = document.querySelector('#text');
// let button = document.querySelector('#button1');
// button.addEventListener('click', function () {
//     text.innerHTML = Number(text.innerHTML) + 1;
// })


// -------------------------------------
// 7


// let text = document.querySelector('#text');
// let button = document.querySelector('#button1');
// button.addEventListener('click', function () {
//     text.innerHTML = text.innerHTML.concat('!');
// })



// ---------------------------------------
// 8



// let text = document.querySelector('#text');
// let button = document.querySelector('#button1');
// button.addEventListener('click', function () {
//     text.innerHTML = '!' + text.innerHTML;
// })



// ========================================================
// 9

// let text = document.querySelector('#text');
// let button = document.querySelector('#button1');

// button.addEventListener('click', function () {
//     text.innerHTML = '<i>Hello</i>';
// })



// --------------------------------------------
// 10



let text = document.querySelector('#text');
let button = document.querySelector('#button1');

button.addEventListener('click', function () {
    text.innerHTML = '<b>' + text.innerHTML + '</b>'
})
console.log()