// Get column elements
const todoColumn = document.getElementById('todo');
const inProgressColumn = document.getElementById('inProgress');
const doneColumn = document.getElementById('done');




// Add task function
function addTask(column, taskText) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.textContent = taskText;

    column.appendChild(task);

    // Add event listener to move or delete task
    task.addEventListener('click', (event) => {
        const clickedTask = event.target;
        const taskColumn = clickedTask.parentElement;

        if (taskColumn === doneColumn) {
            console.log(`Clicked on task "${task.textContent}" in Done column. Deleting task.`);
            task.remove(); // Remove the task element from the DOM
        } else {
            console.log(`Clicked on task "${task.textContent}" in column "${taskColumn.id}". Moving task.`);
            moveTask(task);
        }
    });
}






// Move task function
function moveTask(task) {
    const currentColumn = task.parentElement; // Get the current column of the task

    if (currentColumn === todoColumn) {
        console.log(`Moving task "${task.textContent}" from To Do to In Progress.`);
        inProgressColumn.appendChild(task);
    } else if (currentColumn === inProgressColumn) {
        console.log(`Moving task "${task.textContent}" from In Progress to Done.`);
        doneColumn.appendChild(task);
    }
}

// Event listener to add a new task
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the "Add Task" button in the "To Do" column
    const addTaskButton = document.querySelector('#todo .add-task-btn');
    addTaskButton.addEventListener('click', () => {
        const newTask = prompt('Enter a new task:');
        if (newTask) {
            addTask(todoColumn, newTask);
        }
    });
});