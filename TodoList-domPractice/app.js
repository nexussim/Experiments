

var todoList = {

    todos: [],
    addTodoCounter: 0,

    addTodo: function(todo) {
        var ul = document.getElementById('todoList');
        var li = document.createElement('li');
        ul.appendChild(li);

        newTodo = {
            todo: todo,
            completed: false,
            id: this.addTodoCounter
        }

        this.addTodoCounter++;
        this.todos.push(newTodo);
        li.innerText = todo;
        
    },
    
    displayTodos: function(todo) {
        // console.log('My Todos:')
        // this.todos.forEach(function(todo) {
        //     console.log(todo);
        // });
        
    },

    changeTodo: function(position, todo) {
        this.todos[position].todo = todo;
        this.displayTodos(todo);
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1)
        this.displayTodos();
    },

    toggleTodo: function(position) {
        this.todos[position].completed = !this.todos[position].completed; 
    }
    

};

var handlers = {

    addTodoListener: function() {
        var addTodoButton = document.getElementById('addTodoButton');
        var addTodoInput = document.getElementById('newTodo').value;
        addTodoButton.addEventListener('onclick', function(todo) {
            todoList.addTodo(addTodoInput);
        })
    }
    

}


todoList.addTodo('first');
todoList.addTodo('second');
todoList.addTodo('third');






// addTodo('first')
// addTodo('second')
// addTodo('third')
// addTodo('fourth')
// changeTodo(1, 'CHANGED')
// toggleCompleted(1)
// displayTodos();








































