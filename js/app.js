/*
 * Todo List App
 * Developed for JavaScript Learning Purpose
 * author Janagale
 *  @app
 */

// parent element to append todos.

const list = document.querySelector('.todo-list')
const main = document.getElementById('main')
const footer = document.getElementById('footer')

const app = {

  // read todos from localStorage or set empty object
  todos: JSON.parse(localStorage.getItem('todos')) || [],

  get allTodos() {
    return this.todos.map(i => i).length
  },

  get activeTodos() {
    return this.todos.filter(todo => todo.status === false).length
  },

  get completedTodos() {
    return this.todos.filter(todo => todo.status === true).length
  },

  // display todos

  renderTodos(todos = {}) {
    // clear display before rendering

    this.clearTodos()

    todos.forEach((item, index) => {
      list.insertAdjacentHTML('beforeend', `<li data-id="${index}" id="${item.id}">
                        <div class="view ${item.status ? 'inactive' : ''}"><input class="toggle" type="checkbox" ${item.status ? 'checked' : ''}><label>${item.name}</label><button class="destroy"></button></div>
                    </li>`)
    })
  },

  // new todo to the List.

  addNewTodo() {
    let btnInput = document.getElementById('new-todo')

    // stop if there is no input
    if (!btnInput.value) {
      btnInput.placeholder = 'please enter value here'

      return
    }

    let newTodo = {
      id: this.todos.length + 1,
      name: btnInput.value,
      status: false
    }

    this.todos.push(newTodo)

    // set local storage
    localStorage.setItem('todos', JSON.stringify(this.todos))
    // render view
    this.renderTodos(this.todos)

    // show main block and footer if hidden 

    if (main.hidden || footer.hidden) {
      main.hidden = false
      footer.hidden = false
    }
    // clear input

    btnInput.value = ''
  },

  renderActiveOnly() {
    const activeTodos = this.todos.filter((todo) => {
      return todo.status === false
    })

    this.renderTodos(activeTodos)
  },

  // completed todos.

  renderCompletedTodos() {
    const completed = this.todos.filter((todo) => {
      return todo.status === true
    })

    this.renderTodos(completed)
  },

  // clear UL children before update
  clearTodos() {
    Array.from(list.children).forEach(li => li.remove())
  }

}
