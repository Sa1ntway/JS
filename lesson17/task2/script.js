let movie1 = {
    name: 'Spider - Man: high voltage',
    year: 2014,
}
let object = {
    actors: ['Tom Holland', 'Emma Stone', 'James Frnako', 'William Defo']
}

let ask = +prompt('What year would you like to see a movie?');

if (ask == movie1.year) {
    alert(movie1.name);
}
else {
    alert('Movie was not found')
}