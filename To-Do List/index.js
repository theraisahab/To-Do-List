document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
        todoInput.focus();
    }
});
 
function addTodoItem(text) {
    const todoList = document.getElementById('todo-list');

    const listItem = document.createElement('li');
    listItem.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);
}
