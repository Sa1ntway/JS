let hero = [
    {
        name: 'PhantomAssasin',
        health: 860,
        strength: 5,
        intelegence: 2,
        armor: 4
    },
    {
        name: 'SkyWrathMage',
        health: 780,
        strength: 2,
        intelegence: 5,
        armor: 2
    },
    {
        name: 'EarthShaker',
        health: 940,
        strength: 9,
        intelegence: 1,
        armor: 5,
    },
    {
        name: 'Invoker',
        health: 900,
        strength: 3,
        intelegence: 8,
        armor: 3,
    },
    {
        name: 'Slardar',
        health: 920,
        strength: 8,
        intelegence: 4,
        armor: 4,
    }

]
let armorCount = 0;

let user = +prompt(`Выберите действие:
1. Вывести героев у кого 900 и больше HP
2. Вывести героев у кого чья силы меньше 7
или интелект больше 3
3. Вывести средний показатель брони
4. Провести соревнование между героями`)


switch (user) {
    case 1:
        for (let i = 0; i < hero.length; i++) {
            console.log(hero[i])
            if (hero[i].health >= 900) {
                document.write(hero[i].name + ', ');
            }
        }
        break;
    case 2:
        for (let i = 0; i < hero.length; i++) {
            console.log(hero[i])
            if (hero[i].strength < 7 || hero[i].intelegence > 3) {
                document.write(hero[i].name + ', ');
            }
        }
        break;
    case 3:
        for (let i = 0; i < hero.length; i++) {
            armorCount += hero[i].armor

        }
        armorCount = armorCount / hero.length;
        console.log(armorCount)
        alert('средний показатель брони: ' + armorCount);
        break;
    case 4:
        user1 = prompt(`Какой 1 герой будет сражатся?(Введите полное название)
        1. Phantom Assasin
        2. Sky Wrath Mage
        3. EarthShaker
        4. Invoker
        5. Slardar`)
        user2 = +prompt(`Какой 2 герой будет сражатся?(Введите полное название)
        1. Phantom Assasin
        2. Sky Wrath Mage
        3. Earth Shaker
        4. Invoker
        5. Slardar`)
        let random = Math.floor(Math.random())
        if (random === 1) {
            alert(user2 + ' wins!')
        }
        else if (random === 0) {
            alert(user1 + ' wins!')
        }
}
