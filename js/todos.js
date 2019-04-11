
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

function filterDisplay() {
  if (app.completedTodos) {
    document.getElementById('completed-count').textContent = app.completedTodos
  }

  if (app.activeTodos) {
    document.getElementById('count').textContent = app.activeTodos
  }
}

filterDisplay()

// toggle view of the list


document.querySelector('.toggle-all + label').addEventListener('click', (e) => {

  //toggle class
  e.target.classList.toggle('label');

  // toggle list

  Array.from(list.children).forEach(li => {
    li.hidden = !li.hidden;
  })

});


// tick, delete, disable.

document.querySelector('.todo-list').addEventListener('click', (e) => {

// strike-through the list

  if (e.target.nodeName === 'INPUT') {
    e.target.parentElement.classList.toggle('inactive')
  }
  
  // delete list.
  if (e.target.nodeName === 'BUTTON' && e.target.parentElement.firstElementChild.checked) {

    // get index of item.

   let index = e.target.parentElement.parentElement.dataset.id;


   app.todos.splice(index, 1);

   localStorage.setItem('todos', JSON.stringify(app.todos));

  e.target.parentElement.parentElement.remove();
  }

});
