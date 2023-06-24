let ul = document.getElementById('elem');
let li = document.querySelectorAll('li')
ul.addEventListener('click', func)
function func(event) {
    let target = event.target;
    let check = target.tagName

    if (check == 'LI') {
        target.innerHTML = target.innerHTML + '!';
    }
    else if (check == 'UL') {
        let addLi = document.createElement('li');
        addLi.innerHTML = 'text';
        ul.append(addLi);
    }
}