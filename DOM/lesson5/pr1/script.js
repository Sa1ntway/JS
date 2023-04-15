// 1
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//     console.log(elem.type);
// })


// 2
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function () {
//     elem.type = 'submit';
//     console.log(elem.type);
// })



// 3
// let button = document.querySelector('#elem');
// let p = document.getElementById('p');
// let a = document.getElementById('a').href;
// button.addEventListener('click', function () {
//     p.innerHTML = '(' + a + ')';
// })
// console.log(a);






// 5


// let img = document.getElementById('image').src;
// let button = document.querySelector('#elem');
// let p = document.getElementById('p');
// button.addEventListener('click', function () {
//     p.innerHTML = img;
// })


// 6
// let button = document.querySelector('#elem');
// let img = document.getElementById('image');
// button.addEventListener('click', function () {
//     img.style.width = '300px';
// })
// console.log(img)




// 7

// let button = document.querySelector('#elem');
// let img = document.getElementById('image');
// img.width = 300;
// button.addEventListener('click', function () {
//     img.width = img.width * 2;
// })






// 8
let button = document.getElementById('elem');
let button1 = document.getElementById('elem1');
let img1 = document.getElementById('image1');
let img2 = document.getElementById('image2');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

img1.width = 300;
img2.width = 300;
button.addEventListener('click', function () {
    p1.innerHTML = img1.src;
})
button1.addEventListener('click', function () {
    p2.innerHTML = img2.src;
})


