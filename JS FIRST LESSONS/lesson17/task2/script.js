// let catalog = {
//     movie1: {
//         name: 'Spider-Man: high voltage',
//         year: 2014,
//         actors: ['Tom Holland', ' Emma Stone', ' James Frnako', ' William Defo']
//     },
//     movie2: {
//         name: 'Avengers',
//         year: 2012,
//         actors: ['Chirs Evans', 'Mark Rufallo', 'Tom Hiddlestone']
//     },
//     movie3: {
//         name: 'Avatar 2',
//         year: 2022,
//         actors: ['Zoe Saldana', "Steven Leng", 'Kate Winslet', 'Brandon Kowel']
//     }

// }

// let SpiderMan = catalog['movie1'];
// let Avengers = catalog['movie2'];
// let Avatar = catalog['movie3'];
// let ask = prompt(`a)Spider-Man: high voltage
// b) Avengers
// c) Avatar 2`);
// for (let key in catalog) {
//     if (ask === catalog[key].name) {
//         alert('name: ' + catalog[key].name + '; ' +
//             'actors: ' + catalog[key].year +
//             'year: ' + catalog[key].actors + '; ')
//     }
// }



let myCrazyObject = {
    'name': 'A ridiculou object',
    'some array': [7, 9, { purpose: 'confusion', number: 123 }, 3.3],
    'random animal': 'banana shark'
}
console.log(myCrazyObject['some array'][2].number);
