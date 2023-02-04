let wordSearch = {
    а: false,
    о: false,
    и: false,
    е: false,
    ё: false,
    э: false,
    ы: false,
    у: false,
    ю: false,
    я: false,
}

let ask = prompt('Введите предожение');
let vowelCount = 0;
for (let i = 0; i < ask.length; i++) {
    if (wordSearch[ask[i]] === false) {
        wordSearch[ask[i]] = true;
        vowelCount++;
        console.log(ask[i] + ' ' + wordSearch[ask[i]])
    }
    else {
        if (wordSearch[ask[i]] === true) {
            console.log('Встретилась буква, которая уже была найдена: ' + ask[i])
        }
    }
}
console.log('Гласных букв: ' + vowelCount);