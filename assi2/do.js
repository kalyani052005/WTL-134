document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";

  const btnGroup = document.createElement("div");
  btnGroup.className = "btn-group";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.addEventListener("click", function () {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(removeBtn);
  li.appendChild(span);
  li.appendChild(btnGroup);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
});
