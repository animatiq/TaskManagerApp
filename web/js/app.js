// Wait for the DOM to be fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements we'll work with
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-title');
    const taskList = document.getElementById('tasks');

    // Add event listener for form submission
    taskForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Get the task text from the input
        const taskText = taskInput.value.trim();
        
        // Only add the task if there's actual text
        if (taskText !== '') {
            // Create a new task element
            addTask(taskText);
            
            // Clear the input field
            taskInput.value = '';
        }
    });
    
    // Function to add a new task to the list
    function addTask(text) {
        // Create a new list item
        const li = document.createElement('li');
        li.className = 'task';
        li.textContent = text;
        
        // Add a click event to mark as completed (toggle)
        li.addEventListener('click', function() {
            this.style.textDecoration = 
                this.style.textDecoration === 'line-through' 
                ? 'none' 
                : 'line-through';
        });
        
        // Add task to the list
        taskList.appendChild(li);
    }

    // Remove the sample task if it exists
    const sampleTask = taskList.querySelector('.task');
    if (sampleTask) {
        taskList.removeChild(sampleTask);
    }
});
