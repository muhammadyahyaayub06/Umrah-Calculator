function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Optional: Add remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
  
    document.getElementById("taskList").appendChild(li);
    taskInput.value = ""; // clear input
  }
  