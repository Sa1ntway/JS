let input = document.getElementById('input');
let result = document.getElementById('result');

input.addEventListener('keypress', func);

function func(event) {
    let code = event.keyCode;
    let key = String.fromCharCode(event.keyCode);
    result.innerHTML = 'Код: ' + code + ', клавиша ' + key;

}



