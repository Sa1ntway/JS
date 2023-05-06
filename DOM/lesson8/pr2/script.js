// let prnt = document.getElementById('prnt')
// for (let i = 1; i <= 3; i++) {
//     let tr = document.createElement('tr')

//     prnt.after(tr);

//     for (let i = 0; i < 3; i++) {
//         let td = document.createElement('td');
//         td.innerHTML = [i];
//         tr.append(td)
//     }
// }


const table = document.getElementById('table');
for (let i = 0; i < 3; i++) {
    // let tr = document.createElement('tr');
    table.insertAdjacentHTML('afterbegin', 'tr');
    table.after(tr);

    for (let i = 0; i < 3; i++) {
        let td = document.createElement('td');
        td.innerHTML = 'img';
        tr.append(td);
    }
}



