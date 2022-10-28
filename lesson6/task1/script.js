// let knb = Math.floor(Math.random() * 3);
// if (knb == 1) {
//     knb = 'камень'
// }
// else if (knb == 2) {
//     knb = 'ножницы'
// }

// else {
//     knb = 'бумага'
// }

// let user = prompt('выберите выигрышное слово: камень/ножницы/бумага/');
// if (user == knb) {
//     alert('Ничья');
// }

// else if ((user == 'камень' && knb == 'ножницы') || (user == 'ножницы' && knb == 'бумага') || (user == 'бумага' && knb == 'камень')) {
//     alert('Вы выйграли')
// }

// else if ((user == 'камень' && knb == 'бумага') || (user == 'ножницы' && knb == 'камень') || (user == 'бумага' && knb == 'ножницы')) {
//     alert('Вы проиграли')
// }

// else {
//     alert('ошибка')
// }

// камень, ножницы, бумага, огонь, губка, вода, воздух


let win = 'Вы выйграли';
let lose = 'Вы проиграли';
let rock = 'камень';
let scissors = 'ножницы';
let paper = 'бумага';
let fire = 'огонь';
let sponge = 'губка';
let water = 'вода';
let air = 'воздух';
let error = 'ошибка';
let tie = 'Ничья';
let isResault = false;


let knb = Math.floor(Math.random() * 8) || 1;
if (knb == 1) {
    knb = rock;
}
else if (knb == 2) {
    knb = scissors;
}

else if (knb == 3) {
    knb = paper;
}

else if (knb == 4) {
    knb = fire;
}

else if (knb == 5) {
    knb = sponge;
}

else if (knb == 6) {
    knb = water;
}

else if (knb == 7) {
    knb = air;
}


let user = prompt('выберите выигрышное слово: камень/ножницы/бумага/огонь/губка/вода/воздух');
if (user == knb) {
    alert(`${knb} - ${user}: ${tie}`);
    isResault = true;
}


if (user == rock) {
    if (knb == scissors) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == paper) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == fire) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == sponge) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == water) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == air) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
}

if (user == scissors) {
    if (knb == rock) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == paper) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == fire) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == sponge) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == water) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == air) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
}

if (user == paper) {
    if (knb == rock) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == scissors) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == fire) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == sponge) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == water) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == air) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
}


if (user == fire) {
    if (knb == rock) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == scissors) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == paper) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == sponge) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == water) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == air) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
}

if (user == sponge) {
    if (knb == rock) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == scissors) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == paper) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == fire) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == water) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == air) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
}

if (user == water) {
    if (knb == rock) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == scissors) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == paper) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == fire) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == sponge) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == air) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
}

if (user == air) {
    if (knb == rock) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == scissors) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == paper) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == fire) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
    else if (knb == sponge) {
        alert(`${knb} - ${user}: ${lose}`);
        isResault = true;
    }
    else if (knb == water) {
        alert(`${knb} - ${user}: ${win}`);
        isResault = true;
    }
}


else {
    console.log(isResault)
    if (!isResault) {
        alert(error);
    }
}













// else if ((user == 'камень' && knb == 'ножницы') || (user == 'камень' && knb == 'огонь') || (user == 'камень' && knb == 'губка') || (user == 'ножницы' && knb == 'бумага') || (user == 'ножницы' && knb == 'губка') || (user == 'ножницы' && knb == 'воздух') || (user == 'бумага' && knb == 'камень') || (user == 'бумага' || knb == 'воздух') || (user == 'бумага' && knb == 'вода') || (user == 'огонь' && knb == 'ножницы') || (user == 'огонь' && knb == 'губка') || (user == 'огонь' && knb == 'бумага') || (user == 'вода' && knb == 'камень') || (user == 'вода' && knb == 'огонь') || (user == 'вода' && knb == 'ножницы') || (user = 'вода' && knb == 'вода') || (user == 'губка' && knb == 'бумага') || (user == 'губка' && kbn == 'воздух') || (user == 'губка' && knb == 'вода') || (user == 'воздух' || knb == 'огонь') || (user == 'воздух' && knb == 'вода') || (user == 'воздух' && knb == 'камень')) {
//     alert('Вы выйграли')
// }

// else if ((user == 'камень' && knb == 'бумага') || (user == 'камень' && knb == 'воздух') || (user == 'камень' && knb == 'вода') || (user == 'ножницы' && knb == 'огонь') || (user == 'ножницы' && knb == 'камень') || (user == 'ножницы' && knb == 'вода') || (user == 'бумага' && knb == 'ножницы') || (user == 'бумага' || knb == 'огонь') || (user == 'бумага' && knb == 'губка') || (user == 'огонь' && knb == 'камень') || (user == 'огонь' && knb == 'вода') || (user == 'огонь' && knb == 'воздух') || (user == 'вода' && knb == 'губка') || (user == 'вода' && knb == 'бумага') || (user == 'вода' && knb == 'воздух') || (user == 'губка' && knb == 'камень') || (user == 'губка' && kbn == 'огонь') || (user == 'губка' && knb == 'ножницы') || (user == 'воздух' || knb == 'ножницы') || (user == 'воздух' && knb == 'губка') || (user == 'воздух' && knb == 'бумага')) {
//     alert('Вы проиграли')
// }