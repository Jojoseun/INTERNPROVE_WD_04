document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.querySelector('.task-list');
    const progress = document.getElementById('progress');
    const numbers = document.getElementById('numbers');

    let tasks = [];

    // Update progress bar and counter
    function updateProgress() {
        const totalTasks = tasks.length;
        const completedTasks = totalTasks; // assuming all tasks are total
        numbers.textContent = `${completedTasks} / ${totalTasks}`;

        // Update progress bar width
        if (totalTasks === 0) {
            progress.style.width = '0%';
        } else {
            const progressPercentage = (completedTasks / totalTasks) * 100;
            progress.style.width = `${progressPercentage}%`;
        }
    }

    // Add task to the list
    function addTask(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        listItem.appendChild(deleteButton);

        // Add delete event listener
        deleteButton.addEventListener('click', () => {
            deleteTask(listItem, task);
        });

        // Append list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';

        // Update tasks and progress
        tasks.push(task);
        updateProgress();
    }

    // Delete task from the list
    function deleteTask(listItem, task) {
        // Remove the task from the DOM
        taskList.removeChild(listItem);

        // Remove the task from the tasks array
        tasks = tasks.filter(t => t !== task);

        // Update progress
        updateProgress();
    }

    // Handle form submission
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = taskInput.value.trim();
        if (task !== '') {
            addTask(task);
        }
    });
});
