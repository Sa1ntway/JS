// let toy = {};
// toy.name = 'пчелка';
// toy.color = 'желтый';
// toy.age = 8;
// toy.name = 'кот';
// delete toy.name
// console.log(toy)



// let week = {};
// week['1'] = 'Monday';
// week['2'] = 'Tuesday';
// week['3'] = 'Wednesday';
// week['4'] = 'Thursday';
// week['5'] = 'Friday';
// week['6'] = 'Saturday';
// week['7'] = 'Sunday';
// console.log(week['6'])
// let day = Math.floor(Math.random() * 6 + 1);
// console.log('random day: ' + week[day]);




// let person = {
//     'name': {
//         'ru': 'Шамякин Иван Петрович',
//     },
//     'bio': [
//         {
//             'year': '1921',
//             'description': 'Родился в крестьянской семье',
//             'place': 'д. Корма Гомельского уезда',
//         },
//         {
//             'year': '1936',
//             'description': 'начало учебы',
//             'place': 'Гомель'
//         }
//     ],
//     'biblio': [
//         {
//             'year': '1949',
//             'work': 'Глубокое чтение',
//         },
//         {
//             'year': '1964',
//             'work': 'Сердце на лодони',
//         }
//     ]
// }
// let name = person.name;
// let bio = person.bio;
// let biblio = person.biblio;
// console.log(name.ru);
// console.log('Год ' + '= ' + bio[0].year);
// console.log('place ' + '= ' + bio[1].place)
// console.log('"year": ' + '"' + biblio[1].year + '"' + ', ' + '"work": ' + '"' + biblio[1].work + '"' + ',')




// let person = {};
// person.name = 'Петя';
// person.age = '13';
// console.log('Ключ: ' + 'name ' + 'значение: ' + person.name);
// console.log('Ключ: ' + 'age ' + 'значение: ' + person.age);








let max = 0;
let people = {
    'Маша': 15,
    'Саша': 13,
    'Петя': 16,
    'Даша': 10
}
for (let i = 0; i < 4; i++) {
    max = people['Маша'];
    if (max < people['Саша']) {
        max = people['Саша'];
    }
    else if (max < people['Петя']) {
        max = people['Петя'];
    }
    else if (max < people['Даша']) {
        max = people['Даша'];
    }
    else {
        console.log(Error);
    }
}
console.log('Самый старший: ' + max + ' Лет')