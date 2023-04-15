// 1


// let button = document.getElementById('btn');
// let input = document.getElementById('input');
// button.addEventListener('click', function () {
//     console.log(input.value );
// })



// 2

// let button = document.getElementById('btn');
// let input = document.getElementById('input');
// button.addEventListener('click', function () {
//     input.value = 'Hello'
// })



// 3
// let button = document.getElementById('btn');
// let input = document.getElementById('input');
// let p = document.getElementById('p');
// button.addEventListener('click', function () {
//     p.innerHTML = input.value
// })



// 4
// let button = document.getElementById('btn');
// let input1 = document.getElementById('input1');
// let input2 = document.getElementById('input2');
// button.addEventListener('click', function () {
//     input2.value = input1.value * input1.value;
// })



// 5

// let button = document.getElementById('btn');
// let input1 = document.getElementById('input1');
// let input2 = document.getElementById('input2');
// let bu = '0';
// button.addEventListener('click', function () {
//     bu = input1.value;
//     input1.value = input2.value;
//     input2.value = bu;
// })


// let a = 1;
// let b = 2;
// let c = 0;

// c = a;
// a = b;
// b = c;
// console.log(a, b, c)





// 6
// let input = document.getElementsByClassName('input2')
// let button = document.getElementById('btn');
// let p = document.getElementById('p')
// let counter = 0;
// button.addEventListener('click', function () {
//     for (let i = 0; i < input.length; i++) {
//         counter += Number(input[i].value);

//     }
//     counter = counter / input.length;
//     p.innerHTML = counter;
// })
// console.log(input)






// 7
// let input = document.getElementById('input2');
// input.addEventListener('focus', function () {
//     input.value = 1;
// })
// input.addEventListener('blur', function () {
//     input.value = 2;
// })
// input.style.background = 'black';



// 8
let input = document.getElementById('input2');
input.addEventListener('blur', function () {
    input.value = input.value ** 2;
})
input.style.background = 'black';