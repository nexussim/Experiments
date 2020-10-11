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
            li.setAttribute('id', this.addTodoCounter);
            let div = document.createElement('div');
            let deleteMarker = document.createElement('button');
            li.appendChild(div);
            div.appendChild(deleteMarker);
            deleteMarker.innerText = 'X';
            deleteMarker.id = todo;
        }
    },

    changeTodo: function(position, todoText) {
        this.todos[position - 1].todo = todoText;
        ul.childNodes[position].textContent = todoText;
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1)
        ul.childNodes[position + 1].remove();
    },

    toggleTodo: function(event, position) {
        this.todos[position].completed = !this.todos[position].completed; 
        
        let toggleClickEvent = event.target;
        if (this.todos[position].completed === true) {
            toggleClickEvent.style.textDecoration = 'line-through';
        } else {
            toggleClickEvent.style.textDecoration = '';
        }
    }
};

let handlers = {

    addTodoListener: function(e) {
        let addTodoInput = document.getElementById('newTodo').value;
        todoList.addTodo(addTodoInput);
        document.getElementById('newTodo').value = '';
    },

    changeTodoListener: function(e) {
        let changeTodoText = document.getElementById('changeTodoText').value;
        let changeTodoPosition = parseInt(document.getElementById('changeTodoPosition').value);
        todoList.changeTodo(changeTodoPosition, changeTodoText)
        document.getElementById('changeTodoText').value = '';
        document.getElementById('changeTodoPosition').value = '';
    },

    deleteTodoListener: function(event) {
        let todos = todoList.todos;
        const deleteClickEvent = event.target;
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].todo === deleteClickEvent.id) {
                todoList.deleteTodo(i);
            }
        } 
    },

    toggleCompletedListener: function(event) {
        let todos = todoList.todos;
        let toggleClickEvent = event.target;
        if (toggleClickEvent.tagName === 'LI') {
            for (var i = 0; i < todos.length; i++) {
                var tempTodo = todos[i].todo.concat('','X')
                if (tempTodo === toggleClickEvent.textContent) {
                   todoList.toggleTodo(event, i);
                }
            } 
        }
    }
}




todoList.addTodo('First');
todoList.addTodo('Second');
todoList.addTodo('Third');








































