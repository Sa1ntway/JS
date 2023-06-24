let moveMouse = document.getElementById('moveMouse');

let coordinates = document.getElementById('coordinates');
let text = document.querySelector('.text')
function func(event) {
    text.innerHTML = event.clientX + ':' + event.clientY;
}
moveMouse.addEventListener('mousemove', func);
