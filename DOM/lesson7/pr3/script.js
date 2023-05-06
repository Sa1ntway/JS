let btn = document.querySelector('#btn');
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let body = document.getElementById('body');

btn.addEventListener('click', func)



function func() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * colors.length)
        hex += colors[random];

    }
    body.style.backgroundColor = hex;

    span.innerHTML = hex;


}

let span = document.querySelector('.hex');