let text = document.getElementById('text');
let input = document.getElementById('input');
input.addEventListener('keypress', func);
function func(event) {

    if (event.key == 'Enter') {
        text.innerHTML = input.value;
        input.value = '';
    }


}











