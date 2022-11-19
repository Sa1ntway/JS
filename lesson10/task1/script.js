let str = prompt('Введите любую строку')
let num1;
let num2;
let z;
let x;
let operation = prompt(`Выберите операцию:
1 - Посчитать кол-во символов в строке
2 - извлечь указанную часть строки
3 - поменять местами первый и последний символы
4 - заменить указанное слово
5 - привести строку к нижнему регистру `)
switch (operation) {
    case '1':
        alert(str.length);
        break;
    case '2':
        num1 = Number(prompt('Введите номер символа с которого начинается'));
        num2 = Number(prompt('Введите номер символа с которого заканчиватся'));
        z = str.slice(num1, num2);
        alert(z)
        break;
    case '3':
        x = str.split('');
        let n = x[0];
        x[0] = x[x.length - 1];
        x[x.length - 1] = n;
        alert(x.join(''))
        break;
    case '4':
        let b = prompt('Введите слово которое хотите заменить');
        let m = prompt('Введите слово НА которое хотите заменить');
        let j = str.replace(b, m);
        alert(j)
        break;
    case '5':
        let k = str.toLowerCase();
        alert(k)
        break;
}