// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     alert(elem.className);
// })




// 2

// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     elem.className = 'divs'
//     console.log(elem.className);
// })




// 3
// let arr = [];
// let cssClass = ' '
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     cssClass = elem.className;
//     console.log(cssClass);
//     arr = cssClass.split(" ");
//     console.log(arr);

// })



// =========================================================
// 1
// let image = document.querySelector('#image');
// console.log(image.src);

// console.log(document.querySelector('#image').src)




// 2
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);

// let image = document.querySelector('#image');
// console.log(image.src);
// console.log(image.width);
// console.log(image.height);







// ================================================
// let input = document.getElementById('elem');
// input.addEventListener('focus', function () {
//     this.value = '1';
// })
// input.addEventListener('blur', function () {
//     this.value = '2';

// })
// input.style.background = 'black'



// let input = document.getElementById('elem');
// input.addEventListener('click', function () {
//     console.log(this.value)
//     this.value = Number(this.value) + 1;
// })
// input.style.background = 'black'




// ===================================================================
// let p1 = document.getElementById('p1');
// let p2 = document.getElementById('p2');
// let p3 = document.getElementById('p3');
// let p4 = document.getElementById('p4');
// let p5 = document.getElementById('p5');
// p1.addEventListener('click', func);
// p2.addEventListener('click', func);
// p3.addEventListener('click', func);
// p4.addEventListener('click', func);
// p5.addEventListener('click', func);

// function func() {
//     this.innerHTML = this.innerHTML + '!'
// }





// let elem1 = document.getElementById('elem1');
// let elem2 = document.getElementById('elem2');
// let elem3 = document.getElementById('elem3');
// elem1.addEventListener('blur', func);
// elem2.addEventListener('blur', func);
// elem3.addEventListener('blur', func);

// function func() {
//     this.value = Number(this.value) ** 2
// }



// ====================================================
// let paras = document.querySelectorAll('p');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     for (let elem of paras) {
//         elem.textContent = 'text';
//     }
// })







// let paras = document.querySelectorAll('p');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     for (let i = 0; i < paras.length; i++) {
//         paras[i].textContent = paras[i].textContent + i
//     }
// })














