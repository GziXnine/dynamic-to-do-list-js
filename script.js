/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function (taskText) {
      createTaskElement(taskText);
    });
  }

  function saveTasks() {
    const tasks = [];
    const items = taskList.querySelectorAll("li");
    items.forEach(function (li) {
      const text = li.firstChild.textContent;
      tasks.push(text);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    removeBtn.onclick = function () {
      taskList.removeChild(li);
      saveTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    createTaskElement(taskText);
    saveTasks();

    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  loadTasks();
});
