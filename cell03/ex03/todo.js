function addTask() {
    const task = prompt("Enter new task:");
    if (task && task.trim()) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.textContent = task;
        taskDiv.onclick = function() {
            if (confirm("Are you sure you want to delete this task?")) {
                taskDiv.remove();
                saveTasks();
            }
        };
        const taskList = document.getElementById('ft_list');
        taskList.insertBefore(taskDiv, taskList.firstChild);
        saveTasks();
    }
}

function saveTasks() {
    const tasks = Array.from(document.getElementsByClassName('task'))
                       .map(task => task.textContent);
    document.cookie = "tasks=" + JSON.stringify(tasks) + ";path=/";
}

function loadTasks() {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [name, value] = cookie.split('=').map(c => c.trim());
        acc[name] = value;
        return acc;
    }, {});

    const tasks = JSON.parse(cookies.tasks || "[]").reverse();
    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.textContent = task;
        taskDiv.onclick = function() {
            if (confirm("Are you sure you want to delete this task?")) {
                taskDiv.remove();
                saveTasks();
            }
        };
        const taskList = document.getElementById('ft_list');
        taskList.insertBefore(taskDiv, taskList.firstChild);
    });
}

window.onload = loadTasks;