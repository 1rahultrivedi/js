let tasks = ['Learn JavaScript', 'Do Homework'];

const addtask = () => {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();

  if (taskName === "") return alert("Please enter a task!");

  tasks = [...tasks, taskName];

  taskInput.value = '';
  showtasks();
};

function showtasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${index + 1}. ${task}
        <button onclick="deleteTask(${index})">❌ Delete</button>
      </li>
    `;
  });
}

const deleteTask = (index) => {
  tasks = tasks.filter((_, i) => i !== index);
  showtasks();
};

showtasks();
