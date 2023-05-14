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
    let tr = document.createElement('tr');


    for (let i = 0; i < 3; i++) {
        let td = document.createElement('td');
        tr.append(td);
        td.insertAdjacentHTML('afterbegin', '<img style="width: 100px;" src="img/1.jpg">');
        td.addEventListener('click', function () {
            td.innerHTML = '';
            this.insertAdjacentHTML('afterbegin', '<img style="width: 100px;" src="img/2.jpg">')
        })
    }
    table.append(tr);
    setTimeout(() => tr.remove(), 5000)

}

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');


        for (let i = 0; i < 3; i++) {
            let td = document.createElement('td');
            tr.append(td);
            td.insertAdjacentHTML('afterbegin', '<img style="width: 100px;" src="img/1.jpg">');
            td.addEventListener('click', function () {
                td.innerHTML = '';
                this.insertAdjacentHTML('afterbegin', '<img style="width: 100px;" src="img/2.jpg">')
            })
        }
        table.append(tr);
        setTimeout(() => table.remove(), 5000)

    }
})



