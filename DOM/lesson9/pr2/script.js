let pict = ['pic/1.jpg', 'pic/2.jpg', 'pic/3.jpg', 'pic/4.jpg']
let arr = ['Сегодня вас ждет успех при изучении JS', 'Сегодня лучше полежите весь день на диване', 'У вас сегдня будет замечательный день', 'Сегодня лучше не выходите из дома'];
let start = document.getElementById('start');
let timer = document.querySelector('#timer');
let wrap = document.querySelector('.wrapper');
let imgWrapper = document.querySelector('.imgWrapper')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

start.addEventListener('click', function () {
    start.classList.remove('active')

    let button = document.createElement('button');


    button.classList.add('active');

    button.innerText = "Получить предсказание";
    wrap.append(button);


    timerId = setInterval(function () {
        timer.innerHTML = random = getRandomInt(1, arr.length);
    }, 100);

    button.addEventListener('click', function () {
        let imgCreate = document.createElement('img');
        imgCreate.src = pict[getRandomInt(0, pict.length)]
        imgWrapper.append(imgCreate);
        clearInterval(timerId);
        wrap.insertAdjacentHTML('afterbegin', `<p>${arr[random - 1]}</p>`)

        setTimeout(() => button.remove(), 1000);
    });
});
