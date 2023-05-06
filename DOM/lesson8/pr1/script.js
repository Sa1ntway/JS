// console.log(document.querySelector('#newid').dataset.number);


// 2

// console.log(document.querySelector('#newid').dataset.myNumber);



// 3
// const id = document.getElementById('elem');
// id.addEventListener('click', function () {
//     id.innerHTML = id.dataset.value;

// })
// console.log();


// 4
// let divs = document.getElementsByTagName('div')
// for (let i = 0; i < divs.length; i++) {
//     divs[i].setAttribute('data-name', 'div')
// }



// 5
const btn = document.getElementById('btn');
const first = document.getElementById('1');
const second = document.getElementById('2');
btn.addEventListener('click', function () {
    let a = '';
    a = first.dataset.block1;
    first.dataset.block1 = second.dataset.block2;
    second.dataset.block2 = a;

})



// let a = 'a';
// let b = 'b';
// let c = ''

// c = a;
// a = b;
// b = c;




