/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage on page load
  loadTasks();

  // Add task on button click
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    addTask(taskText);
  });

  // Add task on pressing Enter
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      addTask(taskText);
    }
  });

  // Function to load tasks from localStorage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  // Function to add a task to the list and optionally save to localStorage
  function addTask(taskText, save = true) {
    if (!taskText) {
      alert("Please enter a task.");
      return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove button click event
    removeBtn.onclick = () => {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save to localStorage if needed
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Clear input field
    taskInput.value = "";
  }

  // Function to remove a task from localStorage
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
});
