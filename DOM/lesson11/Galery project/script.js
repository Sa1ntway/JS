const mas = ['Images/1.jpg', 'Images/2.jpg', 'Images/3.jpg', 'Images/4.jpg', 'Images/5.jpg', 'Images/6.jpg'];
let to = 0;
function right_arrow() {
    let obj = document.getElementById('img');
    if (to < mas.length - 1) to++
    else
        to = 0;
    obj.src = mas[to];
}

function left_arrow() {
    let obj = document.getElementById('img');
    if (to > 0) to--
    else
        to = mas.length - 1;
    obj.src = mas[to]
}