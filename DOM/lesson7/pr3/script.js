let btn = document.querySelector('#btn');
const colors = ['yellow', 'red', 'green', 'purple'];
let random = Math.floor(Math.random() * colors.length - 1)
let body = document.getElementById('body');

btn.addEventListener('click', func)



function func() {
    body.style.backgroundColor = colors[random];
}