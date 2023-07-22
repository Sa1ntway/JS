const todo_control = document.querySelector('.todo-control'),
    header_input = document.querySelector('.header-input'),
    todo_list = document.querySelector('.todo-list'),
    todo_completed = document.querySelector('.todo-completed');
const header_button = document.querySelector('.header-button')



let todo_data = [
    {
        value: 'Покушать',
        completed: true,
    },
    {
        value: 'Погулять',
        completed: false,
    },
]
function addToDo() {
    todo_list.textContent = '';
    todo_completed.textContent = '';
    todo_data.forEach(function (item, i) {
        let li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `<span class="text-todo">${item.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>`;



        if (item.completed == true) {
            todo_completed.append(li);
        }
        else {
            todo_list.append(li);
        }

        const btn_todo_complete = li.querySelector('.todo-complete');

        const btn_todo_remove = li.querySelector('.todo-remove');

        console.log(btn_todo_complete, btn_todo_remove)

        btn_todo_complete.addEventListener('click', function () {

            item.completed = !item.completed;

            addToDo();

        });

        btn_todo_remove.addEventListener('click', function () {

            todo_data.splice(i, 1);

            addToDo();

        });


    });
    localStorage.todo_saved = todo_data;




}
header_button.addEventListener('click', function (event) {
    event.preventDefault();
    if (header_input.value != '') {
        let new_todo = {
            value: header_input.value,
            completed: false,
        }
        todo_data.push(new_todo);

        header_input.value = '';
        addToDo()


    }

    console.log('dadh')
})


addToDo()

