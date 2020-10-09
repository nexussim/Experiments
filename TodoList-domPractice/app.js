let ul = document.getElementById('todoList');



let todoList = {

    todos: [],
    addTodoCounter: 0,

    addTodo: function(todo) {
        if (todo) {

            let li = document.createElement('li');
            ul.appendChild(li);

            newTodo = {
                todo: todo,
                completed: false,
                id: this.addTodoCounter
            }

            this.addTodoCounter++;
            this.todos.push(newTodo);
            li.innerText = todo;
        }
    },
    
    displayTodos: function(todo) {
        // console.log('My Todos:')
        // this.todos.forEach(function(todo) {
        //     console.log(todo);
        // });
        
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todo = todoText;
        ul.childNodes[position].textContent = todoText;
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1)
        ul.childNodes[position].remove();
    },

    toggleTodo: function(position) {
        this.todos[position].completed = !this.todos[position].completed; 

    }
    

};

let handlers = {

    addTodoListener: function() {
        let addTodoButton = document.getElementById('addTodoButton');
        let addTodoInput = document.getElementById('newTodo').value;
        addTodoButton.addEventListener('onclick', function(todo) {
        })
        todoList.addTodo(addTodoInput);
        document.getElementById('newTodo').value = '';
    },

    changeTodoListener: function() {
        let changeTodoText = document.getElementById('changeTodoText').value;
        let changeTodoPosition = parseInt(document.getElementById('changeTodoPosition').value);
        todoList.changeTodo(changeTodoPosition, changeTodoText)
        document.getElementById('changeTodoText').value = '';
        document.getElementById('changeTodoPosition').value = '';
    },

    deleteTodoListener: function() {
        var todoToDelete = document.getElementById('deleteTodoButton');
        var todoPosition = parseInt(document.getElementById('deleteTodoInput').value);
        todoToDelete.addEventListener('onclick', function() {
        })
        todoList.deleteTodo(todoPosition);
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








































