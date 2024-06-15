const taskInput = document.querySelector(".text");
const addButton = document.querySelector("#button"); // Select by ID
const tasksContainer = document.querySelector(".tasks");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Use strict comparison operator
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.textContent = taskText;

    // Add remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    taskItem.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
        taskItem.remove();
    })

    tasksContainer.appendChild(taskItem);

    taskInput.value = "";
  }
});

