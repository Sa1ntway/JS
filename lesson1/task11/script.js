alert('Здравствуйте, уважаемый пользователь! Спасибо, что посетил мой сайт бы хотел собрать немного информации о тебе, чтоб в дальнейшем я мог улучшать свой сайт, учитывая все категории пользователей.')
let name = prompt('Введите ваше имя:')
let age = prompt('Введите ваш возраст:')
let gender = prompt('Введите ваш пол:', 'Мужской')
let country = prompt('Введите вашу страну проживания', 'Беларусь')
let source = prompt('Расскажите как Вы нашли мой сайт (интернет, рекомендации знакомых, реклама и т.д.):')

confirm(`Ваше имя: ${name}
Вам ${age} лет
Ваш пол ${gender}
Вы живете в  ${country}
Вы узнали о моем сайте из следущего источника: ${source}
Если инофрмация не верна - перезагрузите веб-страницу для повтороного ввода информации`)
