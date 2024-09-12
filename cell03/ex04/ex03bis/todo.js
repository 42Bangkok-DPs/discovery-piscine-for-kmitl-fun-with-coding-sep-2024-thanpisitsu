$(document).ready(function() {
    $('#new-task').click(function() {
        const task = prompt("Enter new task:");
        if (task) {
            const $taskDiv = $('<div class="task"></div>').text(task);
            $taskDiv.click(function() {
                if (confirm("Are you sure you want to delete this task?")) {
                    $(this).remove();
                    saveTasks();
                }
            });
            $('#ft_list').prepend($taskDiv);
            saveTasks();
        }
    });

    function saveTasks() {
        const tasks = $('.task').map(function() {
            return $(this).text();
        }).get();
        document.cookie = "tasks=" + encodeURIComponent(JSON.stringify(tasks));
    }

    function loadTasks() {
        const cookies = document.cookie.split('=')[1];
        console.log(JSON.parse(cookies))
        const tasks = JSON.parse(cookies).reverse();
        console.log(tasks)
        tasks.forEach(task => {
            const $taskDiv = $('<div class="task"></div>').text(task);
            $taskDiv.click(function() {
                if (confirm("Are you sure you want to delete this task?")) {
                    $(this).remove();
                    saveTasks();
                }
            });
            $('#ft_list').prepend($taskDiv);
        });
    }

    loadTasks();
});