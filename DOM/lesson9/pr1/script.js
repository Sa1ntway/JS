let startBtn = document.getElementById('start');
startBtn.addEventListener('click', function () {
    let i = 0;
    setInterval(function () {
        document.write(++i);
    }, 1000);
})




