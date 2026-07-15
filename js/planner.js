let tasks = [];

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDue = document.getElementById("task-due");
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");

// add a new task and re-render
function addTask(name, dueDate) {
  const task = { id: Date.now(), name, dueDate, completed: false };
  tasks.push(task);
  renderTasks();
}

// render the task list into the DOM
function renderTasks() {
  taskList.innerHTML = "";
  emptyState.style.display = tasks.length === 0 ? "block" : "none";

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.dueDate
      ? task.name + " \u2014 Due: " + task.dueDate
      : task.name;
    li.appendChild(span);

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function () {
      toggleComplete(task.id);
    });
    li.appendChild(completeBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      deleteTask(task.id);
    });
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// remove a task by id and re-render
function deleteTask(id) {
  tasks = tasks.filter(function (task) { return task.id !== id; });
  renderTasks();
}

// toggle completed state and re-render
function toggleComplete(id) {
  var task = tasks.find(function (t) { return t.id === id; });
  if (task) task.completed = !task.completed;
  renderTasks();
}

// handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = taskInput.value.trim();
  if (!name) return;
  addTask(name, taskDue.value);
  form.reset();
});

// set initial empty state
renderTasks();
