const formEl = document.querySelector('#todo-form');
const titleEl = document.querySelector('#title');
urlPath = 'http://localhost:3000/todos';

function listToTodoForm() {
  formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    const todo = {
      title: titleEl.value,
      completed: false,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    };
    fetch(url, options).then(createTodo);
  });
}

function createTodo(todo) {
  const liEl = document.createElement('li');
  liEl.innerText = todo.title;

  if (todo.completed) liEl.classList.add('completed');

  const ulEl = document.querySelector('#todo-list');
  ulEl.append(liEl);
}

function createTodos(todos) {
  for (const todo of todos) {
    createTodo(todo);
  }
}

function init() {
  listToTodoForm();
  fetch(urlPath)
    .then((res) => res.json())
    .then((todos) => createTodos(todos));
}

init();
