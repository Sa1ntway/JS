let btn = document.getElementById('btn');
let modal = document.getElementById('modal');
let dialog = document.getElementsByClassName('modal_dialog')[0];
let button = document.getElementsByClassName('modal_close')[0];
btn.addEventListener('click', function () {
    modal.classList.add('show');


    setTimeout(function () {
        dialog.style.transform = "rotateX(0)";
    }, 200);
})

button.addEventListener('click', function () {
    dialog.style.transform = "rotateX(90deg)";
    setTimeout(function () {
        modal.classList.remove('show');
    }, 200)
})


document.addEventListener('click', function () {
    if (event.target == modal) {
        dialog.style.transform = "rotateX(90deg)";
        setTimeout(function () {
            modal.classList.remove('show');
        }, 200)
    }
})