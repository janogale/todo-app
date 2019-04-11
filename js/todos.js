
// display todos.

app.renderTodos(app.todos)

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    app.addNewTodo()
    filterDisplay()
  }
})

// display active todos

document.getElementById('active').addEventListener('click', (e) => {
  console.log('Displaying only active todos.')

  app.renderActiveOnly()
})

// display all todos.

document.getElementById('all').addEventListener('click', (e) => {
  console.log('Displaying all todos.')

  app.renderTodos(app.todos)
})

// display completed todos.

document.getElementById('completed').addEventListener('click', (e) => {
  console.log('Displaying completed todos.')

  app.renderCompletedTodos()
})

// display filters.

function filterDisplay () {
  document.getElementById('completed-count').textContent = 0
  document.getElementById('count').textContent = 0

  if (app.completedTodos) {
    document.getElementById('completed-count').textContent = app.completedTodos
  }

  if (app.activeTodos) {
    document.getElementById('count').textContent = app.activeTodos
  }
}

filterDisplay()

// toggle show/hide

document.querySelector('.toggle-all + label').addEventListener('click', (e) => {
  // toggle class
  e.target.classList.toggle('label')

  // toggle list

  Array.from(list.children).forEach(li => {
    li.hidden = !li.hidden
  })
})

// tick, delete, disable.

document.querySelector('.todo-list').addEventListener('click', (e) => {
  // get index of item.

  let index = e.target.parentElement.parentElement.dataset.id

  // strike-through the list

  if (e.target.nodeName === 'INPUT') {
    e.target.parentElement.classList.toggle('inactive')

    // setting list status
    app.todos[index].status = !app.todos[index].status

    // re-assing localStorage
    localStorage.setItem('todos', JSON.stringify(app.todos))

    filterDisplay()
  }

  // delete list.
  if (e.target.nodeName === 'BUTTON' && e.target.parentElement.firstElementChild.checked) {
    app.todos.splice(index, 1)

    localStorage.setItem('todos', JSON.stringify(app.todos))

    // refresh data
    filterDisplay()

    // remove element.
    e.target.parentElement.parentElement.remove()
  }
})
