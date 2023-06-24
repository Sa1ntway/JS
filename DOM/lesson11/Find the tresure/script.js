const imgDom = document.querySelector('#map');
const distanceDom = document.querySelector('#distance');
let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
let width = 400;
let height = 400;
let clicks = 0;
let target = { x: getRandomNumber(width), y: getRandomNumber(height) };
imgDom.addEventListener('click', function (event) {
    clicks++
    let getDistance = function (event, target) {
        let diffX = event.offsetX - target.x;
        let diffY = event.offsetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY * diffY));


    };

    let getDistanceHint = function (distance) {
        if (distance < 10) {
            return "Обожжешся!";
        }
        else if (distance < 20) {
            return "Очень горячо";
        }
        else if (distance < 40) {
            return "Горячо";
        }
        else if (distance < 80) {
            return "Тепло";
        }
        else if (distance < 160) {
            return "Холодно";
        }
        else if (distance < 320) {
            return "Очень холодно"
        }
        else {
            return "Замерзнешь!";
        }
    }
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    distanceDom.innerHTML = distanceHint;
    if (distance < 8) {
        alert('Клад надйен! Сделано кликов: ' + clicks);
    }
});
