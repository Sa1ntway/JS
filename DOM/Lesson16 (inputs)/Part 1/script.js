// 1   

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');

// elem.addEventListener('blur', function () {
//     p.innerHTML = elem.value;
// })



// 2


// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// let input = document.querySelector('#input');

// btn1.addEventListener('click', function () {
//     input.disabled = true;
// })
// btn2.addEventListener('click', function () {
//     input.disabled = false;
// })








// 3
// let input = document.querySelector('#input');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');


// btn1.addEventListener('click', function () {
//     input.checked = true;
// })
// btn2.addEventListener('click', function () {
//     input.checked = false;
// })




// 4
// let input = document.querySelector('#input');
// let btn = document.querySelector('#btn');
// let p = document.querySelector('#p');

// btn.addEventListener('click', function () {
//     if (input.checked == true) {
//         p.innerHTML = 'Привет';
//     }
//     else {
//         p.innerHTML = 'Пока';
//     }
// })


// 5


// let inputOne = document.querySelector('#inputOne');
// let inputTwo = document.querySelector('#inputTwo');

// inputOne.addEventListener('input', function () {
//     console.log(1)
//     if (inputOne.value.length > 2) {
//         inputOne.blur();
//         inputTwo.focus();
//     }
// })

// inputTwo.addEventListener('input', function () {
//     console.log(2)
//     if (inputTwo.value.length > 2) {
//         inputTwo.blur();
//     }
// })




// 6, 7

// let input = document.querySelector('#input');
// let p = document.querySelector('#p');


// input.addEventListener('input', function () {
//     if (input.value.length < 5) {
//         for (let i = 0; i < 5; i++) {
//             let symbols = i - input.value.length + 1;
//             p.innerHTML = 'У вас осталось ' + symbols + ' символов';
//             input.style.borderColor = 'green';
//         }
//     }
//     else if (input.value.length >= 5) {
//         console.log(122)
//         let lengthCounter = input.value.length;
//         let lengthCounter1 = lengthCounter + 1 - 6;

//         p.innerHTML = 'Привышение символов на: ' + lengthCounter1
//         input.style.borderColor = 'red';


//     }

// })




// 9
// let input = document.querySelector('#input')
// input.addEventListener('change', function () {
//     if (input.checked == true) {
//         console.log('Checkbox is checked!')
//     }
//     else if (input.checked == false) {
//         console.log('Checkbox is not checked!')
//     }
// })



// 10

// let p = document.querySelector('#p');
// let input = document.querySelectorAll('input[type="radio"]');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function () {
//     for (let radio of input) {
//         if (radio.checked) {
//             p.innerHTML = radio.value;
//         }
//     }
// });




// 11


// let checkbox = document.querySelector('#checkbox')
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     if (checkbox.checked == true) {
//         checkbox.checked = false;
//     }
//     else {
//         checkbox.checked = true;
//     }
// })




