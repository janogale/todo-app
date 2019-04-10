/*
 * Todo List App
 * Developed for JavaScript Learning Purpose
 * author Janagale
 */



// parent element to append todos.

let list = document.querySelector('.todo-list')



let app = {
    todos: [
        {
            id: 1,
            name: "Wake up at 4",
            status: true
        },
        {
            id: 2,
            name: "Brush Teeth & Dress",
            status: false
        },
        {
            id: 3,
            name: "Go to Masjid",
            status: true
        },
        {
            id: 4,
            name: "read Quran",
            status: true
        },
        {
            id: 5,
            name: "Go to Work",
            status: false
        }

    ],


    allTodos() {
        return this.todos.map(i => i).length;
    },

    activeTodos() {
        return this.todos.filter(todo => todo.status === true).length;
    },

    completedTodos() {

        return this.todos.filter(todo => todo.status === false).length;
    },



    //display todos

    renderTodos(todos = {}) {

        // clear display before rendering
        this.clearTodos();

        todos.forEach((item, index) => {

            list.insertAdjacentHTML('beforeend', `<li data-id="${index}" id="${item.id}">
                        <div class="view"><input class="toggle" type="checkbox"><label>${item.name}</label><button class="destroy"></button></div>
                    </li>`)

        });
    },

    // new todo to the List.

    addNewTodo() {

        let btnInput = document.getElementById('new-todo');

        // stop if there is no input
        if (!btnInput.value) {

            btnInput.placeholder = "please enter value here";

            return;
        }

        let newTodo = {
            id: this.todos.length + 1,
            name: btnInput.value,
            status: true
        }

        this.todos.push(newTodo);

        // render view
        this.renderTodos(this.todos);

        // clear input

        btnInput.value = '';

    },


    renderActiveOnly() {

        const activeTodos = this.todos.filter((todo) => {
            return todo.status === true;
        });

        this.renderTodos(activeTodos);
    },

    // completed todos.

    renderCompletedTodos() {

        const completed = this.todos.filter((todo) => {
            return todo.status === false;
        });

        this.renderTodos(completed);
    },

    // clear UL children before update
    clearTodos() {

        Array.from(list.children).forEach(li => li.remove());
    },


};
