// let startBtn = document.getElementById('start');
// let stopBtn = document.getElementById('stop')
// let timerId;
// startBtn.addEventListener('click', function () {
//     let i = 0;
//     timerId = setInterval(function () {
//         console.log(++i);
//     }, 1000);
// })

// stopBtn.addEventListener('click', function () {
//     clearInterval(timerId)
// })



// 1
// let startBtn = document.getElementById('start');
// let stopBtn = document.getElementById('stop')
// let timerId;
// startBtn.addEventListener('click', function () {
//     let i = 0;
//     timerId = setInterval(function () {
//         console.log(++i);
//     }, 3000);
// })

// stopBtn.addEventListener('click', function () {
//     clearInterval(timerId)
// })


// 2
// let startBtn = document.getElementById('start');
// let stopBtn = document.getElementById('stop')
// let timerId;
// startBtn.addEventListener('click', function () {
//     let i = 5;
//     timerId = setInterval(function () {
//         console.log(--i);
//         if (i == 0) {
//             clearInterval(timerId);
//         }
//     }, 1000);
// })

// stopBtn.addEventListener('click', function () {
//     clearInterval(timerId)
// })



// 3
// let startBtn = document.getElementById('start');
// let i = 0;
// startBtn.addEventListener('click', timer)
// function timer(a) {
//     setTimeout(function () {
//         console.log(++i)

//         timer(i);
//     }, a * 1000)
// }
// timer(1)



// 4
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop')
let item = document.getElementById('input');
let timerId;
startBtn.addEventListener('click', function () {
    let i = 10;
    let itemValue = item.value;
    timerId = setInterval(function () {
        console.log(--itemValue)
        item.value = itemValue
        if (itemValue == 0) {
            clearInterval(timerId);
        }

    }, 1000);

})

stopBtn.addEventListener('click', function () {
    clearInterval(timerId)
})











