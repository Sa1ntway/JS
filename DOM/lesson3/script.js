// let button = document.querySelector('#button');
// button.addEventListener('dblclick', func1);

// function func1() {
//     console.log(1);
// }


// let button = document.querySelector('#button');
// button.addEventListener('mouseover', func1);
// function func1() {
//     console.log('hey!');
// }




// let button = document.querySelector('#button');
// button.addEventListener('mouseout', func1);
// function func1() {
//     console.log('hey!');
// }





// let button = document.querySelector('#button');

// button.addEventListener('mouseover', func1)
// button.addEventListener('mouseout', func2);
// function func1() {
//     console.log('hey!');
// }
// function func2() {
//     console.log('Hello!');
// }



// ====================================================
// 1,2




// let name = document.getElementById('name');
// name.style.background = 'red';
// let surname = document.getElementById('surname')
// surname.style.background = 'green';





// let string = document.getElementById('string');
// string.style.background = 'green';
// string.style.color = 'white';
// string.style.fontSize = '20';
// string.style.margin = '10';



// --------------------------------
// 3,4



// let paragraph = document.getElementsByTagName('p');
// paragraph[1].style.color = 'blue';
// paragraph[1].style.fontSize = '20';




// let html = document.getElementsByTagName('li');
// for (let i = 0; i < html.length; i++) {
//     html[i].style.backgroundColor = 'red';
// }
// html[0].style.backgroundColor = 'yellow';
// html[5].style.backgroundColor = 'yellow';


// ------------------------------------------------
// 5
// let reds = document.getElementsByClassName('red');
// for (let i = 0; i < reds.length; i++) {
//     reds[i].style.background = 'red';
//     reds[i].style.margin = '20px';

// }




// ---------------------------------------------------------------
// 6


// let list = document.getElementsByName('number');
// console.log(list);
// let arr = [];
// for (let i = 0; i < list.length; i++) {
//     arr.push(list[i].defaultValue);
// }
// arr.splice(3, 2);
// console.log(arr);



// ----------------------------------------------
// 7,8

// let check = document.querySelectorAll('ul > li');
// console.log(check);
// let counter = 0
// for (let elem of check) {
//     if (elem.innerHTML == 3) {
//         counter += 3;
//     }
//     else {
//         counter += 0;
//     }
// }
// if (counter > 0) {
//     console.log('true');

// }
// else {
//     console.log('false')
// }




// let liFirstChild = document.querySelector('ul > li:first-child')
// let innerText = liFirstChild.innerText;
// console.log(innerText.length);





// ==========================================
// 9



// let tag = document.querySelector('#elem');
// let children = tag.children;
// console.log(children);
// for (let i = 0; i < children.length; i++) {
//     let el = children[i];
//     console.log(el.innerText);
// }

