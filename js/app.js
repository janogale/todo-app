// display todos.

app.renderTodos(app.todos);


document.addEventListener('keypress', (e) => {

    if (e.keyCode === 13) {
        app.addNewTodo();
        filterDisplay();

    }

});







// display active todos


document.getElementById('active').addEventListener('click', (e) => {

    console.log("Displaying only active todos.");

    app.renderActiveOnly();
});

// display all todos.

document.getElementById('all').addEventListener('click', (e) => {

    console.log("Displaying all todos.");

    app.renderTodos(app.todos);
});


// display completed todos.

document.getElementById('completed').addEventListener('click', (e) => {

    console.log("Displaying completed todos.");

    app.renderCompletedTodos();
});



// display filters.


function filterDisplay() {
    if (app.completedTodos()) {

        document.getElementById('completed-count').textContent = app.completedTodos();
    }

    if (app.activeTodos()) {

        document.getElementById('count').textContent = app.activeTodos();
    }
}


filterDisplay()
