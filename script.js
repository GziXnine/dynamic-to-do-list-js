/** @format */

document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Create the addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new li element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn"; // Avoiding classList.add

    // Set onclick to remove the li
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, then li to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Attach Event Listeners
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
