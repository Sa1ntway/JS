// function func() {
//     this.value = Number(this.value) + 1;
// }

// let inputs = document.querySelectorAll('#elem');
// for (let elem of inputs) {
//     elem.addEventListener('blur', func);

// }




// 2
// function func() {
//     this.innerHTML = this.innerHTML ** 2;
// }
// let paragraphs = document.getElementsByClassName('paras');
// for (let elem of paragraphs) {
//     elem.addEventListener('click', func);
// }





// 3
// let divs = document.querySelectorAll('div');

// for (let div of divs) {
//     div.addEventListener('click', function () {
//         this.textContent++;
//     });
// }



// 4

// let button = document.getElementById('btn');
// let link = document.getElementById('link');


// button.addEventListener('click', func)
// function func() {
//     link.innerText = link.innerText + '(' + link.href + ')';
//     button.removeEventListener('click', func)
// }


// 5


let button = document.getElementById('btn');
button.addEventListener('click', func)
function func() {
    this.value++;
    if (button.value == 10) {
        button.removeEventListener('click', func)
    }
}
button.style.background = 'black';