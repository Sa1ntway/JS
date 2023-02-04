let quotes = [
    {
        name: 'Алексей Батиевский',
        quote: 'Лучшее украшение жизни – хорошее настроение',
    },
    {
        name: 'Розбицкая Наталья',
        quote: 'Чтобы свернуть горы, необходимы вовсе не горы, а хорошее настроение, жизненная энергия и… стимул.',
    },
    {
        name: 'Галина Суховерх',
        quote: 'Настроясь на позитивную волну, услышишь волшебную мелодию жизни…',
    }
]
// let a = 5
// function alert_number(number) {
//     alert(number)
// }
// alert_number(a);


let random_index;
let random_quote;
function getQuote() {
    random_index = Math.floor(Math.random() * 3);
    random_quote = quotes[random_index]
    alert(random_quote.name + ': ' + random_quote.quote)
}
